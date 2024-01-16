//your JS code here. If required.
function changeColor() {
    const blockId = document.getElementById('block_id').value;
    const colorId = document.getElementById('colour_id').value;

    // Reset all grid items to transparent
    resetColors();

    // Change the background color of the selected grid item
    const blockElement = document.getElementById(blockId);
    if (blockElement) {
        blockElement.style.backgroundColor = colorId;
    }
}

function resetColors() {
    const gridItems = document.getElementsByClassName('grid-item');
    for (const item of gridItems) {
        item.style.backgroundColor = 'transparent';
    }
}

