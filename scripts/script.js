const ModAgForm = document.querySelector("form[name=TI_scheduling]");

let Form = {};

const formRef = {
    "name": ModAgForm.querySelector("#formTeacherName"),
    "course": ModAgForm.querySelector("#formCurso"),
    "classroom": ModAgForm.querySelector("#formSala"),
    "equipment": {
        "projector": ModAgForm.querySelector("#formCheckProjector"),
        "notebook": ModAgForm.querySelector("#formCheckNotebook"),
        "sound": ModAgForm.querySelector("#formCheckSound"),
        "projScreen": ModAgForm.querySelector("#formCheckTela")
    },
    "schenduling": ModAgForm.querySelectorAll("div.schedulingTimeFormItem")
}

const genBtn = ModAgForm.querySelector("#genTemplate");
genBtn.addEventListener("click", (e) => {
    e.preventDefault();

    Form = new FormData(ModAgForm);
    Form = Object.fromEntries(Form);
    Form["Curso"] = getCourseByID(Form["Curso"]);

    console.log(Form);
    genTemplate();
})

const modal = document.querySelector("#modalResult");
modal.querySelector("button.modalCloseBtn")
    .addEventListener("click", (e) => {
        modalOpenClose();
});

function modalOpenClose() {
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

    modalOpenClose();
    document.querySelector("#resultTemplate").innerText = template;
}

// TODO: Refatorar código usando Lookup Table
function getCourseByID(id) {
    let course = "";
    switch (id) {
        case "F1A1A":
            course = "Fundamental 1 - 1º Ano A"
            break
        case "F1A1B":
            course = "Fundamental 1 - 1º Ano B"
            break
        case "F1A1C":
            course = "Fundamental 1 - 1º Ano C"
            break
        case "F1A1D":
            course = "Fundamental 1 - 1º Ano D"
            break
        case "F1A2A":
            course = "Fundamental 1 - 2° Ano A"
            break
        case "F1A2B":
            course = "Fundamental 1 - 2° Ano B"
            break
        case "F1A2C":
            course = "Fundamental 1 - 2° Ano C"
            break
        case "F1A3A":
            course = "Fundamental 1 - 3° Ano A"
            break
        case "F1A3B":
            course = "Fundamental 1 - 3° Ano B"
            break
        case "F1A3C":
            course = "Fundamental 1 - 3° Ano C"
            break
        case "F1A3D":
            course = "Fundamental 1 - 3° Ano D"
            break
        case "F1A4A":
            course = "Fundamental 1 - 4° Ano A"
            break
        case "F1A4B":
            course = "Fundamental 1 - 4º Ano B"
            break
        case "F1A5":
            course = "Fundamental 1 - 5° Ano"
            break
        case "F2A6":
            course = "Fundamental 2 - 6º Ano"
            break
        case "F2A7":
            course = "Fundamental 2 - 7º Ano"
            break
        case "F2A8":
            course = "Fundamental 2 - 8° Ano"
            break
        case "F2A9":
            course = "Fundamental 2 - 9° Ano"
            break
        case "EM1":
            course = "Ensino Médio - 1ª Série"
            break
        case "EM2":
            course = "Ensino Médio - 2ª Série"
            break
        case "EM3":
            course = "Ensino Médio - 3ª Série"
            break
        case "TADM":
            course = "Técnico em Administração"
            break
        case "TETC":
            course = "Técnico em Eletrotécnica"
            break
        case "TEFM":
            course = "Técnico em Enfermagem"
            break
        case "TFMA":
            course = "Técnico em Farmácia"
            break
        case "TIC":
            course = "Técnico em Instrumentação Cirúrgica"
            break
        case "TINF":
            course = "Técnico em Informática"
            break
        case "TLOG":
            course = "Técnico em Logística"
            break
        case "TPORT":
            course = "Técnico em Portos"
            break
        case "TRAD":
            course = "Técnico em Radiologia"
            break
        case "TST":
            course = "Técnico em Segurança do Trabalho"
            break
        default:
            course = "N/A"
    }

    return course;
}