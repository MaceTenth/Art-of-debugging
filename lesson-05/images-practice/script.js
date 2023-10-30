const imageContainer = document.getElementById('image-container');

// Array of topics to fetch random images from
const topics = ['nature', 'technology', 'city'];

for (let i = 0; i < 3; i++) {
    const imgDiv = document.createElement('div');
    imgDiv.className = 'image-div';
    
    const img = document.createElement('img');
    // Using a different topic for each image request
    img.src = `htttps://source.unsplash.com/random/500X500?${topics[i]}`;
    
    imgDiv.appendChild(img);
    imageContainer.appendChild(imgDiv);
}
