document.getElementById("grade-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const percentageInput = document.getElementById("percentage");
    const result = document.getElementById("result");

    if (!percentageInput.value) {
        result.textContent = "Please enter a percentage.";
    } else {
        const percentage = parseFloat(percentageInput.value);
        let grade;

        if (percentage >= 101) {
            grade = "Error!   Add percentages up to 100 .";
        } else if (percentage >= 80) {
            grade = "A+";
        } else if (percentage >= 70) {
            grade = "A";
        } else if (percentage >= 60) {
            grade = "B";
        } else if (percentage >= 50) {
            grade = "C";
        } else {
            grade = "F";
        }

        result.textContent = `Percentage: ${percentage}% - Grade: ${grade}`;
    }
});