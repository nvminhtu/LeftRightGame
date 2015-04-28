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
                console.log($scope.gameState.timeRemaining);
            }, 1000, 30);
        }

        //Reset the game
        $scope.resetGame = function () {
            $interval.cancel($scope.timer);
            $scope.gameState.timeRemaining = 30;
            $scope.gameState.score = 0;
            $scope.gameState.direction = null;
        }

    });



})();
