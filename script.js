// Add your JavaScript code here

const PORT = process.env.PORT || 443;

console.log("Script loaded!");

function shortenURL() {
    var longUrl = document.getElementById('url').value.trim();
    
    // Make a request to the server to shorten the URL
    fetch('/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ longUrl: longUrl })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.shortUrl) {
            document.getElementById('shortenedUrl').innerText = 'Shortened URL: ' + data.shortUrl;
        } else {
            document.getElementById('shortenedUrl').innerText = 'Error: Unable to shorten URL.';
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('shortenedUrl').innerText = 'Error: Unable to shorten URL.';
    });
}

// Add event listener to trigger the shortenURL function when the form is submitted
document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    shortenURL(); // Call the shortenURL function
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    shortenURL(); // Call the shortenURL function here
  });