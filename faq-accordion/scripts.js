let p = document.getElementsByClassName("plus");
let m = document.getElementsByClassName("minus");
let d = document.getElementsByClassName("details");
let is = false;
for (i = 0; i < 4; i++) {
  if (!is) {
    let c = i;
    p[c].addEventListener("click", () => {
      p[c].classList.add("hide");
      m[c].classList.remove("hide");
      d[c].classList.remove("hide");
    });
    m[c].addEventListener("click", () => {
      m[c].classList.add("hide");
      d[c].classList.add("hide");
      p[c].classList.remove("hide");
    });
    is = false;
  } else {
  }
}
