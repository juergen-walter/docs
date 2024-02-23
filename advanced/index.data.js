import { basename } from 'node:path'
import { createContentLoader } from 'vitepress'
import filter from '../.vitepress/theme/components/indexFilter.js'

const basePath = basename(__dirname)
export default createContentLoader([
    `**/${basePath}/*.md`,
    `**/guides/security/*.md`,
    `**/guides/data-privacy/*.md`
  ], {
  transform(rawData) {
    return filter(rawData, `/${basePath}/`)
  }
})
