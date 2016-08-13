$(document).ready(function () {
	console.log("ready()");
});

// Initialize Firebase
var config = {
apiKey: "AIzaSyDfFOZ_JxVo5PNHmhYG99zQX1JOyrArzP0",
authDomain: "fir-backend-project.firebaseapp.com",
databaseURL: "https://fir-backend-project.firebaseio.com",
storageBucket: "fir-backend-project.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();
    
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
		return false;//prevent page refresh
	}

	console.log(trainName);
	console.log(destination);
	console.log(firstTime);
	console.log(frequency);

	database.ref().push({
		trainName: trainName,
		destination: destination,
		firstTime: firstTime,
		frequency: frequency,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

	return false;//prevent page refresh
});

database.ref().on("child_added", function(childSnapshot) {

	if(childSnapshot.val() == null) {
		return;
	}

	console.log(childSnapshot.val());
	
	var trainEntry = $("<div>").addClass("col-md-12");

	trainEntry.append($("<div>").addClass("col-md-5ths").text(childSnapshot.val().trainName));
	trainEntry.append($("<div>").addClass("col-md-5ths").text(childSnapshot.val().destination));
	trainEntry.append($("<div>").addClass("col-md-5ths").text(childSnapshot.val().firstTime));
	trainEntry.append($("<div>").addClass("col-md-5ths").text(childSnapshot.val().frequency));
	trainEntry.append($("<div>").addClass("col-md-5ths").text(childSnapshot.val().dateAdded));

	$("#trains").append($("<div class='row trainrow'>").append(trainEntry));
}, function(errorObject) {
	console.log("Errors handled: " + errorObject.code);
})