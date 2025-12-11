var image = document.getElementById("thehiddenone")
document.addEventListener("keydown", (event) => {
    if (event.code === "Enter") { 
        const image = document.getElementById("thehiddenone");
        let currentOpacity = Number(image.style.opacity);

        if (currentOpacity === 1) {
            image.style.opacity = "0.65";
        } else {
            image.style.opacity = "1";
        }
    }
});