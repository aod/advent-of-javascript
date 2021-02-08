module.exports.perm = (l, h) => {
    let perms = [[l]]

    for (let i = l + 1; i <= h; i++) {
        const newPerms = []
        for (let j = 0; j < perms.length; j++) {
            const val = perms[j]
            for (let k = 0; k <= val.length; k++) {
                newPerms.push([...val.slice(0, k), i, ...val.slice(k)])
            }
        }
        perms = newPerms
    }

    return perms
}
