import {add,sub} from './Math'

test('TestCase1: Adding two numbers',()=>{
    expect(add(5,2)).toBe(7)
})

test('TestCase2: Substract two numbers',()=>{
    expect(sub(5,3)).toBe(2)
})

//expect(add(5,2).toBe(7)) - TypeError: (0 , _Math.add)(...).toBe is not a function