<?php
/**
 * Plugin Name:       Blockylicious
 * Description:       A plugin of funky blocks.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Szymon
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blockylicious
 *
 * @package CreateBlock
 */

namespace s5d;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

final class Blockylicious {
	static function init() {
		add_action( 'init', function() {
			add_filter('block_categories_all', function($categories) {
				array_unshift($categories, [
					'slug' => 'blockylicious',
					'name' => 'Blockylicious'
				]);
				return $categories;
			});
			register_block_type( __DIR__ . '/build/blocks/curvy' );
			register_block_type( __DIR__ . '/build/blocks/clickyGroup' );
			register_block_type( __DIR__ . '/build/blocks/clickyButton' );
		} );
	}

	static function convert_custom_properties( $value ) {
		$prefix     = 'var:';
		$prefix_len = strlen( $prefix );
		$token_in   = '|';
		$token_out  = '--';
		if ( str_starts_with( $value, $prefix ) ) {
			$unwrapped_name = str_replace(
				$token_in,
				$token_out,
				substr( $value, $prefix_len )
			);
			$value          = "var(--wp--$unwrapped_name)";
		}

		return $value;
	}
}

Blockylicious::init();
