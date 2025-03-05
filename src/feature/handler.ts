import { i18nAllStr } from './config'
import { regexMatchI18nStr } from './help'

/**
 * 获取当前浏览器url的国际化部分
 * @param defaultI18n 当前默认国际化语言
 */
export function getCurrentUrlI18n(defaultI18n = ''): string | undefined {
  if (typeof window !== 'undefined') {
    const url = window.location.href
    const urlObj = new URL(url)
    const pathname = urlObj.pathname

    const firstPathChunks = pathname.split('/')
    const firstPathChunkStr = firstPathChunks[1]
    if (firstPathChunkStr && regexMatchI18nStr(firstPathChunkStr)) {
      return firstPathChunkStr
    }
    else {
      return defaultI18n
    }
  }
  else {
    throw new TypeError('getCurrentUrlI18n只能在浏览器环境下使用')
  }
}

/**
 * 根据当前语言组装新的url
 */
export function assembleNewUrl(language: string, url: string) {
  if (language) {
    return `/${language}${url}`
  }
  else {
    return url
  }
}
