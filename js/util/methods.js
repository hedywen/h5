define([
  'zepto',
  'exports'
], function($, exports) {
  /**
   * 获取页面url参数
   */
  exports.getUrlParam = function(name) {
    var url = window.location.href;
    if(url != null && url.indexOf("?") != -1){
        var url_param = url.split("?")[1];
        var url_param_arr = url_param.split("&");
        for(var i=0; i < url_param_arr.length; i++){
            var tempParam = url_param_arr[i];
            var paramName =  tempParam.split("=")[0];
            if(paramName == name){
                return tempParam.split("=")[1];
            }
        }
    }
    return null;
  }
});