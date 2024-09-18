import { useState } from "react";

const History = () => {
    const [history, setHistory] = useState([]);

    // Simulasi mendapatkan latitude dan longitude
    const latitude = 37.7749; // Misalnya, Latitude San Francisco
    const longitude = -122.4194; // Misalnya, Longitude San Francisco

    // Fungsi untuk menambahkan entri sejarah
    const addHistory = () => {
        setHistory(prevHistory => [
            ...prevHistory,
            { latitude, longitude, timestamp: new Date() }
        ]);
    };

    return (
        <div>
            <div className='inner-content'>
                <h2>Location History</h2>
                <button onClick={addHistory}>Add Current Location</button>
                <ul>
                    {
                        history.map((item, index) => (
                            <li key={index}>
                                Latitude: {item.latitude}, Longitude: {item.longitude}, Timestamp: {item.timestamp.toLocaleString()}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default History;
