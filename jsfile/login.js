let numb = 123456789;
let pass = 1234;

document.getElementById("loginBTN").addEventListener("click",function(e){
    e.preventDefault();
    const num = parseInt(document.getElementById("NumBER").value);
    const password = parseInt( document.getElementById("PasswORD").value);
    if(numb === num && password === pass){
        window.location.href="index.html";
    }
    else if(num !== numb && password !== pass){
        alert("please valid Number & Password..!")
    }
})