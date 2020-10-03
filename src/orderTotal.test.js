import orderTotal from './orderTotal'

it('should pass', () => {
    expect(true).toBe(true)
})

it('should calculate total of empty cat', () => {
    const cart = []

    expect(orderTotal(cart)).toBe(0)
})