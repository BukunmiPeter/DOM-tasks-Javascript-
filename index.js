let count = 0
function Increase(){ 
count++
document.getElementById("display").innerHTML= "Count: " + count
}

function Reset(){ 
    count= 0
    document.getElementById("display").innerHTML= "Count: " + count
    }

function Decrease(){ 
    count--
    document.getElementById("display").innerHTML= "Count: " + count
    }




    function Palindrome(){
        let value = document.getElementById("Mytext").value
        let re = /[\W_]/g;
        let lowRegStr = value.toLowerCase().replace(re, '');
        let reverseStr = lowRegStr.split('').reverse().join(''); 
        document.getElementById("displayP").innerHTML = reverseStr === lowRegStr
      }
let number = 0
    function colorArt1(){
        let colors = ["White", "Red", "Blue", "Gold","Green","Brown"]
        number= number + 1
        document.getElementById("colorart").style.backgroundColor= colors[number];
        document.getElementById("textchange").innerHTML= "Background color:" + colors[number]

    }

    function colorArt2(){
        let colors = ["White", "Red", "Blue", "Gold","Green","Brown"]
        number= number -1
        document.getElementById("colorart").style.backgroundColor= colors[number];
        document.getElementById("textchange").innerHTML= "Background color:" + colors[number]

    }

    function Random(){
    let roll=((Math.random() *9) +1);
    let rolll= Math.round(roll)
    document.getElementById("result").innerHTML= "Your Number is: " +  rolll
    }

