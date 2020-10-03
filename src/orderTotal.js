const FREE_SHIPPING_MIN_TOTAL = 200

export const orderTotal = (cart) => {
    if (!Array.isArray(cart)) throw new Error('First argument must be an array!')

    const total = cart.reduce(
        (subTotal, { price, quantity }) => {
            const realQuantity = quantity ?? 1
            return subTotal + (price * realQuantity)
        },
        0
    )

    const shipping = cart.find((product) => product.isShipping)
    if (!shipping) return total

    const realShippingQuantity = shipping.quantity ?? 1
    const totalWithoutShipping = total - (shipping.price * realShippingQuantity)
    const isQualifiedForFreeShipping = totalWithoutShipping > FREE_SHIPPING_MIN_TOTAL

    if (!isQualifiedForFreeShipping) return totalWithoutShipping + shipping.price
    return totalWithoutShipping
}

export default orderTotal