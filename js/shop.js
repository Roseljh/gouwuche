;(function($){
	//类插件
	$.shop=function(opt){
		new Shop(opt);
	}
	function Shop(opt){
		var _this=this;
		//定义默认参数
		var _default={
			val:1,
			min:1,
			max:10,
			step:1,
			callBack:null
		}
		
		//扩展参数
		this.settings=$.extend({},_default,opt);
		//功能语句，创建html结构，书写css样式
		var html=$("<div class='jie'>"
						+"<div class='left'><input type='text' value="+this.settings.val+" readOnly /></div>"
						+"<div class='right'><span class='up' id='up'>+</span><span class='down' id='down'>-</span></div>"
					+"</div>");
			html.prependTo(".product");	
			var $input=html.find('input[type="text"]');//文本框的值
		//给按钮设置点击事件
		$("#up").on("click",function(){
			var oldtxt=$input.val()*1;
			var newtxt=oldtxt+_this.settings.step;
			if(newtxt>_this.settings.max) return false;
			$input.val(newtxt);	
			//总价
			//all($(this));	
			_this.settings.callBack && _this.settings.callBack.call(this,$input);//this代表up	
		})
		$("#down").on("click",function(){
			var oldtxt=$input.val()*1;
			var newtxt=oldtxt-_this.settings.step;
			if(newtxt<_this.settings.min) return false;
			$input.val(newtxt);
			//all($(this));
			_this.settings.callBack && _this.settings.callBack.call(this,$input);//this代表down	
		})
		//计算总价
		function all(btn){
			//单价*数量
			var n=$input.val();
			var price=btn.parents(".product").find(".price").text().substr(1);
			$(".all").text(n*price);
		} 
		/*var n=$(".left>input").val()*1;
		var price=$(".price").val().substr(1);
		var all=n*price;
		$(".all").html(all);*/


	}
})(jQuery)