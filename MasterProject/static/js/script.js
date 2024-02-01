//script.js

function handleDrop(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const uploadedImage = document.getElementById('uploadedImage');
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
}

function handleDragOver(event) {
    event.preventDefault();
}

// Additional functionality can be added here as per your requirements

// Example: If you want to trigger an action after image upload
// document.getElementById('uploadedImage').addEventListener('click', function() {
//     // Your code here
// });