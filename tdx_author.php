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
		'supports'            => array( 'title', 'revisions' ),
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
		'supports'            => array( 'title', 'revisions' ),
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
 * ENQUEUE CSS & JS
 ******************************/

add_action('admin_enqueue_scripts', 'tdx_enqueue_annotation_helpers');
function tdx_enqueue_annotation_helpers(){
	$screen = get_current_screen();
	if($screen->post_type == 'object' || $screen->post_type == 'story'){
		wp_enqueue_style('tdx_css', plugins_url('css/tdx.css', __FILE__));
		wp_enqueue_script('tdx_js', plugins_url('js/tdx.js', __FILE__), array('jquery'));
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
				'key' => 'field_51df17e42a69b',
				'label' => 'Description',
				'name' => 'description',
				'type' => 'wysiwyg',
				'default_value' => '',
				'toolbar' => 'basic',
				'media_upload' => 'no',
			),
			array (
				'key' => 'field_51df187c2a69d',
				'label' => 'Tombstone',
				'name' => 'tombstone',
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
			'layout' => 'default',
			'hide_on_screen' => array (
				0 => 'the_content',
			),
		),
		'menu_order' => 0,
	));
	register_field_group(array (
		'id' => 'acf_story',
		'title' => 'Story',
		'fields' => array (
			array (
				'key' => 'field_51df0edf946f8',
				'label' => 'Type',
				'name' => 'Type',
				'type' => 'radio',
				'choices' => array (
					'text' => 'Text',
					'map' => 'Map',
					'video' => 'Video',
					'image' => 'Image',
					'compare' => 'Side by Side',
				),
				'other_choice' => 0,
				'save_other_choice' => 0,
				'default_value' => 'text',
				'layout' => 'horizontal',
			),
			array (
				'key' => 'field_51df0f99946f9',
				'label' => 'Text',
				'name' => 'text',
				'type' => 'wysiwyg',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51df0edf946f8',
							'operator' => '==',
							'value' => 'text',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '',
				'toolbar' => 'basic',
				'media_upload' => 'no',
			),
			array (
				'key' => 'field_51df0fe5946fa',
				'label' => 'Link',
				'name' => 'link',
				'type' => 'text',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51df0edf946f8',
							'operator' => '==',
							'value' => 'video',
						),
						array (
							'field' => 'field_51df0edf946f8',
							'operator' => '==',
							'value' => 'image',
						),
					),
					'allorany' => 'any',
				),
				'default_value' => '',
				'formatting' => 'none',
			),
			array (
				'key' => 'field_51df1027946fc',
				'label' => 'Link A',
				'name' => 'link_a',
				'type' => 'text',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51df0edf946f8',
							'operator' => '==',
							'value' => 'compare',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '',
				'formatting' => 'none',
			),
			array (
				'key' => 'field_51df1077946fd',
				'label' => 'Link B',
				'name' => 'link_b',
				'type' => 'text',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51df0edf946f8',
							'operator' => '==',
							'value' => 'compare',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '',
				'formatting' => 'none',
			),
			array (
				'key' => 'field_51df10a2946fe',
				'label' => 'Map',
				'name' => 'map',
				'type' => 'text',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51df0edf946f8',
							'operator' => '==',
							'value' => 'map',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '',
				'formatting' => 'none',
			),
			array (
				'key' => 'field_51df10b1946ff',
				'label' => 'Caption',
				'name' => 'caption',
				'type' => 'wysiwyg',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51df0edf946f8',
							'operator' => '!=',
							'value' => 'text',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '',
				'toolbar' => 'basic',
				'media_upload' => 'no',
			),
			array (
				'key' => 'field_51df10d894700',
				'label' => 'Credit',
				'name' => 'credit',
				'type' => 'textarea',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51df0edf946f8',
							'operator' => '==',
							'value' => 'image',
						),
						array (
							'field' => 'field_51df0edf946f8',
							'operator' => '==',
							'value' => 'compare',
						),
						array (
							'field' => 'field_51df0edf946f8',
							'operator' => '==',
							'value' => 'video',
						),
					),
					'allorany' => 'any',
				),
				'default_value' => '',
				'formatting' => 'html',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'story',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'default',
			'hide_on_screen' => array (
				0 => 'the_content',
			),
		),
		'menu_order' => 0,
	));
}

?>