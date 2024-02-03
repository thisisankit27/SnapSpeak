function openFileInput() {
    document.getElementById('image-upload-input').click();
}

function handleFileUpload() {
    const input = document.getElementById('image-upload-input');
    const container = document.getElementById('uploaded-image-container');
    const schermo = document.getElementById('schermo');

    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = new Image();
            image.src = e.target.result;

            // Add the 'wrap' and 'shimmer' class to the dynamically created image
            image.classList.add('wrap', 'shimmer');

            // Remove the background image class from #schermo
            schermo.classList.remove('has-background-image');

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
            displayOverlay(data.message);
        },
        error: function (error) {
            // Handle the error response from Django views
            console.error('Error uploading image:', error);
        },
    });
}

function displayOverlay(message) {
    console.log("displaying overlay");
    // Show overlay with the provided message
    var overlayBox = document.getElementById("overlay-box");
    var overlayText = document.getElementById("overlay-text");

    if (overlayBox && overlayText) {
        overlayBox.style.display = "block";
        overlayText.innerText = message;

        // Hide overlay after 3 seconds (adjust as needed)
        setTimeout(function () {
            overlayBox.style.display = "none";
        }, 3000);
    } else {
        console.error("Error accessing overlay elements. Check your element IDs.");
    }
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
    const schermo = document.getElementById('schermo');

    const file = event.dataTransfer.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = new Image();
            image.src = e.target.result;

            // Add the 'wrap' and 'shimmer' class to the dynamically created image
            image.classList.add('wrap', 'shimmer');

            // Remove the background image class from #schermo
            schermo.classList.remove('has-background-image');

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


let cameraStream;
let cameraModal = document.getElementById('cameraModal');
let cameraFeed = document.getElementById('cameraFeed');

function openCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            cameraStream = stream;
            cameraFeed.srcObject = stream;
            cameraModal.style.display = 'block';
        })
        .catch(function (error) {
            console.error('Error accessing camera:', error);
        });

    // Show the camera modal
    cameraModal.style.display = 'block';
}

function takePicture() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set the canvas dimensions to match the video feed
    canvas.width = cameraFeed.videoWidth;
    canvas.height = cameraFeed.videoHeight;

    // Draw the current frame from the video feed onto the canvas
    context.drawImage(cameraFeed, 0, 0, canvas.width, canvas.height);

    // Convert the canvas content to base64 data URL
    const imageData = canvas.toDataURL('image/png');

    // Close the camera modal
    closeCameraModal();

    // Display the image in the container
    displayImage(imageData);

    // Send the image data to Django
    sendDataToDjango(imageData);
}

function closeCameraModal() {
    if (cameraStream) {
        // Stop the camera stream
        cameraStream.getTracks().forEach(track => track.stop());
    }
    cameraModal.style.display = 'none';
}

function displayImage(imageData) {
    const schermo = document.getElementById('schermo');
    // Remove the background image class from #schermo
    schermo.classList.remove('has-background-image');

    const container = document.getElementById('uploaded-image-container');
    const image = new Image();
    image.src = imageData;
    image.classList.add('wrap', 'shimmer');
    container.innerHTML = '';
    container.appendChild(image);
}

function unusedFunction() {
    // Add logic for the unused button (leave it idle for now)
    alert('This button is currently unused.');
}