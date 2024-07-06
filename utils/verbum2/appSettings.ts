export type SettingName =
  | 'disableBeforeInput'
  | 'measureTypingPerf'
  | 'isRichText'
  | 'isCollab'
  | 'isCharLimit'
  | 'isCharLimitUtf8'
  | 'isAutocomplete'
  | 'showTreeView'
  | 'showNestedEditorTreeView'
  | 'emptyEditor';

export type Settings = Record<SettingName, boolean>;

let hostName = 'playground.lexical.dev';
export let isDevPlayground = false;

// Verificar si estamos en un entorno de navegador
if (typeof window !== 'undefined') {
  hostName = window.location.hostname;
  isDevPlayground =
    hostName !== 'playground.lexical.dev' &&
    hostName !== 'lexical-playground.vercel.app';
}

export const DEFAULT_SETTINGS: Settings = {
  disableBeforeInput: false,
  emptyEditor: isDevPlayground,
  isAutocomplete: false,
  isCharLimit: true,
  isCharLimitUtf8: false,
  isCollab: false,
  isRichText: true,
  measureTypingPerf: false,
  showNestedEditorTreeView: false,
  showTreeView: true,
};
