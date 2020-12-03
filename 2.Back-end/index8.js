var express = require('express')
var app = express()
var mysql = require('mysql');
var moment = require('moment');
var qs = require('querystring');
var connection = mysql.createConnection({
    host: 'localhost',    // 호스트 주소
    user: 'root',           // mysql user
    password: '-------------',       // mysql password
    database: 'food',         // mysql 데이터베이스
    multipleStatements: true
});
connection.connect();

//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('data'));

app.get('/', function (request, res) {
    connection.query(`SELECT * from restaurant_info;`, 
    function (error, results, fields) {
    if (error) throw error;
    console.log(results[0].x);
    console.log(results[0].y);
    console.log(results[0].Authorization);
    console.log(results.length);
    
    var map = `<script src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=l7xx1bf6673124584d24a353b8d1cac5e4fb"></script>
            <script type="text/javascript">
            var map;
            var px;
            var lonlat;
            var vector_layer;
            var point;
            var pointFeature;
            // 페이지가 로딩이 된 후 호출하는 함수입니다.
        
            function initTmap() {
                // map 생성
                // Tmapv2.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
                map = new Tmapv2.Map("map_div",  // "map_div" : 지도가 표시될 div의 id
                    {
                        center: new Tmapv2.LatLng(${results[0].x},${results[0].y}), // 지도 초기 좌표
                        width: "100%", // map의 width 설정
                        height: "500px" // map의 height 설정
                    });
    
                    marker();
                    
            }`;

            var marker_icon
            var step;
            map = map + 'function marker() {';
            for (step = 0; step < results.length; step++) {

                if (results[step].Authorization == 1) {
                    marker_icon = 'icon: "/images/Auth_1.png"';
                } else{
                    marker_icon = 'icon: "/images/Auth_0.png"';
                };

                map = map + `
                var marker = new Tmapv2.Marker({
                    position: new Tmapv2.LatLng(${results[step].x},${results[step].y}), //Marker의 중심좌표 설정.
                    ${marker_icon},
                    map: map //Marker가 표시될 Map 설정..
                });

                marker.addListener("click", function (evt) {
                    location.href = "/detail/${results[step].RID}";
                })
                
                marker.addListener("touchend", function (evt) {
                    location.href = "/detail/${results[step].RID}";
                });`
            }

            map = map + '} </script> ';
            console.log(map);

    var template = `
    <!DOCTYPE html>
    <html>

    <head>
    <title>pass-ta</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=B612+Mono|Cabin:400,700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="fonts/icomoon/style.css">

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">

    <link rel="stylesheet" href="css/jquery.fancybox.min.css">

    <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">

    <link rel="stylesheet" href="css/aos.css">

    <link rel="stylesheet" href="css/style.css">

    ${map}

    </head>
    <body>

    <body onload="initTmap()">
    <div class="site-wrap">
    
        <div class="header-top">
        <div class="container">
            <div class="row align-items-center">
            <div class="col-12 col-lg-6 d-flex">
                <a href="/" class="site-logo">pass-ta</a>
            </div>
            </div>
        </div>
        
        </div>

    <div class="container">
                <div class="col-md-12">
                <form action="/search_process" class="search-form" method="post">
                <div class="d-flex">
                    <input type="search" name="name" class="form-control" placeholder="Search...">
                    <button type="submit" class="btn btn-secondary"><span class="icon-search"></span></button>
                </div>
                </form>
            </div>
    </div>

        <div class="site-section py-0">
        <div class="site-section">
            <div class="container">
            <div class="d-block">
            <div id="map_div"></div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
        </div>


        
        <div class="footer">
        <div class="container">
            

            <div class="row">
            <div class="col-12">
                <div class="copyright">
                    <p>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >2020_pass-ta</a>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        </p>
                </div>
            </div>
            </div>
        </div>
        </div>
        

    </div>
    <!-- .site-wrap -->


    <!-- loader -->
    <div id="loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#ff5e15"/></svg></div>

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery-migrate-3.0.1.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.stellar.min.js"></script>
    <script src="js/jquery.countdown.min.js"></script>
    <script src="js/bootstrap-datepicker.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/aos.js"></script>
    <script src="js/jquery.fancybox.min.js"></script>
    <script src="js/jquery.sticky.js"></script>




    <script src="js/main.js"></script>

    </body>

    </html>
    `;
    return res.send(template);
    });
});

app.post('/search_process', function (request, response) {
    var body = '';
    request.on('data', function (data) {
        body = body + data;
    });

    request.on('end', function () {
        var post = qs.parse(body);
        var name = post.name;
        response.redirect(`/search/${name}`);
    });
});

app.get('/search/:name', function (request, res) {
    var name = request.params.name;
    connection.query(`SELECT * from restaurant_info where Name = '${name}' ;`,
        function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);

            var map = `<script src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=l7xx1bf6673124584d24a353b8d1cac5e4fb"></script>
            <script type="text/javascript">
            var map;
            var px;
            var lonlat;
            var vector_layer;
            var point;
            var pointFeature;
            // 페이지가 로딩이 된 후 호출하는 함수입니다.
        
            function initTmap() {
                // map 생성
                // Tmapv2.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
                map = new Tmapv2.Map("map_div",  // "map_div" : 지도가 표시될 div의 id
                    {
                        center: new Tmapv2.LatLng(37.214423316775004,126.97781991183801), // 지도 초기 좌표
                        width: "100%", // map의 width 설정
                        height: "500px" // map의 height 설정
                    });
    
                    marker();
                    
            }`;

            var marker_icon
            var step;
            map = map + 'function marker() {';
            for (step = 0; step < results.length; step++) {
                if (results[0].Authorization == 1) {
                    marker_icon = 'icon: "/images/Auth_1.png"';
                } else {
                    marker_icon = 'icon: "/images/Auth_0.png"';
                };
                map = map + `var marker = new Tmapv2.Marker({
                    position: new Tmapv2.LatLng(${results[0].x},${results[0].y}), //Marker의 중심좌표 설정.
                    ${marker_icon},
                    map: map //Marker가 표시될 Map 설정..
                });

                var content = "<div style=' position: relative; border-bottom: 1px solid #dcdcdc; line-height: 18px; padding: 0 35px 2px 0;'>" +
				"<div style='font-size: 15px; line-height: 15px;'>" +
				"<span style='font-size: 15px; margin-left:2px;'>${results[0].Name}</a></span>" + "</div>" + "</div>";
                
                //Popup 객체 생성.
                infoWindow = new Tmapv2.InfoWindow({
                    position: new Tmapv2.LatLng(${results[0].x},${results[0].y}), //Popup 이 표출될 맵 좌표
                    content: content, //Popup 표시될 text
                    type: 2, //Popup의 type 설정.
                    map: map //Popup이 표시될 맵 객체
                });

                marker.addListener("click", function (evt) {
                    location.href = "/detail/${results[0].RID}";
                })
                
                marker.addListener("touchend", function (evt) {
                    location.href = "/detail/${results[0].RID}";
                });`
            }
            map = map + '} </script> ';
            console.log(map);

    var template = `
    <!DOCTYPE html>
    <html>

    <head>
    <title>pass-ta</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=B612+Mono|Cabin:400,700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="/fonts/icomoon/style.css">

    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/jquery-ui.css">
    <link rel="stylesheet" href="/css/owl.carousel.min.css">
    <link rel="stylesheet" href="/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="/css/owl.theme.default.min.css">

    <link rel="stylesheet" href="/css/jquery.fancybox.min.css">

    <link rel="stylesheet" href="/fonts/flaticon/font/flaticon.css">

    <link rel="stylesheet" href="/css/aos.css">

    <link rel="stylesheet" href="/css/style.css">
    
    ${map}

    </head>

    <body>

    <body onload="initTmap()">
    <div class="site-wrap">
    
        <div class="header-top">
        <div class="container">
            <div class="row align-items-center">
            <div class="col-12 col-lg-6 d-flex">
                <a href="index.html" class="site-logo">pass-ta</a>
            </div>
            </div>
        </div>
        
        </div>

    <div class="container">
                <div class="col-md-12">
                <form action="#" class="search-form">
                <div class="d-flex">
                    <input type="email" class="form-control" placeholder="Search...">
                    <button type="submit" class="btn btn-secondary" onclick="location.href='./index2.html' "><span class="icon-search"></span></button>
                </div>
                </form>
            </div>
            </div>

            <div class="site-section py-0">
            <div class="site-section">
                <div class="container">
                <div class="d-block">
                <div id="map_div"></div>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
            </div>

        
        <div class="footer">
        <div class="container">
            

            <div class="row">
            <div class="col-12">
                <div class="copyright">
                    <p>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >2020_pass-ta</a>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        </p>
                </div>
            </div>
            </div>
        </div>
        </div>
        

    </div>
    <!-- .site-wrap -->


    <!-- loader -->
    <div id="loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#ff5e15"/></svg></div>

    <script src="/js/jquery-3.3.1.min.js"></script>
    <script src="/js/jquery-migrate-3.0.1.min.js"></script>
    <script src="/js/jquery-ui.js"></script>
    <script src="/js/popper.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/owl.carousel.min.js"></script>
    <script src="/js/jquery.stellar.min.js"></script>
    <script src="/js/jquery.countdown.min.js"></script>
    <script src="/js/bootstrap-datepicker.min.js"></script>
    <script src="/js/jquery.easing.1.3.js"></script>
    <script src="/js/aos.js"></script>
    <script src="/js/jquery.fancybox.min.js"></script>
    <script src="/js/jquery.sticky.js"></script>




    <script src="/js/main.js"></script>

    </body>

    </html>
    `;
        return res.send(template);
    });

});


app.get('/detail/:rid', function (request, res) {
    var rid = request.params.rid;
    connection.query(/*'SELECT * FROM Table_info WHERE DATE(starttime)>= DATE_SUB(now(),INTERVAL 7 DAY)'*/
        `SELECT * FROM restaurant_info where rid =${rid};SELECT * FROM table_info where RID=${rid};`,
        function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);
            //console.log('The solution is: ', results[1]);

            var step;
            var Time = [];

            var moncount = 0;
            var tuecount = 0;
            var wencount = 0;
            var thrcount = 0;
            var fricount = 0;
            var satcount = 0;
            var suncount = 0;

            var monTime9 = 0;
            var monTime10 = 0;
            var monTime11 = 0;
            var monTime12 = 0;
            var monTime13 = 0;
            var monTime14 = 0;
            var monTime15 = 0;
            var monTime16 = 0;
            var monTime17 = 0;
            var monTime18 = 0;
            var monTime19 = 0;
            var monTime20 = 0;

            var tueTime9 = 0;
            var tueTime10 = 0;
            var tueTime11 = 0;
            var tueTime12 = 0;
            var tueTime13 = 0;
            var tueTime14 = 0;
            var tueTime15 = 0;
            var tueTime16 = 0;
            var tueTime17 = 0;
            var tueTime18 = 0;
            var tueTime19 = 0;
            var tueTime20 = 0;

            var wenTime9 = 0;
            var wenTime10 = 0;
            var wenTime11 = 0;
            var wenTime12 = 0;
            var wenTime13 = 0;
            var wenTime14 = 0;
            var wenTime15 = 0;
            var wenTime16 = 0;
            var wenTime17 = 0;
            var wenTime18 = 0;
            var wenTime19 = 0;
            var wenTime20 = 0;

            var thrTime9 = 0;
            var thrTime10 = 0;
            var thrTime11 = 0;
            var thrTime12 = 0;
            var thrTime13 = 0;
            var thrTime14 = 0;
            var thrTime15 = 0;
            var thrTime16 = 0;
            var thrTime17 = 0;
            var thrTime18 = 0;
            var thrTime19 = 0;
            var thrTime20 = 0;

            var friTime9 = 0;
            var friTime10 = 0;
            var friTime11 = 0;
            var friTime12 = 0;
            var friTime13 = 0;
            var friTime14 = 0;
            var friTime15 = 0;
            var friTime16 = 0;
            var friTime17 = 0;
            var friTime18 = 0;
            var friTime19 = 0;
            var friTime20 = 0;

            var satTime9 = 0;
            var satTime10 = 0;
            var satTime11 = 0;
            var satTime12 = 0;
            var satTime13 = 0;
            var satTime14 = 0;
            var satTime15 = 0;
            var satTime16 = 0;
            var satTime17 = 0;
            var satTime18 = 0;
            var satTime19 = 0;
            var satTime20 = 0;

            var sunTime9 = 0;
            var sunTime10 = 0;
            var sunTime11 = 0;
            var sunTime12 = 0;
            var sunTime13 = 0;
            var sunTime14 = 0;
            var sunTime15 = 0;
            var sunTime16 = 0;
            var sunTime17 = 0;
            var sunTime18 = 0;
            var sunTime19 = 0;
            var sunTime20 = 0;


            for (step = 0; step < results[1].length; step++) {
                Time[step] = moment(results[1][step].starttime).format("HH");
            }

            //mon
            for (step = 0; step < results[1].length; step++) {
                if (results[1][step].week == 0 && Time[step] == 9) {
                    moncount++
                    monTime9++
                } else if (results[1][step].week == 0 && Time[step] == 10) {
                    moncount++
                    monTime10++
                } else if (results[1][step].week == 0 && Time[step] == 11) {
                    moncount++
                    monTime11++
                } else if (results[1][step].week == 0 && Time[step] == 12) {
                    moncount++
                    monTime12++
                } else if (results[1][step].week == 0 && Time[step] == 13) {
                    moncount++
                    monTime13++
                } else if (results[1][step].week == 0 && Time[step] == 14) {
                    moncount++
                    monTime14++
                } else if (results[1][step].week == 0 && Time[step] == 15) {
                    moncount++
                    monTime15++
                } else if (results[1][step].week == 0 && Time[step] == 16) {
                    moncount++
                    monTime16++
                } else if (results[1][step].week == 0 && Time[step] == 17) {
                    moncount++
                    monTime17++
                } else if (results[1][step].week == 0 && Time[step] == 18) {
                    moncount++
                    monTime18++
                } else if (results[1][step].week == 0 && Time[step] == 19) {
                    moncount++
                    monTime19++
                } else if (results[1][step].week == 0 && Time[step] == 20) {
                    moncount++
                    monTime20++
                }
            }

            //tue
            for (step = 0; step < results[1].length; step++) {
                if (results[1][step].week == 1 && Time[step] == 9) {
                    tuecount++
                    tueTime9++
                } else if (results[1][step].week == 1 && Time[step] == 10) {
                    tuecount++
                    tueTime10++
                } else if (results[1][step].week == 1 && Time[step] == 11) {
                    tuecount++
                    tueTime11++
                } else if (results[1][step].week == 1 && Time[step] == 12) {
                    tuecount++
                    tueTime12++
                } else if (results[1][step].week == 1 && Time[step] == 13) {
                    tuecount++
                    tueTime13++
                } else if (results[1][step].week == 1 && Time[step] == 14) {
                    tuecount++
                    tueTime14++
                } else if (results[1][step].week == 1 && Time[step] == 15) {
                    tuecount++
                    tueTime15++
                } else if (results[1][step].week == 1 && Time[step] == 16) {
                    tuecount++
                    tueTime16++
                } else if (results[1][step].week == 1 && Time[step] == 17) {
                    tuecount++
                    tueTime17++
                } else if (results[1][step].week == 1 && Time[step] == 18) {
                    tuecount++
                    tueTime18++
                } else if (results[1][step].week == 1 && Time[step] == 19) {
                    tuecount++
                    tueTime19++
                } else if (results[1][step].week == 1 && Time[step] == 20) {
                    tuecount++
                    tueTime20++
                }
            }

            //wen
            for (step = 0; step < results[1].length; step++) {
                if (results[1][step].week == 2 && Time[step] == 9) {
                    wenTime9++
                    wencount++
                } else if (results[1][step].week == 2 && Time[step] == 10) {
                    wenTime10++
                    wencount++
                } else if (results[1][step].week == 2 && Time[step] == 11) {
                    wenTime11++
                    wencount++
                } else if (results[1][step].week == 2 && Time[step] == 12) {
                    wenTime12++
                    wencount++
                } else if (results[1][step].week == 2 && Time[step] == 13) {
                    wenTime13++
                    wencount++
                } else if (results[1][step].week == 2 && Time[step] == 14) {
                    wenTime14++
                    wencount++
                } else if (results[1][step].week == 2 && Time[step] == 15) {
                    wenTime15++
                    wencount++
                } else if (results[1][step].week == 2 && Time[step] == 16) {
                    wenTime16++
                    wencount++
                } else if (results[1][step].week == 2 && Time[step] == 17) {
                    wenTime17++
                    wencount++
                } else if (results[1][step].week == 2 && Time[step] == 18) {
                    wenTime18++
                    wencount++
                } else if (results[1][step].week == 2 && Time[step] == 19) {
                    wenTime19++
                    wencount++
                } else if (results[1][step].week == 2 && Time[step] == 20) {
                    wenTime20++
                    wencount++
                }
            }

            //thr
            for (step = 0; step < results[1].length; step++) {
                if (results[1][step].week == 3 && Time[step] == 9) {
                    thrcount++
                    thrTime9++
                } else if (results[1][step].week == 3 && Time[step] == 10) {
                    thrcount++
                    thrTime10++
                } else if (results[1][step].week == 3 && Time[step] == 11) {
                    thrcount++
                    thrTime11++
                } else if (results[1][step].week == 3 && Time[step] == 12) {
                    thrcount++
                    thrTime12++
                } else if (results[1][step].week == 3 && Time[step] == 13) {
                    thrcount++
                    thrTime13++
                } else if (results[1][step].week == 3 && Time[step] == 14) {
                    thrcount++
                    thrTime14++
                } else if (results[1][step].week == 3 && Time[step] == 15) {
                    thrcount++
                    thrTime15++
                } else if (results[1][step].week == 3 && Time[step] == 16) {
                    thrcount++
                    thrTime16++
                } else if (results[1][step].week == 3 && Time[step] == 17) {
                    thrcount++
                    thrTime17++
                } else if (results[1][step].week == 3 && Time[step] == 18) {
                    thrcount++
                    thrTime18++
                } else if (results[1][step].week == 3 && Time[step] == 19) {
                    thrcount++
                    thrTime19++
                } else if (results[1][step].week == 3 && Time[step] == 20) {
                    thrcount++
                    thrTime20++
                }
            }

            //fri
            for (step = 0; step < results[1].length; step++) {
                if (results[1][step].week == 4 && Time[step] == 9) {
                    fricount++
                    friTime9++
                } else if (results[1][step].week == 4 && Time[step] == 10) {
                    fricount++
                    friTime10++
                } else if (results[1][step].week == 4 && Time[step] == 11) {
                    fricount++
                    friTime11++
                } else if (results[1][step].week == 4 && Time[step] == 12) {
                    fricount++
                    friTime12++
                } else if (results[1][step].week == 4 && Time[step] == 13) {
                    fricount++
                    friTime13++
                } else if (results[1][step].week == 4 && Time[step] == 14) {
                    fricount++
                    friTime14++
                } else if (results[1][step].week == 4 && Time[step] == 15) {
                    fricount++
                    friTime15++
                } else if (results[1][step].week == 4 && Time[step] == 16) {
                    fricount++
                    friTime16++
                } else if (results[1][step].week == 4 && Time[step] == 17) {
                    fricount++
                    friTime17++
                } else if (results[1][step].week == 4 && Time[step] == 18) {
                    fricount++
                    friTime18++
                } else if (results[1][step].week == 4 && Time[step] == 19) {
                    fricount++
                    friTime19++
                } else if (results[1][step].week == 4 && Time[step] == 20) {
                    fricount++
                    friTime20++
                }
            }

            //sat
            for (step = 0; step < results[1].length; step++) {
                if (results[1][step].week == 5 && Time[step] == 9) {
                    satcount++
                    satTime9++
                } else if (results[1][step].week == 5 && Time[step] == 10) {
                    satcount++
                    satTime10++
                } else if (results[1][step].week == 5 && Time[step] == 11) {
                    satcount++
                    satTime11++
                } else if (results[1][step].week == 5 && Time[step] == 12) {
                    satcount++
                    satTime12++
                } else if (results[1][step].week == 5 && Time[step] == 13) {
                    satcount++
                    satTime13++
                } else if (results[1][step].week == 5 && Time[step] == 14) {
                    satcount++
                    satTime14++
                } else if (results[1][step].week == 5 && Time[step] == 15) {
                    satcount++
                    satTime15++
                } else if (results[1][step].week == 5 && Time[step] == 16) {
                    satcount++
                    satTime16++
                } else if (results[1][step].week == 5 && Time[step] == 17) {
                    satcount++
                    satTime17++
                } else if (results[1][step].week == 5 && Time[step] == 18) {
                    satcount++
                    satTime18++
                } else if (results[1][step].week == 5 && Time[step] == 19) {
                    satcount++
                    satTime19++
                } else if (results[1][step].week == 5 && Time[step] == 20) {
                    satcount++
                    satTime20++
                }
            }

            //sun
            for (step = 0; step < results[1].length; step++) {
                if (results[1][step].week == 6 && Time[step] == 9) {
                    suncount++
                    sunTime9++
                } else if (results[1][step].week == 6 && Time[step] == 10) {
                    suncount++
                    sunTime10++
                } else if (results[1][step].week == 6 && Time[step] == 11) {
                    suncount++
                    sunTime11++
                } else if (results[1][step].week == 6 && Time[step] == 12) {
                    suncount++
                    sunTime12++
                } else if (results[1][step].week == 6 && Time[step] == 13) {
                    suncount++
                    sunTime13++
                } else if (results[1][step].week == 6 && Time[step] == 14) {
                    suncount++
                    sunTime14++
                } else if (results[1][step].week == 6 && Time[step] == 15) {
                    suncount++
                    sunTime15++
                } else if (results[1][step].week == 6 && Time[step] == 16) {
                    suncount++
                    sunTime16++
                } else if (results[1][step].week == 6 && Time[step] == 17) {
                    suncount++
                    sunTime17++
                } else if (results[1][step].week == 6 && Time[step] == 18) {
                    suncount++
                    sunTime18++
                } else if (results[1][step].week == 6 && Time[step] == 19) {
                    suncount++
                    sunTime19++
                } else if (results[1][step].week == 6 && Time[step] == 20) {
                    suncount++
                    sunTime20++
                }
            }
            /*식당 정보 받아오기*/
            //console.log('The solution is: ', results[0]);
            var name = results[0][0].Name; // 식당 이름
            var Table_Amount = results[0][0].Table_Amount; // 테이블 수
            var x = results[0][0].x; // 식당 x 좌표
            var y = results[0][0].y; // 식당 y 좌표
            var auth = results[0][0].Authorization; // 안심 식당 인증
            var Table_ing = 0; // 사용 중인 테이블 outtime 없는거
            var Table_set; // 남은 좌석 수
            var marker_icon // 안심 식당 인증 구분 마커
            var current; // 사용 테이블 수/총 테이블 수
            var OXTime = []; //최근 소독 시간

            for(step = 0; step < results[1].length; step++){
                if(results[1][step].OX == 1){
                    OXTime = results[1][step].outtime;
                }
            }
            

            for(step=0; step < results[1].length; step++){
                if(results[1][step].outtime == undefined){
                    Table_ing++
                }
                Table_set = (Table_Amount-Table_ing);
            }

            current = Table_set + '/' + Table_Amount;


            if(auth == 1){
                marker_icon = 'icon: "/images/Auth_1.png"';
            }else{
                marker_icon = 'icon: "/images/Auth_0.png"';
            }

            console.log(OXTime);
            console.log(current);
            console.log(Table_set);
            console.log(name);

    var template = `
    <!DOCTYPE html>
    <html lang="en" >
    <head>
    <title>pass-ta</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=B612+Mono|Cabin:400,700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="/fonts/icomoon/style.css">

    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/jquery-ui.css">
    <link rel="stylesheet" href="/css/owl.carousel.min.css">
    <link rel="stylesheet" href="/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="/css/owl.theme.default.min.css">

    <link rel="stylesheet" href="/css/jquery.fancybox.min.css">

    <link rel="stylesheet" href="/fonts/flaticon/font/flaticon.css">

    <link rel="stylesheet" href="/css/aos.css">

    <link rel="stylesheet" href="/css/style.css">
    
    <!--<link rel="stylesheet" href="./style.css">-->
    <script src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=l7xx1bf6673124584d24a353b8d1cac5e4fb"></script>
	<script type="text/javascript">
		var map;
		var px;
		var lonlat;
		var vector_layer;
		var point;
		var pointFeature;
		// 페이지가 로딩이 된 후 호출하는 함수입니다.

		function initTmap() {
			// map 생성
			// Tmapv2.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
			map = new Tmapv2.Map("map_div",  // "map_div" : 지도가 표시될 div의 id
				{
					center: new Tmapv2.LatLng(${x}, ${y}), // 지도 초기 좌표
					width: "100%", // map의 width 설정
					height: "500px" // map의 height 설정
				});

				marker();
				
		}

		function marker() {
			var marker = new Tmapv2.Marker({
				position: new Tmapv2.LatLng(${x}, ${y}), //Marker의 중심좌표 설정.
                map: map,//Marker가 표시될 Map 설정..
                ${marker_icon}
			});

			marker.addListener("click", function (evt) {
				location.href = "/";
            })

            marker.addListener("touchend", function (evt) {
                location.href = "/";
            });
		}


	</script>

    </head>
    <body onload="initTmap()">

    <div class="site-wrap">

    <div class="header-top">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6 d-flex">
            <a href="index.html" class="site-logo">pass-ta</a>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex align-items-start mt-10 mb-8">
    
      <main class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
                <div id="map_div"></div>
            </div>
          </div>
        </div>
  
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body pb-0">
                <div class="d-flex align-items-center align-items-md-start justify-content-between mb-4">
                  <h2 class="text-md mb-0">Marketing campaigns</h2>
                </div> <!-- end of d-flex -->
              </div> <!-- end of card-body -->
              <div class="table-responsive">
                <table class="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th style="vertical-align:baseline; padding:8px 3px; text-align:center">상호명</th>
                      <th style="vertical-align:baseline; padding:8px 3px; text-align:center">최근 소독 시간</th>
                      <th style="vertical-align:baseline; padding:8px 3px; text-align:center">사용 가능한 좌석</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="text-align:center; padding:8px 3px">${name}</td>
                      <td style="text-align:center; padding:8px 3px">
                        <span class="badge badge-secondary">${OXTime}</span> 
                        <!--초록색 배경 -success 입력-->
                      </td>
                      <td style="text-align:center; padding:8px 3px">총 ${current}석</td>
                    </tr>
                  </tbody>
                </table>
              </div> <!-- end of table-responsive -->
            </div> <!-- end of card -->
          </div> <!-- end of col -->
        </div> <!-- end of row -->
  
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/modules/export-data.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>

        
        <div class="row">
          <div class="col-md-12">
            <div class="row h-100">

            <!--그래프 부분-->
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body">
                  <figure class="highcharts-figure">
                    <div id="container"></div>
                  </figure>


                  <script  type="text/javascript">
                    Highcharts.chart('container', {
                      chart: {
                        type: 'line'
                      },
                      title: {
                        text: '요일별 방문 지수'
                      },
                      subtitle: {
                        text: '최근 일주일 지표'
                      },
                      xAxis: {
                        categories: ['월', '화', '수', '목', '금', '토', '일']
                      },
                      yAxis: {
                        title: {
                          text: '방문 테이블 수'
                        }
                      },
                      plotOptions: {
                        line: {
                          dataLabels: {
                            enabled: true
                          },
                          enableMouseTracking: false
                        }
                      },
                      series: [{
                        name: '방문 테이블 수',
                        data: [${moncount}, ${tuecount}, ${wencount}, ${thrcount}, ${fricount}, ${satcount}, ${suncount}]
                      }]
                    });
                    </script>

                </div> <!-- end of card-body -->
              </div> <!-- end of card -->
            </div> <!-- end of col -->

            
            <!-- 그래프 부분. Charts.js 참고 --> 
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body">
                <select id="mySelect">
                    <option value="" selected disabled hidden >선택해주세요.</option>
                    <option value="0">월</option>
                    <option value="1">화</option>
                    <option value="2">수</option>
                    <option value="3">목</option>
                    <option value="4">금</option>
                    <option value="5">토</option>
                    <option value="6">일</option>
                </select>
                  <figure class="highcharts-figure">
                    <div id="container2"></div>
                  </figure>
                  <!-- partial -->
                  <script  type="text/javascript">
                    const chart = Highcharts.chart('container2', {
                        xAxis: {
                            categories: ['9~10', '10~11', '11~12', '12~13', '13~14', '14~15', '15~16', '16~17', '17~18', '18~19', '19~20', '20~21']
                        },
                        yAxis: {
                            title: {
                                text: '방문 테이블 수'
                            }
                        },
                        plotOptions: {
                            series: {
                                point: {
                                }
                            }
                        },
                        title: {
                        text: '요일별 방문 지수'
                        },
                        series: [{
                            data: [${monTime9}, ${monTime10}, ${monTime11}, ${monTime12}, ${monTime13}, ${monTime14}, ${monTime15}, ${monTime16}, ${monTime17}, ${monTime18}, ${monTime19}, ${monTime20}]
                        }]
                    });
                
                    document.getElementById("mySelect").onchange = function() { myFunction() };
                    function myFunction() {
                    var x = document.getElementById("mySelect").value;
                    if (x == 0){
                        const series = chart.series[0];
                        if (series.data.length) {
                            chart.series[0].remove();
                        };
                        chart.addSeries({
                            data: [${monTime9}, ${monTime10}, ${monTime11}, ${monTime12}, ${monTime13}, ${monTime14}, ${monTime15}, ${monTime16}, ${monTime17}, ${monTime18}, ${monTime19}, ${monTime20}]
                        });
                    }else if (x == 1){
                        const series = chart.series[0];
                        if (series.data.length) {
                            chart.series[0].remove();
                        };
                        chart.addSeries({   
                            data: [${tueTime9}, ${tueTime10}, ${tueTime11}, ${tueTime12}, ${tueTime13}, ${tueTime14}, ${tueTime15}, ${tueTime16}, ${tueTime17}, ${tueTime18}, ${tueTime19}, ${tueTime20}]
                        });
                    }else if (x == 2){
                        const series = chart.series[0];
                        if (series.data.length) {
                            chart.series[0].remove();
                        };
                        chart.addSeries({
                            data: [${wenTime9}, ${wenTime10}, ${wenTime11}, ${wenTime12}, ${wenTime13}, ${wenTime14}, ${wenTime15}, ${wenTime16}, ${wenTime17}, ${wenTime18}, ${wenTime19}, ${wenTime20}]
                        });
                    }else if (x == 3){
                        const series = chart.series[0];
                        if (series.data.length) {
                            chart.series[0].remove();
                        };
                        chart.addSeries({
                            data: [${thrTime9}, ${thrTime10}, ${thrTime11}, ${thrTime12}, ${thrTime13}, ${thrTime14}, ${thrTime15}, ${thrTime16}, ${thrTime17}, ${thrTime18}, ${thrTime19}, ${thrTime20}]
                        });
                    }else if (x == 4){
                        const series = chart.series[0];
                        if (series.data.length) {
                            chart.series[0].remove();
                        };
                        chart.addSeries({
                            data: [${friTime9}, ${friTime10}, ${friTime11}, ${friTime12}, ${friTime13}, ${friTime14}, ${friTime15}, ${friTime16}, ${friTime17}, ${friTime18}, ${friTime19}, ${friTime20}]
                        });
                    }else if (x == 5){
                        const series = chart.series[0];
                        if (series.data.length) {
                            chart.series[0].remove();
                        };
                        chart.addSeries({
                            data: [${satTime9}, ${satTime10}, ${satTime11}, ${satTime12}, ${satTime13}, ${satTime14}, ${satTime15}, ${satTime16}, ${satTime17}, ${satTime18}, ${satTime19}, ${satTime20}]
                        });
                    }else if (x == 6){
                        const series = chart.series[0];
                        if (series.data.length) {
                            chart.series[0].remove();
                        };
                        chart.addSeries({
                            data: [${sunTime9}, ${sunTime10}, ${sunTime11}, ${sunTime12}, ${sunTime13}, ${sunTime14}, ${sunTime15}, ${sunTime16}, ${sunTime17}, ${sunTime18}, ${sunTime19}, ${sunTime20}]
                        });
                    };
                    }
                    
                    </script>
                </div> <!-- end of card-body -->
              </div> <!-- end of card -->
            </div> <!-- end of col -->

          </div> <!-- end of row -->
        </div> <!-- end of col -->

        </div>

        <footer class="row mt-3">
          <div class="col">
            <p class="mb-0 text-secondary">&copy; 2019 Alex Andonie. All rights reserved.</p>
          </div>
        </footer>
      </main> <!-- end of container-fluid -->
    </div>
  <!-- end of d-flex -->


    </body>
    </html>

    `
            return res.send(template);
        });
    //connection.end();

});

app.get('/page', function (req, res) {
    return res.send('/page');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});