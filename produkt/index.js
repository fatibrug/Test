
const dropdown = document.getElementsByName('Artikelnummer')[0];
const inputField = document.getElementsByName('Bezeichnung')[0];

dropdown.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedDescription = selectedOption.getAttribute('Bezeichnung');
    inputField.value = selectedDescription;
});




// oder du kannst es auch so mit der if bedingung probieren

dropdown.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    let selectedDescription = '';
    
    if (selectedValue === '123') {
        selectedDescription = 'This is the description for item 123.';
    }
    
    inputField.value = selectedDescription;
});



//oder hier...

const dropdown = document.getElementsByName('Artikelnummer')[0];
const inputField = document.getElementsByName('Bezeichnung')[0];

// keine Ahnung wo deine sachen definiert sind...
const articles = {
    '123': 'This is the description for item 123.',
    '456': 'This is the description for item 456.',
    '789': 'This is the description for item 789.'
};

dropdown.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    let article = '';
    let description = '';
    
   
    if (articles.hasOwnProperty(selectedValue)) {
        article = selectedValue;
        description = articles[selectedValue];
    }
    
    // Update 
    inputField.value = description;
});
