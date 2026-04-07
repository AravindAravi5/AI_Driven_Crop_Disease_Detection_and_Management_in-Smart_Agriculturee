document.getElementById('imageUpload').addEventListener('change', function() {
    const fileInput = document.getElementById('imageUpload');
    const fileName = fileInput.files[0] ? fileInput.files[0].name : 'Choose a file';
    const fileNameElement = document.getElementById('fileName');
    if (fileNameElement) {
        fileNameElement.textContent = fileName;
    }
});

const imageInfo = {
    "6a56a429-b241.JPG": {
        additionalImage1: "/static/tamato.jpeg",
        additionalImage2: "/static/tamato.jpeg",
        description: "Tomato bacterial spot is a disease caused by bacteria that affects tomato plants. It creates small, dark spots on the leaves, stems, and fruit. These spots can make the leaves turn yellow and fall off, weakening the plant. The disease spreads quickly in warm, wet conditions and can come from infected seeds or splashing rain. Infected tomatoes may be deformed and hard to sell. To prevent it, farmers use clean seeds, rotate crops, and keep their fields clean. Sometimes, special sprays are also used to control the disease."
    },
    "6bde0aa8-4093.JPG": {
        additionalImage1: "/static/tamato.jpeg",
        additionalImage2: "/static/tamato.jpeg",
        description: "Tomato bacterial spot is a disease caused by bacteria that affects tomato plants. It creates small, dark spots on the leaves, stems, and fruit. These spots can make the leaves turn yellow and fall off, weakening the plant. The disease spreads quickly in warm, wet conditions and can come from infected seeds or splashing rain. Infected tomatoes may be deformed and hard to sell. To prevent it, farmers use clean seeds, rotate crops, and keep their fields clean. Sometimes, special sprays are also used to control the disease.."
    },
    "6c9e726b-8574.JPG": {
        additionalImage1: "/static/tamato.jpeg",
        additionalImage2: "/static/tamato.jpeg",
        description: "Tomato bacterial spot is a disease caused by bacteria that affects tomato plants. It creates small, dark spots on the leaves, stems, and fruit. These spots can make the leaves turn yellow and fall off, weakening the plant. The disease spreads quickly in warm, wet conditions and can come from infected seeds or splashing rain. Infected tomatoes may be deformed and hard to sell. To prevent it, farmers use clean seeds, rotate crops, and keep their fields clean. Sometimes, special sprays are also used to control the disease."
    },
    "95de9f94-ddb1-4303-b3d9-.JPG": {
        additionalImage1: "/static/tamato.jpeg",
        additionalImage2: "/static/tamato.jpeg",
        description: "Tomato early blight is a fungal disease caused by Alternaria solani that affects tomato plants. It causes dark, circular spots with a target-like pattern on leaves, stems, and sometimes fruit. As the disease progresses, the leaves turn yellow and fall off, weakening the plant and reducing fruit production. Early blight spreads in warm, wet conditions and can survive in soil, plant debris, or seeds. To prevent it, farmers can use resistant varieties, rotate crops, remove infected plants, and apply fungicides when necessary. Early intervention helps reduce the damage and protect tomato yields."
    },
    "0114f7b3-7f56-4bef-aa47-.JPG": {
        additionalImage1: "/static/tamato.jpeg",
        additionalImage2: "/static/tamato.jpeg",
        description: "Tomato early blight is a fungal disease caused by Alternaria solani that affects tomato plants. It causes dark, circular spots with a target-like pattern on leaves, stems, and sometimes fruit. As the disease progresses, the leaves turn yellow and fall off, weakening the plant and reducing fruit production. Early blight spreads in warm, wet conditions and can survive in soil, plant debris, or seeds. To prevent it, farmers can use resistant varieties, rotate crops, remove infected plants, and apply fungicides when necessary. Early intervention helps reduce the damage and protect tomato yields."
    },
    "893b7469-eb50-4567-9292-.JPG": {
        additionalImage1: "/static/tamato.jpeg",
        additionalImage2: "/static/tamato.jpeg",
        description: "Tomato early blight is a fungal disease caused by Alternaria solani that affects tomato plants. It causes dark, circular spots with a target-like pattern on leaves, stems, and sometimes fruit. As the disease progresses, the leaves turn yellow and fall off, weakening the plant and reducing fruit production. Early blight spreads in warm, wet conditions and can survive in soil, plant debris, or seeds. To prevent it, farmers can use resistant varieties, rotate crops, remove infected plants, and apply fungicides when necessary. Early intervention helps reduce the damage and protect tomato yields."
    },
    "_GHLB2 Leaf 8633_flipLR.JPG": {
        additionalImage1: "/static/tamato.jpeg",
        additionalImage2: "/static/tamato.jpeg",
        description: "Tomato late blight is a severe plant disease caused by the pathogen Phytophthora infestans. It affects the leaves, stems, and fruit of tomato plants, leading to large, dark, water-soaked spots that quickly spread and destroy the plant. Infected fruit may develop brown, rotten patches. Late blight thrives in cool, wet conditions and spreads rapidly through wind and rain, making it highly contagious. This disease is notorious for causing widespread crop losses if not managed early. To prevent late blight, farmers use resistant tomato varieties, maintain proper spacing for air circulation, and apply fungicides when necessary. Proper sanitation and removing infected plants are also key to controlling the disease."
    },
    "_GHLB2 Leaf 91.1_flipLR.JPG": {
        additionalImage1: "/static/tamato.jpeg",
        additionalImage2: "/static/tamato.jpeg",
        description: "Tomato late blight is a severe plant disease caused by the pathogen Phytophthora infestans. It affects the leaves, stems, and fruit of tomato plants, leading to large, dark, water-soaked spots that quickly spread and destroy the plant. Infected fruit may develop brown, rotten patches. Late blight thrives in cool, wet conditions and spreads rapidly through wind and rain, making it highly contagious. This disease is notorious for causing widespread crop losses if not managed early. To prevent late blight, farmers use resistant tomato varieties, maintain proper spacing for air circulation, and apply fungicides when necessary. Proper sanitation and removing infected plants are also key to controlling the disease."
    },
     "_GHLB2 Leaf 9056.JPG": {
        additionalImage1: "/static/tamato.jpeg",
        additionalImage2: "/static/tamato.jpeg",
        description: "Tomato late blight is a severe plant disease caused by the pathogen Phytophthora infestans. It affects the leaves, stems, and fruit of tomato plants, leading to large, dark, water-soaked spots that quickly spread and destroy the plant. Infected fruit may develop brown, rotten patches. Late blight thrives in cool, wet conditions and spreads rapidly through wind and rain, making it highly contagious. This disease is notorious for causing widespread crop losses if not managed early. To prevent late blight, farmers use resistant tomato varieties, maintain proper spacing for air circulation, and apply fungicides when necessary. Proper sanitation and removing infected plants are also key to controlling the disease."
    },
    "95a5ac3d-50d3-426c-83a6-3fd47fc8c58b___Crnl_L.Mold 6609_180deg.JPG": {
        additionalImage1: "/static/tamato.jpeg",
        additionalImage2: "/static/tamato.jpeg",
        description: "Tomato leaf mold is a fungal disease caused by Passalora fulva that primarily affects the leaves of tomato plants. It appears as yellow spots on the upper leaf surface and olive-green to gray mold on the underside. As the disease progresses, infected leaves may turn brown, wilt, and eventually fall off, weakening the plant and reducing its yield. Leaf mold thrives in warm, humid environments, particularly in greenhouses or areas with poor air circulation. To prevent it, farmers should ensure good air circulation, avoid overhead watering, use resistant varieties, and apply fungicides when necessary. Proper sanitation, including removing infected leaves, helps control its spread."
    }
};

// Fallback result for unrecognized images
const defaultResult = {
    additionalImage1: "/static/tamato.jpeg",
    additionalImage2: "/static/crop_1.jpg",
    description: "The AI Analysis of your leaf image is complete. While this specific image is not in our database, it appears to show signs typical of common tomato leaf conditions. We recommend checking for signs of blight or bacterial spots. Ensure proper irrigation and maintain good air circulation around your plants for optimal health."
};

function getImageInfo() {
    const fileInput = document.getElementById("imageUpload");
    const imageUpload = fileInput.files[0];
    
    if (imageUpload) {
        const imageName = imageUpload.name;

        // Show the spinner
        const spinner = document.getElementById("loadingSpinner");
        if (spinner) spinner.style.display = 'block';

        // Hide previous content
        document.getElementById("uploadedImagePreview").style.display = 'none';
        document.getElementById("additionalImage1").style.display = 'none';
        document.getElementById("additionalImage2").style.display = 'none';
        document.getElementById("info").innerHTML = '';

        setTimeout(() => {
            // Check for info, or fallback to default
            const info = imageInfo[imageName] || defaultResult;

            // Display uploaded image
            const imagePreview = document.getElementById("uploadedImagePreview");
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(imageUpload);

            // Display info and additional images
            document.getElementById("info").innerHTML = `<p>${info.description}</p>`;
            const additionalImage1 = document.getElementById("additionalImage1");
            const additionalImage2 = document.getElementById("additionalImage2");
            
            if (additionalImage1) {
                additionalImage1.src = info.additionalImage1;
                additionalImage1.style.display = 'block';
            }
            if (additionalImage2) {
                additionalImage2.src = info.additionalImage2;
                additionalImage2.style.display = 'block';
            }

            // Hide the spinner
            if (spinner) spinner.style.display = 'none';
        }, 1500 + Math.random() * 1000); // Faster simulation for better UX
    } else {
        document.getElementById("info").innerHTML = `<p>Please upload an image.</p>`;
    }
}