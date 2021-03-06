const header = document.getElementById('header')
const title = document.getElementById('title')
const userNameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const signInBtn = document.getElementById('signInBtn')
const mainContainer = document.getElementById('mainContainer')

const renderUser = function (user) {
    mainContainer.innerHTML = ''
    const firstName = document.createElement('h2')
    firstName.innerText = `first name: ${user.firstName}`
    const lastName = document.createElement('h2')
    lastName.innerText = `last name: ${user.lastName}`
    const lastLogin = document.createElement('h2')
    lastLogin.innerText=`last Login: ${user.getLastLoggedIn()}`
    mainContainer.append(firstName,lastName,lastLogin)
}
const submit = function () {
    const userName = userNameInput.value
    const password = passwordInput.value
    const user = school.signIn(userName, password)
    userNameInput.value = ''
    passwordInput.value = ''
    if(user.err){
        alert(user.msg)
    }else{
        renderUser(user)
    }
}

signInBtn.addEventListener('click', submit)