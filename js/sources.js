var createElement = function (tegName, className, text){
    var element = document.createElement(tegName);
    element.setAttribute("class", className);
    if(text){
        element.textContent = text;
    }

    return element;
}