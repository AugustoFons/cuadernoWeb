import React, { useCallback, useContext } from 'react';
import {ToolbarContext} from 'verbum/src/context/ToolbarContext';

import ColorPicker from 'verbum/src/ui/ColorPicker';
import { useTranslation } from 'react-i18next';

const CustomBackgroundColorPicker = () => {
  const { bgColor, applyStyleText } = useContext(ToolbarContext);
  const { t } = useTranslation('toolbar');

  const onBgColorSelect = useCallback(
    (value) => {
      applyStyleText({ 'background-color': value });
    },
    [applyStyleText]
  );

  return (
    <ColorPicker
      buttonClassName="toolbar-item color-picker"
      buttonAriaLabel={t('toolbar:backgroundColorPicker.Description')}
      buttonIconClassName="icon bg-color"
      color={bgColor}
      onChange={onBgColorSelect}
      title="bg color"
    />
  );
};

export default CustomBackgroundColorPicker;
