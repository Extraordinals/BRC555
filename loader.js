function loadInscription() {
    // Create a div element to serve as the container for the content
    const content = document.createElement("div");
    content.className = "content";
    content.id = "content-id";
    document.body.appendChild(content); // Append the container to the body of the document

    // Create an img element for the background image
    const backgroundImg = document.createElement("img");
    backgroundImg.className = "background-img";
    backgroundImg.id = "background-img-id";
    backgroundImg.src = "/content/80d51e00c338aff78e41fad01f004a117e76291bea63e4f912e1a2c9dd1fbc0di0"; // CHANGE WITH YOUR IMAGE ID
    content.appendChild(backgroundImg); // Append the image to the container

    // Optional: Add error handling for image loading issues
    backgroundImg.onerror = function() {
        console.error('Failed to load the background image at:', backgroundImg.src);
    };

    // Optional: Set alt text for accessibility
    backgroundImg.alt = "Your background image";
}
