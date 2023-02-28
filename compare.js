// const first = {a:2};
// const second = {a:2};
// if(first === second){
//     console.log('they are same');
// }
// else{
//     console.log('different');
// }
//* do not use this method to compare object or array
const first = {a:2, b:2, d:5, e:1};
const second = {a:2, c:5, b:2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString, secondString);

// if(firstString === secondString){
//     console.log('same');
// }
// else{
//         console.log('different');
// }

function compareObject(first, second){
        const firstKey = Object.keys(first);
        const secondKey = Object.keys(second);
        if(firstKey.length === secondKey.length){
            for(const key of firstKey){
                if(first[key] !== second[key]){
                    return false;
                }
            }
            return true;
        }
        else{
            return false;
        }
}
const isSame = compareObject(first, second);
console.log(isSame);