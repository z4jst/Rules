
var obj = JSON.parse(body);

obj1=obj['data']['tab'];
obj2=obj['data']['bottom'];

obj2.forEach(function (element, index, array) {
    if(element['pos']==4){      
       obj2.splice(index,1)  
    }

   });
obj1.forEach(function (element, index, array) {
  
    if(element['id']!=99&&element['id']!=101&&element['id']!=98){      
       obj1.splice(index,1)  
    }

   });

obj['data']['tab']=obj1
obj['data']['bottom']=obj2
delete obj['data']['top']
JSON.stringify(obj); 


/* ************************************************************
 * 来源：https://github.com/onewayticket255/Surge-Script
 * http-response https://app.bilibili.com/x/resource/show/tab script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js
 * hostname = app.bilibili.com
 *************************************************************/