//education array  of objects

let education = [
    {
        id: 1,
        year:2022,
        desc: "Level 5 TEFL Certificate",
        place:"The TEFL Acadamy",
    },
    {
        id: 2,
        year:2021,
        desc: "N4/N5 Educare Certificate",
        place:"The TEFL Acadamy",
    },
    {
        id: 3,
        year:2020,
        desc: "Hospitality Certificate",
        place:"South Africa College of Tourism (SACT)",
    },
    {
        id: 4,
        year:2019,
        desc: "Grade 12 Certificate",
        place:"Forest Heights High",
    },
];

let dispeducation = document.querySelector(".education");
education.forEach((data) => {
    dispeducation.innerHTML += `
    <div class= "card">
    <h4 class="display-4">${data.year}</h4>
    <div class="card-body">
    <p class="text-white">${data.desc} @ <span>${data.place}</span>
    </p>
    </div>
    </div> `;
});