import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
export default createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
  symbolId: 'icon-[name]'
})
