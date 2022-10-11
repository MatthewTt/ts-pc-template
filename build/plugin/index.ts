import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import { configCDNPlugin } from './configCDNPlugin'
import { PluginOption } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

export function createVitePlugins(env, isBuild: boolean) {
  const vitePlugins: PluginOption[] = [vue({ reactivityTransform: true })]
  // 按需加载
  vitePlugins.push(
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep']
        })
      ]
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    }),
    Icons({
      autoInstall: true
    })
  )
  vitePlugins.push(configCDNPlugin())
  // 打包分析
  vitePlugins.push(visualizer({ open: false }))
  if (isBuild) {
    // rollup-plugin-vite-imagemin

    // env.VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin())
    // rollup-plugin-gzip
    vitePlugins.push(viteCompression())
  }

  return vitePlugins
}
