const baseUrl = 'http://localhost:8081/sentiment?url=';
const errorMsgSpan = document.querySelector('.error-message');

document.addEventListener('DOMContentLoaded', function () {
    errorMsgSpan.style.display = 'none';

    if (document.querySelector('#modelText').innerHTML == '') {
        document.querySelector('#resultsSection').style.display = 'none';
    }
    else {
        document.querySelector('#resultsSection').style.display = '';
    }
});

function analyzeArticleClick(event) {
    event.preventDefault();

    if (!validateUrlInput())
        return false;

    // check what text was put into the form field
    const articleUrl = document.querySelector('#url').value;
    const apiUrl = `${baseUrl}${articleUrl}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(function (res) {
            document.querySelector('#resultsSection').style.display = '';
            document.querySelector('#modelText').innerHTML = res.model;
            document.querySelector('#scoreTagText').innerHTML = res.score_tag;
            document.querySelector('#agreementText').innerHTML = res.agreement;
            document.querySelector('#subjectivityText').innerHTML = res.subjectivity;
            document.querySelector('#confidenceText').innerHTML = res.confidence;
            document.querySelector('#ironyText').innerHTML = res.irony;
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

export { analyzeArticleClick }
