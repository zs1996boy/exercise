// 国内版 例1


function set_WeixinShareInfo(shareTitle, shareDesc, shareImg, shareLink) {
    wx.ready(function () { //需在用户可能点击分享按钮前就先调用
        wx.updateAppMessageShareData({
            title: shareTitle, // 分享标题
            desc: shareDesc, // 分享描述
            link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: shareImg, // 分享图标
            success: function () {
                // 设置成功
            }
        });
        wx.updateTimelineShareData({
            title: shareTitle, // 分享标题
            link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: shareImg, // 分享图标
            success: function () {
                // 设置成功
            }
        })
    });
}

// 海外版 旧版  例2
// function set_WeixinShareInfo(shareTitle, shareDesc, shareImg, shareLink) {
//     wx.ready(function () {
//         wx.onMenuShareTimeline({
//             title: shareTitle,
//             link: shareLink,
//             imgUrl: shareImg,
//             success: function () {
//                 ShareSuccess();
//             },
//             cancel: function () {
//                 ShareCancel();
//             }
//         });
//         wx.onMenuShareAppMessage({
//             title: shareTitle,
//             desc: shareDesc,
//             link: shareLink,
//             imgUrl: shareImg,
//             type: 'link',
//             dataUrl: '',
//             success: function () {
//                 ShareSuccess();
//             },
//             cancel: function () {
//                 ShareCancel();
//             }
//         });
//     });
// }