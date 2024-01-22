document.addEventListener("DOMContentLoaded", function () {
  var currentPageAnchor = window.location.hash;

  var dashboardLink = document.getElementById("dashboard-link");

  if (dashboardLink && currentPageAnchor === "#dashboard") {
    dashboardLink.classList.add("active");
  }
});
