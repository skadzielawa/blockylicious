import {
	registerFormatType,
	applyFormat,
	toggleFormat,
} from "@wordpress/rich-text";
import { __ } from "@wordpress/i18n";
import { RichTextToolbarButton } from "@wordpress/block-editor";
import "./style.scss";

registerFormatType("blockylicious/low-highlight", {
	title: __("Low Highlight", "blockylicious"),
	tagName: "span",
	className: "blockylicious-low-highlight",
	edit: ({ onChange, value }) => {
		return (
			<RichTextToolbarButton
				icon={<div>test</div>}
				title={__("Low Highlight", "blockylicious")}
				onClick={() => {
					onChange(
						toggleFormat(value, {
							type: "blockylicious/low-highlight",
						}),
					);
				}}
			/>
		);
	},
});
