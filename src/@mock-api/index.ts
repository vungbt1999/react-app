import { myRecord } from './data/my-record';
import { setupWorker, rest } from 'msw';
import { homePage } from './data/home';
import { columnPage } from './data/column-page';
import { layout } from './data/layout';
import { chartData } from './data/chart';

const worker = setupWorker(
  rest.get('/api/layout', (_, res, ctx) => {
    return res(ctx.json({ ...layout }));
  }),
  rest.get('/api/home', (_, res, ctx) => {
    return res(ctx.json({ ...homePage }));
  }),
  rest.get('/api/my-record', (_, res, ctx) => {
    return res(ctx.json({ ...myRecord }));
  }),
  rest.get('/api/column', (_, res, ctx) => {
    return res(ctx.json({ ...columnPage }));
  }),
  rest.get('/api/chart', (_, res, ctx) => {
    return res(ctx.json({ ...chartData }));
  })
);

worker.start();
