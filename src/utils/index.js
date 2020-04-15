export function makeRouterTree(routers, parentKey = 'parentName', childrenKey = 'children') {
  const map = {},
    r = [];

  routers.forEach((i) => {
    if (i.name) {
      map[i.name] = i;
    }
  });

  routers.forEach((i) => {
    if (i[parentKey]) {
      const p = map[i[parentKey]];
      if (p) {
        if (p.children) {
          p[childrenKey].push(i);
        } else {
          p[childrenKey] = [i];
        }
      }
    } else {
      r.push(i);
    }
  });

  return r;
}

export function log(data, color = '#fff', background = '#f44336') {
  console.log(`%c ${data}`, `color:${color};background:${background}`);
}

export function newThrow(func, msg) {
  const s = `function <${func}>: ${msg}`;
  throw s;
}

export function px2Number(value) {
  if (typeof value === 'string') {
    const n = Number(value.replace(/[^(\d)]*$/, ''));
    if (Number.isNaN(n)) {
      return 0;
    }
    return n;
  }

  if (typeof value === 'number') {
    return String(value) + 'px';
  }

  newThrow('px2Number', 'params type error');
}
