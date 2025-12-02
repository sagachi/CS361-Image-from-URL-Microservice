# Image URL Proxy Microservice

### This microservice fetches an image from a remote URL and returns it as a streamed response.

## Installation
### 1. Clone the Repository
### git clone <your-repo-url>
### cd image_microservice

## 2. Install Dependencies
### npm install

### Running the Server

## Start the microservice with:

### node server.mjs

## You should see:

### Image microservice running on port 3002

## API Usage
### Base URL
### http://localhost:3002

## Endpoint
### GET /image?url=<image_url>

### Fetches an image from the provided URL and streams it back.

## Example Requests
## Using a Browser

### Just open:

### http://localhost:3002/image?url=https://example.com/image.jpg


### If the URL points to an image, the browser will display it.

## Using cURL
### curl "http://localhost:3002/image?url=https://example.com/image.jpg" --output image.jpg

## Using JavaScript (fetch)
### const img = document.getElementById("test");

### fetch("http://localhost:3002/image?url=https://example.com/image.png")
###     .then(res => res.blob())
###     .then(blob => {
###       img.src = URL.createObjectURL(blob);
###  });
