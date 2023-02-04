function swap(){

    

    styling = document.getElementById('currentStyle');
    const currentButton = document.getElementById('toggle');

    if(styling.getAttribute("href")==="css/lightmode.css"){
        styling.setAttribute("href","css/darkmode.css");
        toggle.innerHTML = "Light";

    }
    else{
        styling.setAttribute("href","css/lightmode.css");
        toggle.innerHTML = "Dark";
    }
}