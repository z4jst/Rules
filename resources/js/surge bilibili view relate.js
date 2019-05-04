var obj = JSON.parse(body); 

obj1=obj['data']['relates'];

obj1.forEach(function (element, index, array) {
   
    if(element.hasOwnProperty('is_ad')){      
       obj1.splice(index,1)  
    }

   });
obj['data']['relates']=obj1

JSON.stringify(obj);


/* ************************************************************
 * 来源：https://github.com/onewayticket255/Surge-Script
 * http-response https://app.bilibili.com/x/v2/view.access_key script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js
 * hostname = app.bilibili.com
 *************************************************************/
