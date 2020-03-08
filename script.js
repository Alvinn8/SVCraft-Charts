/**
 * @pram {String} name The name of the chart to load. Loads the "charts/<name>.json" file
 * @param {Element} where Where to append the chart as a child
 */
function loadChart(name, where) {
    if (!where) where = document.body;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var canvas = document.createElement('canvas');
            canvas.width = 400;
            canvas.height = 400;
            var ctx = canvas.getContext('2d');
            var chartConfig = JSON.parse(this.responseText);
            var chart = new Chart(ctx, chartConfig);

            where.appendChild(canvas);
        }
    }
    xhr.open("GET", "charts/"+ name + ".json");
    xhr.send();
}
window.addEventListener("DOMContentLoaded", function() {
    // loadChart("test");
    loadChart("nation_members", document.getElementById("chart1"));
    loadChart("highest_player_count_per_day", document.getElementById("chart2"));
});