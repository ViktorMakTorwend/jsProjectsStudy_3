/*⋕js.Pm.Tm.DOD.1*/

let newDate  = new Date(2000, 9, 1, 0, 0, 0);
let  oldDate = new Date(2000, 2, 15, 0, 0, 0);

let diff = newDate - oldDate;
console.log("Количество дней между датами: " + diff/(86400000));