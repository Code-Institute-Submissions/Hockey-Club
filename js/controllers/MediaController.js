var app = angular.module("MediaController", []);

app.controller("MediaController", [ "$scope", function($scope){
	console.log("MediaController");
	$scope.images = [
		{		
			title	: "Our Coach - Duncan Letterman",
			caption	: "Club Coach",
			src		: "assets/images/gallery/coach.jpg",
			width	: "500px",
			height	: "500px",
			alt 	: "Our Coach - Duncan Letterman",
		},
		{		
			title	: "Junior Girls Hard At It!",
			caption	: "Here you can see some of our juniors training.",
			width	: "500px",
			height	: "500px",
			src		: "assets/images/gallery/juniors-training.jpg",
			alt 	: "Junior Girls Hard Training",
		},
		{		
			title	: "Fundraiser 2016",
			caption	: "Our ladies teams after a great day raising money for childrens cancer.",
			src		: "assets/images/gallery/womens-funds.jpg",
			alt 	: "Childrens Cancer Fundraiser 2016",
		},
		{		
			title	: "Castlebar Mens Second vs Harrogate",
			caption	: "Our Mens second team vs Harrogate, we came out on top 3-1",
			src		: "assets/images/gallery/mseconds_game.jpg",
			alt 	: "Mens seconds vs Harrogate",
		},
		{		
			title	: "What A Save!",
			caption	: "Christina, Wommens First keeper, pulling off a worldie of a save.",
			src		: "assets/images/gallery/keeper-save.jpg",
			alt 	: "What a save",
		},
		{		
			title	: "Some More of Our Juniors Training",
			caption	: "More of our juniors training to become the best.",
			src		: "assets/images/gallery/juniors-training_2.jpg",
			alt 	: "Some more junior training",
		},
		{		
			title	: "Castlebar Hockey Club Clubhouse",
			caption	: "This is where you will watch us play.. Some of you might be lucky enough to play here someday.",
			src		: "assets/images/gallery/clubhouse.jpg",
			alt 	: "Clubhouse and pitch",
		},
		{		
			title	: "Sign Up For Summer Camp 2017",
			caption	: "Player or Coach?? We're taking application for this years summer camp.",
			src		: "assets/images/gallery/summer-camp.jpg",
			alt 	: "Sign Up For Summer Camp 2017",
		},
	];
}])