import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import PreviewSuspense from "./components/PreviewSuspense";

import HomeContent from "./components/home/HomeContent";
import PreviewHomeContent from "./components/home/PreviewHomeContent";

const query = groq`
  *[_type=='page' && slug.current == "home"][0] {
	..., 
	content[] {
		...,
		photographyGridItems[]{
			...,
			photography-> {
				_id,
				featuredImage,
				slug,
				title
			}
		}
	}
  }
`;

export const revalidate = 60; //revalidate this page every 60 seconds

const Home = async () => {
	if (previewData()) {
		return (
			<PreviewSuspense fallback={<div>Loading...</div>}>
				<PreviewHomeContent query={query} />
			</PreviewSuspense>
		);
	}

	const data = await client.fetch(query);

	return <HomeContent data={data} />;
};

export default Home;
