import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit() {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<InnerBlocks
				template={[["blockylicious/clicky-button"]]}
				allowedBlocks={["blockylicious/clicky-button"]}
			/>
		</div>
	);
}
