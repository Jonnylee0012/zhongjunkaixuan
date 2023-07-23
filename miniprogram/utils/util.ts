import { IMAGE_PATH } from "../config/global-config"

export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}


// 判断用户是否登录
export const isLogin = () => {
  let accessToken = wx.getStorageSync('access_token')
  return accessToken !== '' && accessToken !== null && accessToken !== undefined
}

//返回缩略图的链接
export const setThumbImageUrl = (id: string) => {
  //https://kaixuansuiyue.app.canglandata.com/assets/debd03b9-e4e8-439a-9f46-d01bdfdca768?fit=cover&width=200&height=200&quality=80

  return IMAGE_PATH + id + '?fit=cover&width=200&height=200&quality=80'

}
