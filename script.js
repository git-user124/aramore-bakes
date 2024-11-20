hamburgerMenu = document.getElementById('hamburger-menu')
const nav = document.querySelector('nav')

hamburgerMenu.onclick = function() {
    nav.classList.toggle('active')
}

function order() {
    
    selectedItems = []
    checkboxes = document.querySelectorAll('input[name="item"]:checked')
    
    checkboxes.forEach(function(checkbox) {
        selectedItems.push(checkbox.value)
    })
    
    if (selectedItems.length > 0) {
        orderMessage = "Your Order:\n" + selectedItems.join('\n')
        alert(orderMessage) 
    } else 
        alert('No items selected.')
}
