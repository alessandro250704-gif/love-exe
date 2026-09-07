document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", function () {

        // ==========================================
        // VENTANA INICIAL
        // ==========================================

        const modal = document.createElement("div");
        modal.className = "modal";

        modal.innerHTML = `
            <div class="modal-box">

                <div class="modal-heart">♥</div>

                <h2>SORPRESA DETECTADA</h2>

                <p class="modal-text">
                    Parece que encontré algo
                    <br>
                    especialmente preparado para ti...
                </p>

                <div class="loading">
                    <div class="loading-bar"></div>
                </div>

                <p class="loading-text">
                    PREPARANDO SORPRESA...
                </p>

            </div>
        `;

        document.body.appendChild(modal);


        // ==========================================
        // ACCESO CONCEDIDO
        // ==========================================

        setTimeout(function () {

            modal.querySelector(".modal-box").innerHTML = `

                <div class="modal-heart">♥</div>

                <h2>ACCESO CONCEDIDO</h2>

                <p class="modal-text">
                    Todo está listo...
                    <br>
                    pero antes tendrás que superar
                    <br>
                    una pequeña misión. 👀
                </p>

                <button class="continue-button">
                    CONTINUAR →
                </button>

            `;

            modal.querySelector(".continue-button")
                .addEventListener("click", function () {

                    mostrarNivel1(modal);

                });

        }, 2500);

    });


    // ==========================================
    // NIVEL 1
    // ==========================================

    function mostrarNivel1(modal) {

        modal.querySelector(".modal-box").innerHTML = `

            <p class="level-number">
                MISIÓN 01
            </p>

            <div class="modal-heart small-heart">
                ♥
            </div>

            <h2>
                ¿DÓNDE FUE NUESTRO PRIMER BESO?
            </h2>

            <p class="question-subtitle">
                A ver si todavía te acuerdas... 👀❤️
            </p>

            <div class="answers">

                <button class="answer">
                    🏠 En tu casa
                </button>

                <button class="answer correct">
                    🌳 En un parque
                </button>

                <button class="answer">
                    🚶 Caminando jajaja
                </button>

            </div>

        `;

        activarRespuestas(
            modal,
            1,
            function () {
                mostrarCorrectoNivel1(modal);
            }
        );
    }


    // ==========================================
    // NIVEL 1 - CORRECTO
    // ==========================================

    function mostrarCorrectoNivel1(modal) {

        modal.querySelector(".modal-box").innerHTML = `

            <p class="level-number">
                MISIÓN 01
            </p>

            <div class="success-icon">
                ✓
            </div>

            <h2>
                ¡CORRECTO! ❤️
            </h2>

            <p class="modal-text">
                Sabía que te ibas a acordar...
                <br><br>
            </p>

            <div class="memory-images">

                <img src="img/pregunta1_1.jpeg">

                <img src="img/pregunta1_2.jpeg">

            </div>

            <button class="continue-button">
                SIGUIENTE →
            </button>

        `;

        modal.querySelector(".continue-button")
            .addEventListener("click", function () {

                mostrarNivel2(modal);

            });
    }


    // ==========================================
    // NIVEL 2
    // ==========================================

    function mostrarNivel2(modal) {

        modal.querySelector(".modal-box").innerHTML = `

            <p class="level-number">
                MISIÓN 02
            </p>

            <h2>
                ¿TE ACUERDAS DE ESTE MOMENTO? 📸
            </h2>

            <div class="question-photo">

                <img src="img/pregunta2_1.jpeg">

            </div>

            <p class="question-subtitle">
                ¿Qué estábamos haciendo ese día?
            </p>

            <div class="answers">

                <button class="answer">
                    🎄 Celebrando Navidad
                </button>

                <button class="answer">
                    🎂 Celebrando tu cumpleaños
                </button>

                <button class="answer correct">
                    ❤️ Celebrando nuestro aniversario
                </button>

            </div>

        `;

        activarRespuestas(
            modal,
            2,
            function () {
                mostrarCorrectoNivel2(modal);
            }
        );
    }


    // ==========================================
    // NIVEL 2 - CORRECTO
    // ==========================================

    function mostrarCorrectoNivel2(modal) {

        modal.querySelector(".modal-box").innerHTML = `

            <p class="level-number">
                MISIÓN 02
            </p>

            <div class="success-icon">
                ✓
            </div>

            <h2>
                ¡CORRECTO! ❤️
            </h2>

            <p class="modal-text">
                ¡Sííí! Te acordabas de este momento. 🥹
                <br><br>
                Y ahora mira la otra foto...
            </p>

            <div class="single-memory-image">

                <img src="img/pregunta2_2.jpeg">

            </div>

            <button class="continue-button">
                SIGUIENTE →
            </button>

        `;

        modal.querySelector(".continue-button")
            .addEventListener("click", function () {

                mostrarNivel3(modal);

            });
    }


    // ==========================================
    // NIVEL 3
    // ==========================================

    function mostrarNivel3(modal) {

        modal.querySelector(".modal-box").innerHTML = `

            <p class="level-number">
                MISIÓN 03
            </p>

            <div class="modal-heart small-heart">
                ♥
            </div>

            <h2>
                ¿QUÉ ES ALGO QUE NUNCA PUEDE
                FALTAR CUANDO ESTAMOS JUNTOS? ❤️
            </h2>

            <div class="answers">

                <button class="answer">
                    😂 Las risas
                </button>

                <button class="answer">
                    🍔 Las comidas jajaja
                </button>

                <button class="answer">
                    ❤️ El amor
                </button>

                <button class="answer correct">
                     Todas las anteriores jeje 🤭 &lt;3
                </button>

            </div>

        `;

        activarRespuestas(
            modal,
            3,
            function () {
                mostrarCorrectoNivel3(modal);
            }
        );
    }


    // ==========================================
    // NIVEL 3 - CORRECTO
    // ==========================================

    function mostrarCorrectoNivel3(modal) {

        modal.querySelector(".modal-box").innerHTML = `

            <p class="level-number">
                MISIÓN 03
            </p>

            <div class="success-icon">
                ✓
            </div>

            <h2>
                ¡CORRECTO! ❤️
            </h2>

            <p class="modal-text">
                Obviamente... todas las anteriores JAJAJA 😂❤️
                <br><br>
                Porque contigo nunca falta ninguna.
            </p>

            <div class="memory-images">

                <img src="img/pregunta3_1.jpeg">

                <img src="img/pregunta3_2.jpeg">

            </div>

            <button class="continue-button">
                SIGUIENTE →
            </button>

        `;

        modal.querySelector(".continue-button")
            .addEventListener("click", function () {

                mostrarNivel4(modal);

            });
    }


    // ==========================================
    // NIVEL 4 - PREGUNTA FINAL
    // ==========================================

    function mostrarNivel4(modal) {

        modal.querySelector(".modal-box").innerHTML = `

            <p class="level-number">
                MISIÓN FINAL ❤️
            </p>

            <div class="modal-heart">
                ♥
            </div>

            <h2>
                ¿QUIÉN AMA MÁS A QUIÉN?
            </h2>

            <p class="question-subtitle">
                Esta pregunta es muy importante... 👀
            </p>

            <div class="answers">

                <button class="answer">
                    ❤️ Tú 
                </button>

                <button class="answer">
                    💙 Tú en azul jajaja
                </button>

                <button class="answer correct">
                    ❤️ Obvio que yo más JAJAJA
                </button>

            </div>

        `;

        activarRespuestas(
            modal,
            4,
            function () {
                mostrarMisionCompletada(modal);
            }
        );
    }


    // ==========================================
    // MISIÓN COMPLETADA
    // ==========================================

    function mostrarMisionCompletada(modal) {

        modal.querySelector(".modal-box").innerHTML = `

            <div class="success-icon big-success">
                ✓
            </div>

            <h2>
                MISIÓN COMPLETADA ❤️
            </h2>

            <p class="modal-text">
                No había otra respuesta posible JAJAJA 😂❤️
                <br><br>
                Has superado todas las pruebas.
                <br><br>
                Pero todavía falta algo...
            </p>

            <button class="continue-button">
                CONTINUAR →
            </button>

        `;

        modal.querySelector(".continue-button")
            .addEventListener("click", function () {

                mostrarRevelacion(modal);

            });

    }


    // ==========================================
    // REVELACIÓN
    // ==========================================

    function mostrarRevelacion(modal) {

        modal.querySelector(".modal-box").innerHTML = `

            <div class="modal-heart">
                ♥
            </div>

            <h2>
                PREPÁRATE... 👀
            </h2>

            <p class="modal-text">
                La verdadera sorpresa
                <br>
                está a punto de aparecer...
            </p>

            <div class="loading">
                <div class="loading-bar"></div>
            </div>

            <p class="loading-text">
                PREPARANDO RECOMPENSA...
            </p>

        `;


        setTimeout(function () {

            modal.querySelector(".modal-box").innerHTML = `

                <div class="modal-heart">
                    ♥
                </div>

                <h2>
                    RECOMPENSA DESBLOQUEADA
                </h2>

                <p class="modal-text">
                    Has completado todas las misiones. ❤️
                    <br><br>
                    Ahora sí...
                    <br>
                    llegó el momento de descubrir
                    lo que estaba escondiendo.
                </p>

                <button class="continue-button">
                    DESCUBRIR SORPRESA →
                </button>

            `;

            modal.querySelector(".continue-button")
                .addEventListener("click", function () {

                    mostrarConcierto(modal);

                });

        }, 3000);

    }


    // ==========================================
    // REVELACIÓN DEL CONCIERTO
    // ==========================================

    function mostrarConcierto(modal) {

        modal.querySelector(".modal-box").innerHTML = `

            <p class="level-number">
                🎫 ACCESO ESPECIAL DETECTADO
            </p>

            <div class="modal-heart">
                ♥
            </div>

            <h2>
                LA REINA DEL FLOW
                <br>
                EN CONCIERTO ❤️
            </h2>

            <div class="concert-image">

                <img src="img/concierto.jpg">

            </div>

            <div class="concert-info">

                <p>
                    📅 <strong>12 DE SEPTIEMBRE DE 2026</strong>
                </p>

                <p>
                    📍 <strong>COSTA 21 — LIMA</strong>
                </p>

            </div>

            <p class="modal-text">
                Pero espera...
                <br><br>
                Hay una pregunta muy importante:
                <br><br>
                <strong>¿Ya sabes con quién vas?</strong> 👀
            </p>

            <button class="continue-button">
                OBVIO QUE CONMIGO ❤️
            </button>

        `;

        modal.querySelector(".continue-button")
            .addEventListener("click", function () {

                mostrarSobre(modal);

            });

    }


    // ==========================================
    // ÚLTIMA PANTALLA
    // ==========================================
function mostrarSobre(modal) {

    modal.querySelector(".modal-box").innerHTML = `

        <div class="success-icon big-success">
            ♥
        </div>

        <h2>
            MISIÓN COMPLETADA ❤️
        </h2>

        <p class="modal-text">

            Felicitaciones,  ...

            <br><br>

            Ahora es momento de llevarte
            <br>
            a vivir otro recuerdo tan especial conmigo. ❤️

            <br><br>

            <strong>
                TU REGALO ESTA CERCAAAA
            </strong>

            <br><br>

            Pero todavía no lo puedes ver aquí... 👀

        </p>

        <div class="envelope-message">

            📱

            <br>

            <strong>
                MIRA TU WHATSAPP ❤️
            </strong>

            <br>

            <span>
                Hay unas entradas esperándote... jejej
            </span>

        </div>

    `;

}


    // ==========================================
    // SISTEMA DE RESPUESTAS
    // ==========================================

    function activarRespuestas(modal, nivel, funcionCorrecta) {

        const answers = modal.querySelectorAll(".answer");

        answers.forEach(function (answer) {

            answer.addEventListener("click", function () {

                if (answer.classList.contains("correct")) {

                    funcionCorrecta();

                } else {

                    mostrarIncorrecto(modal, nivel);

                }

            });

        });

    }


    // ==========================================
    // RESPUESTA INCORRECTA
    // ==========================================

    function mostrarIncorrecto(modal, nivel) {

        modal.querySelector(".modal-box").innerHTML = `

            <div class="modal-heart">
                ♥
            </div>

            <h2>
                ❌ RESPUESTA INCORRECTA
            </h2>

            <p class="modal-text">

                Pero bueno...
                <br>
                te la voy a dejar pasar esta vez ❤️
                <br><br>
                No te preocupes, puedes continuar. 😂

            </p>

            <button class="continue-button">
                CONTINUAR →
            </button>

        `;

        modal.querySelector(".continue-button")
            .addEventListener("click", function () {

                if (nivel === 1) {
                    mostrarNivel1(modal);
                }

                else if (nivel === 2) {
                    mostrarNivel2(modal);
                }

                else if (nivel === 3) {
                    mostrarNivel3(modal);
                }

                else if (nivel === 4) {
                    mostrarNivel4(modal);
                }

            });

    }

});
