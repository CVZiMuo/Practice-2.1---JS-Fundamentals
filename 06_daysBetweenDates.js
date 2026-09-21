function daysBetweenDates(date1, date2) {
    const firstDate = new Date(date1);
    const secDate = new Date(date2);
    
    const timeDifference = Math.abs(secDate - firstDate);
    const daysDiff = Math.ceil(timeDifference / (1000 * 3600 * 24));
    
    return daysDiff;
}

// Ejemplo de uso
console.log("Days between 2024-01-01 & 2024-12-31:", daysBetweenDates("2024-01-01", "2024-12-31"));
console.log("Days between 2000-01-01 & 2025-01-01:", daysBetweenDates("2000-01-01", "2025-01-01"));