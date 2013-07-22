// Extend jQuery to jump to a selector in the same repeater row; helps with traversal
//   @param fieldName: Which ('views' vs. 'annotations') repeater row should we 
//   stay within? This is useful because repeater rows are nested.
jQuery.fn.rowSibling = function(fieldName, selector) {
	var rows = jQuery('[data-field_name="'+fieldName+'"] > div.repeater > table > tbody > tr.row');
	return this.closest(rows).find(selector);
}

// TDX Object
tdx = {
	annotations: {
		init: function(){
			// Rebuild annotation pins on load
			jQuery('[data-field_name="annotations"] tr.row').each(function(index, element){
				var $element = jQuery(element);
				var percentX = $element.find('[data-field_name=x] input').val();
				var percentY = $element.find('[data-field_name=y] input').val();
				var $imgContainer = $element.rowSibling('views', 'div.tdx_selected_image_wrap');
				var $img = $imgContainer.find('img.tdx_selected_image');
				var annotationID = 'pin_' + Date.now() + '_' + Math.floor((Math.random()*1000)+1);
				var annotationIndex = $element.index()+1;
				$element.attr('data-annotation_id', annotationID);
				$imgContainer.append('<div class="pin" data-annotation_id="'+annotationID+'" style="left:'+percentX+'%; top:'+percentY+'%;">'+annotationIndex+'</div><div class="deletePin" style="left:'+percentX+'%; top:'+percentY+'%;" data-annotation_id="'+annotationID+'"><a href="javascript:;" class="deletePinLink">Delete</a></div>');
				tdx.annotations.makeDraggable(annotationID);
			});
			// Handle events
			jQuery(document).on('click', 'img.tdx_selected_image', function(e){
				var annotationID = 'pin_' + Date.now() + '_' + Math.floor((Math.random()*1000)+1);
				tdx.annotations.addPin(e, annotationID);
				tdx.annotations.makeDraggable(annotationID);
				return false;
			});
			jQuery(document).on('click', 'div.pin', function(e){
				jQuery(e.target).next('div.deletePin').toggleClass('visible');
				return false;
			});
			jQuery(document).on('click', 'a.deletePinLink', function(e){
				tdx.annotations.deletePin(e);
				return false;
			});
			jQuery(document).on('acf/sortable_stop_repeater', function(e, dragged){
				tdx.annotations.updateOrder(e, dragged);
				return false;
			});
		},
		// Calculate position value, create and place pin, update values in hidden input
		addPin: function(e, annotationID){
			var $img = jQuery(e.target);
			acf.fields.repeater.add_row($img.rowSibling('views', 'div.repeater'));
			var $imgContainer = $img.closest('div.tdx_selected_image_wrap');
			var $linkedRow = $img.rowSibling('views', '[data-field_name="annotations"] tr.row').last();
			var annotationIndex = $linkedRow.find('td.order').html();
			var $xField = $linkedRow.find('[data-field_name=x] input');
			var $yField = $linkedRow.find('[data-field_name=y] input');
			var clickX = e.pageX-$imgContainer.offset().left;
			var clickY = e.pageY-$imgContainer.offset().top;
			var pinX = clickX - 7;
			var pinY = clickY - 7;
			var percentX = (pinX/$img.width()) * 100;
			var percentY = (pinY/$img.height()) * 100;
			$linkedRow.attr('data-annotation_id', annotationID);
			// This could be its own method
			$imgContainer.append('<div class="pin" data-annotation_id="'+annotationID+'" style="left:'+percentX+'%; top:'+percentY+'%;">'+annotationIndex+'</div><div class="deletePin" style="left:'+percentX+'%; top:'+percentY+'%;" data-annotation_id="'+annotationID+'"><a href="javascript:;" class="deletePinLink">Delete</a></div>');
			$xField.val(percentX);
			$yField.val(percentY);
		},
		// Delete pin and associated row
		deletePin: function(e) {
			var annotationID = jQuery(e.target).closest('div.deletePin').prev('div.pin').data('annotation_id');
			var $linkedRow = jQuery(e.target).rowSibling('views','tr[data-annotation_id='+annotationID+']').first();
			acf.fields.repeater.remove_row($linkedRow);
			var rowgone = window.setInterval(function(){
				if(!jQuery(e.target).rowSibling('views','tr[data-annotation_id='+annotationID+']').length){
					var $arbitraryRow = jQuery(e.target).rowSibling('views','[data-field_name="annotations"] tr.row').first();
					jQuery(e.target).closest('div.deletePin').prev('div.pin').remove();
					jQuery(e.target).closest('div.deletePin').remove();
					if($arbitraryRow){
						jQuery(document).trigger('acf/sortable_stop_repeater', $arbitraryRow);
					}
					window.clearInterval(rowgone);
				}
			}, 100);
		},
		// Apply jQuery.draggable to a new pin.
		makeDraggable: function(annotationID){
			jQuery('div.pin[data-annotation_id='+annotationID+']').draggable({ 
				addClasses: false, 
				containment:'parent',
				stop: function(e, ui){
					jQuery('div.deletePin[data-annotation_id='+annotationID+']').css({
						'top': ui.helper.css('top'),
						'left': ui.helper.css('left')
					});
					tdx.annotations.updateLocation(ui.helper);
				}
			});
		},
		// Remove all pins and their associated rows
		clearPins: function(e){
			jQuery(e.target).rowSibling('views','[data-field_name=annotations] tr.row').remove();
			jQuery(e.target).rowSibling('views','div.pin, div.deletePin').remove();
		},
		// Update fields with new coordinates of a dragged pin.
		updateLocation: function($pin){
			var $img = $pin.rowSibling('views','img.tdx_selected_image');
			var annotationID = $pin.data('annotation_id')
			var $linkedRow = $pin.rowSibling('views','[data-annotation_id='+annotationID+']');
			var $xField = $linkedRow.find('[data-field_name=x] input');
			var $yField = $linkedRow.find('[data-field_name=y] input');
			var pinX = $pin.position().left;
			var pinY = $pin.position().top;
			var percentX = (pinX/$img.width()) * 100;
			var percentY = (pinY/$img.height()) * 100;
			$xField.val(percentX);
			$yField.val(percentY);
		},
		// Update pin labels on annotation row sort
		updateOrder: function(e, dragged){
			$pins = jQuery(dragged).rowSibling('views','div.pin');
			$pins.each(function(index, element){
				var $element = jQuery(element);
				var annotationID = $element.data('annotation_id');
				var newIndex = jQuery('tr[data-annotation_id='+annotationID+']').index();
				$element.html(newIndex+1);
			});		
		}
	},
	images: {
		init: function(){
			// Create main image wrapper and buttons for stories and objects
			jQuery('[data-field_name="img_link"], [data-field_name="img_link_b"]').append('\
				<div class="tdx_selected_image_wrap"><div class="tdx_loading" style="display:none;"></div></div>\
				<div class="tdx_image_buttons">\
					<a href="#" class="button button-primary tdx_select_image" style="display:none;">Select Image</a>\
					<a href="#" class="button button-primary tdx_change_image" style="display:none;">Change Image</a>\
					<a href="#" class="button button-primary tdx_remove_image" style="display:none;">Remove Image</a>\
				</div>\
			').each(function(index, element){
				var objid = jQuery(element).find('input').val();
				if(objid){
					jQuery(element).find('div.tdx_selected_image_wrap').append('\
						<img src="http://api.artsmia.org/images/'+objid+'/medium.jpg" class="tdx_selected_image" style="display:none;"/>\
					');
					jQuery(element).find('div.tdx_loading').fadeIn(250);
					jQuery(element).find('img.tdx_selected_image').on('load', function(e){
						jQuery(element).find('div.tdx_loading').fadeOut(250, function(){
							jQuery(e.target).fadeIn(250);
							jQuery(element).find('a.tdx_change_image, a.tdx_remove_image').fadeIn(250);
						});
					});
				} else {
					jQuery(element).find('a.tdx_select_image').show();
				}
			});
			// Add "Insert Image" buttons to all WYSIWYGs
			jQuery('td.field_type-wysiwyg').prepend('<a href="#" class="button tdx_insert_image">Insert Image</a>');
			// Handle events
			jQuery(document).on('click', 'a.tdx_select_image', function(e){
				tdx.images.targetType = 'field';
				tdx.images.targetFieldID = jQuery(e.target).closest('[data-field_name="img_link"], [data-field_name="img_link_b"]').find('input').attr('id');
				tdx.images.open(e);
				return false;
			});
			jQuery(document).on('click', 'a.tdx_change_image', function(e){
				tdx.images.reset(e);
				tdx.images.targetType = 'field';
				tdx.images.targetFieldID = jQuery(e.target).closest('[data-field_name="img_link"], [data-field_name="img_link_b"]').find('input').attr('id');
				tdx.images.open(e);
				return false;
			});
			jQuery(document).on('click', 'a.tdx_insert_image', function(e){				
				tdx.images.targetType = 'wysiwyg';
				// Update active editor
				var thisTinyMCE = jQuery(e.target).rowSibling('annotations','textarea.wp-editor-area').attr('id'); 
				tinyMCE.get(thisTinyMCE).focus();
				tdx.images.open(e);
				return false;
			});
			jQuery(document).on('click', 'a.tdx_remove_image', function(e){
				tdx.images.reset(e);
				return false;
			});
			jQuery(document).on('click', 'div.tdx_images_close', function(e){
				tdx.images.close(e);
				return false;
			});
			// Weird one - actually clicking a span or p.thumb-caption, so this is easier
			jQuery(document).on('click', function(e){
				if(jQuery(e.target).closest('a.tdx_image').length){
					tdx.images.selectImage(e);
					return false;
				}
			});
		},
		// Launch UI and get images
		open: function(e){
			jQuery('#tdx_pick_image_overlay, #tdx_pick_image_ui').fadeIn(250);
			jQuery.post(
				ajaxurl,
				{
					action		:	'tdx_get_images',
					_wpnonce		:	tdxGlobal.getImagesNonce
				},
				function(response)
				{
					var responseObj = jQuery.parseJSON(response);
					var objects = responseObj.objects;
					console.log(objects);
					var loaded = 0;
					for(var i=0;i<objects.length;i++){
						// Some objects are returned as null; in that case increment and skip the rest
						if(!objects[i]){
							loaded++;
							if(loaded == objects.length){
								jQuery('div.tdx_loading').fadeOut(250);
							}
							continue;
						}
						var artist = objects[i].artist ? objects[i].artist : 'Unknown';
						var date = objects[i].dated ? objects[i].dated : 'Unknown';
						var id_arr = objects[i].id.split('/');
						var id = id_arr[4];
						jQuery('#tdx_images').append('\
							<a href="#" data-objid="'+id+'" class="tdx_image" style="display:none;">\
								<div class="object-thumb-wrap">\
									<div class="object-thumb">\
										<img src="http://api.artsmia.org/images/'+id+'/300/small.jpg" id="tdx_pickable_image_'+id+'" />\
										<p class="thumb-caption">\
											<span class="title">'+objects[i].title+'</span>\
											<span class="artist"><strong>Artist:</strong> '+artist+'</span>\
											<span class="year"><strong>Date:</strong> '+date+'</span>\
										</p>\
									</div>\
								</div>\
							</a>\
						');
						jQuery('#tdx_pickable_image_'+id).on('load', function(e){
							jQuery(this).closest('a').fadeIn(250);
							loaded++;
							if(loaded == objects.length){
								jQuery('div.tdx_loading').fadeOut(250);
							}
						});	
					}
				}
			);
		},
		// Close UI and clear attributes
		close:function(){
			jQuery('#tdx_pick_image_overlay, #tdx_pick_image_ui').fadeOut(250);
			tdx.images.targetType = '';
			tdx.images.targetFieldID = '';
		},
		// Grab the image's object ID, update field, and append image in the proper place
		selectImage:function(e){
			var record = jQuery(e.target).closest('a.tdx_image');
			var objid = record.data('objid');
			// Insert into a field (i.e. main image of a story or object)
			if(tdx.images.targetType == 'field'){
				jQuery('#'+tdx.images.targetFieldID).val(objid);
				var thisCell = jQuery('#'+tdx.images.targetFieldID).closest('[data-field_name="img_link"], [data-field_name="img_link_b"]');
				thisCell.find('a.tdx_select_image').hide();
				thisCell.find('div.tdx_loading').fadeIn(250);
				thisCell.find('div.tdx_selected_image_wrap').append('\
					<img src="http://api.artsmia.org/images/'+objid+'/medium.jpg" class="tdx_selected_image" style="display:none;"/>\
				');
				thisCell.find('img.tdx_selected_image').on('load', function(){
					thisCell.find('div.tdx_loading').fadeOut(250, function(){
						thisCell.find('img.tdx_selected_image').fadeIn(250);
						thisCell.find('a.tdx_change_image, a.tdx_remove_image').fadeIn(250);
					});
				});
			}
			// Insert into TinyMCE
			if(tdx.images.targetType == 'wysiwyg'){
				var el = tinyMCE.activeEditor.dom.create('img', {class:'embedded_image', src:'http://api.artsmia.org/images/'+objid+'/300/small.jpg'}, '');
				tinyMCE.activeEditor.selection.setNode(el);
			}
			tdx.images.close();
		},
		// Get rid of all pins and remove image
		reset:function(e){
			tdx.annotations.clearPins(e);
			var thisCell = jQuery(e.target).closest('[data-field_name="img_link"], [data-field_name="img_link_b"]');
			thisCell.find('img.tdx_selected_image').remove();
			thisCell.find('a.tdx_change_image, a.tdx_remove_image').hide();
			thisCell.find('a.tdx_select_image').show();
			thisCell.find('input').val('');
		},
		targetFieldID:'',
		targetType:''
	}
}

jQuery(document).ready(function(){
	tdx.images.init();
	if(tdxGlobal.postType == 'object'){
		tdx.annotations.init();
	}
});