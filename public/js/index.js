var day = 0;
var gameover = false;

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
	o3: "laziness",
	destination3: "phone"
}

var bed = {
	text: "You spent the entire day in bed, and now the next morning has come.",
	
	option1: "Go outside",
	o1: "nothing",
	destination1: "outside",

	option2: "Take out your phone",
	o2: "nothing",
	destination2: "phone",

	option3: "",
	o3: "nothing",
	destination3: "bed"

}

var outside = {
	text: "You are standing on the street. The house next to yours has always looked particularly fancy.",
	
	
	option1: "Knock on the door",
	o1: "nothing",
	destination1: "doorway",

	option2: "Break a window and climb in.",
	o2: "evil",
	destination2: "windowroom",

	option3: "",
	o3: "nothing",
	destination3: "outside"

}

var outside2 = {
	text: "You come to an intersection. There is a man sitting and reading the newspaper on a bench.",
	
	option1: "Talk to the man",
	o1: "nothing",
	destination1: "hatmantalk",

	option2: "Try to steal his hat",
	o2: "evil",
	destination2: "hatsteal",

	option3: "Keep walking",
	o3: "nothing",
	destination3: "outside3"
}

var hatmansearch = {
	text: "You sift through his pockets. You find a pocket watch and an old pen. You pocket them both.",
	
	option1: "Leave",
	o1: "nothing",
	destination1: "talking",

	option2: "Start reading his newspaper",
	o2: "nothing",
	destination2: "newspaperread",

	option3: "",
	o3: "nothing",
	destination3: "hatmansearch"
}

var outside3 = {
	text: "As you walk past the intersection, you see a small bakery, with people talking out front.",
	
	option1: "Walk into the bakery",
	o1: "nothing",
	destination1: "bakery",

	option2: "Sit down next to someone at a table and talk to them",
	o2: "nothing",
	destination2: "bakerytalk",

	option3: "Keep walking",
	o3: "nothing",
	destination3: "end"
}

var bakery = {
	text: "The smell of warm break wafts up your nose as you enter the bakery. Bread lines the shelves, and it is bustling with customers.",
	
	option1: "Take a loaf of bread and run",
	o1: "nothing",
	destination1: "end",

	option2: "Sit down next to someone at a table and talk to them",
	o2: "nothing",
	destination2: "bakerytalk",

	option3: "",
	o3: "nothing",
	destination3: "bakery"
}

var bakerytalk = {
	text: "The man sitting there looks at you a little strangely, but is willing to talk.",
	
	option1: "Ask for a donation to help homeless sloths",
	o1: "nothing",
	destination1: "bakeryslothtalk",

	option2: "Talk about the weather",
	o2: "nothing",
	destination2: "bakeryweathertalk",

	option3: "Leave",
	o3: "nothing",
	destination3: "end"
}

var bakerybuy = {
	text: "The person standing there asks you what you want to buy.",
	
	option1: "\"12 loaves of bread\"",
	o1: "nothing",
	destination1: "bakery",

	option2: "Talk about the weather",
	o2: "nothing",
	destination2: "start",

	option3: "Leave",
	o3: "nothing",
	destination3: "end"
}

var end = {
	text: "The end. Thanks for playing! Your punishment is: ",
	
	option1: "Replay",
	o1: "nothing",
	destination1: "start",

	option2: "See my stats",
	o2: "nothing",
	destination2: "end",

	option3: "See other people",
	o3: "nothing",
	destination3: "end"
}

var windowroom = {
	text: "The window shatters with a loud crash, and you climb in. The room has a has a large piano in it, and a desk next to the fireplace.",
	
	option1: "Play the piano",
	o1: "nothing",
	destination1: "piano",

	option2: "See what's in the desk drawer",
	o2: "evil",
	destination2: "desk",

	option3: "Walk into another room.",
	o3: "nothing",
	destination3: "nextroom"
}

var desk = {
	text: "You slide open the desk drawer, and inside you find a phone and a five dollar bill. You pocket both of them.",
	
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
	destination1: "houseattack",

	option2: "Run out back the window",
	o2: "nothing",
	destination2: "outside2",

	option3: "Try talking to the man",
	o3: "nothing",
	destination3: "housetalking"
}

var housetalking = {
	text: "\"Why are you in my house?!\" \"Well, you see, I was, uhm, well\"",
	
	option1: "Attack the man",
	o1: "murder",
	destination1: "houseattack",

	option2: "Run out back the window",
	o2: "nothing",
	destination2: "outside2",

	option3: "Punch him then run out",
	o3: "evil",
	destination3: "outside2"
}

var piano = {
	text: "You take the lid off the piano and sit down. As you start to play, you see a man come in through the doorway. You don't know why you thought this was a good idea...",

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
	text: "The man is too surprised to put up much resistance. You think he might be dead.",
	
	option1: "Leave out the window",
	o1: "nothing",
	destination1: "houseattack",

	option2: "Go into another room",
	o2: "nothing",
	destination2: "outside2",

	option3: "See if the man has any valuables on him",
	o3: "evil",
	destination3: "housemansearch"
}

var hatsteal = {
	text: "You poise yourself behind him, and deftly pluck the hat from his head without a sound.",
	
	option1: "Put the hat on and keep walking",
	o1: "nothing",
	destination1: "outside3",

	option2: "See if you can get his watch as well",
	o2: "evil",
	destination2: "watchsteal",

	option3: "",
	o3: "nothing",
	destination3: "hatsteal"
}

var hatmantalk = {
	text: "\"I heard in the news that salted cucumbers cause cancer. What do you think? Thats probably why I've never eaten one.\"",
	
	option1: "Leave",
	o1: "nothing",
	destination1: "outside3",

	option2: "Tell him that they don't actually cause cancer",
	o2: "nothing",
	destination2: "hatmantalk2",

	option3: "Tell him that normal cucumbers cause cancer as well",
	o3: "evil",
	destination3: "hatmantalk3"
}

var hatmantalk2 = {
	text: "\"Well, thats' quite reassuring. Thank you.\"",
	
	option1: "Leave",
	o1: "nothing",
	destination1: "outside3",

	option2: "Pretend to leave, then try to steal his hat",
	o2: "evil",
	destination2: "hatsteal",

	option3: "",
	o3: "nothing",
	destination3: "hatmantalk2"
}

var hatmantalk3 = {
	text: "\"Oh deary me... Cucumbers are my main food source. I bet I have a brain tumor already!\"",
	
	option1: "Leave",
	o1: "nothing",
	destination1: "outside3",

	option2: "Pretend to leave, then try to steal his hat",
	o2: "nothing",
	destination2: "hatsteal",

	option3: "",
	o3: "nothing",
	destination3: "hatmantalk3"
}


var watchsteal = {
	text: "You bend down, and start to unclip his watch from his wrist. As you do, the man looks up, sees his hat in your hand, and starts shouting at you.",
	
	option1: "Put the hat on and run away",
	o1: "evil",
	destination1: "outside3",

	option2: "Give the man his hat back and run away",
	o2: "nothing",
	destination2: "outside3",

	option3: "Silence the man with a proper beating",
	o3: "murder",
	destination3: "hatmanattack"
}

var hatmanattack = {
	text: "The man had a lot less fortitude than you thought. You think he might be dead.",
	
	option1: "Walk off down the road",
	o1: "nothing",
	destination1: "outside3",

	option2: "Search him",
	o2: "evil",
	destination2: "hatmansearch",

	option3: "Sit down and read his newspaper",
	o3: "laziness",
	destination3: "end"
}

var newspaperread = {
	text: "The headline has something to do with cucumbers and cancer. You don't find anything interesting.",
	
	option1: "Walk off down the road",
	o1: "nothing",
	destination1: "outside3",

	option2: "Take the newspaper and leave",
	o2: "evil",
	destination2: "outside3",

	option3: "",
	o3: "nothing",
	destination3: "newspaperread"
}

var doorway = {
	text: "You walk up the steps and ring the doorbell. After a moment, a man opens the door.",
	
	option1: "Walk away",
	o1: "nothing",
	destination1: "outside2",

	option2: "Talk about the weather",
	o2: "nothing",
	destination2: "doorwaytalk",

	option3: "Attack the man",
	o3: "murder",
	destination3: "houseattack2"
}

var doorwaytalk = {
	text: "\"Erhm, it's a nice sunny day isn't it...    Weather sure is joyous...\" This doesn't seem to be going well.",
	
	option1: "Walk away",
	o1: "nothng",
	destination1: "outside2",

	option2: "Ask for a donation to help homeless sloths",
	o2: "nothing",
	destination2: "slothtalk",

	option3: "Attack the man",
	o3: "murder",
	destination3: "houseattack2"
}

var housemansearch = {
	text: "He has fifty dollars in his wallet, which you take, but not much else.",
	
	option1: "Leave the house",
	o1: "evil",
	destination1: "outside2",

	option2: "Walk into the room behind him.",
	o2: "nothing",
	destination2: "yetanotherroom",

	option3: "",
	o3: "nothing",
	destination3: "housemansearch"
}

var slothtalk = {
	text: "\"You see, sub-saharan pigmy sloths are an endanged species, and can only survive with the help of donors like you. They only eat salted cucumbers, and are nearing extinction quickly.\" Unfortunately, he doesn't want to help out.",
	
	option1: "Walk away down the street",
	o1: "nothing",
	destination1: "outside2",

	option2: "Attack the man",
	o2: "murder",
	destination2: "houseattack2",

	option3: "",
	o3: "nothing",
	destination3: "slothtalk"
}

var bakeryslothtalk = {
	text: "\"You see, sub-saharan pigmy sloths are an endanged species, and can only survive with the help of donors like you. They only eat freshly baked bread, which is made right here, and are nearing extinction quickly.\" Unfortunately, they don't want to help out.",
	
	option1: "Leave",
	o1: "nothing",
	destination1: "end",

	option2: "Talk about the weather",
	o2: "nothing",
	destination2: "bakeryweathertalk",

	option3: "",
	o3: "nothing",
	destination3: "bakeryslothtalk"
}

var bakeryweathertalk = {
	text: "\"I do hope it won't rain tomorrow\" \"Oh, yes. That would be quite dreadful.\" \"Bakeries sure have great weather, don't they? \"Oh, yes. Truly.\"",
	
	option1: "Leave",
	o1: "nothing",
	destination1: "end",

	option2: "Ask for a donation to help homeless sloths",
	o2: "nothing",
	destination2: "bakeryslothtalk",

	option3: "",
	o3: "nothing",
	destination3: "bakeryweathertalk"
}

var houseattack2 = {
	text: "You lunge at the man viciously. He is too surprised to put up much resistance. You think he might be dead.",
	
	option1: "Walk out the door",
	o1: "nothing",
	destination1: "outside2",

	option2: "Go into another room",
	o2: "nothing",
	destination2: "yetanotherroom",

	option3: "See if the man has any valuables on him",
	o3: "evil",
	destination3: "housemansearch"
}

var yetanotherroom = {
	text: "You walk into the room, and find a large table in the center, and paintings lining the walls. You wonder if they might be valuable.",
	
	option1: "Walk out the door",
	o1: "nothing",
	destination1: "outside2",

	option2: "Take a painting and leave",
	o2: "evil",
	destination2: "outside2",

	option3: "Leave with as many paintings as you can carry.",
	o3: "evil",
	destination3: "outside2"
}


var phone = {
	text: "You take out your phone. You stare at it for a while, but then stop when you think that you probably have something better to do.",
	
	option1: "Stay in bed",
	o1: "laziness",
	destination1: "bed",

	option2: "Go outside",
	o2: "nothing",
	destination2: "outside",

	option3: "",
	o3: "nothing",
	destination3: "phone"
}

var locations = {
	start: start,
	outside: outside,
	outside2: outside2,
	outside3: outside3,
	end: end,
	bakery: bakery,
	bakerytalk: bakerytalk,
	windowroom: windowroom,
	nextroom: nextroom,
	houseattack: houseattack,
	houseattack2: houseattack2,
	desk: desk,
	phone: phone,
	piano: piano,
	hatsteal: hatsteal,
	watchsteal: watchsteal,
	hatmanattack: hatmanattack,
	hatmantalk: hatmantalk,
	hatmantalk2: hatmantalk2,
	hatmantalk3: hatmantalk3,
	doorway: doorway,
	doorwaytalk: doorwaytalk,
	yetanotherroom: yetanotherroom,
	housetalking: housetalking,
	slothtalk: slothtalk,
	newspaperread: newspaperread,
	housemansearch: housemansearch,
	hatmansearch: hatmansearch,
	bakeryslothtalk: bakeryslothtalk,
	bakeryweathertalk: bakeryweathertalk,
	bed: bed
}


console.log("Why doesn't this work?");

var current = start;

$(document).ready(function () {

	console.log("The javascript is starting up");
	console.log("end end end end end".includes("end"));

	

	day += 1;
	$("#text").text(current.text);
	$("#option1").text(current.option1);
	$("#option2").text(current.option2);
	$("#option3").text(current.option3);

	$("#option1").on('click', function () {
		$("#option3").css("opacity", 1);
		stats[current.o1] += 1;
		current = locations[current.destination1];
		$("#text").text(current.text);
		$("#option1").text(current.option1);
		$("#option2").text(current.option2);
		$("#option3").text(current.option3);

		if(current.option3 == "") {
			console.log("Removing a button");
			$("#option3").css("opacity", 0);
		}

		functionbunction();
	});

	$("#option2").on('click', function () {
		$("#option3").css("opacity", 1);
		stats[current.o2] += 1;
		current = locations[current.destination2];
		$("#text").text(current.text);
		$("#option1").text(current.option1);
		$("#option2").text(current.option2);
		$("#option3").text(current.option3);

		if(current.option3 == "") {
			console.log("Removing a button");
			$("#option3").css("opacity", 0);
		}

		functionbunction();
	});



	$("#option3").on('click', function () {
		$("#option3").css("opacity", 1);
		stats[current.o3] += 1;
		current = locations[current.destination3];
		$("#text").text(current.text);
		$("#option1").text(current.option1);
		$("#option2").text(current.option2);
		$("#option3").text(current.option3);
		if(current.option3 == "") {
			console.log("Removing a button");
			$("#option3").css("opacity", 0);
		}

		functionbunction();
	});
});


function functionbunction() {
	if(current.text.includes("The end") || 	$("#text").text().includes("the end")) {
		gameover = true;
		console.log("The game is over");
		console.log(stats.evil);
		console.log(stats.nothing);
		console.log(stats.murder);
		console.log(stats.laziness);
		$("#text").text($("#text").text() + punishmentChooser());
		$("#option1").css("opacity", 0);
		$("#option2").css("opacity", 0);
		$("#option3").css("opacity", 0);
	}
}

function punishmentChooser() {
	console.log("Meeeeeeanie");
	console.log(stats.evil);
	if(stats.murder >= 2) {
		return "to be beaten to death over and over again for " + stats.murder + "000 years.";
	} else if(stats.laziness > 2) {
		return "intense manual labor for " + stats.laziness + "000 years";
	} else if(stats.evil > 0) {
		return "having your belongings all stolen from you and your house being broken into over and over again for " + (2*stats.evil) + (stats.evil) + "00 years.";
	} else {
		return "The fact that you didn't do anything wrong is a punishment in itself."
	}
}