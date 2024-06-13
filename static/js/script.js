document.addEventListener('mousemove', function (e) {
    // if(e.target.id !== "navbar")
    //     return
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const percentX = x / width;
    const percentY = y / height;

    const centerX = percentX * 100;
    const centerY = percentY * 100;

    const gradient = `radial-gradient(circle at ${centerX}% ${centerY}%, #dededed5, #dedede)`;

    document.querySelector('.navbar').style.background = gradient;
    document.querySelector('.footer').style.background = gradient;
});

// Event-Listener für den Button
document.getElementById("accept-button").onclick = function() {
    document.getElementById("cookie-banner").style.display = "none";
};
