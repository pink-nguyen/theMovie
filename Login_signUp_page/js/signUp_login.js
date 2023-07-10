function signup(e){
    event.preventDefault()
    let userName = document.getElementById('username').value
    let password = document.getElementById('password').value
    let email = document.getElementById('email').value
    let user = {
        username : userName,
        email : email,
        password : password
    }

    let json = JSON.stringify(user)
    localStorage.setItem(username,json)
    alert('dky thanh cong')
}

function login(e){
    event.preventDefault()
    let userName = document.getElementById('username').value
    let password = document.getElementById('password').value
    let user = localStorage.getItem(username)
    let data = JSON.parse(user)
    if(user == null) alert('vui long nhap username va password')
    else if(userName == data.username && password == data.password){
        alert('dang nhap thanh cong')
        window.location.href = '../Home_page/index.html'
    }else {
        alert('dang nhap that bai')
    }
}