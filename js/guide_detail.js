requirejs.config({
  baseUrl: '../../',
  paths: {
    "zepto": "lib/zepto.min",
    "methods": "js/util/methods"
  },
});

require([
  "zepto",
  "methods"
], function($, methods){
  $(function(){
    let details = [
      {title: '注册登录', order: '1'},
      {title: '实名认证', order: '2'},
      {title: '扫码收款', order: '3'},
      {title: '扫一扫收款', order: '4'},
      {title: '快捷收款', order: '5'},
      {title: '银联二维码收款', order: '6'},
      {title: '闪付收款', order: '7'},
      {title: '交易记录', order: '8'},
      {title: '奖励提现', order: '9'},
      {title: '结算费率', order: '10'},
      {title: '邀请注册', order: '11'},
      {title: '我的商户', order: '12'},
      {title: '我的收益', order: '13'}
    ];
    let $img = $('#guide-detail');
    let order =  methods.getUrlParam('order');
    document.title = details.filter( item => item.order == order)[0].title;
    $img.prop('src', `../../images/guide/guide_detail${order}.png`).css('display','block');
  })
})