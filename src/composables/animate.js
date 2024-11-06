import gsap  from "gsap";

export const animate = () => {
    const globalBeforeEnter = (el) =>{
        gsap.set(el, {
            y: 100,
            opacity: 0,
          });
    }

    const globalEnter = (el, index) => {
        gsap.to(el, {
            opacity: 1,
            duration: 0.8,
            y: 0,
            delay: index * 0.2,
          });
    }

    const backgroundBeforeEnter = (el) => {
        gsap.set(el, {
            y: el.dataset.position + 400,
          })
    }

    const backgroundEnter = (el) => {
        gsap.to(el, {
            y:0,
            duration: 1,
          } )
    }

    return {
        backgroundBeforeEnter,
        backgroundEnter,
        globalBeforeEnter,
        globalEnter,
    }
    
      
}