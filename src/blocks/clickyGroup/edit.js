import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { parseValue } from "../../utils/parseValue";
import "./editor.scss";

export default function Edit(props) {
	console.log(props);
	const blockGap = parseValue(props.attributes.style?.spacing?.blockGap || "");
	const blockProps = useBlockProps({
		style: { gap: blockGap },
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [["blockylicious/clicky-button"]],
		allowedBlocks: ["blockylicious/clicky-button"],
	});

	return <div {...innerBlocksProps}></div>;
}
