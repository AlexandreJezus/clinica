//crie uma biclioteca que voce pode adicionar, remover, listar livros,
// os livros possuem os atributos nome, tamanho, autor e genero.

const consulta = [];
let estado = "menu";
let paciente, medico, data, hora;

console.log(
  "Escolha uma opção:\n1. Adicionar consulta\n2. Cancelar consulta\n3. Listar consultas\n4. Sair\n5.Atualizar consulta"
);
process.stdin.on("data", function (data) {
  let input = data.toString().trim();

  if (estado === "menu") {
    if (input === "1") {
      estado = "adicionar_nominho";
      console.log("Digite o nome do livro:");
    } else if (input === "2") {
      estado = "remover_nome";
      console.log("Digite o nome do livro a ser removido:");
    } else if (input === "3") {
      if (biblioteca.length === 0) {
        console.log("Nenhum livro na biblioteca.");
      } else {
        console.log("Livros na biblioteca:");
        for (let livro of biblioteca) {
          console.log(
            `Nome: ${livro.nome}, Autor: ${livro.autor}, Tamanho: ${livro.tamanho} páginas, Gênero: ${livro.genero}`
          );
        }
      }
      console.log(
        "Escolha uma opção:\n1. Adicionar livro\n2. Remover livro\n3. Listar livros\n4. Sair"
      );
    } else if (input === "4") {
      console.log("Saindo...");
      process.exit();
    } else {
      console.log("Opção inválida. Tente novamente.");
    }
  } else if (estado === "adicionar_nome") {
    nome = input;
    estado = "adicionar_autor";
    console.log("Digite o autor do livro:");
  } else if (estado === "adicionar_autor") {
    autor = input;
    estado = "adicionar_tamanho";
    console.log("Digite o tamanho do livro (número de páginas):");
  } else if (estado === "adicionar_tamanho") {
    tamanho = input;
    estado = "adicionar_genero";
    console.log("Digite o gênero do livro:");
  } else if (estado === "adicionar_genero") {
    genero = input;
    biblioteca.push({
      nome: nome,
      autor: autor,
      tamanho: tamanho,
      genero: genero,
    });
    console.log("Livro adicionado com sucesso!");
    estado = "menu";
    console.log(
      "Escolha uma opção:\n1. Adicionar livro\n2. Remover livro\n3. Listar livros\n4. Sair"
    );
  } else if (estado === "remover_nome") {
    let nomeRemover = input;
    let encontrado = false;
    for (let i = 0; i < biblioteca.length; i++) {
      if (biblioteca[i].nome.toLowerCase() === nomeRemover.toLowerCase()) {
        biblioteca.splice(i, 1);
        console.log("Livro removido com sucesso!");
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      console.log("Livro não encontrado!");
    }
    estado = "menu";
    console.log(
      "Escolha uma opção:\n1. Adicionar livro\n2. Remover livro\n3. Listar livros\n4. Sair"
    );
  }
});
