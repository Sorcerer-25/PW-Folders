let a = "₹15,000"
let b = ""
for(let i=0;i<a.length;i++)
{
    if(a.charAt(i)!== "₹" && a.charAt(i)!==",")
    {
        b += a.charAt(i)
    }
}

console.log(Number(b));
// c = a.split("")
// for(let i in c)
// {

//     console.log(String(Number(c[i])));
//     if(String(Number(c[i])) === "NaN")
//     {
//         c.splice(i,1)
//     }
// }
// let num = Number(c.join(""))
// console.log(num);