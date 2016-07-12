$(document).ready(function () {
    $.get("stats.json", function (data) {
        loadChartData(data);
    });
});

function loadChartData(data) {
    for (var object in data) {
        buildChart(data[object]);
    }
}

function buildChart(object) {
    var data = object;
    new Chartist.Pie(data.chart, {
        labels: [data.level + "%"],
        series: [data.level]
    }, {
            donut: true,
            donutWidth: 5,
            startAngle: 180,
            total: 100
        }).on('draw', (context) => {
            if (context.type === 'label') {
                context.element.attr({
                    dx: context.element.root().width() / 2,
                    dy: context.element.root().height() / 2
                });
            }
        });
    $(data.label).html(data.name);
}