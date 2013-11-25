// Extend jQuery to jump to a selector in the same repeater row; helps with traversal
//   @param fieldName: Which ('views' vs. 'annotations') repeater row should we
//   stay within? This is useful because repeater rows are nested.
jQuery.fn.rowSibling = function(fieldName, selector) {
  var rows = jQuery('[data-field_name="'+fieldName+'"] > div.repeater > table > tbody > tr.row');
  return this.closest(rows).find(selector);
}

tdx_json = jQuery.getJSON('../wp-content/plugins/tdx_author_wp/js/tdx-images.json')

// TDX Object
tdx = {
  images: {
    init: function(){
      // Create main image wrapper and buttons for stories and objects
      jQuery('[data-field_name="img_link"] td:nth-child(2), [data-field_name="img_link_b"] td:nth-child(2)').append('\
        <div class="tdx_selected_image_wrap"><div class="tdx_loading" style="display:none;"></div></div>\
          <div class="tdx_image_buttons">\
          <a href="#" class="button button-primary tdx_select_image" style="display:none;">Select Image</a>\
          <a href="#" class="button button-primary tdx_change_image" style="display:none;">Change Image</a>\
          <a href="#" class="button button-primary tdx_remove_image" style="display:none;">Remove Image</a>\
          </div>'
      ).each(function(index, element){
        cell = jQuery(element)
        var objid = cell.find('input').val();
        if(objid){
          var skipZoomer = false && document.querySelector('#title').value == '44 Plates from a Christian illuminated album'
          if(skipZoomer) {
            cell.empty().append('<img src="//cdn.dx.artsmia.org/thumbs/tn_'+objid+'.jpg"></img>')
          } else {
            tdx.images.loadZoomerIntoCell(cell, objid)
          }
        } else {
          jQuery(element).find('a.tdx_select_image').show();
        }
      });
      // The same, but for attachments
      jQuery('[data-field_name="attachment_img_link"] .acf-input-wrap').append('\
        <div class="tdx_selected_image_wrap"><div class="tdx_loading" style="display:none;"></div></div>\
          <div class="tdx_image_buttons">\
          <a href="#" class="button button-primary tdx_select_attachment_image" style="display:none;">Select Image</a>\
          <a href="#" class="button button-primary tdx_change_attachment_image" style="display:none;">Change Image</a>\
          <a href="#" class="button button-primary tdx_remove_image" style="display:none;">Remove Image</a>\
          </div>'
      ).each(function(index, element){
        cell = jQuery(element)
        var objid = cell.find('input').val();
        if(objid){
          tdx.images.loadThumbnailIntoCell(cell, objid)
        } else {
          jQuery(element).find('a.tdx_select_attachment_image').show();
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
      jQuery(document).on('click', 'a.tdx_select_attachment_image', function(e){
        tdx.images.targetType = 'attachment-field';
        tdx.images.targetFieldID = jQuery(e.target).closest('[data-field_name="attachment_img_link"]').find('input').attr('id');
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
      jQuery(document).on('click', 'a.tdx_change_attachment_image', function(e){
        tdx.images.reset(e);
        tdx.images.targetType = 'attachment-field';
        tdx.images.targetFieldID = jQuery(e.target).closest('[data-field_name="attachment_img_link"]').find('input').attr('id');
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
      jQuery(document).on('click', 'a.add-row-end', function(e){
        e.target.focus();
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
      tdx_json.done(function(objects) {
        var imageCount = 0, loaded = 0
        // jQuery.map(objects, function(id, images) { imageCount += images.length })
        jQuery('#tdx_pick_image_overlay, #tdx_pick_image_ui').fadeIn(250);
        jQuery.map(objects, function(views, id) {
          var objectId = jQuery('#acf-field-tms_id')[0] && jQuery('#acf-field-tms_id')[0].value
          if(objectId && objectId != '0' && (id != objectId && !(objectId == '97' && id == '95'))) {

          } else {
          imageCount += views.length 
          jQuery.map(views, function(view) {
            var id = view.replace(/\.(tif|jpg)/, ''), thumb = '//cdn.dx.artsmia.org/thumbs/tn_'+id+'.jpg'
            jQuery('#tdx_images').append('\
              <a href="#" data-objid="'+id+'" class="tdx_image">\
                <div class="object-thumb-wrap">\
                  <div class="object-thumb">\
                    <img src="'+thumb+'" id="tdx_pickable_image_'+id+'" />\
                    <p class="thumb-caption">'+id+'</p>\
                  </div>\
                </div>\
              </a>'
            );

            jQuery('#tdx_pickable_image_'+id).on('load', function(e){
              jQuery(this).closest('a').fadeIn(250);
              loaded++;
              if(loaded >= imageCount - 50){
                jQuery('div.tdx_loading').fadeOut(250);
                jQuery('.tdx_image').fadeIn(250)
              }
            });
          })
          }
        })
      });
    },
    // Close UI and clear attributes
    close:function(){
      jQuery('#tdx_pick_image_overlay, #tdx_pick_image_ui').fadeOut(250);
      tdx.images.targetType = '';
      tdx.images.targetFieldID = '';
    },
    // Load a zoomer into the given cell
    loadZoomerIntoCell: function(cell, objid) {
      cell.find('div.tdx_loading').fadeIn(250);
      cell.find('div.tdx_selected_image_wrap').empty().append('<iframe src="http://artsmia.github.io/ag-sketches/#/edit/'+objid+'"></iframe><strong><a href="//afrx.firebaseio.com/'+objid+'">'+objid+'</a></strong>');
      cell.find('iframe').on('load', function(){
        cell.find('div.tdx_loading').fadeOut(250, function(){
          cell.find('img.tdx_selected_image').fadeIn(250);
        });
        cell.find('a.tdx_change_image, a.tdx_remove_image').fadeIn(250);
      });

      this.load_and_zoom_firebase_annotations(objid, cell)
    },
    loadThumbnailIntoCell:function(cell, objid) {
      cell.find('div.tdx_loading').fadeIn(250);
      cell.find('div.tdx_selected_image_wrap').empty().append('<img src="//cdn.dx.artsmia.org/thumbs/tn_'+objid+'.jpg" style="max-width:100px; max-height:100px;" />');
      cell.find('img').on('load', function(){
        cell.find('div.tdx_loading').fadeOut(250, function(){
          cell.find('img').fadeIn(250);
        });
        cell.find('a.tdx_change_attachment_image, a.tdx_remove_image').fadeIn(250);
      });
    },

    load_and_zoom_firebase_annotations: function(objid, cell) {
      window.firebase = new Firebase('https://afrx.firebaseio.com/'+objid+'/notes2');
      // TODO: child_changed: same as _added, child_removed deleted the ACF row
      // https://www.firebase.com/docs/javascript/firebase/on.html
      firebase.on('child_added', function(snapshot) {
        var note = snapshot.val(),
        link = note.properties && note.properties.acf_link,
        correspondingNote = jQuery('[data-field_name="img_link"] input[value='+objid+']').parents('.row').find('table > tbody > tr.row > .order:contains('+link+')')

        if(link) {
          console.log("linked", link)
          console.log("correspondingNote: ", correspondingNote)
          console.log("note: ",note)
        } else {
          console.log('unlinked')
          window.repeater = acf.fields.repeater.add_row(cell.rowSibling('views', '[data-field_name="annotations"] > .repeater').first());
          window.ann = cell.rowSibling('views', '[data-field_name="annotations"] tr.row').last();
          ann[0].scrollIntoViewIfNeeded()
          field_key = ann.find('[data-field_name=description]').attr('data-field_key')
          link = ann.find('.order').html()

          snapshot.ref().child('/properties').set(note.properties = {acf_link: link, field_key: field_key, image_id: objid})
          window.note = note
  	      correspondingNote = ann.find('.order:first')
        }

        tdx.images.minimap(objid, correspondingNote, note)
      })
    },

    // Treat Features differently than FeatureCollections
    jsonToLayer: function(note) {
      var geometry, json;
      if(note.type == 'FeatureCollection') {
        json = {
          type: 'MultiPolygon', coordinates: [].map.call(note.features, function (f) { return [f.geometry.coordinates[0]] })
        }
      } else {
        json = note.geometry
      }

      return L.GeoJSON.geometryToLayer(json)
    },

    minimap: function(image_id, acf_row, note) {
      // TODO: this might fail if the same image is used for two different views
      unique_key = image_id + note.properties.acf_link
      map = jQuery('<div class="minimap"></div>').attr('id', unique_key)
      acf_row.first().next().find('tbody tr[data-field_name=description] > td:nth-child(2) > .inner').prepend(map)
      console.log(acf_row.parents('.repeater:last').find('.order:first').html())

      Zoomer.zoom_from_id(image_id, unique_key, note).then(function(z, container, _note) {
        var zoomed = z(container)
        var _geometry = tdx.images.jsonToLayer(note)
        setTimeout(function() {
          zoomed.map.fitBounds(_geometry)
          zoomed.map.addLayer(_geometry)
        }, 50)
      })
    },

    // Grab the image's object ID, update field, and append image in the proper place
    selectImage:function(e){
      var record = jQuery(e.target).closest('a.tdx_image');
      var objid = record.data('objid');
      console.log('select image', record, objid)
      // Insert into a field (i.e. main image of a story or object)
      if(tdx.images.targetType == 'field'){
        jQuery('#'+tdx.images.targetFieldID).val(objid);
        var thisCell = jQuery('#'+tdx.images.targetFieldID).closest('[data-field_name="img_link"], [data-field_name="img_link_b"]');
        thisCell.find('a.tdx_select_image').hide();
        tdx.images.loadZoomerIntoCell(thisCell, objid);
      }
      if(tdx.images.targetType == 'attachment-field'){
        jQuery('#'+tdx.images.targetFieldID).val(objid);
        var thisCell = jQuery('#'+tdx.images.targetFieldID).closest('[data-field_name="attachment_img_link"]');
        thisCell.find('a.tdx_select_attachment_image').hide();
        tdx.images.loadThumbnailIntoCell(thisCell, objid);
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
      //tdx.annotations.clearPins(e);
      var thisCell = jQuery(e.target).closest('[data-field_name="img_link"], [data-field_name="img_link_b"], [data-field_name="attachment_img_link"]');
      thisCell.find('img, iframe, strong').remove();
      thisCell.find('a.tdx_change_image, a.tdx_change_attachment_image, a.tdx_remove_image').hide();
      thisCell.find('a.tdx_select_image, a.tdx_select_attachment_image').show();
      thisCell.find('input').val('');
    },
    targetFieldID:'',
    targetType:''
  }
}

jQuery(document).ready(function(){
  tdx.images.init();
});
