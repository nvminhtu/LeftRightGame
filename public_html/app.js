(function () {
    var app = angular.module('leftRightGame', []);

    app.controller('GameController', function ($scope, $interval) {
        $scope.gameState = {
            timeRemaining: 30,
            score: 0,
            direction: null
        };

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
        
        //Handles click events
        $scope.handleClick = function(direction) {
            if(direction === $scope.gameState.direction) {
                score++;
            }
            else {
                score--;
            }
          $scope.gameState.direction = $scope.setDirection();             
        }

        //Sets the direction of the game state
        $scope.setDirection = function(){
            var directions = ["LEFT", "RIGHT"];
            $scope.gameState.direction = directions[Math.round(Math.random())];
        }
   
    });



})();
