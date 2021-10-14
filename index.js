// // only got to set up bare minimum for index.html in alotted 20 minutes

// let apps = [
//     'app',
//     'blog',
//     'shop',
//     'note',
//     'game',
//     'art',
//     'grave'
// ]

// const display = document.getElementById('display')
// let appName = document.getElementById('app-name');
// let links = document.getElementsByClassName("nav-bar-link");
// appName.innerHTML = apps[0];

// const setDisplay = () => {
//     let selectedApp = apps[0];
//     appName.innerHTML = selectedApp;
//     appName.style.color = "2ED9EB"
//     if (selectedApp === "art") generateArt()
// }

// const toggleDark = () => {
//     document.body.style.backgroundColor = '#000000'
//     document.body.style.color = '#FFFFFF'
//     appName.style.color = "red"
//     for (let i = 0; i < links.length; i++){
//         links[i].style.color = '#FFFFFF'
//     }
// }

// const toggleLight = () => {
//     document.body.style.backgroundColor = '#FFFFFF'
//     document.body.style.color = '#000000'
//     appName.style.color = "#C9BFDE"
//     for (let i = 0; i < links.length; i++){
//         links[i].style.color = '#000000'
//     }
// }

// const rotateRight = () => {
//     apps.push(apps.shift());
//     setDisplay();
//     // appName.innerHTML = apps[0];
//     // apps[0] === 'grave' ? toggleDark() : toggleLight();
//     // return apps;
// }

// const rotateLeft = () => {
//     apps.unshift(apps.pop());
//     setDisplay();
//     // appName.innerHTML = apps[0];
//     // apps[0] === 'grave' ? toggleDark() : toggleLight();
//     // return apps;
// }

// document.getElementById('right-button').onclick = rotateRight;
// document.getElementById('left-button').onclick = rotateLeft;


let appList = Object.values(apps)

const display = document.getElementById('display');
const appTitle = document.getElementById('app-name');
const options = document.getElementById('options');

const cleanUp = () => {
    document.body.style.backgroundColor = "white"
    let appName = document.getElementsByClassName("app-name")[0];
    appName.style.color = "black"
    display.innerHTML = '';
}

const render = (appName) => {
    cleanUp();
    switch (appName) {
        case('game'):
            return generateGame();
        case('notes'):
            return generateNotes();
        case('art'):
            return generateArt();
        case('grave'):
            return generateGrave();
        default:
            return;
    }
}

const setDisplay = () => {
    let selectedApp = appList[0];
    appTitle.innerHTML = selectedApp.name;
    appTitle.style.color = selectedApp.color;
    render(selectedApp.name);
    // generateNotes()
    // if (selectedApp === " art"){
    //     cleanUp();
    //     generateArt();
    // } else if (selectedApp === " game") {
    //     cleanUp();
    //     generateGame();
    // } else {
    //     cleanUp();
    // }
};

const rotateRight = () => {
    appList.push(appList.shift());
    setDisplay();
};

const rotateLeft = () => {
    appList.unshift(appList.pop());
    setDisplay();
};

document.getElementById('button-right').onclick = rotateRight;
document.getElementById('button-left').onclick = rotateLeft;

const keyDown = e => {
    switch(e.keyCode){
        case(37):
            rotateLeft();
            break;
        case(39):
            rotateRight();
            break;
        default:
            return;
    }
}

document.addEventListener('keydown', keyDown);

document.addEventListener('DOMContentLoaded', () => {
    setDisplay();
});