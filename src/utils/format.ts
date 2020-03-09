/*
 * @Description: In User Settings Edit
 * @Author: tan
 * @Date: 2019-08-26 14:25:20
 * @timestamp: 时间戳 毫秒计
 * @formatStr: 格式，如'Y-M-D h:m'
 */
export function format (timestamp = 0, formatStr = 'Y-M-D h:m:s') {
  let tp = new Date(timestamp)
  let Y = tp.getFullYear()
  Y = Y < 1900 ? Y + 1900 : Y
  let o: any = {
    M: tp.getMonth() + 1,
    D: tp.getDate(),
    h: tp.getHours(),
    m: tp.getMinutes(),
    s: tp.getSeconds()
  }
  for (let k in o) {
    o[k] = (o[k] + '').replace(/^(\d)$/, '0$1')
  }
  return formatStr.replace('Y', String(Y)).replace('M', String(o.M)).replace('D', String(o.D)).replace('h', String(o.h)).replace('m', String(o.m)).replace('s', String(o.s))
}

export function getReasonText (arr: any[] = []) {
  let reasonObj: any = {
    1: '注册',
    2: '购买',
    3: '分享',
    4: '邀新'
  }
  let text = ''
  arr.forEach((v: any) => {
    text += ' ' + reasonObj[v]
  })
  return text
}

export function getPlatformText (arr: any[] = []) {
  let obj: any = {
    1: 'Wap',
    2: 'Pc',
    3: 'App',
    4: '小程序'
  }
  let text = ''
  arr.forEach((v: any) => {
    text += ' ' + obj[v]
  })
  return text
}
