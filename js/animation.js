
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
    if(scrollY>=2662 && scrollY<=3430){
        document.styleSheets[0].cssRules[119].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=3210 && scrollY<=3939){
        document.styleSheets[0].cssRules[126].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=3770 && scrollY<=4340){
        document.styleSheets[0].cssRules[134].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=4140 && scrollY<=4800){
        document.styleSheets[0].cssRules[152].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=4600 && scrollY<=5200){
        document.styleSheets[0].cssRules[164].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=5020 && scrollY<=5650){
        document.styleSheets[0].cssRules[172].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=5470 ){
        document.styleSheets[0].cssRules[183].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }




    if(scrollY==0 && scrollY<=300){
        document.styleSheets[0].cssRules[61].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=100 && scrollY<=900){
        document.styleSheets[0].cssRules[70].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=100 && scrollY<=900){
        document.styleSheets[0].cssRules[88].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=700 && scrollY<=1450){
        document.styleSheets[0].cssRules[98].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=700 && scrollY<=1450){
        document.styleSheets[0].cssRules[110].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=1225 && scrollY<=1984){
        document.styleSheets[0].cssRules[118].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=1225 && scrollY<=1984){
        document.styleSheets[0].cssRules[125].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=1800 && scrollY<=2517){
        document.styleSheets[0].cssRules[133].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=1800 && scrollY<=2517){
        document.styleSheets[0].cssRules[151].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=2220 && scrollY<=2850){
        document.styleSheets[0].cssRules[163].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=2220 && scrollY<=2850){
        document.styleSheets[0].cssRules[171].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    if(scrollY>=2650){
        document.styleSheets[0].cssRules[182].cssRules[0].style.setProperty("animation-play-state"," running", "important")
    }
    console.log(document.styleSheets[0].cssRules[61])
    // if(scrollY>=159 && scrollY<=750){
    //     box_Tickets.style="animation-play-state: running;"
    //     box_Yearly.style="animation-play-state: running;"
    // }
    // if(scrollY>=759 && scrollY<=1350){
    //     box_Latest_News.style="animation-play-state: running;"
    //     box_Latest_Tasks.style="animation-play-state: running;"
    // }
}