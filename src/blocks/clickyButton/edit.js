import { RichText, useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";

import "./editor.scss";

export default function Edit(props) {
	const postTypes = useSelect((select) => {
		const data = select("core").getEntityRecords("root", "postType", {
			per_page: -1,
		});
		return data?.filter(
			(item) => item.visibility.show_in_nav_menus && item.visibility.show_ui,
		);
	});
	console.log(postTypes);
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
