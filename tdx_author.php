<?php

/*
Plugin Name: TDX Author
Description: Adds some digital experience to Wordpress.
Version: 1.0
Author: Minneapolis Institute of Arts
*/


/*
 * OBJECT POST TYPE
 ******************************/

// Register Custom Post Type
function tdx_register_object_post_type() {
	$labels = array(
		'name'                => 'Objects',
		'singular_name'       => 'Object',
		'menu_name'           => 'Object',
		'parent_item_colon'   => 'Parent Object:',
		'all_items'           => 'All Objects',
		'view_item'           => 'View Object',
		'add_new_item'        => 'Add New Object',
		'add_new'             => 'New Object',
		'edit_item'           => 'Edit Object',
		'update_item'         => 'Update Object',
		'search_items'        => 'Search objects',
		'not_found'           => 'No objects found',
		'not_found_in_trash'  => 'No objects found in Trash',
	);

	$rewrite = array(
		'slug'                => 'object',
		'with_front'          => true,
		'pages'               => true,
		'feeds'               => true,
	);

	$args = array(
		'label'               => 'object',
		'description'         => 'Represents a single actual object in the collection.',
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'thumbnail', 'revisions', 'page-attributes' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => '',
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'rewrite'             => $rewrite,
		'capability_type'     => 'page',
	);

	register_post_type( 'object', $args );
}

// Hook into the 'init' action
add_action( 'init', 'tdx_register_object_post_type', 0 );


/*
 * STORY POST TYPE
 ******************************/

// Register Custom Post Type
function tdx_register_story_post_type() {
	$labels = array(
		'name'                => 'Stories',
		'singular_name'       => 'Story',
		'menu_name'           => 'Story',
		'parent_item_colon'   => 'Parent Story:',
		'all_items'           => 'All Stories',
		'view_item'           => 'View Story',
		'add_new_item'        => 'Add New Story',
		'add_new'             => 'New Story',
		'edit_item'           => 'Edit Story',
		'update_item'         => 'Update Story',
		'search_items'        => 'Search stories',
		'not_found'           => 'No stories found',
		'not_found_in_trash'  => 'No stories found in Trash',
	);

	$rewrite = array(
		'slug'                => 'story',
		'with_front'          => true,
		'pages'               => true,
		'feeds'               => true,
	);

	$args = array(
		'label'               => 'story',
		'description'         => 'Represents an asset pertaining to an object.',
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'thumbnail', 'revisions', 'page-attributes' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => '',
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'query_var'           => 'story',
		'rewrite'             => $rewrite,
		'capability_type'     => 'page',
	);

	register_post_type( 'story', $args );
}

// Hook into the 'init' action
add_action( 'init', 'tdx_register_story_post_type', 0 );


/*
 * ENQUEUE ANNOTATION HELPERS
 ******************************/

add_action('admin_enqueue_scripts', 'tdx_enqueue_annotation_helpers');
function tdx_enqueue_annotation_helpers(){
	$screen = get_current_screen();
	if($screen->post_type == 'object'){
		wp_enqueue_style('tdx_annotate_css', plugins_url('annotate.css', __FILE__));
		wp_enqueue_script('tdx_annotate_js', plugins_url('annotate.js', __FILE__), array('jquery'));
	}
}


/*
 * REGISTER ACF FIELD GROUPS
 * Assumes repeater field is already included
 *********************************************/

if(function_exists("register_field_group"))
{
	register_field_group(array (
		'id' => 'acf_object',
		'title' => 'Object',
		'fields' => array (
			array (
				'key' => 'field_51dadba69d870',
				'label' => 'Images',
				'name' => 'images',
				'type' => 'repeater',
				'sub_fields' => array (
					array (
						'key' => 'field_51dadc3b9d871',
						'label' => 'Image',
						'name' => 'image',
						'type' => 'image',
						'column_width' => '',
						'save_format' => 'object',
						'preview_size' => 'full',
						'library' => 'all',
					),
					array (
						'key' => 'field_51db2b4250351',
						'label' => 'Annotations',
						'name' => 'annotations',
						'type' => 'repeater',
						'column_width' => '',
						'sub_fields' => array (
							array (
								'key' => 'field_51db2b4f50352',
								'label' => 'X',
								'name' => 'x',
								'type' => 'number',
								'column_width' => 0,
								'default_value' => '',
								'min' => 0,
								'max' => 100,
								'step' => '',
							),
							array (
								'key' => 'field_51db2b7950353',
								'label' => 'Y',
								'name' => 'y',
								'type' => 'number',
								'column_width' => 0,
								'default_value' => '',
								'min' => 0,
								'max' => 100,
								'step' => '',
							),
							array (
								'key' => 'field_51db2b8850354',
								'label' => 'Annotation',
								'name' => 'post_link',
								'type' => 'post_object',
								'column_width' => '',
								'post_type' => array (
									0 => 'story',
								),
								'taxonomy' => array (
									0 => 'all',
								),
								'allow_null' => 0,
								'multiple' => 0,
							),
						),
						'row_min' => 0,
						'row_limit' => '',
						'layout' => 'row',
						'button_label' => 'Add Annotation',
					),
				),
				'row_min' => 1,
				'row_limit' => 3,
				'layout' => 'row',
				'button_label' => 'Add Image',
			),
			array (
				'key' => 'field_51dad9bcb3606',
				'label' => 'Tombstone',
				'name' => 'tombstone',
				'type' => 'wysiwyg',
				'default_value' => '',
				'toolbar' => 'basic',
				'media_upload' => 'no',
			),
			array (
				'key' => 'field_51dad9d2b3607',
				'label' => 'Teaser',
				'name' => 'teaser',
				'type' => 'wysiwyg',
				'default_value' => '',
				'toolbar' => 'basic',
				'media_upload' => 'no',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'object',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
				0 => 'the_content',
			),
		),
		'menu_order' => 0,
	));
}

?>