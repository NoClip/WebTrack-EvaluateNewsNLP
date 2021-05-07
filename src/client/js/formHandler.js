const baseUrl = 'http://localhost:8081/sentiment?url=';
const errorMsgSpan = document.querySelector('.error-message');


document.addEventListener('DOMContentLoaded', function () {
    errorMsgSpan.style.display = 'none';

    if (document.querySelector('#model').innerHTML == '') {
        document.querySelector('#resultsSection').style.display = 'none';
    }
    else {
        document.querySelector('#resultsSection').style.display = '';
    }
});

function handleSubmit(event) {
    event.preventDefault();

    if (!validateUrlInput())
        return false;

    // check what text was put into the form field
    const articleUrl = document.querySelector('#url').value;
    //Client.checkForName(formText)

    const apiUrl = `${baseUrl}${articleUrl}`;
    // https://www.freecodecamp.org/news/async-await-in-javascript/

    console.log("::: Form Submitted :::");

    fetch(apiUrl)
        .then(res => res.json())
        .then(function (res) {
            document.querySelector('#resultsSection').style.display = '';
            document.querySelector('#model').innerHTML = res.model;
            document.querySelector('#score_tag').innerHTML = res.score_tag;
            document.querySelector('#agreement').innerHTML = res.agreement;
            document.querySelector('#subjectivity').innerHTML = res.subjectivity;
            document.querySelector('#confidence').innerHTML = res.confidence;
            document.querySelector('#irony').innerHTML = res.irony;
        });
}

function validateUrlInput() {
    const url = document.querySelector('#url').value;
    if (Client.urlIsValid(url)) {
        errorMsgSpan.style.display = 'none';
        return true;
    }

    errorMsgSpan.style.display = '';
    return false;
}

export { handleSubmit }
