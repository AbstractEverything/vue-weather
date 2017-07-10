import moment from 'moment'
import api from '../api'

let weatherStore = {
    state: {
        location: 'London, UK',
        forecast: {
            fiveDay: {},
            selectedDay: [],
        },
    },

    /**
     * Set the fiveday forecast
     * 
     * @param  String location
     * @return Promise
     */
    getFiveDay(location) {
        this.state.location = location
        return api.getFiveDay(location).then((response) => {
            this.state.forecast.fiveDay = response.data
        }).catch((error) => {
            console.error(error)
        })
    },

    /**
     * Filter the fiveDay forecast and extract a single day of
     * 3-hour array of forecasts into state.forecast.selectedDay
     * 
     * @param  Number num
     * @return null
     */
    extractDaysForecast(num = 0) {
        let selectedDay = moment.unix(this.state.forecast.fiveDay.list[0].dt).add(num, 'days')
        this.state.forecast.selectedDay = this.state.forecast.fiveDay.list.filter((day) => {
            if (selectedDay.isSame(moment.unix(day.dt), 'day')) {
                return day
            }
        })
    }
}

export default weatherStore