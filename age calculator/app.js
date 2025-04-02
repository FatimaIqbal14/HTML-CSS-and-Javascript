document.addEventListener("DOMContentLoaded", function () {
    // Set max date when the page loads
    document.querySelector(".date").max = new Date().toISOString().split("T")[0];
});

function calculateAge() {
    let dateInput = document.querySelector(".date").value;

    if (!dateInput) {
        document.querySelector(".answer").innerText = "Please select your birthdate.";
        return;
    }

    let birthDate = new Date(dateInput)
    let today = new Date()

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.querySelector('.answer').innerHTML = `You are  ${age} years old.`;
}