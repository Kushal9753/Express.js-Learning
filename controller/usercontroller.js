import { usersList } from "../model/userModel.js"

export function handleUsers(req,resp){
  const usersData = usersList();
  resp.render('user',{users:usersData})
}