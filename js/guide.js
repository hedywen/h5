requirejs.config({
  baseUrl: './',
  paths: {
    "zepto": "lib/zepto.min",
  },
});

require([
  'zepto'
], function($){
  $(function(){
    $('body').on('click', '.item', function(){
      if(!$(this).data('order')) return;
      window.location.href = `./views/guide/detail.html?order=${ $(this).data('order') }`;
    })
  })
})