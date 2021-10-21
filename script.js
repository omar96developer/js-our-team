//OBJET WITH IMAGE NAME AND ROLE
const membro = {
    'image' : ['angela-caroll-chief-editor.jpg', 'walter-gordon-office-manager.jpg', 'angela-lopez-social-media-manager.jpg', 'scott-estrada-developer.jpg', 'barbara-ramos-graphic-designer.jpg'],
    'name' : ['Angela Caroll', 'Walter Gordon', 'Angela Lopez', 'Scott Estrada', 'Barbara Ramos'],
    'role' : ['Chief Editor', 'Office Manager', 'Social Media Manager', 'Developer', 'Graphic Designer'],
    
};

console.log(membro.name)
console.log(membro.role)
console.log(membro.image)


//SELECTED DIV.TEAMCONTAINER
const teamContainer = document.querySelector('.team-container');

// LOOP FOR CREATE 5 TEAM CARD
for(let i = 0; i < membro.name.length; i++){
    teamContainer.innerHTML += `<div class="team-card">
                                <div class="card-image">
                                <img
                                    src=img/${membro.image[i]}
                                    alt="${membro.image[i]}"
                                />
                                </div>
                                <div class="card-text">
                                <h3>${membro.name[i]}</h3>
                                <p>${membro.role[i]}</p>
                            </div>`;
}



const memberIpt = document.getElementById('addMemberButton');


memberIpt.addEventListener('click', () => {
    const nameIpt = document.getElementById('name').value;
    console.log(nameIpt)
    membro.name.push(nameIpt)

    const roleIpt = document.getElementById('role').value;
    console.log(roleIpt)
    membro.role.push(roleIpt)

    const imageIpt = document.getElementById('image').value;
    console.log(imageIpt)
    membro.image.push(imageIpt)

    teamContainer.innerHTML += `<div class="team-card">
                                <div class="card-image">
                                <img
                                    src=img/${imageIpt}
                                    alt="${nameIpt}"
                                />
                                </div>
                                <div class="card-text">
                                <h3>${nameIpt}</h3>
                                <p>${roleIpt}</p>
                            </div>`;    

})

