(function($) {        
    $.alerts = {         
        alert: function(title, message, callback) {  
            if( title == null ) title = 'Alert';  
            $.alerts._show(title, message, null, 'alert', function(result) {  
                if( callback ) callback(result);  
            });  
        },  
           
        confirm: function(title, message, callback) {  
            if( title == null ) title = 'Confirm';  
            $.alerts._show(title, message, null, 'confirm', function(result) {  
                if( callback ) callback(result);  
            });  
        },  
               
          
        _show: function(title, msg, value, type, callback) {  
            
                    var _html = "";  
   
                    _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
                    _html += "<input style=\"margin-top: 5px; margin-left: 20px; width: 95%\" class=\"btnLine1\" type=\"button\" />";
                    _html += '<div style=\"margin-top: 5px;\" id="mb_msg"> <p><font size="2" face="arial">' + msg + '</font></p></div><div id="mb_btnbox">';
                  //  _html += "<input style=\"margin-left: 20px; width: 95%\" class=\"btnLine1\" type=\"button\" />";

                    if (type == "alert") {
                      _html += '<input id="mb_btn_ok" type="button" value="OK" />';  
                    }  
                    if (type == "confirm") {  
                      _html += '<input id="mb_btn_no" type="button" value="CANCEL" />';  
                      _html += '<input id="mb_btn_ok" type="button" value="OK" />';  
                    }  
                    _html += '</div></div>';  
                   
                    //必须先将_html添加到body，再设置Css样式  
                    $("body").append(_html); GenerateCss();  
           
            switch( type ) {  
                case 'alert':  
          
                    $("#mb_btn_ok").click( function() {  
                        $.alerts._hide();  
                        callback(true);  
                    });  
                    $("#mb_btn_ok").focus().keypress( function(e) {  
                        if( e.keyCode == 13 || e.keyCode == 27 ) $("#mb_btn_ok").trigger('click');  
                    });  
                break;  
                case 'confirm':  
                     
                    $("#mb_btn_ok").click( function() {  
                        $.alerts._hide();  
                        if( callback ) callback(true);  
                    });  
                    $("#mb_btn_no").click( function() {  
                        $.alerts._hide();  
                        if( callback ) callback(false);  
                    });  
                    $("#mb_btn_no").focus();  
                    $("#mb_btn_ok, #mb_btn_no").keypress( function(e) {  
                        if( e.keyCode == 13 ) $("#mb_btn_ok").trigger('click');  
                        if( e.keyCode == 27 ) $("#mb_btn_no").trigger('click');  
                    });  
                break;
            }  
        },  
        _hide: function() {  
             $("#mb_box,#mb_con").remove();  
        }  
    }  
    // Shortuct functions  
    myAlert = function(title, message, callback) {  
        $.alerts.alert(title, message, callback);  
    }  
       
    myConfirm = function(title, message, callback) {  
        $.alerts.confirm(title, message, callback);  
    };  
           
   
      
   //生成Css  
   var GenerateCss = function () {  
   
    $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',  
      filter: 'Alpha(opacity=60)', backgroundColor: 'black', top: '0', left: '0', opacity: '0.6',
	  borderRadius: '15px 15px 15px 15px', 
    });  
   
    $("#mb_con").css({ zIndex: '999999', width: '600px',height:'150px',position: 'fixed',  
      backgroundColor: 'White',  borderRadius: '15px 15px 15px 15px', 
    });  
   
    $("#mb_tit").css({ display: 'block', fontSize: '15px', color: '#444', padding: '10px 15px',  
      borderRadius: '15px 15px 15px 15px',  
      fontWeight: 'bold'  
    });  
   
    $("#mb_msg").css({ padding: '0px 0px 0px 30px', lineHeight: '20px', textAlign:'left', 
      fontSize: '10px' ,color:'#4c4c4c' 
    });  
   
    $("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',  
      border: '1px solid Gray', width: '18px', height: '18px', textAlign: 'center',  
      lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'  
    });  
   
    $("#mb_btnbox").css({ margin: '15px 0px 10px 400px', textAlign: 'center' });  
    $("#mb_btn_ok,#mb_btn_no").css({ width: '80px', height: '30px', color: 'white', border: 'none', borderRadius: '4px' });
    $("#mb_btn_ok").css({ backgroundColor: '#0382b7', fontFamily: '微软雅黑', fontWeight: 'bold' });
    $("#mb_btn_no").css({ backgroundColor: 'gray', marginRight: '40px' });  
   
   
    //右上角关闭按钮hover样式  
    $("#mb_ico").hover(function () {  
      $(this).css({ backgroundColor: 'Red', color: 'White' });  
    }, function () {  
      $(this).css({ backgroundColor: '#DDD', color: 'black' });  
    });  
   
    var _widht = document.documentElement.clientWidth; //屏幕宽  
    var _height = document.documentElement.clientHeight; //屏幕高  
   
    var boxWidth = $("#mb_con").width();  
    var boxHeight = $("#mb_con").height();  
   
    //让提示框居中  
    $("#mb_con").css({ top: (_height - boxHeight) / 1.5*0.2 + "px", left: (_widht - boxWidth) / 2 + "px" });  
  }  
   
  
})(jQuery);