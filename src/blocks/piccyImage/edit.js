import { useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit(props) {
	const blockProps = useBlockProps();
	return <div {...blockProps} />;
}
