var express = require('express')
var app = express()
var mysql = require('mysql');
var moment =require('moment');
var connection = mysql.createConnection({
    host: 'localhost',    // 호스트 주소
    user: 'root',           // mysql user
    password: '-------',       // mysql password
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
            var Time = [];

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


            for (step = 0; step < results.length; step++) {
                Time[step] = moment(results[step].starttime).format('HH');
            }

            //mon
            for(step = 0; step < results.length; step++){
                if(results[step].week == 0 && Time[step] == 9){
                    moncount++
                    monTime9++
                }else if(results[step].week == 0 && Time[step] == 10){
                    moncount++
                    monTime10++
                }else if(results[step].week == 0 && Time[step] == 11){
                    moncount++
                    monTime11++
                }else if(results[step].week == 0 && Time[step] == 12){
                    moncount++
                    monTime12++
                }else if(results[step].week == 0 && Time[step] == 13){
                    moncount++
                    monTime13++
                }else if(results[step].week == 0 && Time[step] == 14){
                    moncount++
                    monTime14++
                }else if(results[step].week == 0 && Time[step] == 15){
                    moncount++
                    monTime15++
                }else if(results[step].week == 0 && Time[step] == 16){
                    moncount++
                    monTime16++
                }else if(results[step].week == 0 && Time[step] == 17){
                    moncount++
                    monTime17++
                }else if(results[step].week == 0 && Time[step] == 18){
                    moncount++
                    monTime18++
                }else if(results[step].week == 0 && Time[step] == 19){
                    moncount++
                    monTime19++
                }else if(results[step].week == 0 && Time[step] == 20){
                    moncount++
                    monTime20++
                }
            }

            //tue
            for(step = 0; step < results.length; step++){
                if(results[step].week == 1 && Time[step] == 9){
                    tuecount++
                    tueTime9++
                }else if(results[step].week == 1 && Time[step] == 10){
                    tuecount++
                    tueTime10++
                }else if(results[step].week == 1 && Time[step] == 11){
                    tuecount++
                    tueTime11++
                }else if(results[step].week == 1 && Time[step] == 12){
                    tuecount++
                    tueTime12++
                }else if(results[step].week == 1 && Time[step] == 13){
                    tuecount++
                    tueTime13++
                }else if(results[step].week == 1 && Time[step] == 14){
                    tuecount++
                    tueTime14++
                }else if(results[step].week == 1 && Time[step] == 15){
                    tuecount++
                    tueTime15++
                }else if(results[step].week == 1 && Time[step] == 16){
                    tuecount++
                    tueTime16++
                }else if(results[step].week == 1 && Time[step] == 17){
                    tuecount++
                    tueTime17++
                }else if(results[step].week == 1 && Time[step] == 18){
                    tuecount++
                    tueTime18++
                }else if(results[step].week == 1 && Time[step] == 19){
                    tuecount++
                    tueTime19++
                }else if(results[step].week == 1 && Time[step] == 20){
                    tuecount++
                    tueTime20++
                }
            }

            //wen
            for(step = 0; step < results.length; step++){
                if (results[step].week == 2 && Time[step] == 9) {
                    wenTime9++
                    wencount++
                } else if (results[step].week == 2 && Time[step] == 10) {
                    wenTime10++
                    wencount++
                } else if (results[step].week == 2 && Time[step] == 11) {
                    wenTime11++
                    wencount++
                } else if (results[step].week == 2 && Time[step] == 12) {
                    wenTime12++
                    wencount++
                } else if (results[step].week == 2 && Time[step] == 13) {
                    wenTime13++
                    wencount++
                } else if (results[step].week == 2 && Time[step] == 14) {
                    wenTime14++
                    wencount++
                } else if (results[step].week == 2 && Time[step] == 15) {
                    wenTime15++
                    wencount++
                } else if (results[step].week == 2 && Time[step] == 16) {
                    wenTime16++
                    wencount++
                } else if (results[step].week == 2 && Time[step] == 17) {
                    wenTime17++
                    wencount++
                } else if (results[step].week == 2 && Time[step] == 18) {
                    wenTime18++
                    wencount++
                } else if (results[step].week == 2 && Time[step] == 19) {
                    wenTime19++
                    wencount++
                } else if (results[step].week == 2 && Time[step] == 20) {
                    wenTime20++
                    wencount++
                }
            }

            //thr
            for(step = 0; step < results.length; step++){
                if(results[step].week == 3 && Time[step] == 9){
                    thrcount++
                    thrTime9++
                }else if(results[step].week == 3 && Time[step] == 10){
                    thrcount++
                    thrTime10++
                }else if(results[step].week == 3 && Time[step] == 11){
                    thrcount++
                    thrTime11++
                }else if(results[step].week == 3 && Time[step] == 12){
                    thrcount++
                    thrTime12++
                }else if(results[step].week == 3 && Time[step] == 13){
                    thrcount++
                    thrTime13++
                }else if(results[step].week == 3 && Time[step] == 14){
                    thrcount++
                    thrTime14++
                }else if(results[step].week == 3 && Time[step] == 15){
                    thrcount++
                    thrTime15++
                }else if(results[step].week == 3 && Time[step] == 16){
                    thrcount++
                    thrTime16++
                }else if(results[step].week == 3 && Time[step] == 17){
                    thrcount++
                    thrTime17++
                }else if(results[step].week == 3 && Time[step] == 18){
                    thrcount++
                    thrTime18++
                }else if(results[step].week == 3 && Time[step] == 19){
                    thrcount++
                    thrTime19++
                }else if(results[step].week == 3 && Time[step] == 20){
                    thrcount++
                    thrTime20++
                }
            }

            //fri
            for(step = 0; step < results.length; step++){
                if(results[step].week == 4 && Time[step] == 9){
                    fricount++
                    friTime9++
                }else if(results[step].week == 4 && Time[step] == 10){
                    fricount++
                    friTime10++
                }else if(results[step].week == 4 && Time[step] == 11){
                    fricount++
                    friTime11++
                }else if(results[step].week == 4 && Time[step] == 12){
                    fricount++
                    friTime12++
                }else if(results[step].week == 4 && Time[step] == 13){
                    fricount++
                    friTime13++
                }else if(results[step].week == 4 && Time[step] == 14){
                    fricount++
                    friTime14++
                }else if(results[step].week == 4 && Time[step] == 15){
                    fricount++
                    friTime15++
                }else if(results[step].week == 4 && Time[step] == 16){
                    fricount++
                    friTime16++
                }else if(results[step].week == 4 && Time[step] == 17){
                    fricount++
                    friTime17++
                }else if(results[step].week == 4 && Time[step] == 18){
                    fricount++
                    friTime18++
                }else if(results[step].week == 4 && Time[step] == 19){
                    fricount++
                    friTime19++
                }else if(results[step].week == 4 && Time[step] == 20){
                    fricount++
                    friTime20++
                }
            }

            //sat
            for(step = 0; step < results.length; step++){
                if(results[step].week == 5 && Time[step] == 9){
                    satcount++
                    satTime9++
                }else if(results[step].week == 5 && Time[step] == 10){
                    satcount++
                    satTime10++
                }else if(results[step].week == 5 && Time[step] == 11){
                    satcount++
                    satTime11++
                }else if(results[step].week == 5 && Time[step] == 12){
                    satcount++
                    satTime12++
                }else if(results[step].week == 5 && Time[step] == 13){
                    satcount++
                    satTime13++
                }else if(results[step].week == 5 && Time[step] == 14){
                    satcount++
                    satTime14++
                }else if(results[step].week == 5 && Time[step] == 15){
                    satcount++
                    satTime15++
                }else if(results[step].week == 5 && Time[step] == 16){
                    satcount++
                    satTime16++
                }else if(results[step].week == 5 && Time[step] == 17){
                    satcount++
                    satTime17++
                }else if(results[step].week == 5 && Time[step] == 18){
                    satcount++
                    satTime18++
                }else if(results[step].week == 5 && Time[step] == 19){
                    satcount++
                    satTime19++
                }else if(results[step].week == 5 && Time[step] == 20){
                    satcount++
                    satTime20++
                }
            }

            //sun
            for(step = 0; step < results.length; step++){
                if(results[step].week == 6 && Time[step] == 9){
                    suncount++
                    sunTime9++
                }else if(results[step].week == 6 && Time[step] == 10){
                    suncount++
                    sunTime10++
                }else if(results[step].week == 6 && Time[step] == 11){
                    suncount++
                    sunTime11++
                }else if(results[step].week == 6 && Time[step] == 12){
                    suncount++
                    sunTime12++
                }else if(results[step].week == 6 && Time[step] == 13){
                    suncount++
                    sunTime13++
                }else if(results[step].week == 6 && Time[step] == 14){
                    suncount++
                    sunTime14++
                }else if(results[step].week == 6 && Time[step] == 15){
                    suncount++
                    sunTime15++
                }else if(results[step].week == 6 && Time[step] == 16){
                    suncount++
                    sunTime16++
                }else if(results[step].week == 6 && Time[step] == 17){
                    suncount++
                    sunTime17++
                }else if(results[step].week == 6 && Time[step] == 18){
                    suncount++
                    sunTime18++
                }else if(results[step].week == 6 && Time[step] == 19){
                    suncount++
                    sunTime19++
                }else if(results[step].week == 6 && Time[step] == 20){
                    suncount++
                    sunTime20++
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
    <script src="https://code.highcharts.com/highcharts.js"></script>

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
    document.getElementById("mySelect").onchange = function() {myFunction()};
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