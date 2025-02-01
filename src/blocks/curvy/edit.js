/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import metadata from "./block.json";

import { Curve } from "./components/curve";
import { TopCurveSettings } from "./components/topCurveSettings";
import { BottomCurveSettings } from "./components/bottomCurveSettings";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { className, ...blockProps } = useBlockProps();
	return (
		<>
			<section className={`${className} alignfull`} {...blockProps}>
				{props.attributes.enableTopCurve && (
					<Curve
						height={props.attributes.topHeight}
						width={props.attributes.topWidth}
						flipX={props.attributes.topFlipX}
						flipY={props.attributes.topFlipY}
						color={props.attributes.topColor}
					/>
				)}
				<InnerBlocks />
				{props.attributes.enableBottomCurve && (
					<Curve
						isBottom
						height={props.attributes.bottomHeight}
						width={props.attributes.bottomWidth}
						flipX={props.attributes.bottomFlipX}
						flipY={props.attributes.bottomFlipY}
						color={props.attributes.bottomColor}
					/>
				)}
			</section>
			<InspectorControls>
				<PanelBody title={__("Top Curve", metadata.textdomain)}>
					<div style={{ display: "flex" }}>
						<ToggleControl
							onChange={(isChecked) => {
								props.setAttributes({
									enableTopCurve: isChecked,
								});
							}}
							checked={props.attributes.enableTopCurve}
							__nextHasNoMarginBottom
						/>
						<span>{__("Enable top curve", metadata.textdomain)}</span>
					</div>
					{props.attributes.enableTopCurve && (
						<TopCurveSettings
							attributes={props.attributes}
							setAttributes={props.setAttributes}
						/>
					)}
				</PanelBody>
				<PanelBody title={__("Bottom Curve", metadata.textdomain)}>
					<div style={{ display: "flex" }}>
						<ToggleControl
							onChange={(isChecked) => {
								props.setAttributes({
									enableBottomCurve: isChecked,
								});
							}}
							checked={props.attributes.enableBottomCurve}
							__nextHasNoMarginBottom
						/>
						<span>{__("Enable bottom curve", metadata.textdomain)}</span>
					</div>
					{props.attributes.enableBottomCurve && (
						<BottomCurveSettings
							attributes={props.attributes}
							setAttributes={props.setAttributes}
						/>
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);
}
