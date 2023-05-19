import axios from 'axios';


async function searchGoogle(url: string, keywords: string) {
    const apiKey = 'ab9402a6d082a386d3eb5003a6fec1878fd87084a32b9bdc352327e81180832f'; // Replace with your SerpApi API key
    const searchEngine = 'google';
    const query = 'site:' + url + ' ' + keywords;

    const apiUrl = `https://serpapi.com/search?api_key=${apiKey}&engine=${searchEngine}&q=${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        return response.data;
    } catch (error) {
        // @ts-ignore
        console.error('Error:', error.message);
        return null;
    }
}

export default searchGoogle;