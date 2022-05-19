import { IData } from "@/store/type"
import { IList } from "../type"
import hhRequest from "@/service"
export function getPageListData(url: string, queryInfo: any) {
  return hhRequest.post<IData<IList>>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return hhRequest.delete<IData<IList>>({ url })
}

export function createPageData(url: string, data: any) {
  return hhRequest.post<IData<IList>>({
    url,
    data
  })
}

export function editPageData(url: string, data: any) {
  return hhRequest.patch<IData<IList>>({
    url,
    data
  })
}
