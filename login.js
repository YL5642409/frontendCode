//This file is being called in the html, where you call it by using <script> as below
//<script src="login.js"> </script>
//where you can change the "login.js" to whatever js file that is being called

async function logIn(){
    //Get the value (.value) of the input from email and password in the html
    const userEmail = document.getElementById("email").value;
    const userPass = document.getElementById("password").value;

    //set the calling params
    const params = {
        email: userEmail,
        password: userPass
    };

    //for testing purpose, ignore
    const test = {
        email: "a1234@gmail.com",
        password: "abcde"
    };

    //try to call the API with fetch
    try{
        //res is the response of the API
        const res = await fetch("https://11fgn0gs99.execute-api.ap-southeast-2.amazonaws.com/v2/user/login",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            //have to stringify the JSON file in order to use the fetch command
            //params is already set above which takes in the value that users input
            body: JSON.stringify(params)
        });

        //data returned from the API call(res) will be called 'data'
        const data = await res.json();

        //return error 
        if(!res.ok){
            console.log('Error');
            return;
        }

        //output the body which is the error/succeed message
        const output = data.body
        //alert brings up the pop up box, and returns the error/success message
        alert(output);
    }
    
    //for error
    catch(error){
        console.error(error);
    }
}


