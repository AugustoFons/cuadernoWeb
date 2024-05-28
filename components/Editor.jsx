'use client'
import {
  EditorComposer,
  Editor,
  ToolbarPlugin,
  AlignDropdown,
  BackgroundColorPicker,
  BoldButton,
  CodeFormatButton,
  FloatingLinkEditor,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
  Divider
} from '../utils/verbum2';


const NoteViewer = () => {
    const customFontSizes = [
        ['14px', '14 px'],
        ['16px', '16 px'],
        ['18px', '18 px'],
        ['20px', '20 px'],
        ['24px', '24 px'],
        ['28px', '28 px'],
        ['32px', '32 px'],
        ['36px', '36 px']
      ];


  return (
    <EditorComposer>
      <Editor hashtagsEnabled={true} emojisEnabled={true} actionsEnabled={true}>
        <ToolbarPlugin defaultFontSize="24px" defaultBgColor={'transparent'} >
          <FontFamilyDropdown  />
          <FontSizeDropdown fontSizeOptions={customFontSizes}  />
          <Divider />
          <BoldButton />
          <ItalicButton />
          <UnderlineButton />
          <CodeFormatButton />
          <InsertLinkButton />
          <TextColorPicker />
          <TextFormatDropdown />
          <Divider />
          <BackgroundColorPicker />
          <InsertDropdown enablePoll={true} />
          <Divider />
          <AlignDropdown />
        </ToolbarPlugin>
      </Editor>
    </EditorComposer>
  );
};

export default NoteViewer;