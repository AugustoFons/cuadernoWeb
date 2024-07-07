import { useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { createPortal } from 'react-dom';

export default function DropDown({
  buttonLabel,
  buttonAriaLabel,
  buttonClassName,
  buttonIconClassName,
  children,
  stopCloseOnClickSelf,
}: {
  buttonAriaLabel?: string;
  buttonClassName: string;
  buttonIconClassName?: string;
  buttonLabel?: string;
  children: JSX.Element | string | (JSX.Element | string)[];
  stopCloseOnClickSelf?: boolean;
}): JSX.Element {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [showDropDown, setShowDropDown] = useState(false);

  const margin = 66; // Margen de 10px

  useEffect(() => {
    const button = buttonRef.current;
    const dropDown = dropDownRef.current;

    if (showDropDown && button !== null && dropDown !== null) {
      const { top, left, height } = button.getBoundingClientRect();
      const dropDownHeight = dropDown.offsetHeight;
      const spaceAbove = top - dropDownHeight - margin;
      const spaceBelow = window.innerHeight - (top + height + dropDownHeight + margin);

      dropDown.style.position = 'fixed';

      if (spaceBelow > spaceAbove || spaceAbove < 0) {
        dropDown.style.top = `${top + height + margin}px`;
      } else {
        dropDown.style.top = `${top - dropDownHeight - margin}px`;
      }
      dropDown.style.left = `${Math.min(
        left - 50,
        window.innerWidth - dropDown.offsetWidth
      )}px`;
    }
  }, [dropDownRef, buttonRef, showDropDown]);

  useEffect(() => {
    const button = buttonRef.current;

    if (button !== null && showDropDown) {
      const handle = (event: MouseEvent) => {
        const target = event.target;
        if (stopCloseOnClickSelf) {
          if (dropDownRef.current && dropDownRef.current.contains(target as Node)) return;
        }
        if (!button.contains(target as Node)) {
          setShowDropDown(false);
        }
      };
      document.addEventListener('click', handle);

      return () => {
        document.removeEventListener('click', handle);
      };
    }
  }, [dropDownRef, buttonRef, showDropDown, stopCloseOnClickSelf]);

  return (
    <>
      <button
        aria-label={buttonAriaLabel || buttonLabel}
        className={buttonClassName}
        onClick={() => setShowDropDown(!showDropDown)}
        ref={buttonRef}
        type="button"
      >
        {buttonIconClassName && <span className={buttonIconClassName} />}
        {buttonLabel && (
          <span className="text dropdown-button-text">{buttonLabel}</span>
        )}
        <i className="chevron-down" />
      </button>

      {showDropDown &&
        createPortal(
          <div className="dropdown" ref={dropDownRef}>
            {children}
          </div>,
          document.body
        )}
    </>
  );
}

