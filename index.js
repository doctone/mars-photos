const buttons = document.querySelectorAll('.get-data');
const URL1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?camera="
const URL2 = "&api_key=OYQjVDhF8oF9FhK1RdxSwLeiWaA9xox0GFsNvEW1"
// const working = ""https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?camera=FHAZ&api_key=OYQjVDhF8oF9FhK1RdxSwLeiWaA9xox0GFsNvEW1""
const results = document.querySelector('.results')
// const correctURL = `${URL1}${button.id}${URL2}`
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        fetch(`${URL1}${button.id}${URL2}`)
        .then(res => res.json(`${URL1}${button.id}${URL2}`))
        .then(data => {
            showData(data.latest_photos)
        });
    })
})

function showData(data){
    results.innerHTML = ''
    console.log(data);
    data.forEach(photo => {
        results.innerHTML += `
        <div class="card col-3 m-2" style="width: 15rem;">
        <a href="${photo.img_src}"><img src="${photo.img_src}" class="card-img-top"></a>
            <div class="card-body">
                <h5 class="card-title">${photo.camera.full_name}</h5>
                <p class="card-text">Photo taken: ${photo.earth_date}.</p>
                <p>status: ${photo.rover.status}</p>
                <p> sol: ${photo.sol} </p>
                <a href="#" class="btn btn-dark">Download</a>
            </div>
        </div>`
    })
}