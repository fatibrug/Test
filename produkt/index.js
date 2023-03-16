

const dropdown = document.getElementsByName('Artikelnummer')[0];
const inputField = document.getElementsByName('Bezeichnung')[0];

dropdown.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedDescription = selectedOption.getAttribute('data-description');
    inputField.value = selectedDescription;
});