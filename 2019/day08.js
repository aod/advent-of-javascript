module.exports.part1 = (input, width = 25, height = 6) => {
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

module.exports.part2 = (input, width = 25, height = 6) => {
    input = input.split('').map(Number)

    const pixels = {}

    for (let i = 0; i < input.length - 1; i += width * height) {
        const layer = input.slice(i, i + width * height)

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const pxl = x + y * width
                const color = layer[pxl]

                if (pixels[pxl] === undefined || pixels[pxl] === 2) {
                    pixels[pxl] = color
                }
            }
        }
    }

    let image = ''

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            image += pixels[x + y * width] === 1 ? '█' : ' '
        }
        image += '\n'
    }

    return image.slice(0, -1)
}
