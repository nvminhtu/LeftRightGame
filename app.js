(function () {
    var app = angular.module('leftRightGame', []);

    app.controller('GameController', function ($scope, $interval) {
        //The current state of the game.
        $scope.gameState = {
            timeRemaining: 30,
            score: 0,
            direction: null,
            gameOn: false
        };
        
        //Time the direction was switched
        $scope.switchTime = 0;
        
        //Time the button was clicked
        $scope.clickTime = 0;

        //The directions that can be used for gameState's direction
        $scope.directions = ["LEFT", "RIGHT"];

        //Reset game to original state, start timer.
        $scope.startGame = function () {
            $scope.resetGame(true);
            $scope.timer = $interval(function () {
                if ($scope.gameState.timeRemaining > 0) {
                    $scope.gameState.timeRemaining--;
                }
                if ($scope.gameState.timeRemaining === 0) {
                    $scope.gameState.gameOn = false;
                    alert("Game Over. Score: " + $scope.gameState.score);
                }
            }, 1000, 30);
            $scope.setDirection();
        }

        //Stops timer, resets game state, takes a boolean. 
        //If simply restarting a game and you want to pause, pass false
        //Otherwise, pass true to gameOn.
        $scope.resetGame = function (gameOn) {
            $interval.cancel($scope.timer);
            $scope.gameState.timeRemaining = 30;
            $scope.gameState.score = 0;
            $scope.gameState.direction = null;
            $scope.gameState.gameOn = gameOn;
        }

        //Awards 3 points for under 500ms, 2 points for under 1000ms, 1 point otherwise
        $scope.calculateScore = function(){
            var timeDifference = $scope.clickTime - $scope.switchTime;
            if(timeDifference <= 500) {
                return 3;
            } else if (timeDifference > 500 && timeDifference <= 1000) {
                return 2;
            } else {
                return 1;
            }
        };

        //Handles click events by checking if the user clicked the correct direction
        //Then, sets a new random direction.
        $scope.handleClick = function (direction) {
            $scope.clickTime = new Date().getTime();
            
            if ($scope.gameState.gameOn === true) {
                if (direction === $scope.gameState.direction) {
                    $scope.gameState.score = $scope.gameState.score + $scope.calculateScore();
                }
                else {
                    $scope.gameState.score = $scope.gameState.score - $scope.calculateScore();
                }
                $scope.setDirection();
            }

        }

        //Sets randomly selects LEFT or RIGHT for gameState's direction
        $scope.setDirection = function () {
            $scope.switchTime = new Date().getTime();
            $scope.gameState.direction = $scope.directions[Math.round(Math.random())];
        }
        
    });

})();