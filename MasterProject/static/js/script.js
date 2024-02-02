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

            // Add the 'wrap' and 'shimmer' class to the dynamically created image
            image.classList.add('wrap', 'shimmer');

            container.innerHTML = ''; // Clear existing content
            container.appendChild(image);

            // Send the image data to Django views using AJAX
            const imageData = e.target.result;
            sendDataToDjango(imageData);
        };

        reader.readAsDataURL(file);
    }
}

function sendDataToDjango(imageData) {
    // Sending to Django URL named 'upload_image'
    const url = '/upload_image/';

    // jQuery AJAX to send the data
    $.ajax({
        type: 'POST',
        url: url,
        data: {
            'image_data': imageData,
            // You may need to include other data here if required
        },
        success: function (data) {
            // Handle the success response from Django views
            console.log('Image successfully uploaded!');
        },
        error: function (error) {
            // Handle the error response from Django views
            console.error('Error uploading image:', error);
        },
    });
}

// Attach event listener to file input
document.getElementById('image-upload-input').addEventListener('change', handleFileUpload);

// Functions for drag-and-drop
function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const container = document.getElementById('uploaded-image-container');
    const file = event.dataTransfer.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = new Image();
            image.src = e.target.result;

            // Add the 'wrap' and 'shimmer' class to the dynamically created image
            image.classList.add('wrap', 'shimmer');

            container.innerHTML = ''; // Clear existing content
            container.appendChild(image);

            // Send the image data to Django views using AJAX
            const imageData = e.target.result;
            sendDataToDjango(imageData);
        };

        reader.readAsDataURL(file);
    }
}

// Add an event listener to the "bottone" element to refresh page
document.getElementById('bottone').addEventListener('click', function () {
    location.reload();
});
