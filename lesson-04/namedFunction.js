function processItem(item) {
    if (item === 2) {
        throw new Error("Unexpected value");
    }
    return item * 2;
}

const array = [1, 2, 3];
array.map(processItem);