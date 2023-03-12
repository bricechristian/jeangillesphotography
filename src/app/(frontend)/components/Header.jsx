import Link from "next/link";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";

import Wordmark from "../../../../public/wordmark.svg";

const query = groq`
*[_type=='menu' && slug.current=='main-menu'][0] {
    menuItems[]{
        _key,
        link {
            externalLink,
            external_link,
            internal_link {
                "data": *[_id == ^._ref] {
                    _type,
                    slug,
                    title
                }
            }    
        },
        name
    }
}
`;

const Header = async () => {
	const nav = await client.fetch(query);
	// console.log(nav);
	return (
		<header className="py-4">
			<nav className="container">
				<div className="flex justify-between items-center">
					<Link href="/">
						<Wordmark className="w-[175px] h-[37px] fill-white" />
					</Link>
					<ul className="flex gap-6">
						<li className="caps">MENU</li>
						{/* {nav.menuItems.map((item) => {
							return (
								<li key={item._key}>
									{item.link?.externalLink ? (
										<Link
											href={item.link.external_link}
											target="_blank">
											{item.name}
										</Link>
									) : item.link.internal_link.data[0]
											._type === "photography" ? (
										<Link
											href={`/photography/${item.link.internal_link?.data[0].slug.current}`}>
											{item.name}
										</Link>
									) : (
										<Link
											href={`/${item.link.internal_link?.data[0].slug.current}`}>
											{item.name}
										</Link>
									)}
								</li>
							);
						})} */}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
