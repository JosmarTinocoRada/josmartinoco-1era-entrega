function calcularPresupuesto() {
    alert("Bienvenido al calculador de presupuesto.");

    while (true) {
        let tipoDeWeb = prompt("¿Qué tipo de página web deseas: Web Estatica, Landing Page o Aplicacion Web?");
        let costoBase = 0;

        switch (tipoDeWeb.toLowerCase()) {
            case "web estatica":
                costoBase = 100;
                break;
            case "landing page":
                costoBase = 300;
                break;
            case "aplicacion web":
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

