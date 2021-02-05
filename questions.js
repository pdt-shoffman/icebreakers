$('#new_question').on('click', function() {

	// Get current number of items in question array
	var question_ct = questions.length;

	//Get random question
	var ques_idx = Math.floor(Math.random() * question_ct);

	//Update page to show question
	document.getElementById("question_div").innerHTML = questions[ques_idx]

	// Remove used question from list
	 questions.splice(ques_idx,1);

	//
	if (question_ct == 1) {
		questions = Array.from(used_questions);
	}



	

});

var questions = ["What is your favorite meal to cook and why?",
"What's the craziest thing on your bucket list?",
"If you could choose your age forever, what age would you choose and why?",
"If you could be an animal, what animal would you be and why?",
"What fictional world or place would you like to visit and why?",
"You have your own late night talk show, who do you invite as your first guest?",
"What’s the best piece of advice you have ever been given?",
"If you had to teach a class on one thing, what would you teach?",
"If you were independently wealthy and didn’t have to work, what would you do with your time?",
"What is your favorite time of the day and why?",
"If you could live anywhere on this planet, where would you choose to live and why?",
"What’s your favorite place you’ve ever visited and why?",
"If you could meet any historical figure, who would you choose and why?",
"If you could have dinner with anyone living or not, who would it be?",
"If you had a time machine, when would you go?",
"What’s your favorite family tradition?",
"What was the worst job you ever had?",
"If you were a superhero what would your superpower be and why?",
"What is the last good book you read? ",
"What is something you've done that no one would expect?",
"If you could live in any TV show, what would it be?",
"What’s the weirdest food you’ve ever eaten?",
"If you could only eat one food for the rest of your life what would it be?",
"If you could have the power of teleportation right now, where would you go and why?",
"If You Could Live In Any Sitcom, Which One Would It Be?",
"If You Were The Eighth Dwarf, What Would Your Name Be?",
"If you could time travel to any era which would you choose?",
"What is your favorite weekend activity?",
"Where do you see yourself living when you retire?",
"What’s your all-time favorite band?",
"Who would you swap lives with for a day?",
"What are three fun facts about yourself?",
"If you won the lottery, what would be your first big splurge?",
"What is one thing you can’t live without?",
"If you had intro music, what song would it be?",
"If you opened a business, what kind of business would it be?",
"What’s your favorite season? Why?",
"What is something that really annoys you but doesn’t bother most people?",
"What is the silliest fear you have?",
"Where would you like to travel next?",
"What is a fashion trend you are really glad went away?",
"If you could make a holiday, what would it be like? What traditions would it have? What would people eat on your holiday?",
"What is your favorite cuisine or type of food?",
"What flavor of ice cream do you wish existed?",
"If you had a personal mascot, what would your mascot be?",
"You find a remote that can rewind, fast forward, stop, and start time. What do you do with it?",
"You have to relive one day of your life forever. Which day do you choose?",
"Time freezes for everyone but you for one day. What do you do?",
"What’s your claim to fame?",
"What job would you be terrible at?",
"What skill would you like to master?",
"What mystery do you wish you knew the answer to?",
"What’s your favorite genre of book or movie?",
"What’s the farthest you’ve ever been from home?",
"What is special about the place you grew up?",
"What’s something you like to do the old-fashioned way?",
"What popular TV show or movie do you refuse to watch?",
"What was the best book or series that you’ve ever read?",
"Why did you decide to do the work you are doing now?",
"Where do you usually go or do when you have time off?",
"What are you most looking forward to in the next 10 years?",
"What would be your first question after waking up from being cryogenically frozen for 100 years?",
"If you could turn any activity into an Olympic sport, what would you have a good chance at winning a medal for?",
"What is something you will NEVER do again?",
"If you could have a never-ending candle that smelled like anything you wanted, what fragrance would you want it to be?",
"What’s something horrible that everyone should try at least once?",
"If you could make one rule that everyone had to follow, what rule would you make?",
"What's something you learned in the last week?",
"What would you do on a free afternoon in the middle of the week?",
"What story does your family always tell about you?",
"What was your best birthday?",
"If you could have any superpower, what would it be and why?",
"What’s your favorite thing about the place where you live?",
"What is your favorite magical or mythological creature?",
"What show on Netflix/Hulu/etc. did you binge watch embarrassingly fast?",
"What movie can you rewatch over and over again?",
"As a child, what did you want to be when you grew up?",
"You have to sing karaoke, what song do you pick?",
"What was your least favorite food as a child? Do you still hate it or do you love it now?",
"If aliens landed on earth tomorrow and offered to take you home with them, would you go?",
"What would your dream house be like?",
"Have you ever completed anything on your “bucket list”? What was it? ",
"If you could have someone follow you around all the time, like a personal assistant, what would you have them do?",
"If you could magically become fluent in any language, what would it be?",
"Would you rather travel back in time to meet your ancestors or to the future to meet your descendants?"]

var used_questions = Array.from(questions);
