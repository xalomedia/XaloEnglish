import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const RichTextEditor = ({ value, onChange, placeholder }) => {
    return (
        <div className="ck-editor-wrapper prose max-w-none">
            <CKEditor
                editor={ClassicEditor}
                data={value || ''}
                config={{
                    placeholder: placeholder || 'Type here...',
                    toolbar: [
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'link',
                        'bulletedList',
                        'numberedList',
                        '|',
                        'outdent',
                        'indent',
                        '|',
                        'blockQuote',
                        'insertTable',
                        'mediaEmbed',
                        'undo',
                        'redo',
                    ],
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    onChange(data);
                }}
            />
            <style>{`
        .ck-editor__editable_inline {
          min-height: 200px;
        }
      `}</style>
        </div>
    );
};

export default RichTextEditor;
