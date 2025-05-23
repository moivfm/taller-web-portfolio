//#region ANIMACIONES NO TOCAR
const showAnimation = function(target, from, to) {
    gsap.fromTo(target, {
        x: from,
        duration: 1
    }, { 
        x: to, 
        ease: "power1.out",
        duration: 1.5 
    })
}

const fadeAnimation = function(target, delay) {
    gsap.fromTo(target, {
        opacity: 0,
        duration: 1
    }, { 
        opacity: 1,
        duration: 1.5,
        delay: delay
    })
}

const scaleAnimation = function(target, from, to, delay) {
    gsap.fromTo(target, {
        scale: from,
        duration: 1
    }, { 
        scale: to,
        duration: 1.5,
        delay: delay
    })
}
//#endregion

//#region Animaciones
showAnimation(".text-left", -200, 0)
showAnimation(".text-right", 200, 0)

fadeAnimation(".card-1 h1", 0)
fadeAnimation(".card-1 h5", 0.3)
fadeAnimation(".card-1 img", 0.6)

fadeAnimation(".card-2 h1", 0.3)
fadeAnimation(".card-2 h5", 0.6)
fadeAnimation(".card-2 img", 0.9)

fadeAnimation(".card-3 h1", 0.6)
fadeAnimation(".card-3 h5", 0.9)
fadeAnimation(".card-3 img", 1.2)

fadeAnimation(".card-4 h1", 0.9)
fadeAnimation(".card-4 h5", 1.2)
fadeAnimation(".card-4 img", 1.5)
//#endregion

// PARA MOVERSE
// const detail = document.querySelector(".detail")
// detail.scrollIntoView({behavior: "smooth"})

//#region Lenis NO TOCAR
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
//#endregion