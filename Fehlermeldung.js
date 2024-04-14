
/*fetch("Fehlermeldung.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        erzeugeFehlerTabelle(data);
    })
    .catch(function(error) {
        console.log("error: " + error);
    });

function erzeugeFehlerTabelle(data) {
    let aus = '';

    
    for (let i = 0; i < data.length; i++) {
        aus += '<tr>';
        aus += '<td>' + data[i].Code + '</td>';
        aus += '<td>' + data[i].Beschreibung + '</td>';

        
        aus += '<td>';
        if (Array.isArray(data[i].Lösungsansatz)) {
            data[i].Lösungsansatz.forEach(function(ansatz) {
                aus += '<span class="lösungsansatz">' + ansatz + '</span><br>';
            });
        } else {
            aus += '<span class="lösungsansatz">' + data[i].Lösungsansatz + '</span>';
        }
        aus += '</td>';
        aus += '</tr>';
    }

    document.getElementById("FehlermeldungTabelle").querySelector('tbody').innerHTML = aus;
}*/

/*JSON-Datei laden*/
$.getJSON('Fehlermeldung_HA_Teil2_A1/Fehlermeldung.json', function (data) {
    erzeugeFehlerTabelle(data); /* Beim erfolgreichen Laden rufe die Funktion 'erzeugeFehlerTabelle' mit den geladenen Daten auf*/
})

    .fail(function (error) {
        console.log("error: " + error); /*Fehlermeldung in der Konsole*/
    });

/* Funktion erstellt eine HTML-Tabelle aus JSON-Daten*/
function erzeugeFehlerTabelle(data) {
    let aus = '';

    /*Durchlaufe jedes Element in den geladenen Daten*/
    $.each(data, function (index, error) {
        aus += '<tr>';  /// Jeder Fehler wird eine Tabellreihe erstellt

        //Fügen Code und Beschreibung hinzu
        aus += '<td>' + error.Code + '</td>';
        aus += '<td>' + error.Beschreibung + '</td>';

        //Prüfen, ob Lösungsansatz ein Array oder ein String
        aus += '<td>';
        if ($.isArray(error.Lösungsansatz)) {

            /* Wenn Lösungsansatz ein Array ist, erstelle für jedes Element einen <span>
            Damit es Zeilenumbruch erhalten kann*/
            $.each(error.Lösungsansatz, function (i, ansatz) {
                aus += '<span class="lösungsansatz">' + ansatz + '</span><br>';
            });
        } else {

            //Wenn Lösungsansatz ein String, füge direkt ein
            aus += '<span class="lösungsansatz">' + error.Lösungsansatz + '</span>';
        }
        aus += '</td>';
        aus += '</tr>';
    });

    $('#FehlermeldungTabelle tbody').html(aus);
}



