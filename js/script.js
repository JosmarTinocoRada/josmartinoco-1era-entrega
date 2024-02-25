function calcularPresupuesto() {
    alert("Bienvenido al calculador de presupuesto.");

    while (true) {
        var tipoDeWeb = prompt("¿Qué tipo de página web deseas: Web Estática, Landing Page o Aplicación Web?");
        var costoBase = 0;

        if (tipoDeWeb === "Web Estática") {
            costoBase = 100;
        } else if (tipoDeWeb === "Landing Page") {
            costoBase = 300;
        } else if (tipoDeWeb === "Aplicación Web") {
            costoBase = 400;
        } else {
            alert("Tipo de página web no válido. Por favor, elige una opción válida.");
            continue;
        }

        var diasEntrega = parseInt(prompt("¿En cuántos días la quieres?"));
        var numPaginas = parseInt(prompt("¿Cuántas páginas tendrá el sitio?"));

        if (numPaginas > 3) {
            costoBase += 200;
        }

        // Calculando el costo total
        var costoTotal = costoBase;

        alert("El costo total de tu proyecto es: $" + costoTotal);

        var continuar = prompt("¿Deseas calcular otro presupuesto? (s/n)");
        if (continuar.toLowerCase() !== "s") {
            break;
        }
    }
}