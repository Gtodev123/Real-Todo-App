//Base URL

const base_url = 'https://api.rawg.io/api/'

// Getting the date

const getCurrentMounth = () => {
    const month = new Date().getMonth() +1;
    if (month < 10) {
        return `0${month}`
    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDay();
    if (day < 10) {
        return `0${day}`
    } else {
        return day;
    }
}

//get current day/year/month

const currentYear = new Date().getFullYear;
const currentMonth = getCurrentMounth;
const currentDay = getCurrentDay;

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear -1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear +1}-${currentMonth}-${currentDay}`

console.log(currentDate);

// popular games 

const popular_games = `games?key=${process.env.REACT_KEY_API}&dates=${lastYear},${currentDate}&ordering=rating&page_size=10`

export const popuralGamesURL = () => `${base_url}${popular_games}`