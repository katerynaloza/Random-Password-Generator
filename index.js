const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3",
 "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*", "(",")","_","-","+","=","{","[","}","]",",","|",":",";"
 ,"<",">",".","?", "/"];

let passwordLength = 15

let passwordOneEl = document.getElementById("password1-el");
let passwordTwoEl = document.getElementById("password2-el");
let generatorPasswordButton = document.getElementById("button-gnr");

generatorPasswordButton.addEventListener('click', getIntoButton);

function getRandomCharacters() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let password = ""
    for (i = 0; i < passwordLength; i++) {
    password += getRandomCharacters()
    }
    return password  
}

function getIntoButton() {
    passwordOneEl.textContent = generateRandomPassword()
    passwordTwoEl.textContent = generateRandomPassword()
}

function copyToClipboard(event) {
    const password = event.target.innerText;
    navigator.clipboard.writeText(password).then(function() {
        alert('Password copied to clipboard!');
    }).catch(function(err) {
        alert('Failed to copy password: ', err);
    });
}

passwordOneEl.addEventListener('click', copyToClipboard);
passwordTwoEl.addEventListener('click', copyToClipboard);