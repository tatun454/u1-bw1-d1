let stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        for(let i = stars.length-1; i >= 0; i--){
            if(index >= i)            
                stars[i].classList.add("active");
            else
                stars[i].classList.remove("active");
        }
    });
});