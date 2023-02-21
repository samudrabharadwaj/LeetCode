/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
let obj={
    "(":")",
    "[":"]",
    "{":"}",
}
stack=[]
for (let i=0; i <s.length;i++){
    if(s[i]==="("|| s[i]==="["|| s[i]==="{"){
        stack.push(s[i])

    }else if (s[i]!==obj[stack.pop()]){
        return false
    }
}
return stack.length===0
};