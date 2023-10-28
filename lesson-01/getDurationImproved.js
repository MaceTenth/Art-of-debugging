function getDuration(duration) {
    if (typeof duration !== 'string' || !/^(\d+D)?(\d+H)?(\d+M)?(\d+S)?$/.test(duration)) {
        throw new Error('Invalid ISO 8601 duration format.');
    }

    const SECONDS_IN_DAY = 86400;
    const SECONDS_IN_HOUR = 3600;
    const SECONDS_IN_MINUTE = 60;

    const matches = duration.match(/(\d+D)?(\d+H)?(\d+M)?(\d+S)?/);
    const days = parseInt(matches[1] || 0, 10);
    const hours = parseInt(matches[2] || 0, 10);
    const minutes = parseInt(matches[3] || 0, 10);
    const seconds = parseInt(matches[4] || 0, 10);

    return days * SECONDS_IN_DAY + hours * SECONDS_IN_HOUR + minutes * SECONDS_IN_MINUTE + seconds;
}

// Test the function
const testDuration = "1H"; // ISO 8601 duration format
//const testDuration = "FEDCV32sds"; // Not a valid ISO 8601  format
console.log(getDuration(testDuration));
