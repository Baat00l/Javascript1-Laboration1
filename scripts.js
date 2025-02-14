function getName() {
    // Fråga användaren vad de heter
    let name = prompt("Vad heter du?");
    
    // Returnera namnet i STORA BOKSTÄVER
    return name.toUpperCase();
}

// Anropa funktionen getName och lagra resultatet
let name = getName();

// Visa en alert med meddelandet
alert(`Hej ${name}, visste du att ditt namn har ${name.length} bokstäver?`);
