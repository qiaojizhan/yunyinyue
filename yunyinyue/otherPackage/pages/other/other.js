// pages/other/other.js
import request from '../../../pages/until/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        person: { 
            username: 'qiao', 
            password: 123456, 
            age: 18
        },
        now: ''
    },

    // 获取用户唯一标识openId
    getOpenId() {
        // 获取登录凭证 并发送给服务器
        wx.login({
            success: async (res) => {
                console.log(res);
                let code = res.code;
                // 发送给服务器
                let result = await request('http://192.168.11.51:3000/getOpenId', {code});
                console.log(result);
                
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getNow();
    },

    async getNow() {
        let nowData = await request('https://www.fastmock.site/mock/a6c2fd447e1d8919c2b21a3d63be7e0b/test/api/user');
        this.setData({
            now: nowData.date.now
        })

        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})