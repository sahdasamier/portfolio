import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import next from 'next';

admin.initializeApp();

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  conf: { distDir: '.next' },
});
const handle = app.getRequestHandler();

export const nextServer = functions.https.onRequest(async (req, res) => {
  await app.prepare();
  return handle(req, res);
}); 