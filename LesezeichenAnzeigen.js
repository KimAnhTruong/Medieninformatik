/*document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM geladen");

    let lesezeichenListe = document.getElementById('LesezeichenListe');
    console.log("Lesezeichen Liste Element: ", lesezeichenListe);

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log("Current Local Storage Key: ", key);

        if (key.startsWith('Lesezeichen|')) {
            let value = localStorage.getItem(key);
            console.log("Value for Key '" + key + "': ", value);

            let parts = key.split('|');
            let filename = parts[1];
            let title = parts[2];
            console.log("Extracted Filename: ", filename, " and Title: ", title);

            let listItem = document.createElement('li');
            let link = document.createElement('a');
            link.href = '../' + filename; 
            link.textContent = title; 
            listItem.appendChild(link);

            lesezeichenListe.appendChild(listItem);
        }
    }
});*/

$(document).ready(function() {
    console.log("DOM geladen");

    // LesezeichenListe zugreiffen
    let lesezeichenListe = $('#LesezeichenListe');
    console.log("Lesezeichen Liste Element: ", lesezeichenListe);

    // Durchlaufe alle Schlüssel im Local Storage
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log("Current Local Storage Key: ", key);

        // Überprüfe, ob der Schlüssel mit dem Lesezeichen-Prefix beginnt
        if (key.startsWith('Lesezeichen|')) {
            let value = localStorage.getItem(key);
            console.log("Value for Key '" + key + "': ", value);

            // Extrahiere Titel und Dateiname aus dem Schlüssel
            let parts = key.split('|');
            let filename = parts[1];
            let title = parts[2];
            console.log("Extracted Filename: ", filename, " and Title: ", title);

            // Erstelle ein Listen-Element und einen Link für jedes Lesezeichen
            let listItem = $('<li>');
            let link = $('<a>').attr('href', '../' + filename).text(title);
            listItem.append(link);

            // Füge es zur Liste hinzu
            lesezeichenListe.append(listItem);
        }
    }
});

