        // ======================================================
        // CAPTURAR EL FORMULARIO
        // ======================================================
        const formulario = document.getElementById("formulario");

        // ======================================================
        // EVENTO SUBMIT
        // ======================================================
        formulario.addEventListener("submit", function(evento){

            // Evita que el formulario recargue la página
            evento.preventDefault();

            // ==================================================
            // CAPTURAR LOS DATOS DEL FORMULARIO
            // ==================================================
            const t0 = parseFloat(document.getElementById("t0").value);

            const ts = parseFloat(document.getElementById("ts").value);

            const k = parseFloat(document.getElementById("k").value);

            const t = parseFloat(document.getElementById("t").value);

            // ==================================================
            // VALIDACIONES
            // ==================================================

            // Verificar si algún campo está vacío
            if(
                isNaN(t0) ||
                isNaN(ts) ||
                isNaN(k) ||
                isNaN(t)
            ){
                alert("Por favor complete todos los campos.");
                return;
            }

            // Validar que el tiempo no sea negativo
            if(t < 0){
                alert("El tiempo no puede ser negativo.");
                return;
            }

            // Validar que la constante no sea negativa
            if(k < 0){
                alert("La constante k no puede ser negativa.");
                return;
            }

            // ==================================================
            // FÓRMULA DE LA LEY DE ENFRIAMIENTO
            // T = Ts + (T0 - Ts) * e^(-k * t)
            // ==================================================

            const temperatura =
                ts +
                (t0 - ts) *
                Math.exp(-k * t);

            // ==================================================
            // REDONDEAR EL RESULTADO
            // ==================================================
            const resultadoFinal = Math.round(temperatura);

            // ==================================================
            // MOSTRAR RESULTADO EN PANTALLA
            // ==================================================
            document.getElementById("resultado").textContent =
                resultadoFinal + " °C";

            document.getElementById("mensaje").textContent =
                "La temperatura aproximada del objeto después del tiempo transcurrido es de "
                + resultadoFinal +
                " grados Celsius.";

        });