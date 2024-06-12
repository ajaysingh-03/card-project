console.log("hello");
// Dom--------------------------------
let userFirstName = document.getElementById("firstName");
let userLastName = document.getElementById("lastName");
let userCountry = document.getElementById("country");
let userPhoneNo = document.getElementById("phoneNo");
let userState = document.getElementById("state");
let userCity = document.getElementById("city");
let userVillage = document.getElementById("village");

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

    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    //display the user info from promt to card--------------------
    userFirstName.innerText= userInfo.firstName;
    userLastName.innerText= userInfo.lastName;
    userCountry.innerText= userInfo.country;
    userPhoneNo.innerText= userInfo.phoneNo;
    userState.innerText= userInfo.state;
    userCity.innerText= userInfo.city;
    userVillage.innerText= userInfo.village;
    
}
takingUserInput();