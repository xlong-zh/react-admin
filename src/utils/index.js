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
  console.log(r);
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

export async function httpHeader(func, errFunc) {
  try {
    return await func();
  } catch (err) {
    if (errFunc) {
      return errFunc(err);
    }

    if (res && res.message) {
      message.error(res.message);
    }
    return false;
  }
}
//函数节流
const throttle = (fun, delay) => {
  let last = null;
  return () => {
    const now = +new Date();
    if (now - last > delay) {
      fun();
      last = now;
    }
  };
};
//函数防抖
const debouce = (fun, delay) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun();
    }, delay);
  };
};
// 日期格式化
export function formatDate(value, fmt) {
  // var regPos = /^\d+(\.\d+)?$/;
  // if (regPos.test(value)) {
  //如果是数字
  let getDate = new Date(value);
  let opt = {
    'Y+': getDate.getFullYear().toString(),
    'M+': (getDate.getMonth() + 1).toString(),
    'D+': getDate.getDate().toString(),
    'h+': getDate.getHours().toString(),
    'm+': getDate.getMinutes().toString(),
    's+': getDate.getSeconds().toString(),
  };
  for (let k in opt) {
    // if (new RegExp('(' + k + ')').test(fmt)) {
    // 	console.log(opt[k]);
    // 	console.log(RegExp.$1.length);
    // 	fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? opt[k] : ('00' + opt[k]).substr(('' + opt[k]).length));
    // }
    let ret = new RegExp('(' + k + ')').exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
    }
  }
  return fmt;
}
