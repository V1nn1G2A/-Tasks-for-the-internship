let formElement = document.forms['formElement'];

const focusEvent = (e) => {
    let activeElement = e.target;

	if (activeElement) {
        activeElement.classList.add('focused');
    }
};

const blurEvent = function(e) {
	let activeElement = e.target;
    
    if (activeElement) {
     	activeElement.classList.remove('focused');   
    }
};

formElement.addEventListener('focus', focusEvent , true);
formElement.addEventListener('blur', blurEvent , true)
