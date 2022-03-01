const allCourses = document.querySelector(".courses");
const mayor = document.getElementById("mayor");
const programas = document.getElementById("programas");
allCourses.addEventListener("mouseenter", () => {
  mayor.style.transform = "rotate(90deg)";
});
allCourses.addEventListener("mouseleave", () => {
  mayor.style.transform = "rotate(0deg)";
});
const cursos = ["Javascript", "Python", "Django", "React"];
let valor = "";
cursos.forEach((e) => (valor += `<span>${e}</span>`));
programas.innerHTML = valor;
