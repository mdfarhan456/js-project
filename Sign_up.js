let sub=()=>{
    let inpname=document.querySelector("#name").value;
    let inpnum=document.querySelector("#number").value;
    let inpemail=document.querySelector("#email").value;
    let inppass=document.querySelector("#pass").value;
    let inpcpass=document.querySelector("#cpass").value;

    let errname=document.querySelector("#errorname")
    let errnum=document.querySelector("#errornumber")
    let erremail=document.querySelector("#erroremail")
    let errpass=document.querySelector("#errorpass")
    let errcpass=document.querySelector("#errorcpass")

    if(inpname==""){
        errname.innerHTML="*Please fill the name field"
        errname.style.color="red"
        document.querySelector("#name").style.border = "2px solid red"
        document.querySelector("#name")
        return false;
    }

    else if(isNaN(inpnum)){
        errnum.innerHTML="please enter number only"
        errnum.style.color="red"
        document.querySelector("#name").style.border = ""

        document.querySelector("#number").style.border = "2px solid red"

        document.querySelector("#number").focus()
         errname.innerHTML=""
        return false
    }

    else if(inpnum.length!=10){
        errnum.innerHTML="*please enter 10 digits only"
        errnum.style.color="red"
        document.querySelector("#number").style.border = "2px solid red"

        document.querySelector("#number").focus()
         errname.innerHTML=""
        
        return false;

    }

    else if(!(inpemail.includes('@') && inpemail.includes('.com'))){
        erremail.innerHTML="*please enter valid email"
        erremail.style.color="red"
        document.querySelector("#email").style.border = "2px solid red"
        document.querySelector("#email").focus()
         errname.innerHTML=""
         errnum.innerHTML=""
          errnum.innerHTML=""

        return false;

    }

    else if(inppass!=inpcpass){
        errcpass.innerHTML="*please enter same password"
        errcpass.style.color="red"
        document.querySelector("#cpass").style.border = "1px solid red"

        document.querySelector("#cpass").value=""
        document.querySelector("#cpass").focus()
        errname.innerHTML=""
        errnum.innerHTML=""
        errnum.innerHTML=""



        return false;

    }

    else if(!(inppass.match(/[1234567890]/) 
        && inppass.match(/[!@#%&]/)
        &&inppass.match(/[ a-z]/)
        && inppass.match(/[A-Z]/))){
            errpass.innerHTML="*please enter strong password"
            errpass.style.color="red"
    errname.innerHTML=""
            return false
         }

        localStorage.setItem("Name",inpname)
        localStorage.setItem("Number",inpnum)
        localStorage.setItem("E-mail",inpemail)
        localStorage.setItem("Password",inppass)
        localStorage.setItem("Cpassword",inpcpass)

        location.href="Login.html";


        return false
}

let login=()=>{
    let inpemail=document.querySelector("#loginemail").value;
    let inppass=document.querySelector("#loginpass").value;
    


    let erremail=document.querySelector("#erroremail")
    let errpass=document.querySelector("#errorpass")

    let email=localStorage.getItem("E-mail")
    let number=localStorage.getItem("Number")
    let pass=localStorage.getItem("Password")

 

    if(inpemail!=email){
       erremail.innerHTML="*invalid e-mail";
       erremail.style.color="red"
       return false
    }
   
    else if(inppass!=pass){
          errpass.innerHTML="*invalid password";
       errpass.style.color="red"
        erremail.innerHTML=""
       
       return false

    }

    location.href="Home.html"
    return false
    

    
}


let log=()=>{
    let logout=document.querySelector("#log")
    

    if(logout.innerHTML=="Logout"){
        localStorage.clear(sub)
        logout.innerHTML="Login"
    }
    else if( logout.innerHTML=="Login"){
        location.href="Sign_up.html"
         logout.innerHTML="Logout"
    }
}

let move=()=>{
    
    location.href="user-datails.html"
}