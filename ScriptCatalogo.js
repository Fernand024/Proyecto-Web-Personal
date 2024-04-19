function showLargeImage(imageSrc) {
    var existingLargeImage = document.getElementById('large-image-container');
    if (existingLargeImage) {
        document.body.removeChild(existingLargeImage);
    }

    var largeImageDiv = document.createElement('div');
    largeImageDiv.id = 'large-image-container';
    largeImageDiv.style.position = 'fixed';
    largeImageDiv.style.top = '0';
    largeImageDiv.style.left = '0';
    largeImageDiv.style.width = '100%';
    largeImageDiv.style.height = '100%';
    largeImageDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    largeImageDiv.style.display = 'flex';
    largeImageDiv.style.justifyContent = 'center';
    largeImageDiv.style.alignItems = 'center';
    largeImageDiv.style.zIndex = '9999';

    var largeImage = document.createElement('img');
    largeImage.src = imageSrc;
    largeImage.style.maxWidth = '90%';
    largeImage.style.maxHeight = '90%';

    largeImageDiv.appendChild(largeImage);

    document.body.appendChild(largeImageDiv);

    largeImageDiv.addEventListener('click', function (event) {
        if (event.target === largeImageDiv) {
            document.body.removeChild(largeImageDiv);
        }
    });
}

function changeSuit(imageSrc, suitName, suitPiece, suitDescription) {
    document.getElementById('suit-image').src = imageSrc;
    document.getElementById('suit-name').innerText = suitName;
    document.getElementById('suit-description').innerText = suitDescription;

    document.getElementById('suit-image').addEventListener('click', function () {
        showLargeImage(imageSrc);
    });
}
