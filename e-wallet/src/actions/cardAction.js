function updateColor(item) {
    return {
        type: 'UPDATE_COLOR',
        payload: item
    }
}
function updateTextColor(item) {
    return {
        type: 'UPDATE_TEXT_COLOR',
        payload: item
    }
}
function updateCardChip(item) {
    return {
        type: 'UPDATE_CARD_CHIP',
        payload: item
    }
}
function updateCardVendor(item) {
    return {
        type: 'UPDATE_CARD_VENDOR',
        payload: item
    }
}
function updateCardNumber(item) {
    return {
        type: 'UPDATE_CARD_NUMBER',
        payload: item
    }
}
function updateCardHolder(item) {
    return {
        type: 'UPDATE_CARD_HOLDER',
        payload: item
    }
}
function updateCardValidity(item) {
    return {
        type: 'UPDATE_CARD_VALIDITY',
        payload: item
    }
}

export { updateCardNumber, updateCardVendor, updateColor, updateCardHolder, updateCardValidity, updateTextColor, updateCardChip }