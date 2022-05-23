const button = document.getElementById('btn');
const row = document.getElementById('row');
const wrapper = document.getElementById('wrapper')

button.addEventListener("click", download)

function download() {
    fetch("https://randomuser.me/api/?results=5").then(response => {
        return response.json();
    }).then(data => {
        row.style.display = "block";
        wrapper.innerHTML = '';
        for (const result of data.results) {            
            const heroCard = `<div class="hero-card">
            <div>
                <img src="${result.picture.large}">
            </div>
            <div>
                <p>Address: ${result.location.country}, ${result.location.state}, ${result.location.postcode}</p>
                <p>City: ${result.location.city}</p>
                <p>Email: ${result.email}</p>
                <p>Coordinates: ${result.location.coordinates.latitude}, ${result.location.coordinates.longitude}</p>
            </div>
        </div>`;

        wrapper.insertAdjacentHTML('beforeend', heroCard);

        }
    })
}

