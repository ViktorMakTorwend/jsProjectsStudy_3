/*⋕js.Pm.Tm.DF.2*/

let date = new Date();

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

let str = '2022-06-06';
let result = str.split('-').reverse().join('.');
console.log(result);