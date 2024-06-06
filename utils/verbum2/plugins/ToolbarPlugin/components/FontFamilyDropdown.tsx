import React, { useCallback, useContext } from 'react';
import Select from '../../../ui/Select';
import ToolbarContext from '../../../context/ToolbarContext';
import { FontOptions } from '../../../types';

const defaultFontFamilyOptions: FontOptions = [
  ['"__Playpen_Sans_f6f7db", "__Playpen_Sans_Fallback_f6f7db"', 'Imprenta'],
  ['Courier New', 'Courier New'],
  ['Georgia', 'Georgia'],
  ['Times New Roman', 'Times New Roman'],
  ['Trebuchet MS', 'Trebuchet MS'],
  ['Verdana', 'Verdana'],
];

interface IFontFamilyDropdown {
  fontOptions?: FontOptions;
}

const FontFamilyDropdown = ({
  fontOptions = defaultFontFamilyOptions,
}: IFontFamilyDropdown) => {
  const { fontFamily, applyStyleText } = useContext(ToolbarContext);

  const onFontFamilySelect = useCallback(
    (e) => {
      applyStyleText({ 'font-family': e.target.value });
    },
    [applyStyleText]
  );

  return (
    <>
    <div className='flex items-center '>
    <Select
        className="toolbar-item font-family"
        onChange={onFontFamilySelect}
        options={fontOptions}
        value={fontFamily}
      />
      <div className='border-1 border-black h-2 w-2'><i className="chevron-down inside relative top-3" /></div>
    </div>

    </>
  );
};

export default FontFamilyDropdown;
