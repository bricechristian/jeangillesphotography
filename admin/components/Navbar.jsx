import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

const Navbar = (props) => {
	return (
		<>
			<div className="p-2 flex justify-center">
				<Link href="/" className="flex items-center gap-2">
					<ArrowLongLeftIcon className="w-5 h-5" />
					<span>Go to Website</span>
				</Link>
			</div>
			{props.renderDefault(props)}
		</>
	);
};

export default Navbar;
