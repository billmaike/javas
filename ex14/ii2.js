var a = [5,3,7,1,4]

var c = a[0]
console.log(c)

/* for (var b = 0; b < a.length; b++) {
    console.log(a[b])
} */

for (var b in a) {
    console.log(b)//b recebe indice
}
for (var b in a) {
    console.log(a[b])
}
