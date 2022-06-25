let nome = 'Hana Masteguim'
let nome2 = ['Darcy', 'Kaua', 'Leonardo', 'Gustavo']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(nome, "Hana"); 
    assertStringIncludes(nome, "Masteguim");    
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Marcos", "Leandro", "Silvestre"],
        "Opa! Algo deu errado!");
})
