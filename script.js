const numInput = $('#choose-a-number')

function displayResults(responseJson) {
    console.log(responseJson)
}

function handleSubmitClick() {
    $('#num-dogs').on('click', function(e) {
        this.preventDefault;
        fetch(`https://dog.ceo/api/breeds/image/random/${numInput.val()}`)
            .then(response => response.json())
            .then(responseJson =>
                displayResults(responseJson))
            .catch(error => alert(error));
    })
}

function loadStartFunctions() {
    handleSubmitClick();
}

$(loadStartFunctions());