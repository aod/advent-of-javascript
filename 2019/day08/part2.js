
module.exports = (input, width = 25, height = 6) => {
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
