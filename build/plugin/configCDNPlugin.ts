import viteCDNImport from 'vite-plugin-cdn-import'

export function configCDNPlugin() {
  return viteCDNImport({
    modules: []
  })
}
