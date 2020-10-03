import orderTotal from './orderTotal'

describe('orderTotal function tests', () => {

    describe('cart with quantity', () => {

        it('should pass', () => {
            expect(true).toBe(true)
        })

        it('should calculate total of empty cart', () => {
            const cart = []

            expect(orderTotal(cart)).toBe(0)
        })

        it('should calculate total of 1 product in cart', () => {
            const cart = [
                {
                    name: 'Laptop',
                    price: 1000
                }
            ]

            expect(orderTotal(cart)).toBe(1000)
        })

        it('should calculate total of 1 product with 2 quantity in cart', () => {
            const cart = [
                {
                    name: 'Laptop',
                    price: 1000,
                    quantity: 2,
                }
            ]

            expect(orderTotal(cart)).toBe(2000)
        })

        it('should calculate total of 2 products with quantity in cart', () => {
            const cart = [
                {
                    name: 'Laptop',
                    price: 1000,
                    quantity: 2,
                },
                {
                    name: 'Smartphone',
                    price: 500,
                    quantity: 1,
                }
            ]

            expect(orderTotal(cart)).toBe(2500)
        })

        it('should calculate total of 2 products with 0 quantity in cart', () => {
            const cart = [
                {
                    name: 'Laptop',
                    price: 1000,
                    quantity: 2,
                },
                {
                    name: 'Smartphone',
                    price: 500,
                    quantity: 0,
                }
            ]

            expect(orderTotal(cart)).toBe(2000)
        })

    })

    describe('wrong args errors', () => {

        it('should throw error when called without arguments', () => {
            expect(() => orderTotal()).toThrow('First argument must be an array!')
        })

        it('should throw error when called with wrong arguments (number)', () => {
            expect(() => orderTotal(123)).toThrow('First argument must be an array!')
        })

        it('should throw error when called with wrong arguments (number)', () => {
            expect(() => orderTotal({
                reduce: () => 0,
            })).toThrow('First argument must be an array!')
        })

    })

    describe('free shipping', () => {

        it('shipping should be free above price 200', () => {
            const cart = [
                {
                    name: 'Laptop',
                    price: 1000,
                    quantity: 2,
                },
                {
                    name: 'Smartphone',
                    price: 500,
                    quantity: 2,
                },
                {
                    name: 'Shipping',
                    isShipping: true,
                    price: 50,
                },
            ]

            expect(orderTotal(cart)).toBe(3000)
        })

        it('shipping should be added below price 200', () => {
            const cart = [
                {
                    name: 'CD',
                    price: 2,
                    quantity: 10,
                },
                {
                    name: 'Shipping',
                    isShipping: true,
                    price: 50,
                },
            ]

            expect(orderTotal(cart)).toBe(70)
        })

        it('shipping should be added when price is equal 200', () => {
            const cart = [
                {
                    name: 'CD',
                    price: 2,
                    quantity: 100,
                },
                {
                    name: 'Shipping',
                    isShipping: true,
                    price: 50,
                },
            ]

            expect(orderTotal(cart)).toBe(250)
        })

        it('shipping should be added below price 200 only once', () => {
            const cart = [
                {
                    name: 'CD',
                    price: 2,
                    quantity: 100,
                },
                {
                    name: 'Shipping',
                    isShipping: true,
                    price: 50,
                    quantity: 2,
                },
            ]

            expect(orderTotal(cart)).toBe(250)
        })

    })

})
