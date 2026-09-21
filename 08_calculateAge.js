function calculateAge(birthDate) {
    const birth = new Date(birthDate);
    const today = new Date();
    
    let age = today.getFullYear() - birth.getFullYear();
    
    const monthDifference = today.getMonth() - birth.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

// Ejemplos de uso
console.log("Age for year 2000-05-15:", calculateAge("2000-05-15"));
console.log("Age for year 1990-12-25:", calculateAge("1990-12-25"));