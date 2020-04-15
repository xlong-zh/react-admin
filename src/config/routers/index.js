import { AppRouters } from './app.router';
import { ModulesRouters } from './module.router';
import { RoutersFactory } from 'utils/services';
import { makeRouterTree } from 'utils';

const routersMap = new RoutersFactory([...AppRouters, ...ModulesRouters]);
const modulesRouterTree = makeRouterTree(ModulesRouters);

export { AppRouters, ModulesRouters, routersMap, modulesRouterTree };
