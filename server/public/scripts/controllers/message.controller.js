myApp.controller('MessageController', ['MessageService', function (MessageService) {
    console.log('messageController loaded');

    var self = this;
    self.message = MessageService.message;
    

    self.submitComment = function (person) {
        MessageService.submitComment(person);
    }
}]);