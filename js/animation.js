
let box_Yearly=document.getElementById("box-Yearly")
let box_Tickets=document.getElementById("box-Tickets")
let box_Latest_News=document.getElementById("box-Latest-News")
let box_Latest_Tasks=document.getElementById("box-Latest-Tasks")


window.onscroll=function(){

    let v=scrollY
    console.log(v) 
    if(scrollY>=267 && scrollY<=650){
        document.styleSheets[0].cssRules[62].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=666 && scrollY<=1299){
        document.styleSheets[0].cssRules[71].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=1119 && scrollY<=1852){
        document.styleSheets[0].cssRules[89].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=1595 && scrollY<=2362){
        document.styleSheets[0].cssRules[99].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=2100 && scrollY<=2907){
        document.styleSheets[0].cssRules[111].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    // console.log(document.styleSheets[0].cssRules[111])
    // if(scrollY>=159 && scrollY<=750){
    //     box_Tickets.style="animation-play-state: running;"
    //     box_Yearly.style="animation-play-state: running;"
    // }
    // if(scrollY>=759 && scrollY<=1350){
    //     box_Latest_News.style="animation-play-state: running;"
    //     box_Latest_Tasks.style="animation-play-state: running;"
    // }
}