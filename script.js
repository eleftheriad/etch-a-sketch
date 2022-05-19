
create_game();


function create_game(){
    let num_of_blocks = prompt("insert number of blocks");
    if (num_of_blocks>100){
        alert("please enter a number up to 100");
        num_of_blocks = prompt("insert number of blocks");
    }
    const container = document.querySelector(".container")
    var A = new Array(num_of_blocks);
    container.style.cssText += "grid-template-columns: repeat(" + num_of_blocks +",1fr)";
    container.style.cssText += "grid-template-rows: repeat(" + num_of_blocks +",1fr)";
    for (let i = 0; i < Math.pow(num_of_blocks,2); i++) {
        A[i] = document.createElement("div");
        A[i].classList.add("blk")
        container.appendChild(A[i]);
    }
};


const blocks = document.querySelectorAll('.blk');
blocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
        block.classList.add("hovered");
    })
});

const reset = document.querySelector(".btn-1");
reset.addEventListener('click', function() {
    blocks.forEach((block) => {
            block.classList.remove("hovered");
    });
    reset_game();
});


function reset_game(){
    create_game();
};