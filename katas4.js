const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults(r,n){
    let novo = document.createElement('div');
    let main = document.querySelector('main')
    novo.classList.add("kata"+n)
    novo.append("Kata "+n)
    main.appendChild(novo)
    let titulo = document.createElement("span")
    titulo.append(r)
    novo.append(titulo)
 }

function kata1() {
    let result = gotCitiesCSV.split(",")
    showResults(result,1)
    return result
}

function kata2() {
    let result = bestThing.split(" ")
    showResults(result,2)
    return result
}

function kata3() {
    let result = gotCitiesCSV.replaceAll(',', ';')
    showResults(result,3)
    return result
}

function kata4() {
    let result = lotrCitiesArray.join(",")
    showResults(result,4)
    return result
}
function kata5() {
    let result = lotrCitiesArray.slice(0,5)
    showResults(result,5)
    return result
}
function kata6() {
    let result = lotrCitiesArray.slice(-5)
    showResults(result,6)
    return result
}
function kata7() {
    let result = lotrCitiesArray.slice(2,5)
    showResults(result,7)
    return result
}
function kata8() {
    let tirar = lotrCitiesArray.splice(2,1)
    showResults(lotrCitiesArray,8)
    return lotrCitiesArray
}   
function kata9() {
    let tirar = lotrCitiesArray.splice(6,2)
    showResults(lotrCitiesArray,9)
    return lotrCitiesArray
}
function kata10() {
    let colocar = lotrCitiesArray.splice(2,0,"Rohan")
    showResults(lotrCitiesArray,10)
    return lotrCitiesArray
}
function kata11() {
    let colocar = lotrCitiesArray.splice(5,1,"Deadest Marshes")
    showResults(lotrCitiesArray,11)
    return lotrCitiesArray
}
function kata12() {
    let result = bestThing.slice(0,14)
    showResults(result,12)
    return result
}
function kata13() {
    let result = bestThing.slice(-12)
    showResults(result,13)
    return result
}
function kata14() {
    let result = bestThing.slice(23,38)
    showResults(result,14)
    return result
}
function kata15() {
    let result = bestThing.substring(bestThing.length-12)
    showResults(result,15)
    return result
}
function kata16() {
    let result = bestThing.substring(23,38)
    showResults(result,16)
    return result
}
function kata17() {
    let tira = lotrCitiesArray.pop()
    showResults(lotrCitiesArray,17)
    return lotrCitiesArray
}
function kata18() {
    let coloca = lotrCitiesArray.push("Harad")
    showResults(lotrCitiesArray,18)
    return lotrCitiesArray
}
function kata19() {
    let tira = lotrCitiesArray.shift()
    showResults(lotrCitiesArray,19)
    return lotrCitiesArray
}
function kata20() {
    let coloca = lotrCitiesArray.unshift("Mordor")
    showResults(lotrCitiesArray,20)
    return lotrCitiesArray
}

//BONUS


function kata21(){
    let array = bestThing.split(" ")
    let result = 0
        for(let i=0; i <array.length; i++){
            if(array[i] === "only"){
                result = i
            }
        }
    showResults(result,21)
    return result
}
function kata22(){
    let array = bestThing.split(" ")
    let result = array.length - 1
    showResults(result,22)
    return result
}
function kata23(){
    let result = []
    let array = gotCitiesCSV.split(",")
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(array[i][j] === array[i][j+1]){
                result.push(array[i])
            }
        }
    }
    showResults(result.slice(0,result.length-1),23)
    return result.slice(0,result.length-1)
}
function kata24(){
    let result = []
    for(let i = 0; i < lotrCitiesArray.length; i++){
        if(lotrCitiesArray[i].slice(-2) === "or"){
            result.push(lotrCitiesArray[i])
        }
    }
    showResults(result,24)
    return result
}
function kata25(){
    let result = []
    let array = bestThing.split(" ")
    for(let i =0; i < array.length; i++){
        if(array[i].charAt(0) === "b"){
            result.push(array[i])
        }
    }
    showResults(result,25)
    return result
}
function kata26(){
    let result = "Nao"
    for(let i = 0; i < lotrCitiesArray.length; i++){
        if(lotrCitiesArray[i] === "Mirkwood"){
        result = "Sim"
        break
        }
    }
    showResults(result,26)
    return result
}
function kata27(){
    let result = "Nao"
    for(let i = 0; i < lotrCitiesArray.length; i++){
        if(lotrCitiesArray[i] === 'Hollywood'){
        result = "Sim"
        break
        }
    }
    showResults(result,27)
    return result
}
function kata28(){
    let result = 0
        for(let i=0; i <lotrCitiesArray.length; i++){
            if(lotrCitiesArray[i] === 'Mirkwood'){
                result = i
            }
        }
    showResults(result,28)
    return result
}
function kata29(){
    let sorted = lotrCitiesArray.sort((a,b)=> a.length - b.length)
    let result = sorted[lotrCitiesArray.length-1]
    showResults(result,29)
    return result
}
function kata30(){
    let result = lotrCitiesArray.reverse()
    showResults(result,30)
    return result
}
function kata31(){
    let result = lotrCitiesArray.sort()
    showResults(result,31)
    return result
}
function kata32(){
    let result = lotrCitiesArray.sort((a,b)=> a.length - b.length)
    showResults(result,32)
    return result
}

kata1()
kata2()
kata3()
kata4()
kata5()
kata6()
kata7()
kata8()
kata9()
kata10()
kata11()
kata12()
kata13()
kata14()
kata15()
kata16()
kata17()
kata18()
kata19()
kata20()
kata21()
kata22()
kata23()
kata24()
kata25()
kata26()
kata27()
kata28()
kata29()
kata30()
kata31()
kata32()