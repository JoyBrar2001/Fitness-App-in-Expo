import axios from "axios"
import { rapidApiKey } from "../constants"

const baseUrl = 'https://exercisedb.p.rapidapi.com'

const apiCall = async (url, param) => {
  try {
    const options = {
      method: 'GET',
      url,
      param,
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    }
    const response = await axios.request(options)
    return response.data
  }
  catch (err) {
    console.log('Error : ', err.message)
  }
}

export const fetchExercisesByBodyPart = async(bodyPart) => {
  let data = await apiCall(`${baseUrl}/exercises/bodyPart/${bodyPart}`)
  return data;
}