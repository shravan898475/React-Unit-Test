import useCustomehook from "./useCustomhook"

test('hooks test',()=>{
    const result=useCustomehook(5,5);
    expect(result).toBe(10);
})