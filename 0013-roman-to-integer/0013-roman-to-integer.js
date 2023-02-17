/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(str) {
    let num = 0 
    let dic = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}

    for( let i=0;i<str.length;i++)
    {
        if(dic[str[i]] < dic[str[i+1]])
        {
            num -= dic[str[i]];
        }
        else
        {
            num += dic[str[i]];
        }
    }
    return num
};
romanToInt("MCMXCIV")