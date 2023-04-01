import Image from "next/image";

const Logo = (props) => {
	return (
		<div className="flex items-center">
			<Image
				className="rounded-full object-contain h-8"
				height={40}
				width={40}
				src="/icon-white.png"
				alt="Logo"
			/>
			{props.renderDefault(props)}
		</div>
	);
};

export default Logo;
