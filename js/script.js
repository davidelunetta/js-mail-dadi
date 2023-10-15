const utentiAutorizzati = ["pippo@email.com", "pluto@email.com", "lorem@email.com", "paperino@email.com"];

        function verificaAccesso() {
            const emailInserita = document.getElementById("emailInput").value;

            // Controlla se l'email è presente nella lista
            if (utentiAutorizzati.includes(emailInserita)) {
                document.getElementById("risultato").textContent = "Accesso consentito. Benvenuto!";
            } else {
                document.getElementById("risultato").textContent = "Accesso negato. L'indirizzo email non è autorizzato.";
            }
        }