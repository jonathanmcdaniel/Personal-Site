$(document).ready(function () {
    $.get("stats.json", function (data) {
        loadChartData(data);
    });
});

function loadChartData(data) {
    for (var object in data){
        buildChart(data[object]);
    }
}

function buildChart(object) {
    var data = object;
    new Chartist.Pie(data.chart, {
        series: [data.level]
    }, {
            donut: true,
            donutWidth: 50,
            startAngle: 0,
            total: 100
        });
        $(data.label).html(data.name);
}