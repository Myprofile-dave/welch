
function greetUser() {
    // Check if user's name is already stored in localStorage
    let storedName = localStorage.getItem("username");
    
    if (storedName) {
        // If name is stored, greet the user with the stored name
        alert("Hello, " + storedName + "! Welcome back to my personal homepage!");
    } else {
        // If name is not stored, prompt the user to enter their name
        let username = prompt("Please enter your name:");
        
        if (username !== null) {
            // Trim leading and trailing whitespace
            username = username.trim();
            
            // Ensure username is at most 12 characters long
            username = username.slice(0, 12);
            
            // Capitalize the first letter and convert the rest to lowercase
            let firstChar = username.charAt(0).toUpperCase();
            let restOfName = username.slice(1).toLowerCase();
            
            // Concatenate the first character with the rest of the name
            let formattedName = firstChar + restOfName;
            
            // Store the formatted name in localStorage for future visits
            localStorage.setItem("username", formattedName);
            
            // Greet the user with the formatted name
            alert("Hello, " + formattedName + "! Welcome!");
        } else {
            // Handle case where user cancels the prompt
            alert("You did not enter a name. Please refresh and try again.");
        }
    }
}

// Call greetUser function when the page loads
greetUser();