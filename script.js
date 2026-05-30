document.getElementById('zufall-btn').addEventListener('click', function() {
    // Liste deiner 8 Fakt-Seiten
    const seiten = [
        'fakt1.html',
        'fakt2.html',
        'fakt3.html',
        'fakt4.html',
        'fakt5.html',
        'fakt6.html',
        'fakt7.html',
        'fakt8.html'
    ];
    
    // Generiert eine Zufallszahl zwischen 0 und 7
    const index = Math.floor(Math.random() * seiten.length);
    
    // Weiterleitung zur zufälligen Seite
    window.location.href = seiten[index];
});
