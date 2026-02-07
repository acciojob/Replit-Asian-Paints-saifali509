//your JS code here. If required.
const changeBtn = document.getElementById('change_button');
const resetBtn = document.getElementById('reset_button');

changeBtn.addEventListener('click', () => {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Validate block ID
    if (blockId < 1 || blockId > 9) {
        alert("Block ID must be between 1 and 9");
        return;
    }

    // Reset all blocks to transparent
    const gridItems = document.querySelectorAll('#grid-container .grid-item');
    gridItems.forEach(item => item.style.backgroundColor = "transparent");

    // Change color of the specified block
    gridItems[blockId - 1].style.backgroundColor = color;
});

resetBtn.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('#grid-container .grid-item');
    gridItems.forEach(item => item.style.backgroundColor = "transparent");

    document.getElementById('block_id').value = '';
    document.getElementById('colour_id').value = '';
});