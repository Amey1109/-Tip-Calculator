let Excellent = document.getElementById('Excellent')
let Good = document.getElementById('Good')
let Bad = document.getElementById('Bad')
let service = undefined


var calculate = () => {
    console.log()
    var billAmount = document.getElementById('billAmount').value
    var numberOfPeople = document.getElementById('numberOfPeople').value
    var tip  = billAmount *service/100
    var dividedTip = tip/numberOfPeople
    document.getElementById('tip').innerHTML = dividedTip
}


var getExcellent = () =>{
    Excellent.style.color= 'white'
    service = 20
    console.log(service)
    Good.style.display = 'none'
    Bad.style.display = 'none'  
}
var getGood = () =>{
    
    Good.style.color= 'white'
    service = 15
    console.log(service)
    Excellent.style.display = 'none'
    Bad.style.display = 'none'
}
var getBad = () =>{
    
    Bad.style.color = 'white'
    service = 10
    console.log(service)
    Excellent.style.display = 'none'
    Good.style.display = 'none'

}