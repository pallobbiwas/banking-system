document.getElementById('login-button').addEventListener('click', function(){
    const userMail = document.getElementById('user-email');
    const userPassword=document.getElementById('user-password');
    if(userMail.value=='pallob@gmail.com' && userPassword.value == '1234'){
        window.location.href = 'index.html'
    }else{
        alert('incorrect password or email');
    }
    userMail.value = '';
    userPassword.value ='';
});