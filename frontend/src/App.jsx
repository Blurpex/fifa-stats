import {useEffect, useState} from "react";

const App = () => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('/players')
            .then(response => response.json())
            .then(data => setPlayers(data._embedded['players']))
            .catch(error => console.log(error))
    }, []);

    return(
        <div>
        </div>
    );
}

export default App;