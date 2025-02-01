import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function Save() {
	const blockProps = useBlockProps.save();
	const { children } = useInnerBlocksProps.save(blockProps); // or useInnerBlocksProps = useInnerBlocksProps.save(blockProps); and return useInnerBlocksProps.children;

	return children;
}
