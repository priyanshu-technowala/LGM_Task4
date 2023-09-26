// Initialize an array to store results
let results = [];

// Function to add a result
function addResult() {
    const studentName = document.getElementById("studentName").value;
    const subject = document.getElementById("subject").value;
    const marks = document.getElementById("marks").value;

    // Create a result object
    const result = {
        studentName: studentName,
        subject: subject,
        marks: marks
    };

    // Add the result to the array
    results.push(result);

    // Clear the form
    document.getElementById("studentName").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("marks").value = "";

    // Display the results
    displayResults();
}

// Function to display results
function displayResults() {
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";

    results.forEach((result, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Student: ${result.studentName}, Subject: ${result.subject}, Marks: ${result.marks}`;
        resultList.appendChild(listItem);
    });
}

// Attach the addResult function to the button click event
document.getElementById("addResult").addEventListener("click", addResult);
