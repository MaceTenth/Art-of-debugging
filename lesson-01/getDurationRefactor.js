// Time constants
const SECONDS = {
    DAY: 86400,
    HOUR: 3600,
    MINUTE: 60
};

// Validate the duration
const validateDuration = duration => {
    if (typeof duration !== 'string' || !/^(\d+D)?(\d+H)?(\d+M)?(\d+S)?$/.test(duration)) {
        throw new Error('Invalid ISO 8601 duration format.');
    }
    return duration;
};

// Extract a time unit from the duration string
const extractTimeUnit = (regex, duration) => {
    const match = duration.match(regex);
    return parseInt(match ? match[1] : 0, 10);
};

// Calculate total seconds
const calculateTotalSeconds = ({ days, hours, minutes, seconds }) => 
    days * SECONDS.DAY + hours * SECONDS.HOUR + minutes * SECONDS.MINUTE + seconds;

const getDuration = duration => {
    validateDuration(duration);

    const timeUnits = {
        days: extractTimeUnit(/(\d+)D/, duration),
        hours: extractTimeUnit(/(\d+)H/, duration),
        minutes: extractTimeUnit(/(\d+)M/, duration),
        seconds: extractTimeUnit(/(\d+)S/, duration)
    };

    return calculateTotalSeconds(timeUnits);
};

// Test the function
const testDuration = "1H"; // ISO 8601 duration format
console.log(getDuration(testDuration));