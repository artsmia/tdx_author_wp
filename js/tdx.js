tdx = {
	annotations: {
		init: function(){
			jQuery('[data-field_name="img_link"]').addClass('annotatable');
			jQuery('td[data-field_name=annotations] tr.row').each(function(index, element){
				var $element = jQuery(element);
				var percentX = $element.find('td[data-field_name=x]').children('input').val();
				var percentY = $element.find('td[data-field_name=y]').children('input').val();
				var $img = $element.parent().closest('tr.row').find('img.tdx_selected_image');
				var $imgContainer = $img.closest('table.acf_input').find('div.tdx_selected_image_wrap');
				var annotationID = 'pin_' + Date.now() + '_' + Math.floor((Math.random()*1000)+1);
				$element.attr('data-annotation_id', annotationID);
				var annotationIndex = $element.index()+1;
				$imgContainer.append('<div class="pin" data-annotation_id="'+annotationID+'" style="left:'+percentX+'%; top:'+percentY+'%;">'+annotationIndex+'</div><div class="deletePin" style="left:'+percentX+'%; top:'+percentY+'%;" data-annotation_id="'+annotationID+'"><a href="javascript:;" class="deletePinLink">Delete</a></div>');
				tdx.annotations.makeDraggable(annotationID);
			});
			jQuery(document).on('click', function(e){
				if(jQuery.inArray('tdx_selected_image', e.target.classList) > -1){
					var annotationID = 'pin_' + Date.now() + '_' + Math.floor((Math.random()*1000)+1);
					tdx.annotations.addPin(e, annotationID);
					tdx.annotations.makeDraggable(annotationID);
					return false;
				}
				if(e.target.className == 'pin'){
					jQuery(e.target).next('div.deletePin').toggleClass('visible');
					return false;
				}
				if(e.target.className == 'deletePinLink'){
					tdx.annotations.deletePin(e);
					return false;
				}
			});
			jQuery(document).on('acf/sortable_stop_repeater', function(e, dragged){
				tdx.annotations.updateOrder(e, dragged);
				return false;
			});
		},
		addPin: function(e, annotationID){
			acf.fields.repeater.add_row(jQuery(e.target).closest('table').find('[data-field_name=annotations] div.repeater'));
			var $img = jQuery(e.target);
			var $imgContainer = jQuery(e.target).closest('div.tdx_selected_image_wrap');
			var $linkedRow = jQuery(e.target).closest('table').find('tr.row').last();
			var annotationIndex = $linkedRow.find('td.order').first().html();
			var $xField = $linkedRow.find('td[data-field_name=x]').last().children('input');
			var $yField = $linkedRow.find('td[data-field_name=y]').last().children('input');
			var clickX = e.pageX-$imgContainer.offset().left;
			var clickY = e.pageY-$imgContainer.offset().top;
			var pinX = clickX - 7;
			var pinY = clickY - 7;
			var percentX = (pinX/$img.width()) * 100;
			var percentY = (pinY/$img.height()) * 100;
			$linkedRow.attr('data-annotation_id', annotationID);
			$imgContainer.append('<div class="pin" data-annotation_id="'+annotationID+'" style="left:'+percentX+'%; top:'+percentY+'%;">'+annotationIndex+'</div><div class="deletePin" style="left:'+percentX+'%; top:'+percentY+'%;" data-annotation_id="'+annotationID+'"><a href="javascript:;" class="deletePinLink">Delete</a></div>');
			$xField.val(percentX);
			$yField.val(percentY);
		},
		deletePin: function(e) {
			var annotationID = jQuery(e.target).closest('div.deletePin').prev('div.pin').data('annotation_id');
			var $linkedRow = jQuery(e.target).closest('table').find('tr[data-annotation_id='+annotationID+']').first();
			acf.fields.repeater.remove_row($linkedRow);
			var rowgone = window.setInterval(function(){
				if(!jQuery(e.target).closest('table').find('tr[data-annotation_id='+annotationID+']').length){	
					var $arbitraryRow = jQuery(e.target).closest('table').find('tr.row').first();
					jQuery(e.target).closest('div.deletePin').prev('div.pin').remove();
					jQuery(e.target).closest('div.deletePin').remove();
					if($arbitraryRow){
						jQuery(document).trigger('acf/sortable_stop_repeater', $arbitraryRow);
					}
					window.clearInterval(rowgone);
				}
			}, 100);
		},
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
		clearPins: function(e){
			jQuery(e.target).closest('tr.row').find('[data-field_name=annotations] tr.row').remove();
			jQuery(e.target).closest('[data-field_name="img_link"]').find('div.pin, div.deletePin').remove();
		},
		updateLocation: function($pin){
			var $img = $pin.closest('div.has-image').find('img.acf-image-image');
			var annotationID = $pin.data('annotation_id')
			var $linkedRow = $pin.closest('table').find('tr.row[data-annotation_id='+annotationID+']');
			var $xField = $linkedRow.find('td[data-field_name=x]').first().children('input');
			var $yField = $linkedRow.find('td[data-field_name=y]').first().children('input');
			var pinX = $pin.position().left;
			var pinY = $pin.position().top;
			var percentX = (pinX/$img.width()) * 100;
			var percentY = (pinY/$img.height()) * 100;
			$xField.val(percentX);
			$yField.val(percentY);
		},
		updateOrder: function(e, dragged){
			$pins = jQuery(dragged).closest('table.acf_input').find('div.pin');
			$pins.each(function(index, element){
				var $element = jQuery(element).first();
				var annotationID = $element.data('annotation_id');
				var newIndex = $element.closest('table').find('tr[data-annotation_id='+annotationID+']').index();
				$element.html(newIndex+1);
			});		
		}
	},
	images: {
		init: function(){
			// Set up workspace
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
			jQuery('td.field_type-wysiwyg').prepend('<a href="#" class="button tdx_insert_image">Insert Image</a>');
			// Route click events
			jQuery(document).on('click', function(e){
				if(jQuery.inArray('tdx_select_image', e.target.classList) > -1){
					tdx.images.targetType = 'field';
					tdx.images.targetFieldID = jQuery(e.target).closest('[data-field_name="img_link"], [data-field_name="img_link_b"]').find('input').attr('id');
					tdx.images.open(e);
					return false;
				}
				if(jQuery.inArray('tdx_change_image', e.target.classList) > -1){
					// MAKE THIS
					tdx.images.reset(e);
					tdx.images.targetType = 'field';
					tdx.images.targetFieldID = jQuery(e.target).closest('[data-field_name="img_link"], [data-field_name="img_link_b"]').find('input').attr('id');
					tdx.images.open(e);
					return false;
				}
				if(jQuery.inArray('tdx_insert_image', e.target.classList) > -1){
					tdx.images.targetType = 'wysiwyg';
					tdx.images.open(e);
					return false;
				}
				if(jQuery.inArray('tdx_remove_image', e.target.classList) > -1){
					tdx.images.reset(e);
					return false;
				}
				if(jQuery.inArray('tdx_images_close', e.target.classList) > -1){
					tdx.images.close(e);
					return false;
				}
				if(jQuery(e.target).closest('a.tdx_image').length){
					tdx.images.selectImage(e);
					return false;
				}
			});
		},
		open: function(e){
			jQuery('#tdx_pick_image_overlay').fadeIn(250);
			jQuery('#tdx_pick_image_ui').fadeIn(250);
			jQuery.post(
				ajaxurl,
				{
					action		:	'tdx_get_images',
					_wpnonce		:	tdxGlobal.getImagesNonce
				},
				function(response)
				{
					//jQuery('div.tdx_loading').fadeOut(250);
					var responseObj = jQuery.parseJSON(response);
					var objects = responseObj.objects;
					console.log(objects);
					var loaded = 0;
					for(var i=0;i<objects.length;i++){
						if(!objects[i]){
							loaded++;
							if(loaded == objects.length){
								jQuery('div.tdx_loading').fadeOut(250);
							}
							continue;
						}
						var artist = objects[i].artist ? objects[i].artist : 'Unknown';
						var date = objects[i].dated? objects[i].dated : 'Unknown';
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
		close:function(){
			tdx.images.targetFieldID = '';
			jQuery('#tdx_pick_image_overlay').fadeOut(250);
			jQuery('#tdx_pick_image_ui').fadeOut(250);
		},
		selectImage:function(e){
			var record = jQuery(e.target).closest('a.tdx_image');
			var objid = record.data('objid');
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
			if(tdx.images.targetType == 'wysiwyg'){
				var el = tinyMCE.activeEditor.dom.create('img', {class:'embedded_image', src:'http://api.artsmia.org/images/'+objid+'/300/small.jpg'}, '');
				tinyMCE.activeEditor.selection.setNode(el);
			}
			tdx.images.close();
		},
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