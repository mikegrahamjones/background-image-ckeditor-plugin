CKEDITOR.dialog.add('bgImageDialog', function(editor) {
    return {
        title: editor.lang.bgimage.bgImageTitle,
        resizable: CKEDITOR.DIALOG_RESIZE_BOTH,
        minWidth: 500,
        minHeight: 200,
        onOk: function() {

            var dialog = this;
            var imageURL = dialog.getValueOf('tab1', 'imageURL');
            var repeat = dialog.getValueOf('tab1', 'repeat');
            var pos = dialog.getValueOf('tab1', 'pos')
            var blendMode = dialog.getValueOf('tab1', 'blend')
            var attachment = dialog.getValueOf('tab1', 'attachment')
            var width = dialog.getValueOf('tab1', 'width');
            var height = dialog.getValueOf('tab1', 'height');
			var selected_text = false;

			selected_text = bgimage_getselectedtext(editor);
            var newElement = new CKEDITOR.dom.element("div"); // Make Paragraff
			
            newElement.setStyle("background-image", "url(" + imageURL + ")");
            newElement.setStyle("background-repeat", repeat);
            newElement.setStyle("background-position", pos);
            newElement.setStyle("background-blend-position", blendMode);
            newElement.setStyle("background-attachment", attachment);
            newElement.setStyle("background-size", width + ' ' + height);
			newElement.addClass('ckeditor-bgimage');
			
			if(selected_text) {
				selected_text = "<div>" + selected_text + "</div>";
				newElement.setHtml(selected_text);
			} else {
				newElement.setHtml("<p><br /></p>");
			};

			editor.insertElement(newElement);

        },
        contents: [{
            id: 'tab1',
            label: editor.lang.bgimage.bgImageTitle,
            title: editor.lang.bgimage.bgImageTitle,
            accessKey: 'Q',
            elements: [{
                type: 'vbox',
                padding: 0,
                children: [{
                    type: 'hbox',
                    widths: ['280px', '100px;vertical-align: middle;'],
                    align: 'right',
                    styles: '',
                    children: [{
                        type: 'text',
                        label: editor.lang.bgimage.imageUrl,
                        id: 'imageURL',
                    }, {
                        type: 'button',
                        id: 'browse',
                        label: editor.lang.common.browseServer,
                        hidden: true,
                        filebrowser: 'tab1:imageURL'
                    }]
                }]
            }, {
                type: 'vbox',
                padding: 0,
                children: [{
                    type: 'hbox',
                    widths: ['150px', '150px'],
                    align: 'right',
                    children: [{
                        type: 'select',
                        id: 'repeat',
                        label: editor.lang.bgimage.repeat,
                        items: [
                            ['repeat'],
                            ['no-repeat'],
                            ['repeat-x'],
                            ['repeat-y'],
                        ],
                        'default': 'repeat'
                    }, {
                        type: 'select',
                        id: 'attachment',
                        label: editor.lang.bgimage.attachment,
                        items: [
                            ['scroll'],
                            ['fixed'],
                            ['local'],
                        ]
                    }]
                }]
            }, {
                type: 'vbox',
                padding: 0,
                children: [{
                    type: 'hbox',
                    widths: ['150px', '150px'],
                    align: 'right',
                    children: [{
                        type: 'select',
                        id: 'blend',
                        label: editor.lang.bgimage.blendMode,
                        items: [
                            ['normal'],
                            ['multiply'],
                            ['screen'],
                            ['overlay'],
                            ['darken'],
                            ['lighten'],
                            ['color-dodge'],
                            ['saturation'],
                            ['color'],
                            ['luminosity'],
                        ],
                        style: 'float:left',
                        'default': 'normal'
                    }, {
                        type: 'select',
                        label: editor.lang.bgimage.position,
                        id: 'pos',
                        align: 'right',
                        items: [
                            ['left top'],
                            ['left center'],
                            ['left bottom'],
                            ['right top'],
                            ['right center'],
                            ['center top'],
                            ['center center'],
                            ['center center'],
                        ],
                        'default': 'left top'
                    }, ]
                }]
            }, {
                type: 'vbox',
                padding: 0,
                children: [{
                    type: 'hbox',
                    widths: ['150px', '150px'],
                    align: 'right',
                    children: [{
                        type: 'select',
                        id: 'repeat',
                        label: editor.lang.bgimage.repeat,
                        items: [
                            ['repeat'],
                            ['no-repeat'],
                            ['repeat-x'],
                            ['repeat-y'],
                        ],
                        'default': 'repeat'
                    }, {
                        type: 'select',
                        id: 'attachment',
                        label: editor.lang.bgimage.attachment,
                        items: [
                            ['scroll'],
                            ['fixed'],
                            ['local'],
                        ]
                    }]
                }]
            }, {
                type: 'vbox',
                padding: 0,
                children: [{
                    type: 'hbox',
                    widths: ['150px', '150px'],
                    align: 'right',
                    children: [{
                        type: 'text',
                        id: 'width',
                        label: editor.lang.bgimage.bgWidth,
                        width: '50px',

                    }, {
                        type: 'text',
                        label: editor.lang.bgimage.bgHeight,
                        id: 'height',
                        align: 'right',
                        width: '50px'
                    }]
                }]
            }]
        }],
    }
})

/**
* Get information from SELECTED Text
* http://stackoverflow.com/questions/10295613/how-to-get-selected-html-from-ckeditor-in-javascript
* @param CKEDTIOR editor
* @return HTML
*/
function bgimage_getselectedtext(editor) {
    var sel = editor.getSelection();
    var ranges = sel.getRanges();
    var el = new CKEDITOR.dom.element("div");
    for (var i = 0, len = ranges.length; i < len; ++i) {
        el.append(ranges[i].cloneContents());
    }
    return el.getHtml();
};