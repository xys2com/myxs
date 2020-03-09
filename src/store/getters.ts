export default {
  jurisdiction: (state: any) => (name = null) => {
    return state.jurisdiction.filter((item: any) => {
      return item.name === name
    })
  }
}
