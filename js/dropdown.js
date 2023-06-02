function itemsSet(item) {
    var button = document.getElementById("items");
    button.textContent = item.textContent.trim();
}

function changeCaret(){

    const caret = document.querySelector('.caret');
    const rotation = caret.style.transform;
  
    if (rotation === 'rotate(180deg)') {
      caret.style.transform = 'rotate(0deg)';
    } else {
      caret.style.transform = 'rotate(180deg)';
    }
}

function inrdata(){
    const input = document.querySelector('input[type="number"]');
    input.value = parseInt(input.value) + 1;

}

function dcrdata(){
    const input = document.querySelector('input[type="number"]');
    input.value = parseInt(input.value) - 1;
    if (input.value < 1)
        input.value = 1;   
}
