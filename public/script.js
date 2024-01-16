fetch('./data.json')
.then(results=>results.json())
.then(data=> {
    const hackathonsContainer = document.getElementById('hackathon-list');
    data.hackathons.forEach(hackathon =>{
        const allPrizes = hackathon.prizes;
        const firstPrize = allPrizes[0].amount;
        const secondPrize = allPrizes[1].amount;
        const thirdPrize = allPrizes[2].amount;


        const hackathonDiv = document.createElement('div');
        hackathonDiv.classList.add('hackathon');
        hackathonDiv.innerHTML = `
        <div id="left-container">
            <h2>${hackathon.title}</h2>
            <p><strong>Schedule: </strong>${hackathon.schedules}</p>
            <p><strong>Themes: </strong>${hackathon.themes[0]} / ${hackathon.themes[1]} / ${hackathon.themes[2]}</p>
            <p><strong>Sponsors: </strong>${hackathon.sponsors[0]} / ${hackathon.sponsors[1]} / ${hackathon.sponsors[2]}</p>
        </div>
        <div id="right-container">
            <img src="./1.png" alt="First prize" />
            <p id="prizes"> ${firstPrize}</p>
            <img src="./2.png" alt="First prize" />
            <p id="prizes"> ${secondPrize}</p>
            <img src="./3.png" alt="First prize" />
            <p id="prizes"> ${thirdPrize}</p>
        </div>
        `;
        hackathonsContainer.appendChild(hackathonDiv);
    });
})
.catch(err => console.log(err));


