let users = JSON.parse(localStorage.getItem('Customer'))
let userIndex = JSON.parse(localStorage.getItem('cur'))
const user = users[userIndex]

disname.innerHTML = user.username

const displayUserInfo =()=> {
    sur.value = user.surname
    full.value = user.firstname
    all.value = user.username
    mail.value = user.email
    dob.value = user.dob
    number.value = user.phone
    add.value = user.address
    niger.value = user.Nigerian
    state.value = user.origin
    gend.value = user.select
    nin.value = user.nin
}

displayUserInfo()