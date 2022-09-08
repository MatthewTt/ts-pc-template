import { defineConfig, loadEnv } from 'vite'
import { createVitePlugins } from './build/plugin'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const isBuild = command === 'build' // 是否是生产环境
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    define: {
      'process.env': loadEnv(mode, process.cwd())
    },
    esbuild: {
      pure: ['console.log', 'debugger']
    },
    plugins: createVitePlugins(env, isBuild),
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    server: {
      host: '::'
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: (content, loaderContext) => {
            if (
              loaderContext.endsWith('assets/css/variables.scss') ||
              loaderContext.endsWith('assets/css/mixin.scss') ||
              loaderContext.endsWith('assets/css/index.scss')
            ) {
              return content
            }

            return `@import "@/assets/css/variables.scss";@import "@/assets/css/mixin.scss"; ${content}`
          }
        }
      }
    }
  })
}
