console.log("hello");

let storeUserInfo = localStorage.getItem("userInformation");

if(storeUserInfo){
    let userInfo = JSON.parse(storeUserInfo);

    document.getElementById("firstName").textContent= userInfo.firstName;
    document.getElementById("lastName").textContent= userInfo.lastName;
    document.getElementById("country").textContent= userInfo.country;
    document.getElementById("phoneNo").textContent= userInfo.phoneNo;
    document.getElementById("state").textContent= userInfo.state;
    document.getElementById("city").textContent= userInfo.city;
    document.getElementById("village").textContent  = userInfo.village;
}else{
    takingUserInput();
}
// Dom--------------------------------


//taking input from user..........
function takingUserInput(){
    let firstName = prompt("Enter Your first name");
    let lastName = prompt("Enter Your last name");
    let country = prompt("Enter Your country name");
    let phoneNo = prompt("Enter Your Phone no");
    let state = prompt("Enter Your state name");
    let city = prompt("Enter Your city name");
    let village = prompt("Enter Your village name");

    let userInfo={
        firstName,
        lastName,
        country,
        phoneNo,
        state,
        city,
        village,
    };

    localStorage.setItem("userInformation", JSON.stringify(userInfo));

    //display the user info from promt to card--------------------
    document.getElementById("firstName").textContent= userInfo.firstName;
    document.getElementById("lastName").textContent= userInfo.lastName;
    document.getElementById("country").textContent= userInfo.country;
    document.getElementById("phoneNo").textContent= userInfo.phoneNo;
    document.getElementById("state").textContent= userInfo.state;
    document.getElementById("city").textContent= userInfo.city;
    document.getElementById("village").textContent  = userInfo.village;
    
}
// takingUserInput();