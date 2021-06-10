
let validate = () => {
    //initialize value of each input
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let nationality = document.getElementById("nationality").value;
    let agreement = document.getElementById("agreement").checked;

    //initialize error message for each input
    let error_username = document.getElementById("error-username");
    let error_email = document.getElementById("error-email");
    let error_password = document.getElementById("error-password");
    let error_dob = document.getElementById("error-dob");
    let error_nationality = document.getElementById("error-nationality");
    let error_agreement = document.getElementById("error-agreement");

    //validate each input field value
    validateUsername(username, error_username);
    validateEmail(email, error_email);
    validatePassword(password, error_password);
    validateDOB(dob, error_dob);
    validateNationality(nationality, error_nationality);
    validateAgreement(agreement, error_agreement);

    //check if every input field value is not having any error
    let isValid = !(error_username.innerHTML != "" || error_email.innerHTML != "" || error_password.innerHTML != ""
                    || error_dob.innerHTML != "" || error_nationality.innerHTML != "" || error_agreement.innerHTML != "");
   
    if(isValid){
        alert("Registration Success !!");
        location.reload();
    } 
    
}


let validateUsername = (username, error_username) => {
    /*
    Username Validation :
    1. Username cannot be empty
    2. Min. 5 characters
    */
    if(username === ""){
        error_username.innerHTML = "&#x26A0 Please fill in your username";
    } else if(username.length < 5){
        error_username.innerHTML = "&#x26A0 Username too short [ Min. 5 Characters ]";
    } else {
        error_username.innerHTML = "";
    }
}
 
let validateEmail = (email, error_email) => {
    /*
    Email Validation :
    1. Email can't be empty
    2. Can't startswith or endswith @ or .
    3. @ and . cannot be side by side like @. or .@
    4. must contain @ and .
    */
    if(email === ""){
        error_email.innerHTML = "&#x26A0 Please fill in your email";
    } else if(checkEmailFormat(email) == false){
        error_email.innerHTML = "&#x26A0 Incorrect email format";
    } else {
        error_email.innerHTML = "";
    }
}

let checkEmailFormat = (email) => {
    if(email.startsWith("@") || email.startsWith(".")){
		return false;
	}
	else if(email.endsWith("@") || email.endsWith("."))	{
		return false;
	}
	else if(email.indexOf("@.") > -1 || email.indexOf(".@") > -1 )
	{
		return false;
	}
	else if(email.indexOf("@") < 0 || email.indexOf(".") < 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}

let validatePassword = (password, error_password) => {
    /*
    Password Validation :
    1. Password can't be empty
    2. Minimum of 5 characters
    3. Must contain at least 1 capital letter
    */
    if(password === ""){
        error_password.innerHTML = "&#x26A0 Please fill in your password";
    } else if(password.length < 5) {
        error_password.innerHTML = "&#x26A0 Password too short [ Min. 5 Characters ]";
    } else if(findCapitalLetter(password, password.length) == false) {
        error_password.innerHTML = "&#x26A0 Password must contain at least 1 capital letter";
    } else{
        error_password.innerHTML = "";
    }
}

let findCapitalLetter = (password, length) => {
    for(let i = 0; i < length; i++){
        if(password.charAt(i) == password.charAt(i).toUpperCase()){
            return true;
        }
    }
    return false;
}

let validateDOB = (dob, error_dob) => {
    // Date of birth validation : cannot be empty
    if(dob === ""){
        error_dob.innerHTML = "&#x26A0 Please choose your date of birth";
    }else{
        error_dob.innerHTML = "";
    }
}

let validateNationality = (nationality, error_nationality) => {
    // Nationality validation : cannot be empty
    if(nationality === ""){
        error_nationality.innerHTML = "&#x26A0 Please select your nationality";
    } else{
        error_nationality.innerHTML = "";
    }
}

let validateAgreement = (agreement, error_agreement) => {
    // Agreement validation : must be checked
    if(!agreement){
        error_agreement.innerHTML = "&#x26A0 You need to agree to the terms of service"
    }else{
        error_agreement.innerHTML = "";
    }
}