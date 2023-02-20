let getBack = JSON.parse(localStorage.getItem('Customer'))
let CurIndex = JSON.parse(localStorage.getItem('cur'))
console.log(CurIndex)
const dis =()=>{
  disname.innerHTML = `
  ${getBack[CurIndex].username}
  `
  display.innerHTML = `
  ${getBack[CurIndex].firstname}
  `
  balance.innerHTML = `  
  ${getBack[CurIndex].balance}
  `
  accNO.innerHTML = `${getBack[CurIndex].acctNumber
  }`
  trans.innerHTML = `${getBack[CurIndex].totaltransfer}`
  withdran.innerHTML = `${getBack[CurIndex].totalwithdraw
}`
deposi.innerHTML = `${getBack[CurIndex].totaldeposit}`
receive.innerHTML = `${getBack[CurIndex].totalreceived}`
Stau.innerHTML = `${getBack[CurIndex].transactionHistory[CurIndex].status}`
Amount.innerHTML = `${getBack[CurIndex].transactionHistory[CurIndex].Amount}`
Types.innerHTML = `${getBack[CurIndex].transactionHistory[CurIndex].type}`

}
console.log(getBack[CurIndex].username)

dis()
console.log(getBack[CurIndex].pin);
