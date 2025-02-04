import {
	registerFormatType,
	applyFormat,
	removeFormat,
} from "@wordpress/rich-text";
import { __ } from "@wordpress/i18n";
import { RichTextToolbarButton, ColorPalette } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { Popover, PanelBody } from "@wordpress/components";
import "./style.scss";

registerFormatType("blockylicious/low-highlight", {
	title: __("Low Highlight", "blockylicious"),
	tagName: "span",
	className: "blockylicious-low-highlight",
	edit: ({ onChange, value, contentRef }) => {
		const [showColors, setShowColors] = useState(false);
		return (
			<>
				<RichTextToolbarButton
					icon={<div>test</div>}
					title={__("Low Highlight", "blockylicious")}
					onClick={() => {
						setShowColors(true);
						/*
						onChange(
							applyFormat(value, {
								type: "blockylicious/low-highlight",
							}),
						);
						*/
					}}
				/>
				{!!showColors && (
					<Popover
						anchor={contentRef?.current}
						onClose={() => {
							setShowColors(false);
						}}
					>
						<PanelBody>
							<ColorPalette
								onChange={(newValue) => {
									if (newValue) {
										onChange(
											applyFormat(value, {
												type: "blockylicious/low-highlight",
											}),
										);
									} else {
										onChange(
											removeFormat(value, "blockylicious/low-highlight"),
										);
									}
								}}
							/>
						</PanelBody>
					</Popover>
				)}
			</>
		);
	},
});
