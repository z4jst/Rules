const table = {
    url: "https://www.cordcloud.fun/auth/login",
    header: {
         "Content-Type": "application/json"
    },
    body: {
        "email": "",
        "passwd": "",
        "rumber-me": "week"
    }
}

$httpClient.post(table, function (error, response, data) {
    if (error) {
        console.log(error);
        $notification.post('签到', error, "");
        $done();
    } else {
        $httpClient.post("https://www.cordcloud.fun/user/checkin", function (error, response, data) {
            var checkinMsg = JSON.parse(data).msg
            $httpClient.get("https://www.cordcloud.fun/user", function (error, response, data) {
                var usedData = data.match(/(已用\s\d.+?%|>已用(里程|流量)|>\s已用流量)[^B]+/)
                if (usedData) {
                    usedData = usedData[0].match(/\d\S*(K|G|M|T)/)
                    var restData = data.match(/(剩余\s\d.+?%|>剩余(里程|流量)|>\s剩余流量)[^B]+/)
                    restData = restData[0].match(/\d\S*(K|G|M|T)/)
                    //var allData = checkinMsg + "已用流量：" + usedData[0] + "B" + "剩余流量：" + restData[0] + "B"
                    $notification.post('CordCloud', checkinMsg, "已用流量：" + usedData[0] + "B" + "\n剩余流量：" + restData[0] + "B");
                }
                $done();
            });
        });
    }
}
);
