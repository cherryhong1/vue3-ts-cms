import { IData } from "@/store/type"
import { IList } from "../../type"
import hhRequest from "@/service"
enum systemApi {
  userList = "/users/list"
}
export function getUserList(data: any) {
  return hhRequest.post<IData<IList>>({
    url: systemApi.userList,
    data
  })
}
