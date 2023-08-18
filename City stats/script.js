/*
'Chennai': 
'Bengaluru':'
'Mumbai':
'Delhi':
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/
const button = document.querySelector('button')
button.addEventListener('click',displayStats)
let resultdiv =document.createElement('div')
resultdiv.id='result'
document.getElementById('wrapper').appendChild(resultdiv)
function displayStats(){

    const input=document.getElementById("input")
   
    const city = input.options[input.selectedIndex].value
    let population=0
    let literacyRate=0
    let language=''
    switch(city){
        case 'Banglore':
            population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
            break
        case 'Chennai':
            population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
           break
        case 'Puducherry':
            population = 124423
            literacyRate = 89.73
            language = 'Tamil'
            break
        case "Coimbatore":
            population = 1678794
            literacyRate = 86.20
            language = 'Tamil'
            break
        }
        let text =`The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}`
      
        document.getElementById('result').innerHTML=text
        
}