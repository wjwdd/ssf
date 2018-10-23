import { fetch } from 'common/js/fecth.js';
import api from 'common/js/url.js'; //引用url.js


//查看用户
export function $login(tell, password) { //lookOption是你要调用接口的名字，issuer,userId是传进来的参数
  return fetch({
    //api.Hallowmas 引用url.js里面的数据
    url: 'login/login',
    method: 'post', //请求方法
    data: {
      tell,
      password,
    }
  })
}

export function $sendcode(tell) {
  return fetch({
    url: 'login/sendcode',
    method: 'post', //请求方法
    data: {
      tell,
    }
  })
}
export function $register(code, tell, password) {
  return fetch({
    url: 'login/register',
    method: 'post', //请求方法
    data: {
      code,
      tell,
      password,
    }
  })
}
export function $savetell(code, tell) {
  return fetch({
    url: 'member/savetell',
    method: 'post', //请求方法
    data: {
      code,
      tell,
    }
  })
}

export function $savepass(code, password) {
  return fetch({
    url: 'member/savepass',
    method: 'post', //请求方法
    data: {
      code,
      password,
    }
  })
}
