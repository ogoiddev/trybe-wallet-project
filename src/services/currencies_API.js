const URL = 'https://economia.awesomeapi.com.br/json/';

const fetchCurrencies = async (currency = 'all') => {
  try {
    const response = await fetch(`${URL}${currency}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchCurrencies;
