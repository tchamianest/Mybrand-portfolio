// body change the color

google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawChart);
let num = 1170;

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Months", "Subscribe", "Likes"],
    ["Janual", 1000, 400],
    ["Feb", `${num}`, 460],
    ["March", 660, 1120],
    ["Aplir", 1030, 540],
  ]);

  var options = {
    chart: {
      title: "Website statistics",
      subtitle: "Subscribes, likes",
    },
    chartArea: {
      backgroundColor: {
        fill: "transparent",
        opacity: 100,
      },
    },
    colors: ["#423FD7", "#DC5656"],
    backgroundColor: { fill: "#4F4747" },
  };

  var chart = new google.charts.Bar(
    document.getElementById("columnchart_material")
  );

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

// change the color
