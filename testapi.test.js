import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Gabriela Pinheiro'
let professores = ['Silvestre', 'Leandro', 'Marcos', 'Luis']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Gabriela Pinheiro"); 
    assertStringIncludes(aluno, "Pinheiro");    
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Marcos", "Leandro", "Silvestre"],
        "Um erro ocorreu.");
})