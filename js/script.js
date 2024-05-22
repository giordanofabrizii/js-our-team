// > BANCA DATI

// < Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// < Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// < Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// < Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// < Scott Estrada	Developer	scott-estrada-developer.jpg
// < Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

const team = [
    {
        nome: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
];

// // Print in the console
// for (let index in team) {
//     for (let key in team[index]) {
//         console.log(team[index][key])
//     }
// }

// // Add info in the HTML
// const containerEl = document.getElementById('container');

// for (let index in team) {
//     let stringa = `Membro n. ${parseInt(index) + 1}: ${team[index].nome}, ruolo: ${team[index].role}, link dell'immagine: ${team[index].img}`;
//     liEl = document.createElement("li");
//     liEl.append(stringa);
//     containerEl.appendChild(liEl)
// }

{/* <article>
<img src="./img/angela-caroll-chief-editor.jpg" alt="">
<h3>Angela Caroll</h3>
<p>Chief Editor</p>
</article> */}

// // Add card inthe HTML
const containerEl = document.getElementById('members-container');

// create elements
for (let index in team) {
    let member = team[index];
    let articleEl = document.createElement("article");

    // then create the elements inside the article
    let imgEl = document.createElement("img");
    let path = `./img/${member.img}`;
    imgEl.src = path;
    articleEl.appendChild(imgEl);

    let nameEl = document.createElement("h3");
    nameEl.append(member.nome);
    articleEl.appendChild(nameEl);

    let roleEl = document.createElement("p");
    roleEl.append(member.role);
    articleEl.appendChild(roleEl);

    // insert the article in the container
    containerEl.appendChild(articleEl);
}
