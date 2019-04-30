var obj = JSON.parse(body); 

obj['data']['sections'].splice(0,1)

obj['data']['sections'][0]['items'].splice(3,1)
obj['data']['sections'][0]['items'].splice(4,3)
obj['data']['sections'][1]['items'].splice(1,3)
JSON.stringify(obj); 


/* ************************************************************
 * 来源：https://github.com/onewayticket255/Surge-Script
 * http-response https://app.bilibili.com/x/v2/account/mine script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js
 * hostname = api.bilibili.com
 *************************************************************/