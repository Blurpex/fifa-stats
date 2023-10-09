import {useEffect, useState} from "react";
import MUIDataTable from "mui-datatables";

const App = () => {

    const [players, setPlayers] = useState([])
    const [column, setColumn] = useState([])

    useEffect(() => {
        fetch('/players')
            .then(response => response.json())
            .then(data => {
                setPlayers(data._embedded['players'])
                return data._embedded['players']
            })
            .then(data => {
                let temp = []
                Object.keys(data[0]).slice(0, -1).forEach(x => {
                    temp.push(
                        {
                            "name": x,
                            "label": x.charAt(0).toUpperCase() + x.slice(1),
                        }
                    )
                })
                setColumn(temp)
            })
            .catch(error => console.log(error))
    }, []);

    return(
        <MUIDataTable columns={column} data={players} title="FIFA Database"/>
    );
}

export default App;