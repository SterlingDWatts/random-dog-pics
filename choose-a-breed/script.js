const breedInput = $('#choose-a-breed');

function displayResults(responseJson) {
    $('.dog-pictures').html(' ');
    $('.dog-pictures').removeClass('hidden');
    $('.full-or-not').removeClass('fullscreen')
    $('.not-a-breed').html('')
    $('.dog-pictures').append('\n\t\t<img src="' + responseJson.message + '">');
}

function isABreed(responseJson) {
    if (responseJson.status === "success") {
        displayResults(responseJson);
    } else {
        $('.not-a-breed').html('Could not find pictures of that breed. Please try again')
    }
}

function fetchResponse() {
    fetch(`https://dog.ceo/api/breed/${breedInput.val()}/images/random`)
        .then(response => response.json())
        .then(responseJson =>
            isABreed(responseJson))
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