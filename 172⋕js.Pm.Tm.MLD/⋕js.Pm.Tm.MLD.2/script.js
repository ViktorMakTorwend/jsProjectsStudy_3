/*⋕js.Pm.Tm.MLD.2*/

function getlastMonthDay (year, month, day = 0){
    let date = new Date(year, month, day);
    console.log(date.getDate());
}

getlastMonthDay(2020, 2);