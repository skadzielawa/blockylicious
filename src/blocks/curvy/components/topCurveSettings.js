import { __ } from "@wordpress/i18n";
import { ColorPalette } from "@wordpress/block-editor";
import {
	HorizontalRule,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import metadata from "../block.json";

export const TopCurveSettings = (props) => {
	return (
		<>
			<HorizontalRule />
			<RangeControl
				min={100}
				max={300}
				value={props.attributes.topWidth || 100}
				onChange={(newValue) => {
					props.setAttributes({
						topWidth: parseInt(newValue),
					});
				}}
				label={__("Width", metadata.textdomain)}
				__nextHasNoMarginBottom
			/>
			<RangeControl
				min={0}
				max={200}
				value={props.attributes.topHeight}
				onChange={(newValue) => {
					props.setAttributes({
						topHeight: parseInt(newValue),
					});
				}}
				__nextHasNoMarginBottom
			/>
			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					onChange={(isChecked) => {
						props.setAttributes({
							topFlipX: isChecked,
						});
					}}
					checked={props.attributes.topFlipX}
					__nextHasNoMarginBottom
				/>
				<span>{__("Flip Horizontally", metadata.textdomain)}</span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					onChange={(isChecked) => {
						props.setAttributes({
							topFlipY: isChecked,
						});
					}}
					checked={props.attributes.topFlipY}
					__nextHasNoMarginBottom
				/>
				<span>{__("Flip Vertically", metadata.textdomain)}</span>
			</div>
			<HorizontalRule />
			<div>
				<label>{__("Curve Color", metadata.textdomain)}</label>
				<ColorPalette
					value={props.attributes.topColor}
					onChange={(newValue) => {
						props.setAttributes({
							topColor: newValue,
						});
					}}
				/>
			</div>
		</>
	);
};
