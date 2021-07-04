function showGraph() {
  am4core.ready(function() {
    am4core.useTheme(am4themes_animated);
  
    var chart = am4core.create("reciclagem-grafico-gc", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0;
    chart.data = [
      {
        type: "Outros",
        value: 34.4
      },
      {
        type: "Plástico",
        value: 27.8
      },
      {
        type: "Papel",
        value: 27
      },
      {
        type: "Vidro",
        value: 4.9
      },
      {
        type: "Aço",
        value: 4.7
      },
      {
        type: "Alumínio",
        value: 1.2
      }
    ];

    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "type";
    series.slices.template.cornerRadius = 6;
    series.colors.step = 3;
    series.labels.template.fill = am4core.color("#CCCCCC");
    series.labels.template.bent = true;
    series.labels.template.radius = 3;
    series.labels.template.padding(0,0,0,0);
    series.labels.template.text = "{category}";
    series.tooltip.autoTextColor = false;
    series.tooltip.label.fill = am4core.color("#FFFFFF");
    series.slices.template.tooltipText = "{value.percent.formatNumber('#.0')}%";
    series.hiddenState.properties.endAngle = -90;
  });
}

$(function() {
  $('#reciclagem-grafico-gc').waypoint({
    handler: function() {
      showGraph();
      this.destroy();
    },
    offset: '50%'
  });
});