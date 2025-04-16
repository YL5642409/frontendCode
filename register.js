async function register() {
    const userEmail = document.getElementById("email").value;
    const userPass = document.getElementById("password").value;
    const userPhone = document.getElementById("phone").value;
    const userName = document.getElementById("username").value;
    //a

    const params = {
        email: userEmail,
        password: userPass,
        phone: userPhone,
        username : userName
    };

    try{
        //res is the response of the API
        const res = await fetch("https://11fgn0gs99.execute-api.ap-southeast-2.amazonaws.com/v2/user",{
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
            alert("Error")
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