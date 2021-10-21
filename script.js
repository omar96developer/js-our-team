//OBJET WITH IMAGE NAME AND ROLE
const membro = {
    'image' : ['img/angela-caroll-chief-editor.jpg', 'img/walter-gordon-office-manager.jpg', 'img/angela-lopez-social-media-manager.jpg', 'img/scott-estrada-developer.jpg', 'img/barbara-ramos-graphic-designer.jpg'],
    'name' : ['Angela Caroll', 'Walter Gordon', 'Angela Lopez', 'Scott Estrada', 'Barbara Ramos'],
    'role' : ['Chief Editor', 'Office Manager', 'Social Media Manager', 'Developer', 'Graphic Designer'],
    
};
console.log(membro.image, membro.name, membro.role)
console.log(membro.image[0])

//SELECTED DIV.TEAMCONTAINER
const teamContainer = document.querySelector('.team-container');



// LOOP FOR CREATE 5 TEAM CARD
for(let i = 0; i < 5; i++){
    teamContainer.innerHTML += `<div class="team-card">
                                <div class="card-image">
                                <img
                                    src=${membro.image[i]}
                                    alt="Wayne Barnett"
                                />
                                </div>
                                <div class="card-text">
                                <h3>${membro.name[i]}</h3>
                                <p>${membro.role[i]}</p>
                            </div>`;
}

