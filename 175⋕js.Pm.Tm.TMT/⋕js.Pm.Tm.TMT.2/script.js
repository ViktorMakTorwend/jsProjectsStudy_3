/*⋕js.Pm.Tm.TMT.2*/

let now = new Date();
let evening = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
console.log("До конца дня осталось: " + (evening - now)/(1000) + " секунд.");