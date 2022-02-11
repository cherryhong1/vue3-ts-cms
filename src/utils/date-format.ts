import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

const DATE_FORMAT_DEFAULT = "YYYY-MM-DD HH:mm:ss"
export function utcDateFormat(
  value: string,
  format: string = DATE_FORMAT_DEFAULT
): string {
  return dayjs.utc(value).format(format)
}

export function timestampDateFormat(
  value: number,
  format: string = DATE_FORMAT_DEFAULT
): string {
  return dayjs.unix(value).format(format)
}
