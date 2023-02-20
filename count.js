let alluser = JSON.parse(localStorage.getItem("Customer"))
const message = () => {
    Swal.fire(
        'Welcome to Vickypay Bank',
        'Dear Customer, We Are sorry for the inconvenience on our website. Some Changes has been made.Stay Blessed And Enjoy our Services',
        'success'
      )
}


const create = () => {
    window.location.href="create.html"
}

const log = () => {
   window.location.href="login.html"
}


let found =false
const letGod=()=>{
    console.log(alluser);
    alluser.map((user,i)=>{
        if(user.username == us.value && user.password==pn.value ){
         found = true
         localStorage.setItem("cur",i)
        }
    })

    if(found==true){
        changeLoginText()
        setTimeout(()=> {
            swal({
                text: "Login Successfully",
                title: `Welcome Back, ${us.value}`,
                icon: "success",
                button: "OK!",
              });
        },3000)
        setTimeout(() => {
        window.location.href = 'DASH!.html'
        },4000)
    } else if(found==false){
        swal({
            title: "Login Failed",
            text: "User does not exist",
            icon: "error",
            button: "OK!",
        });
    }
    
 
}
function changeLoginText() {
    logBtn.innerText = 'Autenticating.....'
    logBtn.style.opacity = '0.3'
}