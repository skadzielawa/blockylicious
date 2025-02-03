import { useImage } from "../hooks/useImage";

export const ImageThumbnail = (props) => {
	const image = useImage(props.imageId);

	return image?.source_url ? (
		<img
			style={{
				height: 150,
				width: "100%",
				objectFit: "cover",
				display: "block",
			}}
			src={image.source_url}
		/>
	) : null;
};
