myApp.service('MessageService', ['$http', function($http){
    console.log('MessageService loaded');

    const self = this;
    self.message = {list: []};


    // getFilms through the API
    self.submitComment = function (person) {
        console.log('comment has been clicked');
        
        $http.post('/messages', person)
        .then(function (response) {
            self.getComments();
        })
        .catch(function (response) {
            console.log('error on post comments', response);
        });
    };

    self.getComments = function () {
        $http.get('/messages')
        .then(function (response) {
            self.message.list = response.data;
            console.log('successful get comments: ', self.message.list);
        })
        .catch(function (response) {
            console.log('error on get comments', response);
        });
    }
self.getComments();

}]);