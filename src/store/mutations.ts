import { Message } from 'element-ui'
export default {
  // 统一提示错误请求
  SET_HTTP_ERR: (state: any, extra: any) => {
    //  防止短时间重复提示
    if (state.httpErr.status_code !== extra.status_code) {
      Message({
        type: 'error',
        duration: 1500,
        message: extra.message
      })
    } else if (extra.time - state.httpErr.time > 200) {
      Message({
        type: 'error',
        message: extra.message,
        duration: 1500
      })
    }
    state.httpErr = extra
  },
  // 递增请求
  SET_CANCEL_LIST: (state: any, extra: any) => {
    state.cancelList = [...state.cancelList, extra]
  },
  // 筛选未完成的请求
  SET_RESOLUTE_CANCEL: (state: any, extra: any) => {
    state.cancelList = extra
  },
  // 导航选中效果
  SET_MENUACTIVE: (state: any, extra: any) => {
    state.menuActive = Number(extra)
  },
  // 全局loadding
  SET_LOADING: (state: any, extra: any) => {
    state.loadingState = extra
  }
}
