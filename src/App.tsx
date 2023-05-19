import React, {useState} from 'react';
import './App.css';
import searchGoogle from "./controllers/api";

function App() {
    const [url, setUrl] = useState('');
    const data = searchGoogle('markettailor.io', 'seo');
    // @ts-ignore
    const test = () => {

        // @ts-ignore
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const activeTabId = tabs[0].id;

            // @ts-ignore
            chrome.scripting.executeScript(
                {
                    target: {tabId: activeTabId},
                    function: (data: any) => {
                        console.log("ahoj");
                        console.log(data);
                    },
                    args: [data],
                }
            )
        })
    };

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
