function processItem(item) {
    if (item === 2) {
        throw new Error("processItem: Unexpected value");
    }
    return item * 2;
}

function validateItem(item) {
    if (typeof item !== 'number') {
        throw new Error("validateItem: Item is not a number");
    }
    return item;
}

function logProcessing(item) {
    console.log(`logProcessing: Processing item: ${item}`);
    return item;
}

function processData(items) {
    return items
        .map(validateItem)
        .map(logProcessing)
        .map(processItem);
}

const array = [1, 2, 3];
try {
    const result = processData(array);
    console.log(result);
} catch (error) {
    console.error(`Error processing data: ${error.message}`);
}
