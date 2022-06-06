/*⋕js.Pm.Tm.CDG.1*/

let now  = new Date();
let date = new Date(now.getFullYear(), 2, 8); // текущий год

let diff = date - now; // разница

if (diff > 0) {
	// еще будет
    console.log("8 марта будет через " + diff + "дней.")
} else if (diff == 0) {
    console.log("8 марта будет сегодня.")
} else {
	// в следующем году
    let newDate = new Date(now.getFullYear()+1, 2, 8); // текущий год
    diff = newDate - now;
    console.log("8 марта будет в следующем году через " + Math.round(diff/(1000*60*60*24))+ " дней.")
}
