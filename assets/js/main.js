$(document).ready(function () {
	console.log("ready()");
});


var trainName = "";
var destination = "";
var firstTime = "";
var frequency = "";
$("#formsubmit").on("click", function() {
	trainName = $("#train-name").val().trim();
	destination = $("#destination").val().trim();
	firstTime = $("#first-time").val().trim();
	frequency = $("#frequency").val().trim();

	if (
		trainName === "" 
		|| destination === "" 
		|| firstTime === "" 
		|| frequency === ""
	) {
		console.log("empty form, return");
		return false;
	}

	console.log(trainName);
	console.log(destination);
	console.log(firstTime);
	console.log(frequency);

	return false;
});