const key = "&api_key=OYQjVDhF8oF9FhK1RdxSwLeiWaA9xox0GFsNvEW1"
const buttons = document.querySelectorAll('.get-data')
const results = document.querySelector('.results')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const cameraUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${button.id}?`
        fetch(cameraUrl+key)
            .then(res => res.json())
            .then(data => showData(data.rover))
    })
});

function showData(data){
    results.innerHTML = `
    <div class="card" style="width: 30rem;">
        <img src="https://mars.nasa.gov/layout/mars2020/images/PIA23764-RoverNamePlateonMars-web.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">total photos: ${data.total_photos}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Launch date : ${data.launch_date}</li>
            <li class="list-group-item">Landing date : ${data.landing_date}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>`
}


