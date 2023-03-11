import "../globals.scss";
import { groq } from "next-sanity";
import { client } from "lib/sanity.client";
import imageUrlBuilder from '@sanity/image-url'

import Header from "./components/Header";
import Footer from "./components/Footer";

const query = groq`
*[_type=='global'][0]{
    ...
}
`;

export async function generateMetadata() {
	const data = await client.fetch(query);
	return { 
		title: {
			default: data.site_title,
			// template: `%s | ${data.site_title}`,
		},		
		description: data.site_description,
		openGraph: {
			title: data.site_title,
			description: data.site_description,
			siteName: data.site_title,	
			url: `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}`,
			images: [
				{
					url: imageUrlBuilder(client).image(data.site_image).width(1200).height(630).url(),
					width: 1200,
					height: 630
				}
			],	
			locale: 'en-US',
			type: 'website'
		}
	};
}

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>			
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
