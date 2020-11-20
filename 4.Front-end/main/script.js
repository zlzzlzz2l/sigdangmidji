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
    data: [10, 20, 15, 20, 13, 17, 30]
  }]
});