console.log('Starting Application.'); 

// built-in node modules
const fs = require('fs');
const os = require('os');

var user = os.userInfo();
// console.log(user);


fs.appendFile('greetings.txt', `Hello ${user.username}, you are using the shell ${user.shell}!`, function(err) {
      if (err) {
            console.log("An error has occured. Unable to write to file.");
      }
});
//Use this function to throw the error that
//has occured. 
//fs.appendFile('hello.txt', 'Hello World', function(err) {
//        if (err) {
//                console.log("An error has occured. Unable to write to file.");
//        }
//});

