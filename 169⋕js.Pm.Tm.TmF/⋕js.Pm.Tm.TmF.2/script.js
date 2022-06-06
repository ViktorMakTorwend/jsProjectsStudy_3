/*⋕js.Pm.Tm.TmF.2*/

let oldDate  = new Date(1988, 3, 1, 0, 0, 0);
let newDate = new Date(2000, 1, 10, 0, 0, 0);

let diff = newDate.getTime() - oldDate.getTime();
console.log(diff/(86400000));