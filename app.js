const url = 'https://api.openweathermap.org/data/2.5/weather?q='
const api_key ='&appid=6511e14723ad8cb6f243ece1366c5deb'

const h3Name =document.querySelector('h3')
const h2Temp =document.querySelector('h2')
const input =document.querySelector('input')
const button =document.querySelector('button')
const p1 =document.querySelector('.p1')
const p2 =document.querySelector('.p2')
const p3 =document.querySelector('.p3')
const i1 =document.querySelector('.img1')
const i2 =document.querySelector('.img2')
const i3 =document.querySelector('.img3')
const i4 =document.querySelector('.img4')
const i5 =document.querySelector('.img5')
const i6 =document.querySelector('.img6')

button.addEventListener('click', () => {
    getWeather(input.value)
    input.value =''
})

//DOM

//https://api.openweathermap.org/data/2.5/weather?q=London&appid=6511e14723ad8cb6f243ece1366c5deb


function getWeather(cityName="Bishkek"){
    fetch(url + cityName + api_key)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        h3Name.innerHTML = `${data.name}  <span class="con">${data.sys.country}</span>`
        h2Temp.innerHTML = `${Math.floor(data.main.temp -273)}
        <span class="rs">°c</span>`
        p1.innerHTML = `${data.weather[0].main}`;
        p2.innerHTML = `<span class="s1">Скорость</span>${Math.floor(data.wind.speed)}
        <span>км/ч</span>`;
        p3.innerHTML = `<span class="s1">Влажность</span>${data.main.humidity} <span>%</span>`;

        switch (data.weather[0].main.toLowerCase()) {
            case 'clear':
                i5.style.display = 'block'; 
                break;
            default:
                i5.style.display = 'none'; 
                break;
        }
        switch (data.weather[0].main.toLowerCase()) {
            case 'clouds':
                i2.style.display = 'block'; 
                break;
            default:
                i2.style.display = 'none'; 
                break;
        }
        switch (data.weather[0].main.toLowerCase()) {
            case 'rain':
                i6.style.display = 'block'; 
                break;
            default:
                i6.style.display = 'none'; 
                break;
        }
        switch (data.weather[0].main.toLowerCase()) {
            case 'snow':
                i3.style.display = 'block'; 
                break;
            default:
                i3.style.display = 'none'; 
                break;
        }
        switch (data.weather[0].main.toLowerCase()) {
            case 'sun':
                i4.style.display = 'block'; 
                break;
            default:
                i4.style.display = 'none'; 
                break;
        }
        switch (data.weather[0].main.toLowerCase()) {
            case 'cloud rain':
                i1.style.display = 'block'; 
                break;
            default:
                i1.style.display = 'none'; 
                break;
        }
    });
}
getWeather()