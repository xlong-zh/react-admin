export class RoutersFactory {
  _nameMap = {};
  _routers = [];

  constructor(routers) {
    this._routers = routers;
    this._makeMap(routers);
  }

  getPathByName(name) {
    if (typeof name !== 'string') {
      return;
    }
    if (this._nameMap[name]) {
      return this._nameMap[name].path;
    }

    return '';
  }

  getRouterByPath(path) {
    if (typeof path !== 'string') {
      return;
    }
    const p = this._handlePath(path);

    return this._routers.find((i) => i.path === p && i.exact);
  }

  getParents(router) {
    const r = [];
    if (router && router.name && router.parentName) {
      this._findParents(router, r);
    }

    return r;
  }

  _makeMap(routers) {
    routers.forEach((i) => {
      this._nameMap[i.name] = i;
    });
  }

  _handlePath(path) {
    return path.replace(/\?+.*$/, '');
  }

  _findParents(router, r) {
    if (router.parentName) {
      r.push(router.parentName);
      const t = this._nameMap[router.parentName];
      if (t) {
        this._findParents(t, r);
      }
    }
  }
}
