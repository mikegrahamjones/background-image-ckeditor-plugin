
/**
 * Set background image for CKeditor
 * Author : Saeed Moqadam <phpro.ir@gmail.com>, Michael Jones <mikegrahamjones@gmail.com>
 * Under MIT License
 */
CKEDITOR.plugins.add('bgimage',{
    lang:['en','fa','ru'],
    icons: 'bgimage',
    init:function (editor) {
		
        editor.addCommand('bgimage',new CKEDITOR.dialogCommand('bgImageDialog'));
        editor.ui.addButton(editor.lang.bgimage.bgImageTitle,{
            'label':editor.lang.bgimage.bgImageTitle,
            'command':'bgimage',
            'toolbar':'insert',
            icon: this.path + 'icons/bgimage.png'
        });
		
		var bgImagePath = (this.path+'dialog/bgimageDialog.js');
        CKEDITOR.dialog.add('bgImageDialog', bgImagePath);
		
    }
})
