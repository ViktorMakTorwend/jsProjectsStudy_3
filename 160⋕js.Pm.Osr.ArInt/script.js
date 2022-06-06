/*⋕js.Pm.Osr.ArInt*/

function getInt (...arrs){
    let result = [];
    let arr0 = arrs.shift();

    for(let elem of arr0){
        if(func1(elem, arrs)){
            result.push(elem);
        }
    }
    return result;
}

function func1 (elem, arrs){
    for (let arr of arrs){
        if (!func2(elem, arr)){
            return false;
        }
    }
    return true;
}

function func2(elem, arr){
    return arr.indexOf(elem) != -1;
}

let result = getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]);
console.log(result);