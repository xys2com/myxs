/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 10:38:27
 * @LastEditTime: 2019-08-23 10:42:01
 * @LastEditors: Please set LastEditors
 */
export default {
  filters: {
    date (data: number) {
      if ((data as any) === '' || typeof data === 'undefined') return
      let date = new Date(Number(data) * 1000)
      let Y = date.getFullYear() + '-'
      let M =
        (date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1) + '-'
      let D = date.getDate()
      let h = Appendzero(date.getHours()) + ':'
      let m = date.getMinutes()
      return `${Y + M + Appendzero(D)}  ${h} ${Appendzero(m)}`
    }
  }
}

function Appendzero (obj: number): string | number {
  if (obj < 10) return '0' + '' + obj
  else return obj
}
