import * as logger from 'morgan';
import * as express from 'express';
import * as http from 'http';
import * as helmet from 'helmet';
import { once } from 'events';
import { uiConfiguation } from './config';

export default class Server {
  private app: express.Application;

  private http: http.Server | undefined;

  private port: string;

  constructor(port: string) {
    this.port = port;
    this.app = express();
    this.configureMiddlewares();
    this.configureRoutes();
  }

  private configureMiddlewares() {
    this.app.use(logger('tiny'));
    this.app.use(helmet());
  }

  private configureRoutes() {
    this.app.get('/config', (req, res) => {
      res.send(uiConfiguation);
    });
  }

  public async start() {
    console.log(`listening to port: ${this.port}`);
    this.http = this.app.listen(this.port);
    await once(this.http, 'listening');
  }
}
