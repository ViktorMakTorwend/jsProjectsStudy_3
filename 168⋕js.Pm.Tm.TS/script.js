/*⋕js.Pm.Tm.TS.1*/

/* let date = new Date("2022, 04, 17");
let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(day);
 */

let now  = new Date(6, 6, 2022, 12, 45, 59);
let date = new Date(6, 6, 2022, 12, 47, 59);

let diff = now.getTime() - date.getTime();
console.log(diff/60000);

console.log(now);