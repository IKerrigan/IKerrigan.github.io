const result = document.querySelector('.result');
const button = document.querySelector('.btn');
const row = document.querySelector('.row');

const form = document.forms['main-form'];

// Upercase Ukrainian Regex String
const ucRegexString = '[А-ЩЬЮЯҐЄІЇ]';
// Lowercase Ukrainian Regex String
const lcRegexString = '[а-щьюяґєії]';

const validators = {
  pib: new RegExp(
    `${ucRegexString}${lcRegexString}+ ${ucRegexString}.${ucRegexString}.`
  ),
  faculty: new RegExp(`${ucRegexString}+`),
  dob: new RegExp(
    /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
  ),
  address: new RegExp(`м. ${ucRegexString}${lcRegexString}+`),
  email: new RegExp(/^\S+@\S+\.\S+$/),
};

function getFormData(form) {
  return new FormData(form);
}

function validateFormData(formData) {
  return Object.entries(validators).map(([key, value]) => {
    const formValue = formData.get(key);

    const isValid = value.test(formValue);

    const input = document.querySelector(`[name="${key}"]`);
    const result = document.getElementById(key);

    if (isValid) {
      input.style.border = null;
      result.innerText = formValue;
    } else {
      input.style.border = '1px solid red';
      result.innerText = null;
    }

    return isValid;
  });
}

button.addEventListener('mouseup', function () {
  const formData = getFormData(form);
  const errors = validateFormData(formData);

  if (errors.every(Boolean)) {
    row.style.justifyContent = 'space-around';
    result.style.display = 'block';
  } else {
    row.style.justifyContent = 'center';
    result.style.display = 'none';
  }
});
