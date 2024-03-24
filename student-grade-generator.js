// Prompt the user to input student marks
const Grade = prompt('Please enter your marks (0-100):');
const marks = parseInt(Grade);

// Function to calculate and return the grade based on marks
function calculateGrade(marks) {
    //input Validation
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        //Grade calculation
        if (marks >= 80 && marks <= 100) {
            return 'A';
        } else if (marks >= 60 && marks <= 79) {
            return 'B';
        } else if (marks >= 50 && marks <= 59) {
            return 'C';
        } else if (marks >= 40 && marks <= 49) {
            return 'D';
        } else {
            return 'E';
        }
    } else {
        return 'Invalid input! Marks should be between 0 and 100.';
    }

}

// Check if the input is correct and calculate the grade:
if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    const grade = calculateGrade(marks);
    //Update the content of the HTML element with id "response" to display the student grade
    document.getElementById("response").innerText = `Student Grade: ${grade}`;
} else {
    document.getElementById("response").innerText = 'Invalid input! Please enter a valid number between 0 and 100.';
}
