const numInput = $('#choose-a-number')

function handleSubmitClick() {
    $('#num-dogs').on('click', function(e) {
        this.preventDefault;
        fetch(`https://dog.ceo/api/breeds/image/random/${numInput.val()}`)
            .then(response => response.json())
            .then(responseJson =>
                displayResults(responseJson))
            .catch(error => alert('Somethin went wrong. Try again later.'));
    })
}

function loadStartFunctions() {
    handleSubmitClick();
}

$(loadStartFunctions());