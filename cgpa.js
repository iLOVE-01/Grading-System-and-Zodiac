function checkHonor() {
    const cgpa = parseFloat(document.getElementById("cgpaInput").value);
    let honor = "";

    if (isNaN(cgpa) || cgpa < 0 || cgpa > 5) {
    document.getElementById("cgparesult").textContent = "Please enter a valid CGPA between 0.00 and 5.00.";
    return;
    }

    if (cgpa >= 4.50) {
    honor = "First Class Honours";
    } else if (cgpa >= 3.50) {
    honor = "Second Class Honours (Upper Division)";
    } else if (cgpa >= 2.40) {
    honor = "Second Class Honours (Lower Division)";
    } else if (cgpa >= 1.50) {
    honor = "Third Class Honours";
    } else if (cgpa >= 1.00) {
    honor = "Pass";
    } else {
    honor = "Fail";
    }

    document.getElementById("cgparesult").textContent = `Your Degree Classification: ${honor}`;
}