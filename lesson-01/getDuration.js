function getDuration(duration) {

    let totalSeconds = 0;

    // Extract days (1 day = 86400 seconds)
    const daysMatch = duration && duration.match(/(\d+)D/);
    if (daysMatch) {
        totalSeconds += parseInt(daysMatch[1], 10) * 86400;
    }

    // Extract hours (1 hour = 3600 seconds)
    const hoursMatch = duration && duration.match(/(\d+)H/);
    if (hoursMatch) {
        totalSeconds += parseInt(hoursMatch[1], 10) * 3600;
    }

    // Extract minutes (1 minute = 60 seconds)
    const minutesMatch = duration && duration.match(/(\d+)M/);
    if (minutesMatch) {
        totalSeconds += parseInt(minutesMatch[1], 10) * 60;
    }

    // Extract seconds
    const secondsMatch = duration && duration.match(/(\d+)S/);
    if (secondsMatch) {
        totalSeconds += parseInt(secondsMatch[1], 10);
    }

    return totalSeconds;
}

// Test the function
const testDuration = "1D2H3M4S"; // ISO 8601 duration format
console.log(getDuration(testDuration));
