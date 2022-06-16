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
  };

  /**
   * 
   */
   exports.canvasDataURL = function(path, obj, callback){
    var img = new Image();
    img.src = path;
    img.setAttribute("crossOrigin",'Anonymous')
    img.onload = function(){
        var that = this;
        // 默认按比例压缩
        var w = that.width,
            h = that.height,
            scale = w / h;
        w = obj.width || w;
        h = obj.height || (w / scale);
        var quality = 0.7;  // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量
        if(obj.quality && obj.quality <= 1 && obj.quality > 0){
            quality = obj.quality;
        }
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL('image/jpeg', quality);
        // 回调函数返回base64的值
        callback(base64);
    }
  }
});