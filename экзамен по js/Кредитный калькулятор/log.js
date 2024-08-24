// ползунок суммам кредита ................................................................................

const monthly_payment = document.getElementById('monthly_payment'); // Получаем элемент ползунка и элемент для отображения значения
const sum = document.getElementById('sum_value');

function updateAmountValue() { // Функция для обновления значения
    sum.textContent = monthly_payment.value; // Устанавливаем текстовое значение
}

monthly_payment.addEventListener('input', updateAmountValue); // Слушаем изменения на ползунке

updateAmountValue(); // Устанавливаем начальное значение



// процентная ставка ................................................................................

function updateRateValue() { // Обновление значения процентной ставки на экране
    const rate = document.getElementById('interest_rate').value;
    document.getElementById('total_sum_value').innerText = rate;
}



// Срок погашения ................................................................................

const maturity_period = document.getElementById('maturity_period'); // Получаем элемент ползунка и элемент для отображения значения
const sum_maturity_period = document.getElementById('Overpayment_value');

function updateMaturityPeriodValue() { // Функция для обновления значения
    sum_maturity_period.textContent = maturity_period.value; // Устанавливаем текстовое значение
}

maturity_period.addEventListener('input', updateMaturityPeriodValue); // Слушаем изменения на ползунке

updateMaturityPeriodValue(); // Устанавливаем начальное значение



// Вычисления ................................................................................

document.getElementById('print').addEventListener('click', function() {
    const P = monthly_payment.value; // Ежемесячный платеж
    const n = maturity_period.value; // Срок в месяцах

    const r = interest_rate.value / 100 / 12; // Месячная процентная ставка
    document.getElementById('sum').innerText = P;
    
    const totalPayment = (P * n); // Общая сумма платежей
    document.getElementById('total_sum').innerText = totalPayment.toFixed(2);

    const overpayment = totalPayment - (P * n); // Переплата (нужно будет скорректировать расчет)
    document.getElementById('Overpayment').innerText = overpayment.toFixed(2);
});

const incrementButton = document.getElementById('print');
