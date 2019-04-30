
var obj = JSON.parse(body); 

obj1=obj['data']['items'];

obj1.forEach(function (element, index, array) {
   
    if(element.hasOwnProperty('ad_info')||element.hasOwnProperty('banner_item')||element['card_type']=="three_item_h_v2"){      
       obj1.splice(index,1)  
    }

   });

obj['data']['items']=obj1

JSON.stringify(obj);


/* ************************************************************
 * 来源：https://github.com/onewayticket255/Surge-Script
 * http-response https://app.bilibili.com/x/v2/feed script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js
 * hostname = app.bilibili.com
 *************************************************************/
