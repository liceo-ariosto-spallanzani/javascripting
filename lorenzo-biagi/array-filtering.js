const numbers=[]
for(let i=0;i<10;i++){
    numbers.push(i+1)
}
const filtered=numbers.filter(number=>number%2==0)
console.log(filtered)