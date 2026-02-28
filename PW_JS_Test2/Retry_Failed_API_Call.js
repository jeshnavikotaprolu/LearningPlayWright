const Max_Attempts = 5;
let attempt = 0;
let success = false;

do {
    attempt++;

    if (attempt == 2) {
        console.log("Attempt", attempt, ": Success Response 200 OK)");
        success = true;
    } else {
        console.log("Attempt", attempt, ": Failed (Timeout/Error)");
    }
} while (!success && attempt < Max_Attempts);
if (!success) {
    console.log("API call PASSED after", attempt,"attempts(s).");
} else {
    console.log("API call FAILED after", attempt,"attempts(s).");

}

