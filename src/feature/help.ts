import { i18nAllStr } from './config'

/**
 * 使用正则去匹配i18nAllStr里的国际化字符串
 */
export function regexMatchI18nStr(str: string): string {
  const i18nRegex = new RegExp(`(${i18nAllStr.join('|')})$`)
  const match = str.match(i18nRegex)
  if (match) {
    return match[0]
  }
  return ''
}
