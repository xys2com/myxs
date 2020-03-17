export default {
  // 导航选中效果
  SET_MENUACTIVE: (state: any, extra: any) => {
    state.menuActive = Number(extra)
  }
}
