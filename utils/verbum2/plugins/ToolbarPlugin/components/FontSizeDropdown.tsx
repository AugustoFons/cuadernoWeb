import React, { useCallback, useContext } from 'react';
import Select from '../../../ui/Select';
import ToolbarContext from '../../../context/ToolbarContext';
import { FontOptions } from '../../../types';

const defaultFontSizeOptions: FontOptions = [
  ['14px', '14 px'],
  ['16px', '16 px'],
  ['18px', '18 px'],
  ['20px', '20 px'],
  ['24px', '24 px'],
  ['28px', '28 px'],
  ['32px', '32 px'],
];

interface IFontSizeDropdown {
  fontSizeOptions?: FontOptions;
}

const FontSizeDropdown = ({
  fontSizeOptions = defaultFontSizeOptions,
}: IFontSizeDropdown) => {
  const { fontSize, applyStyleText } = useContext(ToolbarContext);

  const onFontSizeSelect = useCallback(
    (e) => {
      applyStyleText({ 'font-size': e.target.value });
    },
    [applyStyleText]
  );

  return (
    <>
      <Select
        className="toolbar-item font-size"
        onChange={onFontSizeSelect}
        options={fontSizeOptions}
        value={fontSize}
      />
      <i className="chevron-down inside" />
    </>
  );
};

export default FontSizeDropdown;
