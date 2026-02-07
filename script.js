//your JS code here. If required.
const changeBtn = document.getElementById('change_button');
const resetBtn = document.getElementById('Reset');

changeBtn.addEventListener('click', () => {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Validate block id
    if (blockId < 1 || blockId > 9) {
        alert("Block ID must be between 1 and 9");
        return;
    }

    // Reset all blocks to transparent
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).style.backgroundColor = "transparent";
    }

    // Change color of the specified block
    document.getElementById(blockId).style.backgroundColor = color;
});

// Reset button clears all colors
resetBtn.addEventListener('click', () => {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).style.backgroundColor = "transparent";
    }

    // Optionally clear input fields
    document.getElementById('block_id').value = '';
    document.getElementById('colour_id').value = '';
});