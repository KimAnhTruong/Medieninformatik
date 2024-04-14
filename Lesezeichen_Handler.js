/*document.addEventListener('DOMContentLoaded', function() {
    console.log("Script geladen");

    let dn = document.URL;
    dn = dn.substring(dn.lastIndexOf('/') + 1);

    document.querySelectorAll('.LesezeichenButton').forEach(button => {
        button.addEventListener('click', function() {
            console.log("Button geklickt");
            let titel = document.querySelector('h1').textContent;
            let lesezeichenKey = 'Lesezeichen|' + dn + '|' + titel;

            if (localStorage.getItem(lesezeichenKey)) {
                localStorage.removeItem(lesezeichenKey);
                this.classList.remove('active');
            } else {
                localStorage.setItem(lesezeichenKey, 'gesetzt');
                this.classList.add('active');
            }
        });
    });

    let titel = document.querySelector('h1').textContent;
    let lesezeichenKey = 'Lesezeichen|' + dn + '|' + titel;
    if (localStorage.getItem(lesezeichenKey)) {
        document.querySelector('.LesezeichenButton').classList.add('active');
    }
});*/

$(document).ready(function() {
    console.log("Script geladen");

    // Namen der HTML zugreiffen (nach Hinweis)
    let dn = document.URL.substring(document.URL.lastIndexOf('/') + 1);

    // Event-Handler für Klick auf Lesezeichen <button> hinzufügen
    $('.LesezeichenButton').on('click', function() {
        console.log("Button geklickt");
        let titel = $('h1').text();
        let lesezeichenKey = 'Lesezeichen|' + dn + '|' + titel;

        // Zustand des Lesezeichens 
        if (localStorage.getItem(lesezeichenKey)) {
            localStorage.removeItem(lesezeichenKey);
            $(this).removeClass('active');
        } else {
            localStorage.setItem(lesezeichenKey, 'gesetzt');
            $(this).addClass('active');
        }
    });

    // Anfänglichen Zustand des Lesezeichens beim Laden der Seite setzen
    let titel = $('h1').text();
    let lesezeichenKey = 'Lesezeichen|' + dn + '|' + titel;
    if (localStorage.getItem(lesezeichenKey)) {
        $('.LesezeichenButton').addClass('active');
    }
});

