import PocketBase from 'pocketbase';

// URL por defecto donde corre PocketBase en local
const POCKETBASE_URL = 'http://127.0.0.1:8090';

const pb = new PocketBase(POCKETBASE_URL);

export default pb;