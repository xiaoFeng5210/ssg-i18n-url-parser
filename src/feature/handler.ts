import { i18nAllStr } from './config'

/**
 * 获取当前浏览器url的国际化部分
 */
export function getCurrentUrlI18n(defaultI18n = 'zh') {
  if (typeof window !== 'undefined') {
    const url = window.location.href
    const urlObj = new URL(url)
    const pathname = urlObj.pathname

    const firstPathChunks = pathname.split('/')
    const firstPathChunkStr = firstPathChunks[1]
    if (firstPathChunkStr) {

    }
    else {
      return defaultI18n
    }
  }
  else {
    throw new TypeError('getCurrentUrlI18n只能在浏览器环境下使用')
  }
}
