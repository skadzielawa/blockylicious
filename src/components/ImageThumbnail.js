import { useImage } from "../hooks/useImage";

export const ImageThumbnail = (props) => {
	const image = useImage(props.imageId);

	return image?.source_url ? (
		<img
			style={{
				height: props.height || 150,
				width: "100%",
				objectFit: "cover",
				display: "block",
			}}
			onClick={props.onClick}
			src={image.source_url}
		/>
	) : null;
};
