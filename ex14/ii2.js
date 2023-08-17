var total = 0;

var a = [5,3,7,1,4]


for (var i = 0; i < a.length; i++) 
{ total += a[i];} console.log(total)

var c = a[0]
console.log(c)

/* for (var b = 0; b < a.length; b++) {
    console.log(a[b]) 
} */

for (var b in a) {
    console.log(b)//b recebe todos os indices
}
for (var b in a) {
    console.log(a[b])
}  
