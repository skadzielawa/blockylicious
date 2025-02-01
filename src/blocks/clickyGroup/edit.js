import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit() {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<InnerBlocks />
		</div>
	);
}
