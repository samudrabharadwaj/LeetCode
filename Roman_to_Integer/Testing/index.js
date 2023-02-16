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

// var addToArrayForm = function(num, k) {
    
//     let sum = 0;
//     let out = 0;
//     for(let i=0; i<num.length;i++)
//     {
//         sum = num[i];
//          sum += k
//     }
//     // let myFunc = sum => Number(sum);
//     // sum = Array.from(String(sum), myFunc)
//     console.log(sum)
    
// };

// addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3],516)