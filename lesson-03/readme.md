# `getDuration` Function Documentation

The `getDuration` function is designed to convert an ISO 8601 duration format string into its total seconds representation. This documentation covers the function's purpose, usage, testing, and design choices.

## Table of Contents

- [Function Purpose](#function-purpose)
- [Usage](#usage)
- [Testing](#testing)
- [Design Choices](#design-choices)
- [Future Improvements](#future-improvements)

## Function Purpose

The main purpose of the `getDuration` function is to provide a standardized way to convert ISO 8601 duration strings (e.g., "1D2H3M4S") into their equivalent total duration in seconds.

## Usage

To use the `getDuration` function:

```javascript
const durationInSeconds = getDuration(document.querySelector("time").content);
console.log(durationInSeconds);  // Outputs: 93784
``` 

## Parameters
- **duration (String)**: An ISO 8601 duration format string.

## Returns
- **Integer**: Total duration in seconds.

## Testing
We use Jest as our testing framework. The tests ensure:
- Correct conversion of valid ISO 8601 duration strings.
- Proper error handling for invalid duration formats.
- Handling of non-string inputs.

To run the tests:

bash
npm test

