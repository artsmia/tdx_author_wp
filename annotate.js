jQuery(document).ready(function(){
	jQuery(document).on('click', function(e){
		if(e.target.nodeName == 'IMG'){
			var annotationID = 'pin_' + Date.now() + '_' + Math.floor((Math.random()*1000)+1);
			annotations.addPin(e, annotationID);
			annotations.makeDraggable(annotationID);
		}
		if(e.target.className == 'pin'){
			jQuery(e.target).next('div.deletePin').toggleClass('visible');
		}
		if(e.target.className == 'deletePinLink'){
			annotations.deletePin(e);
		}
	});
	jQuery(document).on('acf/sortable_stop_repeater', function(e, dragged){
		annotations.updateOrder(e, dragged);
	});
	jQuery(document).on('change', function(e){
		annotations.maybeClearPins(e);
	});
	annotations.init();
});

annotations = {
	addPin: function(e, annotationID){
		acf.fields.repeater.add_row(jQuery(e.target).closest('table').find('td[data-field_name=annotations] div.repeater'));
		var $img = jQuery(e.target);
		var $imgContainer = jQuery(e.target).closest('div.has-image');
		var $linkedRow = jQuery(e.target).closest('table').find('tr.row').last();
		var annotationIndex = $linkedRow.find('td.order').first().html();
		var $xField = $linkedRow.find('td[data-field_name=x]').last().children('input');
		var $yField = $linkedRow.find('td[data-field_name=y]').last().children('input');
		var clickX = e.offsetX;
		var clickY = e.offsetY;
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
	init: function(){
		jQuery('td[data-field_name=annotations] tr.row').each(function(index, element){
			var $element = jQuery(element);
			var percentX = $element.find('td[data-field_name=x]').children('input').val();
			var percentY = $element.find('td[data-field_name=y]').children('input').val();
			var $img = $element.parent().closest('tr.row').find('img.acf-image-image');
			var $imgContainer = $img.closest('div.has-image');
			var annotationID = 'pin_' + Date.now() + '_' + Math.floor((Math.random()*1000)+1);
			$element.attr('data-annotation_id', annotationID);
			var annotationIndex = $element.index()+1;
			$imgContainer.append('<div class="pin" data-annotation_id="'+annotationID+'" style="left:'+percentX+'%; top:'+percentY+'%;">'+annotationIndex+'</div><div class="deletePin" style="left:'+percentX+'%; top:'+percentY+'%;" data-annotation_id="'+annotationID+'"><a href="javascript:;" class="deletePinLink">Delete</a></div>');
			annotations.makeDraggable(annotationID);
		});
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
				annotations.updateLocation(ui.helper);
			}
		});
	},
	maybeClearPins: function(e){
		if(e.target.className = 'acf-image-value'){
			if(!jQuery(e.target).val()){
				jQuery(e.target).closest('table').find('td[data-field_name=annotations] tr.row').remove();
				jQuery(e.target).closest('.acf-image-uploader').find('div.pin, div.deletePin').remove();
			}
		}
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
}

/*	ui: {

		open: function(e) {
			var imageIndex = jQuery(e.target).closest('tr.row').find('td.order').html(); 
			alert('Image index: '+imageIndex);
			var annotationIndex = jQuery(e.target).closest('div.repeater').find('td.order').html();
			alert('Annotation index: '+annotationIndex);
			var src = jQuery('td[data-field_name=image] div.has-image img').attr('src');
			jQuery('#tdx_annotation_overlay, #tdx_annotation_ui').fadeIn(200);
			if(src) {
				jQuery('#tdx_annotation_image_wrap').html('<img class="tdx_annotation_image" src="'+src+'" />');
				jQuery('img.tdx_annotation_image').click(function(ev){
					annotations.ui.assign(ev);
				});
			} else {
				jQuery('#tdx_annotation_image_wrap').html('<p class="tdx_annotation_message">Please add an image!</p>');

			}
		},
		close: function() {
			jQuery('#tdx_annotation_image_wrap').html('');
			jQuery('#tdx_annotation_overlay, #tdx_annotation_ui').fadeOut(200);
		},
*/
/*		assign: function(e) {
			jQuery(e.target).
			console.log(e);
			var clickX = e.offsetX;
			var clickY = e.offsetY;
			var dotX = clickX - 7;
			var dotY = clickY - 7;
			var percentX = (dotX/jQuery('img.tdx_annotation_image').width()) * 100;
			var percentY = (dotY/jQuery('img.tdx_annotation_image').height()) * 100;
			jQuery('#tdx_annotation_image_wrap').append('<div class="dot" style="left:'+percentX+'%; top:'+percentY+'%;">1</div>');
			jQuery('td[data-field_name=image] div.has-image').append('<div class="dot" style="left:'+percentX+'%; top:'+percentY+'%;">1</div>');
			jQuery('td[data-field_name=x] input').val(percentX);
			jQuery('td[data-field_name=y] input').val(percentY);			
			annotations.ui.close();
		} 
	}
}*/