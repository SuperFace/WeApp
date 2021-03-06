var app = getApp()
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function getMessage(id,obj){
    wx.request({
            url: app.globalData.ip+'/getMsg.php',
            data: {
              id:id
            },
            method: "POST",
            header: {
                // 'Content-Type': 'application/json'
            },
            success: function(res) {
                obj.setData({
                  message:res.data
              })
            },
            fail:function(err){
            console.log(err);
            }
        })
}
function getUser(obj){
   wx.request({
            url: app.globalData.ip+'/getUser.php',
            data: {},
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                obj.setData({
                    list:res.data
                })
            },
            fail:function(err){
            console.log(err);
            }
        })
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  getMessage: getMessage,
  getUser: getUser
}
