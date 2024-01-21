google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["TASKDONE", 7],
    ["CALL", 5],
    ["COMP", 9],
  ]);

  var options = {
    title: "My Daily Activities",
    is3D: true,
    colors: ["#007567", "#DC5656", "#A6A001"],
    backgroundColor: { fill: "#dcdcdc" },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart_3d")
  );
  chart.draw(data, options);
}
