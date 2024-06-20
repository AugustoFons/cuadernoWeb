import React, { useCallback, useContext } from 'react';
import Select from '../../../ui/Select';
import ToolbarContext from '../../../context/ToolbarContext';
import FontOptions from '../../../types';

const defaultFontFamilyOptions: FontOptions = [
  ['"__Playpen_Sans_f6f7db", "__Playpen_Sans_Fallback_f6f7db"', 'PlayPen'],
  ["'__Merienda_97fe5c', '__Merienda_Fallback_97fe5c'", 'Merienda'],
  ["'__Plus_Jakarta_Sans_65517a', '__Plus_Jakarta_Sans_Fallback_65517a'", 'Jakarta'],
  ["'__Oxygen_5114ca', '__Oxygen_Fallback_5114ca'", 'Oxygen'],
  ["'__Dosis_8a3c29', '__Dosis_Fallback_8a3c29'", 'Dosis'],
  ["'__Sofia_ed0e3a', '__Sofia_Fallback_ed0e3a'", 'Sofia'],
  ["'__Pacifico_335c89', '__Pacifico_Fallback_335c89'", 'Pacifico'],
  ["'__Lobster_Two_154cec', '__Lobster_Two_Fallback_154cec'", 'Lobster'],
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
    <div className='flex'>
    <Select
        className="toolbar-item font-family"
        onChange={onFontFamilySelect}
        options={fontOptions}
        value={fontFamily}
      />
      <div><i className="chevron-down inside " /></div>
    </div>

    </>
  );
};

export default FontFamilyDropdown;
