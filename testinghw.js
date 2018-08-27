function getCustomAttribute(){
    let customElements = document.querySelectorAll(`[data-customAttr]`)
    for (i = 0; i<customElements.length; i++){
        console.log(customElements[i].attributes[`data-customAttr`]);
        console.log(customElements[i]);
    }
}