console.log('weatherPractise.js is connected!');

const API_KEY = `8995acb5352f67eae4ca231780264500`;


const loadData = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    try {
        const response = await fetch(url);
        const data = response.json();
        console.log(data);
    } catch (error) {
        
    }
}
loadData('dhaka');