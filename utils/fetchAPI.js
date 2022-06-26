import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchAPI = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'd5b7432c2cmshad3afb950e99888p1a5397jsnc1f5d48e599e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });

    return data;
}