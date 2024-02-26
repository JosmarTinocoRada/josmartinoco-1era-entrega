function calcularPresupuesto() {
    alert("Bienvenido al calculador de presupuesto.");

    while (true) {
        let tipoDeWeb = prompt("¿Qué tipo de página web deseas: Web Estática, Landing Page o Aplicación Web?");
        let costoBase = 0;

        switch (tipoDeWeb) {
            case "Web Estática":
                costoBase = 100;
                break;
            case "Landing Page":
                costoBase = 300;
                break;
            case "Aplicación Web":
                costoBase = 400;
                break;
            default:
                alert("Tipo de página web no válido. Por favor, elige una opción válida.");
                continue;
        }

        let diasEntrega = parseInt(prompt("¿En cuántos días la quieres?"));
        let numPaginas = parseInt(prompt("¿Cuántas páginas tendrá el sitio?"));

        if (numPaginas > 3) {
            costoBase += 200;
        }
        let costoTotal = costoBase;

        alert("El costo total de tu proyecto es: $" + costoTotal);

        let continuar = prompt("¿Deseas calcular otro presupuesto? (s/n)");
        if (continuar.toLowerCase() !== "s") {
            break;
        }
    }   
}

calcularPresupuesto()

