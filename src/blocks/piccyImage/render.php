<?php
$block_wrapper_attributes = get_block_wrapper_attributes();
$image_uri = wp_get_attachment_image_url( $attributes['imageId'] );
?>

<div <?php echo $block_wrapper_attributes; ?>>
	<img src="<?php echo $image_uri; ?>" alt="" class="thumb" />
</div>
