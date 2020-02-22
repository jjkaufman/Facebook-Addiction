var slider = document.getElementById("example");
slider.addEventListener("input", sliderChange);

//todo fix magic numbers to support custom ranges
function sliderChange(event) {
  var el = event.target;
  if (Number(el.value) > 79) {
    el.value = "79";
  }
  el.style.setProperty("--fluid-fill", 5 - (el.value / el.max) * 5 + "em");
  var pct = Math.floor((1 - el.value / el.max) * 79);
  el.style.setProperty(
    "--value",
    "'" + Math.floor((1 - el.value / 79) * 100) + "%'"
  );
  console.log(Number(el.value) > 80);
}
