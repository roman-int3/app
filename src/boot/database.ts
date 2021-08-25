import { addPouchPlugin, createRxDatabase, getRxStoragePouch, RxPlugin } from 'rxdb';
import * as PouchdbAdapterHttp from 'pouchdb-adapter-http';
addPouchPlugin(PouchdbAdapterHttp as unknown as RxPlugin);

import * as PouchdbAdapterIdb from 'pouchdb-adapter-idb';
import { boot } from 'quasar/wrappers';
addPouchPlugin(PouchdbAdapterIdb as unknown as RxPlugin);

const useAdapter = getRxStoragePouch('idb');




export default boot(async ({ app }) => {
  console.log('DatabaseService BOOT');

  const db = await createRxDatabase({
    name: 'heroesdb',           // <- name
    storage: useAdapter,          // <- storage-adapter
    multiInstance: true,         // <- multiInstance (optional, default: true)
    eventReduce: false // <- eventReduce (optional, default: true)
  });
  console.dir(db);


})




