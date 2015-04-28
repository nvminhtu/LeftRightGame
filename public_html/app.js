(function () {
    var app = angular.module('leftRightGame', []);

    app.controller('GameController', function ($scope, $interval) {
        $scope.gameState = {
            timeRemaining: 0,
            score: 0,
            direction: null,
            gameOn: false
        };

        //The directions that can be used for gameState's direction
        $scope.directions = ["LEFT", "RIGHT"];

        //Start Game Timer
        $scope.startGame = function () {
            $scope.gameState.gameOn = true;
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
            $scope.gameState.gameOn = false;
        }

        //Handles click events by checking if the user clicked the correct direction
        //Then, sets a new random direction.
        $scope.handleClick = function (direction) {
            if ($scope.gameState.gameOn === true) {
                if (direction === $scope.gameState.direction) {
                    $scope.gameState.score++;
                }
                else {
                    $scope.gameState.score--;
                }
                $scope.gameState.direction = $scope.directions[Math.round(Math.random())];
            }

        }

        //Sets randomly selects LEFT or RIGHT for gameState's direction
        $scope.setDirection = function () {
            $scope.gameState.direction = $scope.directions[Math.round(Math.random())];
        }

    });



})();
