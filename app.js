const diario = document.querySelector("#diario");
const semanal = document.querySelector("#semanal");
const mensual = document.querySelector("#mensual");

const horas = document.querySelectorAll(".horas");
const last = document.querySelectorAll(".last")
// console.log(horas[1].innerHTML);

function dayChange() {
    horas[0].innerHTML = "5hrs";
    horas[1].innerHTML = "1hrs";
    horas[2].innerHTML = "0hrs";
    horas[3].innerHTML = "1hrs";
    horas[4].innerHTML = "1hrs";
    horas[5].innerHTML = "0hrs";

    last[0]. innerHTML = "Last Day - 7hrs"
    last[1]. innerHTML = "Last Day - 2hrs"
    last[2]. innerHTML = "Last Day - 1hrs"
    last[3]. innerHTML = "Last Day - 1hrs"
    last[4]. innerHTML = "Last Day - 3hrs"
    last[5]. innerHTML = "Last Day - 1hrs"

    diario.classList.add("active");
    semanal.classList.remove("active");
    mensual.classList.remove("active");
}

function weekChange() {
    horas[0].innerHTML = "32hrs";
    horas[1].innerHTML = "10hrs";
    horas[2].innerHTML = "4hrs";
    horas[3].innerHTML = "4hrs";
    horas[4].innerHTML = "5hrs";
    horas[5].innerHTML = "2hrs";

    last[0]. innerHTML = "Last Week - 36hrs"
    last[1]. innerHTML = "Last Week - 8hrs"
    last[2]. innerHTML = "Last Week - 7hrs"
    last[3]. innerHTML = "Last Week - 5hrs"
    last[4]. innerHTML = "Last Week - 10hrs"
    last[5]. innerHTML = "Last Week - 2hrs"

    semanal.classList.add("active");
    diario.classList.remove("active");
    mensual.classList.remove("active");
}

function monthChange() {
    horas[0].innerHTML = "103hrs";
    horas[1].innerHTML = "23hrs";
    horas[2].innerHTML = "13hrs";
    horas[3].innerHTML = "11hrs";
    horas[4].innerHTML = "21hrs";
    horas[5].innerHTML = "7hrs";

    last[0]. innerHTML = "Last Month - 128hrs"
    last[1]. innerHTML = "Last Month - 29hrs"
    last[2]. innerHTML = "Last Month - 19hrs"
    last[3]. innerHTML = "Last Month - 18hrs"
    last[4]. innerHTML = "Last Month - 23hrs"
    last[5]. innerHTML = "Last Month - 11hrs"

    mensual.classList.add("active");
    diario.classList.remove("active");
    semanal.classList.remove("active");
}

diario.addEventListener("click", dayChange);
semanal.addEventListener("click", weekChange);
mensual.addEventListener("click", monthChange);