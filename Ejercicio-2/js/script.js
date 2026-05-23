        // ======================================================
        // CAPTURAR EL FORMULARIO
        // ======================================================
        const formulario = document.getElementById("formulario");

        // ======================================================
        // FUNCIÓN FACTORIAL RECURSIVA
        // ======================================================
        function factorialRecursivo(numero){

            // Caso base
            if(numero === 0 || numero === 1){
                return 1;
            }

            // Llamada recursiva
            return numero * factorialRecursivo(numero - 1);
        }

        // ======================================================
        // FUNCIÓN PARA CALCULAR COMBINACIONES
        // ======================================================
        function combinacion(n, r){

            // Fórmula:
            // C(n,r) = n! / (r! * (n-r)!)

            return factorialRecursivo(n) /
            (
                factorialRecursivo(r) *
                factorialRecursivo(n - r)
            );
        }

        // ======================================================
        // EVENTO SUBMIT
        // ======================================================
        formulario.addEventListener("submit", function(evento){

            // Evitar recarga de página
            evento.preventDefault();

            // ==================================================
            // CAPTURAR DATOS
            // ==================================================
            const n1 = parseInt(document.getElementById("n1").value);

            const r1 = parseInt(document.getElementById("r1").value);

            const n2 = parseInt(document.getElementById("n2").value);

            const r2 = parseInt(document.getElementById("r2").value);

            // ==================================================
            // VALIDACIONES
            // ==================================================

            // Verificar campos vacíos
            if(
                isNaN(n1) ||
                isNaN(r1) ||
                isNaN(n2) ||
                isNaN(r2)
            ){

                alert("Por favor complete todos los campos.");

                return;
            }

            // Validar negativos
            if(
                n1 < 0 ||
                r1 < 0 ||
                n2 < 0 ||
                r2 < 0
            ){

                alert("Los valores no pueden ser negativos.");

                return;
            }

            // Validar r <= n
            if(r1 > n1){

                alert("En el Grupo 1, r1 no puede ser mayor que n1.");

                return;
            }

            if(r2 > n2){

                alert("En el Grupo 2, r2 no puede ser mayor que n2.");

                return;
            }

            // ==================================================
            // CALCULAR COMBINACIONES
            // ==================================================
            const grupo1 = combinacion(n1, r1);

            const grupo2 = combinacion(n2, r2);

            // Resultado total
            const total = grupo1 * grupo2;

            // ==================================================
            // FORMATEAR RESULTADO
            // ==================================================
            const totalFormateado =
            total.toLocaleString("es-ES");

            // ==================================================
            // MOSTRAR RESULTADOS
            // ==================================================
            document.getElementById("resultado").textContent =
            totalFormateado;

            document.getElementById("mensaje").textContent =
            "El total de combinaciones posibles para el sorteo es de "
            + totalFormateado + ".";

        });