var database =[
    {
        username: 'khalil',
        password:'123'
    },
    {
        username: 'farzad',
        password:'1234'
    },
    {
        username: 'omer',
        password:'123'
    },
];
var newFeed = [
    {
        username:'bobey',
        timeline : 'these day boried without ...'
    },
    {
        username:'jan',
        timeline:'trying to foucs and learn '
    },
    {
        username:'jana',
        timeline:'trying to foucs and learn '
    }
];

function isUserValid( username , password) {
    for (i  = 0; i < database.length; i++) {
        if (database[i].username===username &&
            database[i].password===password) {
             return true;     
         }
    }
    return false;    
    };

function userSignIn (username, password){
   if (isUserValid(username,password)) {
       console.log(newFeed)
   }else{
       alert("worng username and password");
   }
    };

    var usernamePrompt = prompt('Enter usename ');
    var passwordPrompt = prompt('Enter your passeord');
userSignIn(usernamePrompt,passwordPrompt);
