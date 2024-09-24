
document.addEventListener("DOMContentLoaded", function() {
    var gradientecicleimg = document.getElementById('gradientecicleimg') 
    var imagemclicle = document.getElementById('imagemclicle') 
    var fistpag = document.getElementById('fistpag') 
    var slogandiv = document.getElementById('slogandiv') 
    var gradientcicle = document.getElementById('gradientcicle') 
    var saibamaisbutton = document.getElementById('saibamaisbutton') 
    var slogantxt = document.getElementById('slogantxt') 
    var mainlogoimg = document.getElementById('mainlogoimg')
    var mainlogodiv = document.getElementById('mainlogodiv')
    var maimobibutton = document.getElementById('maimobibutton')
    var mainmobi = document.getElementById('mainmobi')  
    var secondpagtext1 = document.getElementById('secondpagtext1') 
    var secondpag = document.getElementById('secondpag') 
    var secondpagtext1 = document.getElementById('secondpagtext1') 
    var secondpagtext2 = document.getElementById('secondpagtext2')

    var thirdpage = document.getElementById('thirdpage') 
    var thirdpagtitle = document.getElementById('thirdpagtitle') 
    var thirdpagtext1 = document.getElementById('thirdpagtext1') 
    var thirdpagtext2 = document.getElementById('thirdpagtext2') 
    var thirdpagimgdiv = document.getElementById('thirdpagimgdiv')

    var fourthpage = document.getElementById('fourthpage') 
    var fourthpagtitle = document.getElementById('fourthpagtitle') 
    var fourthpagtext1 = document.getElementById('fourthpagtext1') 
    var fourthpagtext2 = document.getElementById('fourthpagtext2')
    var fourthpagimgdiv = document.getElementById('fourthpagimgdiv')

    var fifithpage = document.getElementById('fifithpage') 
    var fifithpagtitle = document.getElementById('fifithpagtitle') 
    var fifithpagtext1 = document.getElementById('fifithpagtext1') 
    var fifithpagtext2 = document.getElementById('fifithpagtext2')
    var fifithpagimgdiv = document.getElementById('fifithpagimgdiv')
    

    saibamaisbutton.onmouseup = function() { 
        window.location.href = "https://www.instagram.com/o21_jpzin_/"
    }

    var menu = false 

    maimobibutton.onmouseup = function() { 

        if (menu==false) { 
            menu = true; 
            maimobibutton.style.transition =  "all 0.8s ease-out"
            maimobibutton.style.transitionDelay = "0.2s"
            maimobibutton.style.marginLeft = "2vw";  
            maimobibutton.style.backgroundColor = "#9340ff76" 
            maimobibutton.style.borderRadius = "0.6em" 

            mainmobi.style.transition =  "all 0.6s ease-out"
            mainmobi.style.left = "70%"
        } else { 
            menu = false; 
            maimobibutton.style.transition =  "all 0.2s ease-out"
            maimobibutton.style.marginLeft = "30vw";  
            maimobibutton.style.backgroundColor = "#9340ff00" 
            maimobibutton.style.borderRadius = "0em"

            mainmobi.style.transition =  "all 0.2s ease-out"
            mainmobi.style.transitionDelay = "0.1s"
            mainmobi.style.left = "105%"
        }
    }
 
    imagemclicle.onmouseenter = function () {
        mainlogoimg.style.scale = 1.1;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var gc = gradientcicle.style.top
                gradientcicle.style.transition = "all 0.5s ease, top 0.5s "
                gradientcicle.style.opacity = 1
                gradientcicle.style.transform = "translateY(0px)"

                slogantxt.style.transition = "all 1.4s ease, top 1s "
                slogantxt.style.opacity = 1
                slogantxt.style.transform = "translateY(0px)"

                saibamaisbutton.style.transition = "all 1s ease, top 1s "
                saibamaisbutton.style.opacity = 1
                saibamaisbutton.style.transform = "translateY(0px)"


            } else {
                gradientcicle.style.transition = "all 0.5s ease"  
                gradientcicle.style.opacity = 0  
                gradientcicle.style.transform = "translateY(100px)"

                slogantxt.style.transition = "all 0.5s ease"  
                slogantxt.style.opacity = 0  
                slogantxt.style.transform = "translateY(100px)"

                saibamaisbutton.style.transition = "all 0.5s ease"   
                saibamaisbutton.style.opacity = 0  
                saibamaisbutton.style.transform = "translateY(100px)"

             }
        });
      })

        observer.observe(slogandiv); 



        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    secondpagtext1.style.transition = "all 1s ease, opacity 2s ease-out"   
                    secondpagtext1.style.opacity = 1  
                    secondpagtext1.style.transform = "translateY(0px)"

                    secondpagtext2.style.transition = "all 1s ease, opacity 2s ease-out"   
                    secondpagtext2.style.opacity = 1  
                    secondpagtext2.style.transform = "translateY(0px)"
                } else { 
                    secondpagtext1.style.transition = "all 0s ease"   
                    secondpagtext1.style.opacity = 0  
                    secondpagtext1.style.transform = "translateY(100px)" 

                    secondpagtext2.style.transition = "all 0s ease"   
                    secondpagtext2.style.opacity = 0  
                    secondpagtext2.style.transform = "translateY(100px)"
                 }
            });
          })
    
            observer2.observe(secondpag); 


            const observer3 = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) { 
                        thirdpagimgdiv.style.transition = "all 1s ease, opacity 2s ease-out"   
                        thirdpagimgdiv.style.opacity = 1  
                        thirdpagimgdiv.style.transform = "translateY(0px)"

                        thirdpagtitle.style.transition = "all 1s ease, opacity 2s ease-out"   
                        thirdpagtitle.style.opacity = 1  
                        thirdpagtitle.style.transform = "translateY(0px)"


                        thirdpagtext1.style.transition = "all 1s ease, opacity 2s ease-out"   
                        thirdpagtext1.style.opacity = 1  
                        thirdpagtext1.style.transform = "translateY(0px)"
    
                        thirdpagtext2.style.transition = "all 1s ease, opacity 2s ease-out"   
                        thirdpagtext2.style.opacity = 1  
                        thirdpagtext2.style.transform = "translateY(0px)"
                    } else { 
                        thirdpagimgdiv.style.transition = "all 0s ease"   
                        thirdpagimgdiv.style.opacity = 0  
                        thirdpagimgdiv.style.transform = "translateY(100px)" 

                        thirdpagtitle.style.transition = "all 0s ease"   
                        thirdpagtitle.style.opacity = 0  
                        thirdpagtitle.style.transform = "translateY(100px)" 


                        thirdpagtext1.style.transition = "all 0s ease"   
                        thirdpagtext1.style.opacity = 0  
                        thirdpagtext1.style.transform = "translateY(100px)" 
    
                        thirdpagtext2.style.transition = "all 0s ease"   
                        thirdpagtext2.style.opacity = 0  
                        thirdpagtext2.style.transform = "translateY(100px)"
                     }
                });
              })
        
                observer3.observe(thirdpage); 


                const observer4 = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) { 
                            fourthpagimgdiv.style.transition = "all 1s ease, opacity 2s ease-out"   
                            fourthpagimgdiv.style.opacity = 1  
                            fourthpagimgdiv.style.transform = "translateY(0px)"

                            fourthpagtitle.style.transition = "all 1s ease, opacity 2s ease-out"   
                            fourthpagtitle.style.opacity = 1  
                            fourthpagtitle.style.transform = "translateY(0px)"
     
     
                             fourthpagtext1.style.transition = "all 1s ease, opacity 2s ease-out"   
                             fourthpagtext1.style.opacity = 1  
                             fourthpagtext1.style.transform = "translateY(0px)"
         
                         } else { 
                            fourthpagimgdiv.style.transition = "all 0s ease"   
                            fourthpagimgdiv.style.opacity = 0  
                            fourthpagimgdiv.style.transform = "translateY(100px)" 
     
                             fourthpagtitle.style.transition = "all 0s ease"   
                             fourthpagtitle.style.opacity = 0  
                             fourthpagtitle.style.transform = "translateY(100px)" 
     
     
                             fourthpagtext1.style.transition = "all 0s ease"   
                             fourthpagtext1.style.opacity = 0  
                             fourthpagtext1.style.transform = "translateY(100px)" 
         
                          }
                    });
                  })
            
                    observer4.observe(fourthpage); 


                    const observer5 = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) { 
                                console.log('observer5 ativo');
                                fifithpagimgdiv.style.transition = "all 1s ease, opacity 2s ease-out"   
                                fifithpagimgdiv.style.opacity = 1  
                                fifithpagimgdiv.style.transform = "translateY(0px)" 

                                fifithpagtitle.style.transition = "all 1s ease, opacity 2s ease-out"   
                                fifithpagtitle.style.opacity = 1  
                                fifithpagtitle.style.transform = "translateY(0px)"
         
         
                                 fifithpagtext1.style.transition = "all 1s ease, opacity 2s ease-out"   
                                 fifithpagtext1.style.opacity = 1  
                                 fifithpagtext1.style.transform = "translateY(0px)"
             
                             } else {  

                                fifithpagimgdiv.style.transition = "all 0s ease"   
                                fifithpagimgdiv.style.opacity = 0  
                                fifithpagimgdiv.style.transform = "translateY(100px)" 
         
                                fifithpagtitle.style.transition = "all 0s ease"   
                                fifithpagtitle.style.opacity = 0  
                                fifithpagtitle.style.transform = "translateY(100px)" 
         
         
                                 fifithpagtext1.style.transition = "all 0s ease"   
                                 fifithpagtext1.style.opacity = 0  
                                 fifithpagtext1.style.transform = "translateY(100px)" 
             
                              }
                        });
                      })
                
                        observer5.observe(fifithpage);


                        console.log(thirdpage); // Deve retornar o elemento correspondente
console.log(fourthpage); // Deve retornar o elemento correspondente
console.log(fifithpage); // Deve retornar o elemento correspondente
}); 

