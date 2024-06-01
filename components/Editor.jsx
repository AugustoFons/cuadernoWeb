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



  return (
    <EditorComposer  >
      <Editor>
        <ToolbarPlugin >
          <FontFamilyDropdown  />
          <FontSizeDropdown  />
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