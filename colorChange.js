function changeColor() {
    const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}