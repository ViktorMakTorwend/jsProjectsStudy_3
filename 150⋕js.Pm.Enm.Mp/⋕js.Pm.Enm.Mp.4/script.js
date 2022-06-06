/* ⋕js.Pm.Enm.Mp.4 */

let arr = ['123', '456', '789'];

let res =arr.map(function(elem){
        return elem.split('').map(function(el){
            return Number(el)
        })})

console.log(res);        



