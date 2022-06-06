/*⋕js.Pm.Osr.SRAp.1*/

function averArifm (...rest){
    let sum = 0;
    for (let el of rest){
        sum += el;
    }
    return sum/rest.length;
}

let result = averArifm(1,2,3);
console.log(result);