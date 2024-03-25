const ModAgForm = document.querySelector("form[name=TI_scheduling]");

const coursesByID = {
    "F1A1A": "Fundamental 1 - 1º Ano A",
    "F1A1B": "Fundamental 1 - 1° Ano B",
    "F1A1C": "Fundamental 1 - 1° Ano C",
    "F1A1D": "Fundamental 1 - 1º Ano D",

    "F1A2A": "Fundamental 1 - 2° Ano A",
    "F1A2B": "Fundamental 1 - 2º Ano B",
    "F1A2C": "Fundamental 1 - 2º Ano C",
    "F1A2D": "Fundamental 1 - 2º Ano D",

    "F1A3A": "Fundamental 1 - 3º Ano A",
    "F1A3B": "Fundamental 1 - 3º Ano B",
    "F1A3C": "Fundamental 1 - 3º Ano C",
    "F1A3D": "Fundamental 1 - 3º Ano D",

    "F1A4A": "Fundamental 1 - 4º Ano A",
    "F1A4B": "Fundamental 1 - 4° Ano B",
    "F1A4C": "Fundamental 1 - 4° Ano C",
    "F1A4D": "Fundamental 1 - 4º Ano D",

    "F1A5A": "Fundamental 1 - 5º Ano A",
    "F1A5B": "Fundamental 1 - 5° Ano B",
    "F1A5C": "Fundamental 1 - 5° Ano C",
    "F1A5D": "Fundamental 1 - 5º Ano D",


    "F2A6A": "Fundamental 2 - 6º Ano A",
    "F2A6B": "Fundamental 2 - 6º Ano B",
    "F2A6C": "Fundamental 2 - 6º Ano C",
    "F2A6D": "Fundamental 2 - 6º Ano D",

    "F2A7A": "Fundamental 2 - 7º Ano A",
    "F2A7B": "Fundamental 2 - 7º Ano B",
    "F2A7C": "Fundamental 2 - 7º Ano C",
    "F2A7D": "Fundamental 2 - 7º Ano D",

    "F2A8A": "Fundamental 2 - 8º Ano A",
    "F2A8B": "Fundamental 2 - 8º Ano B",
    "F2A8C": "Fundamental 2 - 8º Ano C",
    "F2A8D": "Fundamental 2 - 8º Ano D",

    "F2A9A": "Fundamental 2 - 9º Ano A",
    "F2A9B": "Fundamental 2 - 9º Ano B",
    "F2A9C": "Fundamental 2 - 9º Ano C",
    "F2A9D": "Fundamental 2 - 9º Ano D",

    "EMA1A": "Ensino Médio - 1º Série A",
    "EMA1B": "Ensino Médio - 1º Série B",
    "EMA1C": "Ensino Médio - 1º Série C",
    "EMA1D": "Ensino Médio - 1º Série D",

    "EMA2A": "Ensino Médio - 2º Série A",
    "EMA2B": "Ensino Médio - 2º Série B",
    "EMA2C": "Ensino Médio - 2º Série C",
    "EMA2D": "Ensino Médio - 2º Série D",

    "EMA3A": "Ensino Médio - 3º Série A",
    "EMA3B": "Ensino Médio - 3º Série B",
    "EMA3C": "Ensino Médio - 3º Série C",
    "EMA3D": "Ensino Médio - 3º Série D",

    "TADM1": "Técnico em Administração 1",
    "TADM2": "Técnico em Administração 2",
    "TADM3": "Técnico em Administração 3",

    "TETC1": "Técnico em Eletrotécnica 1",
    "TETC2": "Técnico em Eletrotécnica 2",
    "TETC3": "Técnico em Eletrotécnica 3",

    "TEFM1": "Tecnico em Enfermagem 1",
    "TEFM2": "Tecnico em Enfermagem 2",
    "TEFM3": "Tecnico em Enfermagem 3",


    "TFMA1": "Técnico em Farmácia 1",
    "TFMA2": "Técnico em Farmácia 2",
    "TFMA3": "Técnico em Farmácia 3",

    "TIC1": "Técnico em Instrumentação Cirúrgica 1",
    "TIC2": "Técnico em Instrumentação Cirúrgica 2",
    "TIC3": "Técnico em Instrumentação Cirúrgica 3",


    "TINF1": "Tecnico em Informática 1",
    "TINF2": "Tecnico em Informática 2",
    "TINF3": "Tecnico em Informática 3",

    "TLOG1": "Técnico em Logística 1",
    "TLOG2": "Técnico em Logística 2",
    "TLOG3": "Técnico em Logística 3",
    "TLOG4": "Técnico em Logística 4",

    "TPORT1": "Técnico em Portos 1",
    "TPORT2": "Técnico em Portos 2",
    "TPORT3": "Técnico em Portos 3",

    "TRAD1": "Técnico em Radiologia 1",
    "TRAD2": "Técnico em Radiologia 2",
    "TRAD3": "Técnico em Radiologia 3",

    "TST1": "Técnico em Segurança do Trabalho 1",
    "TST2": "Técnico em Segurança do Trabalho 2",
    "TST3": "Técnico em Segurança do Trabalho 3"
}

let Form = {};

const genBtn = ModAgForm.querySelector("#genTemplate");
genBtn.addEventListener("click", (e) => {
    e.preventDefault();

    Form = new FormData(ModAgForm);
    Form = Object.fromEntries(Form);
    Form["Curso"] = getCourseByID(Form["Curso"]);
    Form["Data"] = moment(Form["Data"]).format("DD/MM/YYYY"); 

    console.log(Form);
    genTemplate();
})

const modal = document.querySelector("#modalResult");
modal.querySelector("button.modalCloseBtn")
    .addEventListener("click", (e) => {
        modalOpenClose();
});

function modalOpenClose() {
    let statusCard = document.querySelector("div#statusCard");

    for (x in Form) {
        if (Form[x] == "" || Form[x] == "Invalid Date") {
            cardError();
            return 1;
        }
    }

    modal.style.display === "block" ? modal.style.display = "none" : modal.style.display = "block";
}

function genTemplate() {

    const template = `
    Professor: ${Form["Professor"] ? Form["Professor"] : "[ Nenhum nome foi inserido ]"}
    Curso: ${Form["Curso"] ? Form["Curso"] : "[ Nenhum curso foi selecionado ]"}
    Sala: ${Form["Sala"] ? Form["Sala"] : "[ Nenhuma sala foi selecionada ]"}
    Data: ${Form["Data"] ? Form["Data"] : "[ Nenhuma data foi especificada ]"}
    Horário: ${Form["Hora Início"] ? Form["Hora Início"] : " " } - ${Form["Hora Fim"] ? Form["Hora Fim"] : " " }

    ${Form["Projetor"] || Form["Tela"] || Form["Notebook"] || Form["Caixa de Som"] ? "Agendamento de Equipamentos" : ""}

    ${Form["Projetor"] ? "- Projetor\n" : ""} ${Form["Tela"] ? "- Tela\n" : ""} ${Form["Notebook"] ? "- Notebook\n" : ""} ${Form["Caixa de Som"] ? "- Caixa de Som\n" : ""}

    `;

    document.querySelector("#resultTemplate").innerText = template;
    modalOpenClose();
}

function mountCoursesSelect() {
    let formCurso = document.querySelector("#formCurso");
    let optgroups = {
        "fundamental": formCurso.querySelector("optgroup[label=Fundamental]"),
        "Ensino_Medio": formCurso.querySelector("optgroup[label='Ensino Médio']"),
        "Cursos_Tecnicos": formCurso.querySelector("optgroup[label='Cursos Técnicos']"),
    }
    
    for (x in coursesByID) {

        if (x.startsWith("F")) {
            // Fundamental
            optgroups.fundamental.innerHTML += `<option value="${x}">${getCourseByID(x)}</option>`;
        }
        if (x.startsWith("EMA")) {
            // Ensino Médio
            optgroups.Ensino_Medio.innerHTML += `<option value="${x}">${getCourseByID(x)}</option>`;
        }
        if (x.startsWith("T")) {
            // Ensino Técnico
            optgroups.Cursos_Tecnicos.innerHTML += `<option value="${x}">${getCourseByID(x)}</option>`;
        }

    }
}

mountCoursesSelect();

function cardError() {
    const statusCard = document.querySelector("div#statusCard");
    statusCard.style.display = "inline-block";
    statusCard.innerHTML = "Foram detectados campos com problemas. Preencha corretamente para continuar."
    window.setTimeout(() => {
        statusCard.style.display = "none";
    }, 3000);
    
}

function getCourseByID(id) {
    return coursesByID[id] || "N/A";
}

