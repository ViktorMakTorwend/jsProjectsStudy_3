/*⋕js.Pm.Tm.TMT.3*/

let now = new Date();
let newYear = new Date(now.getFullYear(), 12, 31, 0, 0, 0)
console.log("До нового года осталось: " + Math.round((newYear - now)/(1000*60*60*24)) + " дней.");