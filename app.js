const submitCol = document.getElementById("submit-col");
const colorBox = document.getElementById("color-box");


submitCol.addEventListener("click", function() {
    const colorName = document.getElementById("name").value;
    colorBox.style.background = colorName;
    console.log(colorName);
});
