import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import imageUrlBuilder from '@sanity/image-url'
import PreviewSuspense from "../components/PreviewSuspense";

import PageContent from "../components/page/PageContent";
import PreviewPageContent from "../components/page/PreviewPageContent";

const slugQuery = groq`
  *[_type=='page'] {
    slug {
      current
    }
  } | order(_createdAt desc)
`;
const query = groq`
*[_type=='page' && slug.current == $slug][0] {
	..., 
	content[] {
		...,
		photographyGridItems[]{
		...,
		photography->
		}
	},
	Settings->
}
`;

const siteQuery = groq`
*[_type=='global'][0]{
    ...
}
`;

export const revalidate = 60; //revalidate this page every 60 seconds

export const dynamicParams = false;

export async function generateMetadata({params}) {
	const { slug } = params;
	const data = await client.fetch(query, { slug });
	const site = await client.fetch(siteQuery);
	return { 
		title: data.settings?.ogTitle.length ? data.settings.ogTitle : `${data.title} | ${site.site_title}`,
		description: data.settings?.ogDescription.length ? data.settings.ogDescription : data.site_description,
		openGraph: {
			title: data.settings?.ogTitle.length ? data.settings.ogTitle : `${data.title} | ${site.site_title}`,
			description: data.settings?.ogDescription.length ? data.settings.ogDescription : site.site_description,
			url: `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/photography/${slug}`,
			images: [
				{
					url: imageUrlBuilder(client).image(data.settings?.ogImage ? data.settings.ogImage : site.site_image).width(1200).height(630).url(),
					width: 1200,
					height: 630
				}
			]
		}		
	};
}

export async function generateStaticParams() {
	const pages = await client.fetch(slugQuery);
	return pages.map(({ slug }) => ({
		slug: slug.current,
	}));
}

const Page = async ({ params }) => {
	const { slug } = params;

	const queryParams = { slug: params?.slug ?? `` };

	if (previewData()) {
		return (
			<PreviewSuspense fallback={<div>Loading...</div>}>
				<PreviewPageContent query={query} queryParams={queryParams} />
			</PreviewSuspense>
		);
	}

	const data = await client.fetch(query, { slug });

	return (
		<PageContent data={data} />
	);
};

export default Page;
