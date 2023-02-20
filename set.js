

let customer = []
if(localStorage.Customer){
  customer = JSON.parse(localStorage.getItem("Customer"))
}
let acNo = Math.round(Math.random()*100000000)
console.log("04" + acNo);
const HELLO = () => {
    if( !fn.value  || !sn.value   || !pn.value || !us.value || !em.value || 
    !ph.value  || !an.value  || !State.value  || !nin.value || !dob.value || !nation.value ){
          swal({
            title: "ACCOUNT NOT YET CREATED!",
            text: "Dear Customer, Your Account Has not been created with us",
            icon: "error",
          });
       // Email Form Validation
       let regexForEmail = /^([a-zA-Z0-9\_\.])+@([a-zA-Z0-9\_\.])+\.[a-zA-z]{2,5}(\.[a-zA-Z]+)?$/
       if(!regexForEmail.test(em.value)){
           display.className = "text-danger text-start"
           em.className = "form-control is-invalid"
           display.innerText = "Please Enter A valid Email"
       }else{
            em.className = "form-control is-valid"
       }    
   
          //Password Validation
       let regexForPassword = /^[\W\w]{5,}$/
       if(!regexForPassword.test(pn.value)){
           pn.className = "form-control is-invalid"
           disp.className = "text-danger text-start"
        }else{
           pn.className = "form-control is-valid"
           pn.innerText = "Password must be at least 5 characters"
           disp.className = "text-dark text-start"
           
       }
       
        //Phone Number Validation
       let regexForPhoneNumber = /^[\d]{11}$/
       if(!regexForPhoneNumber.test(ph.value)){
           play.className = "text-danger text-start"
           ph.className = "form-control is-invalid"
           ph.innerHTML = "Enter A Valid Phone number"
        }else{
            ph.className = "form-control is-valid"
        }
          
        // username validation 
        let regexForusername = /^[a-zA-Z]{3,}([0-9]+)?$/
        if(!regexForusername.test(us.value)){
            pla.className = "text-danger text-start"
            pla.innerHTML = "Enter Your UserName"
            us.className = "form-control is-invalid"
         }else{
             us.className = "form-control is-valid"
         }


       // NIN Number Validation 
       let regexForNIN = /^[\d]{11}$/
       if(!regexForNIN.test(nin.value)){
           away.innerHTML = "Invalid NIN Number"
           away.className = "text-danger text-start"
           nin.className = "form-control is-invalid"
        }else{
            nin.className = "form-control"
            away.innerHTML = "Valid NIN Number"
            away.className = "text-success text-start"
        }  

        //FULLNAME Validation
        let regexForFullName = /^[a-zA-Z]{3,} [a-zA-Z]{3,}( [a-zA-Z]{3,})?$/
        if(!regexForFullName.test(fn.value)){
            away.innerHTML = "Invalid NIN Number"
            away.className = "text-danger text-start"
             fn.className = "form-control is-invalid"
         }else{
             fn.className = "form-control"
             away.innerHTML = "Valid NIN Number"
             away.className = "text-success text-start"
         }  
            //CheckBox Validation//
        if(check.checked==false){
            ques.innerHTML= "Kindly Accept our Terms and conditions"
            ques.className= "text-danger"
        }else if(check.checked==true){
            ques.innerHTML= "Thanks for applying to our policy"
            ques.className= "text-success fw-lighter"

        }
} else{
            var  users = {
            firstname:fn.value,
            surname:sn.value,
            username:us.value,
            password:pn.value,
            email:em.value,
            phone:ph.value,
            Nigerian:nation.value,
            address:an.value,
            origin:State.value,
            checkbox:check.value,
            nin:nin.value,
            select:select.value,
            dob:dob.value,
            balance: 0,
            totaltransfer:00,
            totalreceived:00,
            totaldeposit:00,
            totalwithdraw:00,
            acctNumber:"04"+ acNo, 
            transactionHistory: [],
            pin:Number()
       };
         customer.push(users)
         localStorage.setItem('Customer', JSON.stringify(customer));
            fn.value=""
            sn.value=""
            us.value=""
            check.value=""
            pn.value=""
            em.value=""
            ph.value=""
            an.value=""
            State.value=""
            nin.value=""
            nation.value=""
            select.value=""
            dob.value=""
            swal({
                title: "Registered Successfully",
                text: "Your Account has Been Created", 
                icon: "success",
                button: "ok",
            });
            console.log(users)
            setTimeout(() => {
                window.location.href = 'login.html'
            },2000)
    }   
}

