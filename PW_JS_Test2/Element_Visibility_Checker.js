let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let status = "";
let action = "";

if (isPresent == false) {
    status = "NOT FOUND";
}
else if(isPresent === true && isDisplayed === false) {
    status = "HIDDEN";
}
else if(isPresent === true && isDisplayed === true && isEnabled === false) {
    status = "DISABLED";
}
else if(isPresent === true && isDisplayed === true && isEnabled === true) {
    status = "READY";
}

let severity = (isPresent ===false)
? "CRITICAL"
: (isDisplayed === false || isEnabled === false)
? "WARNING"
: "OK";

if (status === "NOT FOUND") {
    action = "Element not found.Check locator";
} else if (status === "HIDDEN") {
    action = "Element is hidden.Wait until visible";
} else if (status === "DISABLED") {
    action = "Element is visible but disabled.Wait for enable state or check preconditions";
}
else {
    action = "Element ready for interaction";
}
console.log("Status:", status);
console.log("Severity:", severity);
console.log("Action:", action);