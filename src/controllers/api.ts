import axios from 'axios';


async function searchGoogle(url: string, keywords: string) {
    const apiKey = ''; // Replace with your SerpApi API key
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
