const kgrams = (str, k) => {
    let kgrams = []
    for (let i = 0; i + k <= str.length; i++) {
        kgrams.push(str.substring(i, i + k))
    }
    return kgrams
}

export {kgrams}
