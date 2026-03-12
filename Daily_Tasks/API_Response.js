//10th March 2026 Tasks
//Task 1: API Response Codes
let responses = [200, 201, 404, 500, 404, 200, 503];
// 1. Check if ALL responses are successful (200–299)
const allSuccessful = responses.every(code => code >= 200 && code <= 299);
// 2. Find the FIRST non-success code
const firstNonSuccess = responses.find(code => code < 200 || code > 299);
// 3. Return all unique error codes
const uniqueErrorCodes = [...new Set(responses.filter(code => code < 200 || code > 299))];
console.log("All Successful:", allSuccessful);
console.log("First Non-Success Code:", firstNonSuccess);
console.log("Unique Error Codes:", uniqueErrorCodes);

//2nd task
let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort((a, b) => a - b);
console.log("Second Task Output--->", "Fastest:", sorted[0]);

//3rd task
let suite1 = [{ name: "login", status: "pass" }]; 
let suite2 = [...suite1]; suite2[0].status = "fail"; 
console.log("Third Task Output-->", suite1[0].status);