$(document).ready(function() {
    $('#getIdeaButton').click(function() {
        getBucketListIdea();
    });
});

function getBucketListIdea() {
    var apiKey = 'wQ2Cf/EcmS7RWe6cKy+WEQ==MXT0boH3jHTW5AgC';
    var apiUrl = 'https://api.api-ninjas.com/v1/bucketlist';

    $.ajax({
        method: 'GET',
        url: apiUrl,
        headers: {
            'X-Api-Key': apiKey
        },
        contentType: 'application/json',
        success: function(result) {
            displayIdea(result);
        },
        error: function(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

function displayIdea(idea) {
    $('#ideaContainer').html('<p>' + idea.item + '</p>');
}
