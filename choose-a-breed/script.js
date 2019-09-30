const breedInput = $('#choose-a-breed');

function displayResults(responseJson) {
    $('.dog-pictures').html(' ');
    $('.dog-pictures').removeClass('hidden');
    $('.full-or-not').removeClass('fullscreen')
    for (let i = 0; i < responseJson.message.length; i ++) {
        $('.dog-pictures').append('\n\t\t<img src="' + responseJson.message[i] + '">');
    }
}

function fetchResponse() {
    fetch(`https://dog.ceo/api/breed/${breedInput.val()}/images/random`)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert(error));
}

function handleSubmitClick() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        fetchResponse();
    })
}

function loadStartFunctions() {
    handleSubmitClick();
}

$(loadStartFunctions());