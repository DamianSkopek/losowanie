
const result = []

const button = document.querySelector('button')

button.addEventListener('click', losowanie)

const liczbaLosowan = 15

function losowanie(){

    //ograniczenie ilości wylosowanych liczb
    if (result.length===liczbaLosowan) return

    //tworzy diva, zapisuje pod zmienną div
    const div = document.createElement('div')

    const wynikLosowania = Math.floor(Math.random()*liczbaLosowan+1)

    for (let i =0, n=result.length; i<n ; i++){
        if(wynikLosowania===result[i]) {
            console.log("AYYY ta liczba już była")
            return losowanie()
        }
    }
    //dodanie losowej liczby do tagu
    div.textContent = wynikLosowania
    //dodanie diva do body
    document.body.appendChild(div)
    result.push(wynikLosowania)
}