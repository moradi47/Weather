let background = [
    {id:0, src : "url('../image/images 1.jfif')"},
    {id:1, src : "url('../image/images 2.jfif')"},
    {id:2, src : "url('../image/images 3.jfif')"},
    {id:3, src : "url('../image/images 4.jpg')"},
    {id:4, src : "url('../image/images 5.jpg')"},
    {id:5, src : "url('../image/images 6.jpg')"},
    {id:6, src : "url('../image/images 7.jfif')"},
    {id:7, src : "url('../image/images 8.jpg')"},
    {id:8, src : "url('../image/images 9.jpg')"},
    {id:9, src : "url('../image/images 10.jpg')"},
]

let cites = {
    Tehran: { temperature: 28, status: 'rainy', humidity: 14, windSpeed: 20},
    Mashhad: { temperature: 10, status: 'cloudy', humidity: 8, windSpeed: 30},
    Tabriz: { temperature: -1, status: 'snowy', humidity: 25, windSpeed: 10},
    Yazd: { temperature: 32, status: 'sunny', humidity: 6, windSpeed: 0},
    Esfahan: { temperature: 30, status: 'sunny', humidity: 12, windSpeed: 5},
    Qom: { temperature: 18, status: 'cloudy', humidity: 5, windSpeed: 8},
};


(function(){
    let imageId =  Math.floor(Math.random() * 10);
    let image = background.find(function(item){
        return item.id == imageId
    })
    document.body.style.backgroundImage = image.src;
})();


let searchIcon = document.querySelector('.container-searchIcon');
let searchbar = document.querySelector('.search-box');

searchIcon.addEventListener('click', function(){
    let searchbarValue = searchbar.value ;
    let mainCityData = cites[searchbarValue] ;

    if(mainCityData){

        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.details-city').style.display = 'block';
        document.querySelector('.name-city').innerHTML = `Weather in ${searchbarValue}`;
        document.querySelector('.temperature').innerHTML =`${mainCityData.temperature} &deg;C`;
        document.querySelector('.status').innerHTML = `${mainCityData.status}`;
        document.querySelector('.humidity').innerHTML = `Humidity : ${mainCityData.humidity} %`;
        document.querySelector('.wind-speed'). innerHTML = `Wind speed : ${mainCityData.windSpeed} km/h`;

    }else if(!mainCityData){

        document.querySelector('.loading').innerHTML = 'The desired city is not available!'
    }
})