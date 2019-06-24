let body = $response.body
body = JSON.parse(body)
body.advertisement_num = 0;
body.advertisement_info = [];
body = JSON.stringify(body);
$done({body})

/*****************************************************************

脚本来源：https://t.me/SurgeAdBlock/15

[Script]

# 去微信公众号文章底部广告
http-response ^https?://mp\.weixin\.qq\.com/mp/getappmsgad\?f= script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/js/wechat.js,requires-body=true

*****************************************************************/