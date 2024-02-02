// image-upload.js

function openFileInput() {
    document.getElementById('image-upload-input').click();
}

function handleFileUpload() {
    const input = document.getElementById('image-upload-input');
    const container = document.getElementById('uploaded-image-container');

    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = new Image();
            image.src = e.target.result;

            // Add the 'wrap' class to the dynamically created image
            image.classList.add('wrap');

            container.innerHTML = ''; // Clear existing content
            container.appendChild(image);
        };

        reader.readAsDataURL(file);
    }
}

// Attach event listener to file input
document.getElementById('image-upload-input').addEventListener('change', handleFileUpload);
