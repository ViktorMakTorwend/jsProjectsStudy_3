/*⋕js.Pm.Tm.TMT.4*/

let now = new Date();
let year = now.getFullYear();
let numFridy = 0;

for(let month = 0; month <= 11; month++){
    let date = new Date(year, month, 13);

    if (date.getDay() == 5){
        numFridy++;
    }
}

console.log("В текущем году " + numFridy + " пятниц 13." )