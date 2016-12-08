var day = 0;

var stats = {
  laziness: 0,
  murder: 0,
  evil: 0,
  nothing: 0
}


var start = {
	text: "You have just woken up, and you are lying in your bed.",
	
	option1: "Stay in bed",
	o1: "laziness",
	destination1: "bed",

	option2: "Go outside",
	o2: "nothing",
	destination2: "outside",

	option3: "Take out your phone",
	o3: "nothing",
	destination3: "phone"
}

var bed = {
	text: "You spent the entire day in bed, and now the next morning has come.",
	
	option1: "Stay in bed",
	o1: "laziness",
	destination1: "bed",

	option2: "Go outside",
	o2: "nothing",
	destination2: "outside",

	option3: "Take out your phone",
	o3: "nothing",
	destination3: "phone"
}

var outside = {
	text: "You are standing on the street. The house next to yours has always looked particularly fancy.",
	
	option1: "Keep Walking",
	o1: "nothing",
	destination1: "outside2",

	option2: "Knock on the door",
	o2: "nothing",
	destination2: "doorway",

	option3: "Break a window and climb in.",
	o3: "evil",
	destination3: "windowroom"
}

var outside2 = {
	text: "You come to an intersection. There is a man sitting and reading the newspaper on a bench.",
	
	option1: "Talk to the man",
	o1: "nothing",
	destination1: "talking",

	option2: "Try to steal his hat",
	o2: "evil",
	destination2: "hatsteal",

	option3: "Keep walking",
	o3: "nothing",
	destination3: "outside3"
}

var outside3 = {
	text: "As you walk past the intersection, you see a small bakery, with people talking out front.",
	
	option1: "Walk into the bakery",
	o1: "nothing",
	destination1: "talking",

	option2: "Sit down next to someone at a table and talk to them",
	o2: "laziness",
	destination2: "start",

	option3: "Keep walking",
	o3: "nothing",
	destination3: "outside4"
}

var outside4 = {
	text: "Place number 4",
	
	option1: "Thing",
	o1: "nothing",
	destination1: "talking",

	option2: "Another thing",
	o2: "laziness",
	destination2: "start",

	option3: "More things!",
	o3: "nothing",
	destination3: "outside4"
}


var windowroom = {
	text: "The windom shatters with a loud crash, and you climb in. The room has a has a large piano in it, and a desk next to the fireplace.",
	
	option1: "Play the piano",
	o1: "nothing",
	destination1: "talking",

	option2: "See what's in the desk drawer",
	o2: "evil",
	destination2: "desk",

	option3: "Walk into another room.",
	o3: "nothing",
	destination3: "nextroom"
}

var desk = {
	text: "You slide open the desk drawer, and inside you find a phone and five dollars. You pocket both of them.",
	
	option1: "Play the piano",
	o1: "nothing",
	destination1: "piano",

	option2: "Walk into another room",
	o2: "nothing",
	destination2: "nextroom",

	option3: "Leave out the window",
	o3: "nothing",
	destination3: "outside2"
}

var nextroom = {
	text: "As you walk into the next room, you hear loud footsteps coming toward you, and you are confronted with an angry-looking man.",
	
	option1: "Attack the man",
	o1: "murder",
	destination1: "talking",

	option2: "Run out back the window",
	o2: "nothing",
	destination2: "outside2",

	option3: "Try talking to the man",
	o3: "nothing",
	destination3: "housetalking"
}


var piano = {
	text: "You take the lid off the piano and sit down. As you start to play, you hear footsteps coming toward you. You don't know why you thought this was a good idea...",
	
	option1: "Attack the man",
	o1: "murder",
	destination1: "houseattack",

	option2: "Run out back the window",
	o2: "nothing",
	destination2: "outside2",

	option3: "Try talking to the man",
	o3: "nothing",
	destination3: "housetalking"
}

var houseattack = {
	text: "The man is too surprised to put up much resistance. You hope you didn't kill him.",
	
	option1: "Leave out the window",
	o1: "murder",
	destination1: "houseattack",

	option2: "Go into another room",
	o2: "nothing",
	destination2: "outside2",

	option3: "See if the man has any valuables on him",
	o3: "nothing",
	destination3: "housetalking"
}

var hatsteal = {
	text: "You poise yourself behind him, and deftly pluck the hat from his head without a sound.",
	
	option1: "Put the hat on and keep walking",
	o1: "nothing",
	destination1: "talking",

	option2: "Give the man his hat back, saying that he dropped it",
	o2: "laziness",
	destination2: "start",

	option3: "See if you can get his watch as well",
	o3: "evil",
	destination3: "watchsteal"
}

var watchsteal = {
	text: "You bend down, and start to unclip his watch from his wrist. As you do, the man looks up, sees his hat in your hand, and starts shouting at you.",
	
	option1: "Put the hat on and run away",
	o1: "nothing",
	destination1: "talking",

	option2: "Give the man his hat back and run away",
	o2: "laziness",
	destination2: "outside3",

	option3: "Silence the man with a proper beating",
	o3: "murder",
	destination3: "outside4"
}

var doorway = {
	text: "You walk up the steps and ring the doorbell. After a moment, a man opens the door.",
	
	option1: "Run away",
	o1: "nothing",
	destination1: "talking",

	option2: "Talk about the weather",
	o2: "nothing",
	destination2: "start",

	option3: "Attack the man",
	o3: "murder",
	destination3: "outside4"
}

var locations = {
	start: start,
	outside: outside,
	outside2: outside2,
	outside3: outside3,
	outside4: outside4,
	windowroom: windowroom,
	nextroom: nextroom,
	houseattack: houseattack,
	desk: desk,
	piano: piano,
	hatsteal: hatsteal,
	watchsteal: watchsteal,
	doorway: doorway,
	bed: bed
}


console.log("Why doesn't this work?");

var current = start;

$(document).ready(function () {

	console.log("The javascript is starting up");

	day += 1;
	$("#text").text(current.text);
	$("#option1").text(current.option1);
	$("#option2").text(current.option2);
	$("#option3").text(current.option3);

	$("#option1").on('click', function () {
		stats[current.o1] += 1;
		current = locations[current.destination1];
		$("#text").text(current.text);
		$("#option1").text(current.option1);
		$("#option2").text(current.option2);
		$("#option3").text(current.option3);
	});

	$("#option2").on('click', function () {
		stats[current.o2] += 1;
		current = locations[current.destination2];
		$("#text").text(current.text);
		$("#option1").text(current.option1);
		$("#option2").text(current.option2);
		$("#option3").text(current.option3);
	});

	$("#option3").on('click', function () {
		stats[current.o3] += 1;
		current = locations[current.destination3];
		$("#text").text(current.text);
		$("#option1").text(current.option1);
		$("#option2").text(current.option2);
		$("#option3").text(current.option3);
	});
});