import {
    assertExists,
    assertMatch,
    assertNotMatch,
    assertNotEquals
} from "http://deno.land/std/testing/asserts.ts"

let filmes = ['Filme 1','Filme 2'];
let minutos = [196, 145];
Deno.test("teste da definação da assert", () => {
    assertExists(filmes, "Não foi encontrada a variavel filmes");
    assertExists(minutos, "Não foi encontrada a variavel minutos");
  })

Deno.test("Teste de não existencia", () => {
    assertNotEquals(filmes, "Filme 2", "Erro: há um Filme 2");
    assertNotEquals(minutos, 98, "Erro: há um minuto 32");
  });

  const Url = new RegExp("^https?://[a-z.]+.com$");

Deno.test("Teste de verificação(certo)", () => {
    assertMatch("https://www.youtube.com", Url, "Erro: essa url não bate com o padrão desejado");
    assertMatch("https://web.whatsapp.com", Url), "Erro: essa url não bate com o padrão desejado";
  });

Deno.test("Teste de verificação(errado)", () => {
    assertNotMatch("https://www.twitch.tv/", Url, "Erro: essa url está no padrão desejado");
  });
