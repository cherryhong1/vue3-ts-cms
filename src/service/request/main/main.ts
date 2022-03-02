import { IData } from "@/store/type"
import { IList } from "../type"
import hhRequest from "@/service"
export function getPageListData(url: string, queryInfo: any) {
  return hhRequest.post<IData<IList>>({
    url: url,
    data: queryInfo
  })
}
