function weightedRandomizeArray(arr, w) {
    if (arr.length !== w.length) {
        throw new Error('arr and w must be of the same size');
    }

    if (!arr.length) {
        throw new Error('arr must not be empty');
    }

    const cumulativeWeights = [];
    for (let i = 0; i < w.length; i += 1) {
        cumulativeWeights[i] = w[i] + (cumulativeWeights[i - 1] || 0);
    }

    const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
    const randomNumber = maxCumulativeWeight * Math.random();

    for (let itemIndex = 0; itemIndex < arr.length; itemIndex += 1) {
        if (cumulativeWeights[itemIndex] >= randomNumber) {
            return {
                item: arr[itemIndex],
                index: itemIndex,
            };
        }
    }
}

export default weightedRandomizeArray;