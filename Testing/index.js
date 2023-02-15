// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) 
// {
//     let num = 0;
//     let dict = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
    
//     for (let i=0;i<s.length;i++)
//     {
//         if(dict[s[i]]<dict[s[i+1]])
//         {
//         num -= dict[s[i]];
//         console.log(num)
//         }
//         else
//         {
//         num += dict[s[i]];
//         console.log(num)
//         }
//     }
   
// };

// return romanToInt("III")
function roman(str)
{
    let num = 0 
    let dic = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
    // console.log(dic)
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
    console.log(num) 
    
};

roman("III")

