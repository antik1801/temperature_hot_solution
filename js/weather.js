// console.log('Weather.js connected!');
const API_KEY = '8995acb5352f67eae4ca231780264500';

const loadTemparature = async(city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayTemparature(data);
    } catch (error) {
        console.log(error);
    }
}

const displayTemparature = data =>{
    console.log(data);
    const temperature = document.getElementById('temperature');
    const tempText = data.main.temp;
    setInnerTextById('temperature', tempText);
}
const setInnerTextById = (id, text) => {
    document.getElementById(id).innerText = text;
}

document.getElementById('search-btn').addEventListener('click',function(){
    const searchField = document.getElementById('city-name');
    const cityName = searchField.value;
    try {
        loadTemparature(cityName);
        document.getElementById('city').innerText = cityName;
    } catch (error) {
        console.log(error);
    }
})

loadTemparature('dhaka');