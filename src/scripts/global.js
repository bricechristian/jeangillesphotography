import { inView, animate } from "motion";

//TYPOGRAPHY SHIFT
if(document.querySelector(".typography-shift") !== null){
    document.querySelectorAll(".typography-shift").forEach(el => {
        inView(el, ({ target }) => {
            animate(
                target.querySelector("span"),
                { y: ["100%", "0"], opacity: ["0", "1"] },
                { duration: 0.75, easing: [0.25, 1, 0.5, 1] }
            );
        });        
    })
}