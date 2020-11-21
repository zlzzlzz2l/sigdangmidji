var express = require('express')
var app = express()
var mysql = require('mysql');
var moment =require('moment');
var connection = mysql.createConnection({
    host: 'localhost',    // 호스트 주소
    user: 'root',           // mysql user
    password: '------',       // mysql password
    database: 'food'         // mysql 데이터베이스
});
connection.connect();
//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('data'));

app.get('/', function (req, res) {
    connection.query('SELECT * FROM Table_info WHERE DATE(starttime)>= DATE_SUB(now(),INTERVAL 7 DAY)',
        function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);

            var moncount = 0;
            var tuecount = 0;
            var wencount = 0;
            var thrcount = 0;
            var fricount = 0;
            var satcount = 0;
            var suncount = 0;

            var step;
            for (step = 0; step < results.length; step++) {
                //console.log(results[step].week);
                if (results[step].week == 0) {
                    moncount++
                } else if (results[step].week == 1) {
                    tuecount++
                } else if (results[step].week == 2) {
                    wencount++
                } else if (results[step].week == 3) {
                    thrcount++
                } else if (results[step].week == 4) {
                    fricount++
                } else if (results[step].week == 5) {
                    satcount++
                } else if (results[step].week == 6) {
                    suncount++
                }
            }

            //


            var step;
            var Time = [];

            var Time9 = 0;
            var Time10 = 0;
            var Time11 = 0;
            var Time12 = 0;
            var Time13 = 0;
            var Time14 = 0;
            var Time15 = 0;
            var Time16 = 0;
            var Time17 = 0;
            var Time18 = 0;
            var Time19 = 0;
            var Time20 = 0;
            var Time21 = 0;


            for (step = 0; step < results.length; step++) {
                Time[step] = moment(results[step].starttime).format('HH');
                if (Time[step] == 9) {
                    Time9++
                } else if (Time[step] == 10) {
                    Time10++
                } else if (Time[step] == 11) {
                    Time11++
                } else if (Time[step] == 12) {
                    Time12++
                } else if (Time[step] == 13) {
                    Time13++
                } else if (Time[step] == 14) {
                    Time14++
                } else if (Time[step] == 15) {
                    Time15++
                } else if (Time[step] == 16) {
                    Time16++
                } else if (Time[step] == 17) {
                    Time17++
                } else if (Time[step] == 18) {
                    Time18++
                } else if (Time[step] == 19) {
                    Time19++
                } else if (Time[step] == 20) {
                    Time20++
                } else if (Time[step] == 21) {
                    Time21++
                }
            }


            var template = `
    <!DOCTYPE html>
    <html lang="en" >
    <head>
    <meta charset="UTF-8">
    <title>CodePen - With data labels</title>
    <link rel="stylesheet" href="./style.css">

    </head>
    <body>
    <!-- partial:index.partial.html -->
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>


    <figure class="highcharts-figure">
    <div id="container1"></div>
    <p class="highcharts-description">
        This chart shows how data labels can be added to the data series. This
        can increase readability and comprehension for small datasets.
    </p>
    <div id="container2"></div>
    <p class="highcharts-description">
        This chart shows how data labels can be added to the data series. This
        can increase readability and comprehension for small datasets.
    </p>
    </figure>
    <!-- partial -->
    <script  type="text/javascript">
    Highcharts.chart('container1', {
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

    Highcharts.chart('container2', {
        chart: {
        type: 'line'
        },
        title: {
        text: '시간대 별 방문 지수'
        },
        subtitle: {
        text: '최근 일주일 지표'
        },
        xAxis: {
        categories: ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
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
        data: [${Time9}, ${Time10}, ${Time11}, ${Time12}, ${Time13}, ${Time14}, ${Time15}, ${Time16}, ${Time17}, ${Time18}, ${Time19}, ${Time20}, ${Time21}]
        }]
    });
    
    </script>

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