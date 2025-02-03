import {
	useBlockProps,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import "./editor.scss";
import metadata from "./block.json";
import { Icon } from "@wordpress/components";
import { ImageThumbnail } from "../../components/ImageThumbnail";
import { useImage } from "../../hooks/useImage";

export default function Edit(props) {
	const blockProps = useBlockProps();
	const image = useImage(props.attributes.imageId);
	const imageSelected = !!props.attributes.imageId && !!image?.source_url;

	return (
		<div {...blockProps}>
			{!!imageSelected && <ImageThumbnail imageId={props.attributes.imageId} />}
			{!imageSelected && (
				<div
					style={{
						height: 150,
						width: "100%",
						background: "#fff",
						display: "flex",
					}}
				>
					<Icon style={{ margin: "auto" }} icon="format-image" />
				</div>
			)}
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={["image"]}
					render={({ open }) => {
						return (
							<button className="media-select" onClick={open}>
								{imageSelected
									? __("Replace image", metadata.textdomain)
									: __("Select an image", metadata.textdomain)}
							</button>
						);
					}}
					value={props.setAttributes.imageId}
					onSelect={(item) => {
						props.setAttributes({
							imageId: item.id,
						});
					}}
				/>
			</MediaUploadCheck>
		</div>
	);
}
