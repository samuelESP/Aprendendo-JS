function changeMode() { //Vou usar essa function para chamar as outras.
    changeClasses();
    changeText();

}



function changeClasses() {
    button.classList.toggle(darkModeClass); 
    // Sé ja tiver dark-mode ele vai tirar, e se não tiver ele vai adicionar.
    h1.classList.toggle(darkModeClass); 
    body.classList.toggle(darkModeClass); 
    footer.classList.toggle(darkModeClass); 
}



function changeText() {
    const LightMode = 'Light Mode';
    const DarkMode = 'Dark Mode';

    
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = LightMode;
        h1.innerHTML = DarkMode + ' ON';
        return
    }
    button.innerHTML = DarkMode;
    h1.innerHTML = LightMode + ' ON';
}; 
//contains vai ver se dentro da classList existe darkModeClass;
//Se qualquer elemento tiver darkModeClass todo o resto também tem, então eu posso colocar qualquer Tag aqui.



const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
//o TagName('body') vai retornar a coleção do body, então é necessario colocar o index dele para retornar o que eu quero, como ele so tem 1 eu posso retornar com [0].
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode';



button.addEventListener('click', changeMode);