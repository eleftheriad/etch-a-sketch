const container = document.querySelector(".container")
const reset = document.querySelector(".btn-1");
const clear = document.querySelector(".btn-2");

create_game();


function create_game(){
    let num_of_blocks = prompt("insert number of blocks");
    if (num_of_blocks>100){
        alert("please enter a number up to 100");
        num_of_blocks = prompt("insert number of blocks");
    }
    
    container.style.cssText += "grid-template-columns: repeat(" + num_of_blocks +",1fr)";
    container.style.cssText += "grid-template-rows: repeat(" + num_of_blocks +",1fr)";
    for (let i = 0; i < Math.pow(num_of_blocks,2); i++) {
        var div = document.createElement("div");
        div.classList.add("blk");
        container.appendChild(div);
        console.log('hi');
    }
    let blocks = document.querySelectorAll('.blk');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            block.classList.add("hovered");
        });
    });
    
};


reset.addEventListener('click', function() {
    let blocks = document.querySelectorAll('.blk');
    blocks.forEach((block) => {
        block.classList.remove("hovered");
        block.remove();
    });
    create_game();
});

clear.addEventListener('click', function() {
    let blocks = document.querySelectorAll('.blk');
    blocks.forEach((block) => {
        block.classList.remove("hovered");
    });
});

