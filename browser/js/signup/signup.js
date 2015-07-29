app.config(function($stateProvider) {
    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: 'signupController'
    });
});

app.controller('signupController', function($scope, $window, User, AuthService, $state) {
    $scope.createUser = function(userData) {
        User.signup(userData)
        .then(function(){
            AuthService.getLoggedInUser().then(function(user){
                if (user) $state.go('home');
            })
        })
    };
    $scope.googleAuth = function() {
        console.log("Authenticating with Google OAuth2");
        $window.location.href = "/authentication/google";
    };
    $scope.facebookAuth = function() {
        console.log("Authenticating with Facebook");
        $window.location.href = "/authentication/facebook";
    };
});