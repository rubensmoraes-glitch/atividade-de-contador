let valor = 0;
const num = document.getElementById("numero");
const menos = document.getElementById("menos");
const mais = document.getElementById("mais");

menos.addEventListener("click", () => {
    if(valor == 0) return;
    valor -= 1;
    num.textContent = valor;
});

mais.addEventListener("click", () => {
    valor += 1;
    num.textContent = valor;
});