const ModAgForm = document.querySelector("form[name=TI_scheduling]");

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
    genTemplate();
})

const clearBtn = ModAgForm.querySelector("#clearForm");
clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearForm();
});

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
    Professor: ${formRef.name.value}
    Curso: ${getCourseByID(formRef.course.value)}
    Sala: ${formRef.classroom.value}
    Data: ${formRef.schenduling[0].querySelector(".selectDate").value}
    Horário: ${formRef.schenduling[0].querySelector(".FirstPeriodTime").value} - ${formRef.schenduling[0].querySelector(".SecondPeriodTime").value}

    Agendamento de Equipamentos

    ${formRef.equipment.projector.checked ? "- Projetor\n" : ""} ${formRef.equipment.projScreen.checked ? "- Tela\n" : ""} ${formRef.equipment.notebook.checked ? "- Notebook\n" : ""} ${formRef.equipment.sound.checked ? "- Caixa de Som\n" : ""}
    
    
    `;

    modalOpenClose();
    document.querySelector("#resultTemplate").innerText = template;
}

function clearForm() {
    let equipment = formRef.equipment;
    equipment.projector.checked = false;
    equipment.notebook.checked = false;
    equipment.sound.checked = false;
    equipment.projScreen.checked = false;
    
    formRef.name.value = "";
    formRef.course.value = "";
    formRef.classroom.value = "";
    formRef.schenduling.forEach((elem) => {
        elem.querySelector(".selectDate").value = "";
        elem.querySelector(".FirstPeriodTime").value = "";
        elem.querySelector(".SecondPeriodTime").value = "";
    });
}

function getCourseByID(id) {
    let course = "";
    switch (id) {
        case "F1A1":
            course = "Fundamental 1 - 1º Ano"
            break
        case "F1A2":
            course = "Fundamental 1 - 2° Ano"
            break
        case "F1A3":
            course = "Fundamental 1 - 3° Ano"
            break
        case "F1A4":
            course = "Fundamental 1 - 4° Ano"
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