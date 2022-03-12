const getMinNotFalse = (separators) => {
    // console.log(`🚀 ~ file: getMinNotFalse.js ~ line 2 ~ getMinNotFalse ~ separators`, separators)
    const charsFound = separators.filter(sep => sep.value > -1)
    console.log(`🚀 ~ file: getMinNotFalse.js ~ line 4 ~ getMinNotFalse ~ charsFound`, charsFound)
    if (!charsFound.length) {
        return false
    }
    let max = {value: 0}
    charsFound.forEach(sep => {
    // console.log(`🚀 ~ file: getMinNotFalse.js ~ line 10 ~ getMinNotFalse ~ sep`, sep)
         sep.value > max.value ? max = sep : max
    })
    let min = max
    charsFound.forEach(sep => {
        // console.log(`🚀 ~ file: getMinNotFalse.js ~ line 10 ~ getMinNotFalse ~ sep`, sep)
        sep.value < min.value ? min = sep : min
        })
    // console.log(`🚀 ~ file: getMinNotFalse.js ~ line 11 ~ getMinNotFalse ~ max`, max)
    console.log(`🚀 ~ file: getMinNotFalse.js ~ line 12 ~ getMinNotFalse ~ min`,min )
    // const minSeparator = charsFound.reduce((min, item) => { return min > item.value ? item.value : min })
    // const minSeparatorName = charsFound.reduce((min, item) => { return min > item.value ? item.name : min })
    // console.log(`🚀 ~ file: getMinNotFalse.js ~ line 9 ~ getMinNotFalse ~ minSeparatorName`, minSeparatorName)
    // console.log(`🚀 ~ file: getMinNotFalse.js ~ line 7 ~ getMinNotFalse ~ minSeparator`, minSeparator)
    return min;

}

export default getMinNotFalse