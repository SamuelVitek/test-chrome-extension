import React, {useState} from 'react';
import './App.css';

function App() {
    const [url, setUrl] = useState('');

    // @ts-ignore
    const test = () => {

        // @ts-ignore
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const activeTabId = tabs[0].id

            // @ts-ignore
            chrome.scripting.executeScript(
                {
                    target: {tabId: activeTabId},
                    // @ts-ignore
                    function: (url) => {
                        console.log(url);
                    },
                    args: [url],
                }
            )
        })
    }

    test();

    return (
        <div>
            <input
                type="text"
                id="message"
                name="message"
                onChange={event => setUrl(event.target.value)}
            />
        </div>
    );
}

export default App;
