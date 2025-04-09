function getZodiac() {
    const month = parseInt(document.getElementById("month").value);
    const day = parseInt(document.getElementById("day").value);
    let zodiac = "";

    if (!month || !day || month < 1 || month > 12 || day < 1 || day > 31) {
    document.getElementById("zodiacresult").textContent = "Please enter a valid date.";
    return;
    }

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    zodiac = "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    zodiac = "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    zodiac = "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    zodiac = "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    zodiac = "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    zodiac = "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    zodiac = "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    zodiac = "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    zodiac = "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    zodiac = "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    zodiac = "Sagittarius";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    zodiac = "Capricorn";
    } else {
    zodiac = "Invalid date";
    }

    document.getElementById("zodiacresult").textContent = `Your Zodiac Sign is: ${zodiac}`;
}