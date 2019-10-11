//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }, fetchMoney: function (e) {
    let that = this;
    var value = e.detail.value;
    if (value.indexOf('.') == 0) { //第一位就是 .
      value = '0' + value
    }
    value = value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
    value = value.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符
    value = value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
    value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
    if (value.indexOf(".") < 0 && value != "") {
      value = parseFloat(value);
    }
    that.data.inputValue = value;

    // if (parseFloat(value) < that.data.inputMin){
    //   let minLineStr = String(that.data.inputMin);
    //   this.data.inputValue = minLineStr;
    //   return {
    //     value: minLineStr,
    //     cursor: minLineStr.length
    //   }
    // } else if (parseFloat(value) > that.data.inputMax){
    //   let maxLineStr = String(that.data.inputMax);
    //   this.data.inputValue = maxLineStr;
    //   return {
    //     value: maxLineStr,
    //     cursor: maxLineStr.length
    //   }
    // }

    return {
      value: value,
      cursor: value.length
    }

  },
})
