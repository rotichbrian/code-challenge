

// Define a function to display a value

function show(value) {
    console.log(value); // Log the value to the console
}

// Define a function to detect speed and calculate response
function speedDetector(speed) {
    let response; // Declare response variable

    // Check if speed is within the limit
    if (speed >= 0 && speed <= 70) {
        return 'OK'; // Return 'OK' if speed is within the limit
    } else {
        let points = 1; // Initialize points variable with 1
        const pointsPerExcessKm = 5; // Define points per excess kilometer

        let diff = speed - 70; // Calculate the difference between current speed and speed limit

        response = Math.floor(diff / pointsPerExcessKm); // Calculate demerit points

        // Check if demerit points exceed the limit
        if (response > 12) {
            response = "License suspended"; // Gives response if points exceed the limit
        }

        return response; // Return the calculated response
    }
}

// Display the result for a speed of any number entered
show(speedDetector(80)); 
 






