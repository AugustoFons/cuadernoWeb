import { Provider } from '@lexical/yjs';
import { WebsocketProvider } from 'y-websocket';
import { Doc } from 'yjs';

let WEBSOCKET_ENDPOINT = 'ws://localhost:1234';
let WEBSOCKET_SLUG = 'playground';
let WEBSOCKET_ID = '0';

// Verificar si estamos en un entorno de navegador
if (typeof window !== 'undefined') {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  WEBSOCKET_ID = params.get('collabId') || '0';
}

// parent dom -> child doc
export function createWebsocketProvider(
  id: string,
  yjsDocMap: Map<string, Doc>
): Provider {
  let doc = yjsDocMap.get(id);

  if (doc === undefined) {
    doc = new Doc();
    yjsDocMap.set(id, doc);
  } else {
    doc.load();
  }

  // @ts-ignore
  return new WebsocketProvider(
    WEBSOCKET_ENDPOINT,
    WEBSOCKET_SLUG + '/' + WEBSOCKET_ID + '/' + id,
    doc,
    {
      connect: false,
    }
  );
}
