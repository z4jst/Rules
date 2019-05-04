var obj = JSON.parse(body); 

obj['sub_webs'].splice(0,1)
obj['sub_webs'].splice(1,1)

JSON.stringify(obj);


/* ************************************************************
 * 来源：https://github.com/onewayticket255/Surge-Script
 * http-response https://api.zhihu.com/market/header script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20market.js
 * hostname = api.zhihu.com
 *************************************************************/