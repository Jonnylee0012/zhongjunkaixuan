export function fetchRegister(parms:any) {
  console.log(parms)
  wx.request({
    url:'',
    method:'POST',
    success: (res:any) => {
      console.log(res.data)
      return res.data
    }
  })
}