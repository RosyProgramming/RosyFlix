/* eslint-disable linebreak-style */
import { create, router as _router, defaults } from 'json-server';

const server = create();
const router = _router('db.json');
const middlewares = defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running in ${port}`);
});
