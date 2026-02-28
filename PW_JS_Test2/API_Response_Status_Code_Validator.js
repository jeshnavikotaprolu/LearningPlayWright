let statusCode = 401;
switch (statusCode) {
    case 200:
        console.log("Result: PASS");
        console.log("OK: Request successful");
        break;
    case 201:
        console.log("Result: PASS");
        console.log("Created: Resource created successfully");
        break;
    case 301:
        console.log("Result: PASS");
        console.log("No Content: Request processed but no content returned");
        break;
    case 400:
        console.log("Result: WARNING");
        console.log("Bad Request: Check request payload");
        break;
    case 401:
        console.log("Result: FAIL");
        console.log("Unauthorized: Check auth token");
        break;
    case 403:
        console.log("Result:FAIL");
        console.log("Forbidden: Insufficient permissions");
        break;
    case 404:
        console.log("Result: FAIL");
        console.log("Not Found: Check endpoint URL");
        break;
    case 500:
        console.log("Result: FAIL");
        console.log(" Internal Server Error: Backend issue");
        break;
    default:
        console.log("Result: UNKNOWN");
        console.log("Unhandled status code");
}