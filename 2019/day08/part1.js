module.exports = (input, width = 25, height = 6) => {
    input = input.split('').map(Number)

    let bestLayer = { 0: Infinity }

    for (let i = 0; i < input.length - 1; i += width * height) {
        const pixels = input
            .slice(i, i + width * height)
            .reduce((layerCount, pixel) => {
                layerCount[pixel] = layerCount[pixel] + 1 || 1
                return layerCount
            }, {})

        if (pixels[0] < bestLayer[0]) {
            bestLayer = pixels
        }
    }

    return bestLayer[1] * bestLayer[2]
}
