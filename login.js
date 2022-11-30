for prime//


let num=10;
let bag=0;
for (let i=1;i<num;i++){
    if (num%i==0){
        bag++;
    }
}
if(bag==1){
    console.log("Yes")
}else{
        console.log("No")
    }




for palindrome//

str="alisha"
a=str.split("");
b=a.reverse("");
c=b.join("");


if(str==c){
console.log("Yes");
}else{
console.log("No");
}