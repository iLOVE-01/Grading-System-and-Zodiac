function checkGradeLevel() {
    const score = parseFloat(document.getElementById("gradeInput").value);
    let grade = "";

    if (isNaN(score) || score < 0 || score > 100) {
    document.getElementById("gradeResult").textContent =
    "Please enter a valid score between 0 and 100.";
    return;
}

    if (score >= 85) {
    grade = "A*";
    } else if (score >= 70) {
    grade = "A";
    } else if (score >= 60) {
    grade = "B";
    } else if (score >= 50) {
    grade = "C";
    } else if (score >= 45) {
    grade = "D";
    } else if (score >= 40) {
    grade = "E";
    } else {
    grade = "F";
    }

    document.getElementById(
    "gradeResult"
    ).textContent = `Your Grade is: ${grade}`;
}
