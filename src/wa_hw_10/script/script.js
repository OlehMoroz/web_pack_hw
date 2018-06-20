$(".red_light").click(function(ColorRed) {
    $(".red_light").css('background-color', 'red');
    $(".yellow_light").css('background-color', 'rgba(255, 200, 148, 0.61)');
    $(".green_light").css('background-color', 'rgba(169, 255, 148, 0.521)');
});

$(".yellow_light").click(function(ColorYellow) {
    $(".yellow_light").css('background-color', 'yellow');
    $(".red_light").css('background-color', 'rgba(241, 135, 135, 0.582)');
    $(".green_light").css('background-color', 'rgba(169, 255, 148, 0.521)');
});

$(".green_light").click(function(ColorGreen) {
    $(".green_light").css('background-color', 'green');
    $(".red_light").css('background-color', 'rgba(241, 135, 135, 0.582)');
    $(".yellow_light").css('background-color', 'rgba(255, 200, 148, 0.61)');
});
