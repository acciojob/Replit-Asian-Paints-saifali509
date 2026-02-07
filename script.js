//your JS code here. If required.
const changeBtn = document.getElementById('change_button');
const resetBtn = document.getElementById('reset_button');

changeBtn.addEventListener('click', () => {
  const blockId = parseInt(document.getElementById('block_id').value);
  const color = document.getElementById('colour_id').value;

  if (blockId < 1 || blockId > 9 || isNaN(blockId)) {
    alert('Block ID must be a number between 1 and 9');
    return;
  }

  const items = document.querySelectorAll('.grid-container .grid-item');

  // Reset all blocks
  items.forEach(item => item.style.backgroundColor = 'transparent');

  // Change selected block
  items[blockId - 1].style.backgroundColor = color;
});

resetBtn.addEventListener('click', () => {
  const items = document.querySelectorAll('.grid-container .grid-item');
  items.forEach(item => item.style.backgroundColor = 'transparent');

  document.getElementById('block_id').value = '';
  document.getElementById('colour_id').value = '';
});