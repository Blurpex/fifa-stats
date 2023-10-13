import {useEffect, useState} from "react";
import MUIDataTable from "mui-datatables";

const App = () => {

    const url = "/players";

    const [players, setPlayers] = useState([])
    const [columns, setColumns] = useState([])

    useEffect(() => {
        fetch(url + '?size=100000')
            .then(response => response.json())
            .then(data => {
                setPlayers(data._embedded['players'])
                return data._embedded['players']
            })
            .then(data => {
                let temp = []
                Object.keys(data[0]).slice(0, -1).forEach(x => {
                    temp.push({"name": x,})
                })
                setColumns(temp)
            })
            .catch(error => console.log(error))
    }, []);

    const deleteRows = (rowsDeleted, data, newTableData) => {
        Object.keys(rowsDeleted.lookup).forEach(x => {
            let id = players[x].id
            fetch(url + "/" + id, {method:'DELETE'})
                .then(response => console.log(response))
                .catch(error => console.log(error))
        })
    }

    const tableOptions = {
        rowsPerPage: 25,
        rowsPerPageOptions: [10, 25, 50, 100],
        jumpToPage: true,
        onRowsDelete: deleteRows,
    }

    return(
        <div>
            <MUIDataTable title="FIFA Database" columns={columns} data={players} options={tableOptions}/>
        </div>
    );
}

export default App;