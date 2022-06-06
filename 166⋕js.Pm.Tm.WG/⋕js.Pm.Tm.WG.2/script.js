/*⋕js.Pm.Tm.WG.1*/

let date = new Date();

function isDayOff (todayDate){
    if (todayDate.getDay() >= 5 && todayDate.getDay() <= 6 )
        console.log('It is a day off');
    else (console.log('It is a working day'));
}

isDayOff(date);