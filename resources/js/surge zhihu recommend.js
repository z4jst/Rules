
var obj = JSON.parse(body); 

obj1=obj['data'];

obj1.forEach(function (element, index, array) {
    if(element['card_type']=="slot_event_card"||element.hasOwnProperty('ad')){      
       obj1.splice(index,1)  
    }

   });

obj['data']=obj1

JSON.stringify(obj); 



/* ************************************************************
 * 来源：https://github.com/onewayticket255/Surge-Script
 * http-response https://api.zhihu.com/topstory/recommend script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
 * hostname = api.zhihu.com
 *************************************************************/