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
		'menu_name'           => 'Objects',
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
		'menu_name'           => 'Stories',
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
 * HIDE OTHER POST TYPES
 ******************************/
add_action('admin_menu', 'tdx_hide_menus');
function tdx_hide_menus() {
	global $menu;
	// Later we'll restrict posts too ... but for now, that's where our info is.
	$restricted = array(__('Media'), __('Pages'), __('Comments'));
	end ($menu);
	while (prev($menu)){
		$value = explode(' ',$menu[key($menu)][0]);
		if(in_array($value[0] != NULL?$value[0]:"" , $restricted)){unset($menu[key($menu)]);}
	}
}


/*
 * SET UP CONNECTIONS
 ******************************/
add_action( 'p2p_init', 'tdx_connections' );
function tdx_connections() {
	p2p_register_connection_type( array(
		'name' => 'objects_to_stories',
		'from' => 'object',
		'to' => 'story',
		'title' => array( 
			'from' => 'Stories related to this Object', 'tdx-connections',
			'to' => 'Objects related to this Story', 'tdx-connections'
		),
		'from_labels' => array(
			'singular_name' => __( 'Object', 'tdx-connections' ),
			'search_items' => __( 'Search objects', 'tdx-connections' ),
			'not_found' => __( 'No objects found.', 'tdx-connections' ),
			'create' => __( 'Add an object', 'tdx-connections' )
		),
		'to_labels' => array(
			'singular_name' => __( 'Story', 'tdx-connections' ),
			'search_items' => __( 'Search stories', 'tdx-connections' ),
			'not_found' => __( 'No stories found.', 'tdx-connections' ),
			'create' => __( 'Add a story', 'tdx-connections' )
		)
	) );
}


/*
 * ENQUEUE CSS & JS & NONCES
 ******************************/
add_action('admin_enqueue_scripts', 'tdx_enqueue_annotation_helpers');
function tdx_enqueue_annotation_helpers(){
	$screen = get_current_screen();
	if($screen->post_type == 'object' || $screen->post_type == 'story'){
		wp_enqueue_style('tdx_css', plugins_url('css/tdx.css', __FILE__));
		wp_enqueue_script('firebase', 'https://cdn.firebase.com/v0/firebase.js');
		wp_enqueue_script('tdx_js', plugins_url('js/tdx.js', __FILE__), array('jquery', 'firebase'));
		wp_localize_script('tdx_js', 'tdxGlobal', array(
			'getImagesNonce' => wp_create_nonce('tdx_get_images'),
			'postType' => $screen->post_type
		));
	}
}


/*
 * IMAGE SELECTION
 ******************************/
add_action('admin_footer', 'tdx_pick_image_ui');
function tdx_pick_image_ui(){
	$screen = get_current_screen();
	if($screen->post_type == 'object' || $screen->post_type == 'story'){
?>
		<div id="tdx_pick_image_overlay"></div>
     	<div id="tdx_pick_image_ui">
      	<div id="tdx_pick_image_content">
         	<h1>Available Images</h1>
            <div class="tdx_loading"></div>
            <div class="tdx_images_close"></div>
            <div id="tdx_images"></div>
         </div>
      </div>
<?php
	}
}

add_action('wp_ajax_tdx_get_images', 'tdx_handle_images_request');
function tdx_handle_images_request(){

	$nonce = $_POST['_wpnonce'];
	if( !wp_verify_nonce( $nonce, 'tdx_get_images') )
	{
		die( 'Nonceless and alone.' );
	}	
	
	// This section will change once we have the API updated
	$ch = curl_init(); 
	curl_setopt($ch, CURLOPT_URL, "https://collections.artsmia.org/search_controller.php?gallery=G240"); 
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
	curl_setopt($ch, CURLOPT_HEADER, 0);
	$json = curl_exec($ch); 
	curl_close($ch);
	echo $json;
	die;
}


/*
 * REGISTER ACF FIELD GROUPS
 * Assumes Repeater and Flexible Content fields are installed
 **************************************************************/
if(function_exists("register_field_group"))
{
	register_field_group(array (
		'id' => 'acf_object',
		'title' => 'Object',
		'fields' => array (
			array (
				'key' => 'field_51dadba69d870',
				'label' => 'Object Views',
				'name' => 'views',
				'type' => 'repeater',
				'sub_fields' => array (
					array (
						'key' => 'field_51dadc3b9d871',
						'label' => 'Select Image',
						'name' => 'img_link',
						'type' => 'text',
						'column_width' => '',
						'default_value' => '',
						'formatting' => 'none',
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
								'name' => 'description',
								'type' => 'wysiwyg',
								'column_width' => '',
								'default_value' => '',
								'toolbar' => 'basic',
								'media_upload' => 'no',
							),
						),
						'row_min' => 0,
						'row_limit' => '',
						'layout' => 'row',
						'button_label' => 'Add Annotation',
					),
					array (
						'key' => 'field_51df184a2a69c',
						'label' => 'Image Credit',
						'name' => 'credit',
						'type' => 'textarea',
						'column_width' => '',
						'default_value' => '',
						'formatting' => 'html',
					),
				),
				'row_min' => 0,
				'row_limit' => '',
				'layout' => 'row',
				'button_label' => 'Add View',
			),
			array (
				'key' => 'field_51df17e42a69b',
				'label' => 'Object Description',
				'name' => 'description',
				'type' => 'wysiwyg',
				'default_value' => '',
				'toolbar' => 'basic',
				'media_upload' => 'no',
			),
			array (
				'key' => 'field_51df187c2a69d',
				'label' => 'Object Tombstone',
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
				'key' => 'field_51e5b10f507f3',
				'label' => 'Pages',
				'name' => 'pages',
				'type' => 'flexible_content',
				'layouts' => array (
					array (
						'label' => 'Text',
						'name' => 'text',
						'display' => 'row',
						'sub_fields' => array (
							array (
								'key' => 'field_51e5b1e2507fc',
								'label' => 'Text',
								'name' => 'text',
								'type' => 'wysiwyg',
								'column_width' => '',
								'default_value' => '',
								'toolbar' => 'basic',
								'media_upload' => 'no',
							),
						),
					),
					array (
						'label' => 'Map',
						'name' => 'map',
						'display' => 'row',
						'sub_fields' => array (
							array (
								'key' => 'field_51e5bcadd1738',
								'label' => 'Caption',
								'name' => 'text',
								'type' => 'wysiwyg',
								'column_width' => '',
								'default_value' => '',
								'toolbar' => 'basic',
								'media_upload' => 'no',
							),
							array (
								'key' => 'field_51e5bfb814ab7',
								'label' => 'Map',
								'name' => 'map',
								'type' => 'location-field',
								'column_width' => '',
								'val' => 'address',
								'mapheight' => '',
								'center' => '48.856614,2.3522219000000177',
								'zoom' => 10,
								'scrollwheel' => 1,
								'mapTypeControl' => 1,
								'streetViewControl' => 1,
								'PointOfInterest' => 1,
							),
						),
					),
					array (
						'label' => 'Video',
						'name' => 'video',
						'display' => 'row',
						'sub_fields' => array (
							array (
								'key' => 'field_51e5b2a350801',
								'label' => 'Video Link',
								'name' => 'vid_link',
								'type' => 'text',
								'column_width' => '',
								'default_value' => '',
								'formatting' => 'none',
							),
							array (
								'key' => 'field_51e5b2b750803',
								'label' => 'Caption',
								'name' => 'text',
								'type' => 'wysiwyg',
								'column_width' => '',
								'default_value' => '',
								'toolbar' => 'basic',
								'media_upload' => 'no',
							),
							array (
								'key' => 'field_51e5b3665080e',
								'label' => 'Credit',
								'name' => 'credit',
								'type' => 'textarea',
								'column_width' => '',
								'default_value' => '',
								'formatting' => 'html',
							),
						),
					),
					array (
						'label' => 'Image',
						'name' => 'image',
						'display' => 'row',
						'sub_fields' => array (
							array (
								'key' => 'field_51e5b2da50805',
								'label' => 'Select Image',
								'name' => 'img_link',
								'type' => 'text',
								'column_width' => '',
								'default_value' => '',
								'formatting' => 'none',
							),
							array (
								'key' => 'field_51e5b2eb50806',
								'label' => 'Caption',
								'name' => 'text',
								'type' => 'wysiwyg',
								'column_width' => '',
								'default_value' => '',
								'toolbar' => 'basic',
								'media_upload' => 'no',
							),
							array (
								'key' => 'field_51e5b3585080d',
								'label' => 'Credit',
								'name' => 'credit',
								'type' => 'textarea',
								'column_width' => '',
								'default_value' => '',
								'formatting' => 'html',
							),
						),
					),
					array (
						'label' => 'Side by Side',
						'name' => 'comparison',
						'display' => 'row',
						'sub_fields' => array (
							array (
								'key' => 'field_51e5b31450809',
								'label' => 'Select Image A',
								'name' => 'img_link',
								'type' => 'text',
								'column_width' => '',
								'default_value' => '',
								'formatting' => 'none',
							),
							array (
								'key' => 'field_51e5b3225080a',
								'label' => 'Select Image B',
								'name' => 'img_link_b',
								'type' => 'text',
								'column_width' => '',
								'default_value' => '',
								'formatting' => 'none',
							),
							array (
								'key' => 'field_51e5b32c5080b',
								'label' => 'Caption',
								'name' => 'text',
								'type' => 'wysiwyg',
								'column_width' => '',
								'default_value' => '',
								'toolbar' => 'basic',
								'media_upload' => 'no',
							),
							array (
								'key' => 'field_51e5b34a5080c',
								'label' => 'Credit',
								'name' => 'credit',
								'type' => 'textarea',
								'column_width' => '',
								'default_value' => '',
								'formatting' => 'html',
							),
						),
					),
				),
				'button_label' => 'Add Page',
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