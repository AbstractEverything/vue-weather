import axios from 'axios'
import { API_KEY, API_BASE_URL } from '../config'

export default {
    /**
     * Make an ajax request to get the weather from a location
     * 
     * @param  String location
     * @return Promise
     */
    getFiveDay(location = 'London, UK') {
        return axios.get(API_BASE_URL, {
            params: {
                q: location,
                mode: 'json',
                units: 'metric',
                appid: API_KEY,
            }
        })
    }
}