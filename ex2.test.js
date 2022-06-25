let a = 'A'
let b = 'B'

Deno.test("teste do A (no api)", () => {
    if (a != "A") {
        throw new Error(`${a} é diferente de A`);
    }
})

Deno.test("não pode ser A (NO API)", () => {
    if (b == "A") {
        throw new Error(`${a}  é A`);
    }
})