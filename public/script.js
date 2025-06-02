function updateDatingTimer() {
    const datingDate = new Date('2025-05-03T16:06:00');
    const currentDate = new Date();

    let diff = currentDate - datingDate;

    if (diff <= 0) {
        document.querySelectorAll('.value_timer').forEach(span => span.textContent = '0');
        return;
    }

    let seconds = Math.floor(diff / 1000) % 60;
    let minutes = Math.floor(diff / (1000 * 60)) % 60;
    let hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

    // Calculando anos, meses e dias com precisão de calendário
    let start = new Date(datingDate.getFullYear(), datingDate.getMonth(), datingDate.getDate());
    let end = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
        months--; 
        const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const values = [years, months, days, hours, minutes, seconds];
    const spans = document.querySelectorAll('.value_timer');

    spans.forEach((span, index) => {
        span.textContent = values[index];
    });
}

// Atualiza a cada segundo
setInterval(updateDatingTimer, 1000);
updateDatingTimer(); // Chamada inicial