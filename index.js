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
      estado = "atualizar_cadastro";
      console.log("Consultas agendadas:");
      for (let pacientes of consulta) {
        console.log(
          `Nome Paciente: ${pacientes.paciente}, Nome Medico: ${pacientes.medico}, Data Consulta: ${pacientes.dia}, Hora Consulta: ${pacientes.hora}`
        );
      }
      console.log("Digite o nome do paciente que deseja atualizar:");
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
        console.log("Consulta cancelada!");
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      console.log("Consulta não encontrada!");
    }
    estado = "menu";
    console.log(
      "Escolha uma opção:\n1. Adicionar consulta\n2. Cancelar consulta\n3. Listar consultas\n4. Sair\n5.Atualizar consulta"
    );
  } else if (estado === "atualizar_cadastro") {
    pacienteAtualizar = input;
    let consultorio = consulta.find(
      (pacientes) =>
        pacientes.paciente.toLowerCase() === pacienteAtualizar.toLowerCase()
    );

    if (consulta) {
      console.log("Consulta encontrada:");
      console.log(
        `Paciente: ${consultorio.paciente}, Médico: ${consultorio.medico}, Data: ${consultorio.dia}, Horário: ${consultorio.hora}`
      );
      estado = "atualizar_medico";
      console.log(
        "Digite o novo médico ou pressione Enter para manter o atual."
      );
    } else {
      console.log("Consulta não encontrada!");
      estado = "menu";
      console.log(
        "Escolha uma opção:\n1. Adicionar consulta\n2. Cancelar consulta\n3. Listar consultas\n4. Sair\n5. Atualizar consulta"
      );
    }
  } else if (estado === "atualizar_medico") {
    medico =
      input ||
      consulta.find(
        (pacientes) =>
          pacientes.paciente.toLowerCase() === pacienteAtualizar.toLowerCase()
      ).medico;
    estado = "atualizar_data";
    console.log(
      "Digite a nova data da consulta ou pressione Enter para manter o atual."
    );
  } else if (estado === "atualizar_data") {
    dia =
      input ||
      consulta.find(
        (pacientes) =>
          pacientes.paciente.toLowerCase() === pacienteAtualizar.toLowerCase()
      ).dia;
    estado = "atualizar_hora";
    console.log(
      "Digite a nova hora da consulta ou pressione Enter para manter o atual."
    );
  } else if (estado === "atualizar_hora") {
    hora =
      input ||
      consulta.find(
        (pacientes) =>
          pacientes.paciente.toLowerCase() === pacienteAtualizar.toLowerCase()
      ).hora;
    for (let i = 0; i < consulta.length; i++) {
      if (
        consulta[i].paciente.toLowerCase() === pacienteAtualizar.toLowerCase()
      ) {
        consulta[i].medico = medico;
        consulta[i].dia = dia;
        consulta[i].hora = hora;
        break;
      }
    }
    console.log("Consulta atualizada com sucesso.");
    estado = "menu";
    console.log(
      "Escolha uma opção:\n1. Adicionar consulta\n2. Cancelar consulta\n3. Listar consultas\n4. Sair\n5. Atualizar consulta"
    );
  }
});
