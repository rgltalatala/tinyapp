// only got to set up bare minimum for index.html in alotted 20 minutes

let apps = [
    'app',
    'blog',
    'shop',
    'note',
    'game',
    'art',
    'grave'
]

let appName = document.getElementById('app-name');
let links = document.getElementsByClassName("nav-bar-link");
appName.innerHTML = apps[0];

const toggleDark = () => {
    document.body.style.backgroundColor = '#000000'
    document.body.style.color = '#FFFFFF'
    appName.style.color = "red"
    for (let i = 0; i < links.length; i++){
        links[i].style.color = '#FFFFFF'
    }
}

const toggleLight = () => {
    document.body.style.backgroundColor = '#FFFFFF'
    document.body.style.color = '#000000'
    appName.style.color = "#C9BFDE"
    for (let i = 0; i < links.length; i++){
        links[i].style.color = '#000000'
    }
}

const rotateRight = () => {
    apps.push(apps.shift());
    appName.innerHTML = apps[0];
    apps[0] === 'grave' ? toggleDark() : toggleLight();
    return apps;
}

const rotateLeft = () => {
    apps.unshift(apps.pop());
    appName.innerHTML = apps[0];
    apps[0] === 'grave' ? toggleDark() : toggleLight();
    return apps;
}

document.getElementById('right-button').onclick = rotateRight;
document.getElementById('left-button').onclick = rotateLeft;