let getBack = JSON.parse(localStorage.getItem('Customer'))
let getIndex = JSON.parse(localStorage.getItem('cur'))
let hi = []
hi = getBack[getIndex].transactionHistory
console.log(hi);
console.log(getBack[getIndex].balance)
getBack[getIndex].balance
console.log(getIndex)

const Payowner = ()=>{
    let UserAmount = Allamount.value
    if(!UserAmount){
        swal("Unable to Deposit", "Input A valid Amount", "error", {
            button: "OK!",
          });
    }
    else{
    confimalert()
  }
}
let time  = new Date().toLocaleString();
console.log(time)
 const confimalert=()=>{
    var addhis = {
      status:"approved",
      Amount:Allamount.value,
      type:"deposit",
      date: time
    }
Swal.fire({
  title: `Dear, ${getBack[getIndex].username}`,
  text: `Are you sure you want to deposit the sum of ₦${Allamount.value}`,
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#0d6efd',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: 'Enter Your Pin:',
      input: 'password',
      confirmButtonColor: '#0d6efd',
      inputAttributes: {
        autocapitalize: 'off'
      }
    }).then((result) => {
      if(result.isConfirmed) {
       let Pin = result.value
       if(Pin === getBack[getIndex].pin) {
        //  setDepositHistory(amount,'success')
        getBack[getIndex].balance += Number(Allamount.value)
        getBack[getIndex].totaldeposit += Number(Allamount.value)
        hi.push(addhis)
        localStorage.setItem('Customer', JSON.stringify(getBack))
        swal('success','Success','Deposit Successful!','success',)
        setTimeout(() => {
          window.location.href="DASH!.html"
        },1000); 
       } else {
        swal('error','Failed','invalid pin')
       }
      }
    }) 
  }
})
}
 //my new function working welll

const pinV =()=>{
    if(getBack[getIndex].pin==0){
        Swal.fire({
            text: 'You have not set transaction pin',
            icon: 'warning',
            confirmButtonColor: '#0d6efd',
            confirmButtonText: 'Set Pin'
          }).then((result) => {
            if(result.isConfirmed) {
              window.location.href = 'pin.html'
            }
          })
        }
    }
pinV()