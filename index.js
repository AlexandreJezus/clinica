let consulta = [];
let estado = "menu";
let paciente, medico, dia, hora;

console.log(
  "Escolha uma opção:\n1. Adicionar consulta\n2. Cancelar consulta\n3. Listar consultas\n4. Sair\n5. Atualizar consulta"
);
process.stdin.on("data", function (data) {
  let input = data.toString().trim();

  if (estado === "menu") {
    if (input === "1") {
      estado = "adicionar_consulta";
      console.log("Digite o nome do paciente:");
    } else if (input === "2") {
      estado = "cancelar_consulta";
      console.log("Digite o nome do paciente para cancelar a consulta:");
    } else if (input === "3") {
      if (consulta.length === 0) {
        console.log("Nenhuma consulta marcada.");
      } else {
        console.log("Consultas marcadas:");
        for (let pacientes of consulta) {
          console.log(
            `Paciente: ${pacientes.paciente}, Médico: ${pacientes.medico}, Data: ${pacientes.dia}, Horário: ${pacientes.hora}`
          );
        }
      }
      console.log(
        "Escolha uma opção:\n1. Adicionar consulta\n2. Cancelar consulta\n3. Listar consultas\n4. Sair\n5.Atualizar consulta"
      );
    } else if (input === "4") {
      console.log("Saindo...");
      process.exit();
    } else if (input === "5") {
      estado = "atualizar_consulta";
      console.log("Digite o nome do paciente para atualizar a consulta:");
    } else {
      console.log("Opção inválida. Selecione novamente.");
    }
  } else if (estado === "adicionar_consulta") {
    paciente = input;
    estado = "adicionar_medico";
    console.log("Digite o nome do médico da consulta:");
  } else if (estado === "adicionar_medico") {
    medico = input;
    estado = "adicionar_dia";
    console.log("Digite o dia a consulta:");
  } else if (estado === "adicionar_dia") {
    dia = input;
    estado = "adicionar_hora";
    console.log("Digite o horário da consulta:");
  } else if (estado === "adicionar_hora") {
    hora = input;
    consulta.push({
      paciente: paciente,
      medico: medico,
      dia: dia,
      hora: hora,
    });
    console.log("Consulta adicionada com sucesso!");
    estado = "menu";
    console.log(
      "Escolha uma opção:\n1. Adicionar consulta\n2. Cancelar consulta\n3. Listar consultas\n4. Sair\n5.Atualizar consulta"
    );
  } else if (estado === "cancelar_consulta") {
    let pacienteRemover = input;
    let encontrado = false;
    for (let i = 0; i < consulta.length; i++) {
      if (
        consulta[i].paciente.toLowerCase() === pacienteRemover.toLowerCase()
      ) {
        consulta.splice(i, 1);
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
      "Escolha uma opção:\n1. Adicionar consulta\n2. Cancelar consulta\n3. Listar consultas\n4. Sair\n5.Atualizar consulta"
    );
  }
  if (estado === "atualizar_cadastro") {
  }
});
