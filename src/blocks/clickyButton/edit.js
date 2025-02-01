import { RichText, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit(props) {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<RichText
				placeholder="Label text"
				value={props.attributes.labelText}
				allowedFormats={[]}
				multiline={false}
				onSplit={() => {}}
				onReplace={() => {}}
				onChange={(newValue) => {
					props.setAttributes({
						labelText: newValue,
					});
				}}
			/>
		</div>
	);
}
