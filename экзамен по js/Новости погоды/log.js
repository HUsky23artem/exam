
document.getElementById('getWeather').addEventListener('click', getWeather);

function getWeather() {
    // Получаем название города из поля ввода с ID 'city'
    const city = document.getElementById('city').value;

    // Укажите ваш API ключ для доступа к OpenWeatherMap
    const apiKey = 'a6c5b64de6c7d4f9842c29c2b3436fb0'; // Замените на ваш действительный API ключ

    // Формируем URL запроса к API OpenWeatherMap с параметрами:
    // q - название города
    // appid - API ключ
    // units - единицы измерения (метрические: градусы Цельсия)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)  // Выполняем GET-запрос к API с помощью Fetch API
        .then(response => { // Проверяем, успешен ли ответ от API
            if (!response.ok) {
                throw new Error('Город не найден');
            }
            return response.json(); // Если ответ успешен, преобразуем его в формат JSON
        })
        .then(data => {
            const weatherDescription = data.weather[0].description; // Описание погоды
            const temperature = data.main.temp; // Температура в градусах Цельсия
            const humidity = data.main.humidity; // Влажность в процентах

            // Обновляем содержимое элемента с ID 'weatherResult' с полученной информацией

            document.getElementById('weatherResult').innerHTML = ` 
                <h2>${data.name}</h2> <!-- Название города -->
                <p>Температура: ${temperature} °C</p> <!-- Температура -->
                <p>Влажность: ${humidity}%</p> <!-- Влажность -->
                <p>Описание: ${weatherDescription}</p> <!-- Описание погоды -->
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerText = error.message; // обновляем текст элемента 'weatherResult' при сообщением об ошибке
        });
}