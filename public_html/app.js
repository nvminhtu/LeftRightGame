(function () {
    var app = angular.module('leftRightGame', []);

    app.controller('GameController', function ($scope, $interval) {
        $scope.gameState = {
            timeRemaining: 30,
            score: 0,
            direction: null
        };

        //The directions that can be used for gameState's direction
        $scope.directions = ["LEFT", "RIGHT"];

        //Start Game Timer
        $scope.startGame = function () {
            $scope.timer = $interval(function () {
                $scope.gameState.timeRemaining--;
            }, 1000, 30);
            $scope.setDirection();
        }

        //Reset the game
        $scope.resetGame = function () {
            $interval.cancel($scope.timer);
            $scope.gameState.timeRemaining = 30;
            $scope.gameState.score = 0;
            $scope.gameState.direction = null;
        }
        
        //Handles click events by checking if the user clicked the correct direction
        //Then, sets a new random direction.
        $scope.handleClick = function(direction) {
            console.log("click event registered");
            if(direction === $scope.gameState.direction) {
                score++;
            }
            else {
                score--;
            }
          $scope.gameState.direction = $scope.setDirection();             
        }

        //Sets randomly selects LEFT or RIGHT for gameState's direction
        $scope.setDirection = function(){
            $scope.gameState.direction = $scope.directions[Math.round(Math.random())];
        }
   
    });



})();
