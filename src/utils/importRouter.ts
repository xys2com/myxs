export function development (file: String) {
  return require(`@/views${file}.vue`).default // vue-loader at least v13.0.0+
}

export function production (file: String) {
  return (resolve: any) => require([`@/views${file}.vue`], resolve)
}
