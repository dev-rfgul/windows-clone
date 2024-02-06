    let taskbar= document.getElementsByClassName("taskbar")[0]
    let startmenu=document.getElementsByClassName("startmenu")[0]
    

    taskbar.addEventListener("click",()=>{
        let startmenuBottom=startmenu.style.bottom;
        if( startmenuBottom==="50px"){
            startmenu.style.bottom="-655px"
        }
        else{
            startmenu.style.bottom="50px"
        }
    })


// // copied from chatgpt


//     let taskbar1 = document.getElementsByClassName("taskbar")[0];
// let startmenu1= document.getElementsByClassName("startmenu")[0];

// taskbar.addEventListener("click", () => {
//     let startmenuBottom = startmenu.style.bottom;
//     if (startmenuBottom === "50px") {
//         startmenu.style.bottom = "-655px";
//     } else {
//         startmenu.style.bottom = "50px";
//     }
// });
