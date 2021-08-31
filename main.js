// let edelMetallPreise = [
//     { name: "Gold", preiseGramEuro: 42.91, veranderung: "+0.12%" },
//     { name: "Silber", preiseGramEuro: 0.51, veranderung: "+1.02%" },
//     { name: "Platin", preiseGramEuro: 25.74, veranderung: "+0.41%" },
//     { name: "Palladium", preiseGramEuro: 50.93, veranderung: "0.00%" },
//     { name: "Rhodium", preiseGramEuro: 160.12, veranderung: "-0.10%" },
//     { name: "Iridium", preiseGramEuro: 42.84, veranderung: "0.00%" },
//     { name: "Ruthenium", preiseGramEuro: 7.36, veranderung: "0.00%" },
//     { name: "Rhenium", preiseGramEuro: 37.22, veranderung: "-0.53%" },
//     { name: "Osmium", preiseGramEuro: 11.54, veranderung: "0.00%" }
// ];

// showMap = () => {
//     let nameArr = []
//     edelMetallPreise.forEach(elt => {
//         nameArr.push(elt.name)
//     })
//     console.log(nameArr)
//     console.log(edelMetallPreise.map(elt => elt.name))
//     let preiseArr = []
//     edelMetallPreise.forEach(elt => {
//         preiseArr.push(elt.preiseGramEuro)
//     })
//     console.log(preiseArr)
//     console.log(edelMetallPreise.map(elt => elt.preiseGramEuro))
//     console.log(edelMetallPreise.map(elt => elt.veranderung))
//     console.log(edelMetallPreise.filter(function (elt) {
//         if (elt.preiseGramEuro > 50) {
//             return elt.preiseGramEuro
//         } else {
//             return
//         }
//     }))
// }

// showMap()

// const singers2 = [
//     { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
//     { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
//     { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
//     { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
//     { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
//     { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
//     { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
//     { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
// ];

// function sortedArray(sortName) {
//     return ((a, b) => a[sortName] > b[sortName] ? 1 : -1)
// }
// console.log(singers2.sort(sortedArray('genre')))

const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

function singSortName() {

    singers.sort(function (a, b) {
        if (a.name > b.name) {
            return 1
        } else if (a.name < b.name) {
            return -1
        }
        return 0
    })
    addElement()
}

function singSortCountry() {
    singers.sort(function (a, b) {
        if (a.country > b.country) {
            return 1
        } else if (a.country < b.country) {
            return -1
        }
        return 0
    })
    addElement()
}

function singSortPeriod() {
    singers.sort(function (a, b) {
        if (a.period_active.start > b.period_active.start) {
            return 1
        } else if (a.period_active.start < b.period_active.start) {
            return -1
        }
        return 0
    })
    addElement()
}

function singSortGenre() {
    singers.sort(function (a, b) {
        if (a.genre > b.genre) {
            return 1
        } else if (a.genre < b.genre) {
            return -1
        }
        return 0
    })
    addElement()
}

let start = document.getElementById("table").innerHTML

function addElement() {
    document.getElementById("table").innerHTML = start
    singers.forEach(elt => {
        let addElement = document.createElement("tr")
        addElement.innerHTML = `
                <td>${elt.name}</td>
                <td>${elt.country}</td>
                <td>${elt.period_active.start} - ${elt.period_active.end}</td>
                <td>${elt.genre}</td>`
        document.getElementById("table").appendChild(addElement)
    })
}

addElement()

function searchElement() {

    document.getElementById("table").innerHTML = start

    singers.filter(elt => {
        if (elt.name == document.getElementById("searchText").value) {
            let addElement = document.createElement("tr")
            addElement.innerHTML = `
                <td>${elt.name}</td>
                <td>${elt.country}</td>
                <td>${elt.period_active.start} - ${elt.period_active.end}</td>
                <td>${elt.genre}</td>`
            document.getElementById("table").appendChild(addElement)
        } else {
            return
        }
    })

}





