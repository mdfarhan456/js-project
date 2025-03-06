let book=()=>{
    let inpname=document.querySelector("#iname").value
    let inpd=document.querySelector("#id").value
    let inpnum=document.querySelector("#inum").value
    let inpdob=document.querySelector("#idob").value
    let inpdate=document.querySelector("#idate").value
    let inptime=document.querySelector("#itime").value
    let inpgender=document.querySelector("#igender").value

    let ename=document.querySelector("#ename")
    let ed=document.querySelector("#ed")
    let enumm=document.querySelector("#enum")
    let edob=document.querySelector("#edob")
    let edate=document.querySelector("#edate")
    let etime=document.querySelector("#etime")
    let egender=document.querySelector("#egender")

    if(inpname===""){
        ename.innerHTML="*Please enter your name"
        ename.style.color="red"
        ed.innerHTML=""
        document.querySelector("#iname").focus()
        return false
    }
    
    else if(inpd===""){
        ed.innerHTML="*Please select desease"
        ename.innerHTML=""
        ed.style.color="red"
        enumm.innerHTML=""
        document.querySelector("#id").focus
        return false
    }
    else if(isNaN(inpnum)){
        enumm.innerHTML="*Please enter numbers only"
        enumm.style.color="red"
        ed.innerHTML=""
         ename.innerHTML=""
        document.querySelector("#inum").focus()
        return false
    }

    else if(inpnum.length!=10){
        enumm.innerHTML="*Please enter 10 digit numbe"
        enumm.style.color="red"
        ed.innerHTML=""
        ename.innerHTML=""
        document.querySelector("#inum").focus()
        return false
    }
else if(inpdob===""){
    edob.innerHTML="*Please select your DOB"
    edob.style.color="red"
    document.querySelector("#idob").focus()
    ed.innerHTML=""
    ename.innerHTML=""
    enumm.innerHTML=""
    return false

}

else if(inpdate==""){
    edate.innerHTML="*Please select Appoinment date"
    edate.style.color="red"
    document.querySelector("#idate").focus()
    ed.innerHTML=""
    ename.innerHTML=""
    enumm.innerHTML=""
    edob.innerHTML=""
    return false
}

else if(inptime===""){
    etime.innerHTML="*Please select Appoinment time"
    etime.style.color="red"
    document.querySelector("#itime").focus()
    ed.innerHTML=""
    ename.innerHTML=""
    enumm.innerHTML=""
    edob.innerHTML=""
    edate.innerHTML=""
    return false
}

  else if(inpgender===""){
    egender.innerHTML="*Please select select your grnder"
    egender.style.color="red"
    document.querySelector("#igender").focus()
    ed.innerHTML=""
    ename.innerHTML=""
    enumm.innerHTML=""
    edob.innerHTML=""
    edate.innerHTML=""
    etime.innerHTML=""
    return false
  }  


  let url='http://localhost:3000/doctor'

  fetch(url,{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify(
        {
            "Name":inpname,
            "Desease":inpd,
            "Number":inpnum,
            "Dateofbirth":inpdob,
            "Date":inpdate,
            "Time":inptime,
            "Gender":inpgender
        }
    )

  })
  location.href="user_info.html"
  return false

}

let fetchdata=async()=>{

    let td=document.querySelector("#td")

    let url='http://localhost:3000/doctor'

    let response=await fetch(url,{method:"GET"})

    let data=await response.json()
    // datashow(data)
    pagination(data)
}

let srch=async()=>{
    let searchinp=document.querySelector("#searchinp").value.toLowerCase()
    let url='http://localhost:3000/doctor'
        let res=await fetch(url,{method:"GET"})
        let data = await res.json()
    
        let filterdata=data.filter((e)=>{
    
            return e.Name.toLowerCase().includes(searchinp)
        })
    
        // datashow(filterdata)
        pagination(filterdata)
    
    }

    let pagination=(data)=>{
        $('#pag').pagination({
            dataSource: data,
            pageSize: 5,
            showGoInput: true,
            showGoButton: true,
            callback: function(data, pagination) {
                // template method of yourself
             
       datashow(data)
                
            }
        })
    }
    
    
    let datashow=(data)=>{
        let show=document.querySelector("#show")
        show.innerHTML=""
    
    data.map((e)=>{

        

        show.innerHTML+=
        `
        <tr>
            <td>${e.Name}<t/d>
            <td>${e.Desease}<t/d>
            <td>${e.Number}<t/d>
            <td>${e.Dateofbirth}<t/d>
            <td>${e.Date}<t/d>
            <td>${e.Time}<t/d>
            <td>${e.Gender}<t/d>
            <td onclick="confirmdelete('${e.id}')">Cancel<t/d>
            <td onclick="upd('${e.id}')">Update<t/d>
        </tr>
        `
})

}
let confirmdelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            del(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}
let del=(id)=>{
    let url=`http://localhost:3000/doctor/${id}`

     fetch(url,{method:"DELETE"})
}


let upd=async(id)=>{
    
    let url=`http://localhost:3000/doctor/${id}`
    let response=await fetch(url,{method:"GET"})

    let data=await response.json()
    console.log(data)



    let formdata =`
           
       <form id="up">
        Name: <input type="text" id="umname" value="${data.Name}" placeholder="Enter your name"> <br>
        
        
        Consulting for: <select name="Desease" id="upd"> 
            <option value="${data.Desease}">Select</option>
            <option value="eye test">Eye test</option>
            <option value="Dengue">Dengue</option>
            <option value="Cancer">Cancer</option>
            <option value="Polio">Polio</option>
            <option value="other">Other</option> 
        </select>
<br>
        Number: <input type="text" id="upnum" placeholder="Enter your number" value="${data.Number}"> <br>

       
        DOB: <input type="date" id="updob" value="${data.Dateofbirth}" > <br>

        
        Date: <input type="date" id="update" value="${data.Date}""> <br>



            <div id="time-container">
    
        Time: <input type="time" value="${data.Time}" id="uptime"> <br>


       <div>
        <div id="g"> Gender: <select name="gender" id="upgender" > </div> 
        <option value="${data.Gender}">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select> 
    
 <br> <br>
    
<input type="submit" value="Update" id="but" onclick="return finalupdate('${data.id}')"></div>
 </form>

 
        
    `
    // location.href="update_form.html"
document.querySelector("#data-container").innerHTML=formdata

}


    

let finalupdate = (id) => {
    let inpname = document.querySelector("#umname").value;
    let inpd = document.querySelector("#upd").value;
    let inpnum = document.querySelector("#upnum").value;
    let inpdob = document.querySelector("#updob").value;
    let inpdate = document.querySelector("#update").value;
    let inptime = document.querySelector("#uptime").value;
    let inpgender = document.querySelector("#upgender").value;

    let url = `http://localhost:3000/doctor/${id}`;

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "Name": inpname,
            "Desease": inpd,
            "Number": inpnum,
            "Dateofbirth": inpdob,
            "Date": inpdate,
            "Time": inptime,
            "Gender": inpgender
        })
    })
    // location.href="user_info.html";
    return false;
}

let hide = () => {
    let show = document.querySelector("#searchinp");

    if (show.style.display === "none") {  
        show.style.display = "block";
        document.querySelector("#ic").style.display="none"
    } else { 
        show.style.display = "none";
        document.querySelector("#ic").style.display="block"
    }
};




var options = {
    strings: ["Patient details", "Please fill following details."],
    typeSpeed: 50,  // speed of typing
    backSpeed: 25,  // speed of backspacing
    backDelay: 1500,  // delay before backspacing
    startDelay: 500,  // delay before typing starts
    loop: true,  // repeat the animation
    showCursor: false  // this will hide the cursor
};

var typed = new Typed("#sc", options);
