import '../assets/css/alergies.css'
import {Table} from "react-bootstrap";

function Alergies() {
    return(
        <div className={'individualPanel_child3'}>
            <u><h3 className={'alergiesHead'}>Alergies (11)</h3></u>
            <br/>
            <Table responsive>
                <thead  style={{background: '#EEEEEE'}}>
                <th className={'alergiesTable'}>Name</th>
                <th className={'alergiesTable'}>Severity</th>
                <th className={'alergiesTable'}>Reactions</th>
                <th className={'alergiesTable'}>Comments</th>
                </thead>
                <tbody>
                <tr>
                    <td>Alergy Name 1</td>
                    <td>Strong</td>
                    <td>Pimple</td>
                    <td>Heart Attack History</td>
                </tr>
                <tr>
                    <td>Alergy Name 1</td>
                    <td>Strong</td>
                    <td>Pimple</td>
                    <td>Heart Attack History</td>
                </tr>
                <tr>
                    <td>Alergy Name 1</td>
                    <td>Strong</td>
                    <td>Pimple</td>
                    <td>Heart Attack History</td>
                </tr>
                <tr>
                    <td>Alergy Name 1</td>
                    <td>Strong</td>
                    <td>Pimple</td>
                    <td>Heart Attack History</td>
                </tr>
                <tr>
                    <td>Alergy Name 1</td>
                    <td>Strong</td>
                    <td>Pimple</td>
                    <td>Heart Attack History</td>
                </tr>
                <tr>
                    <td>Alergy Name 1</td>
                    <td>Strong</td>
                    <td>Pimple</td>
                    <td>Heart Attack History</td>
                </tr>
                <tr>
                    <td>Alergy Name 1</td>
                    <td>Strong</td>
                    <td>Pimple</td>
                    <td>Heart Attack History</td>
                </tr>
                </tbody>
            </Table>
            <u><h3 className={'alergiesHead'}>Conditions (9)</h3></u>
            <br/>
            <Table responsive>
                <thead  style={{background: '#EEEEEE'}}>
                <th className={'alergiesTable'}>Name</th>
                <th className={'alergiesTable'}>Detail</th>
                <th className={'alergiesTable'}>Comments</th>
                </thead>
                <tbody>
                <tr>
                    <td>Condition 1</td>
                    <td>Detail</td>
                    <td>Comment</td>
                </tr>
                <tr>
                    <td>Condition 1</td>
                    <td>Detail</td>
                    <td>Comment</td>
                </tr>
                <tr>
                    <td>Condition 1</td>
                    <td>Detail</td>
                    <td>Comment</td>
                </tr>
                <tr>
                    <td>Condition 1</td>
                    <td>Detail</td>
                    <td>Comment</td>
                </tr>
                <tr>
                    <td>Condition 1</td>
                    <td>Detail</td>
                    <td>Comment</td>
                </tr>
                <tr>
                    <td>Condition 1</td>
                    <td>Detail</td>
                    <td>Comment</td>
                </tr>
                <tr>
                    <td>Condition 1</td>
                    <td>Detail</td>
                    <td>Comment</td>
                </tr>
                <tr>
                    <td>Condition 1</td>
                    <td>Detail</td>
                    <td>Comment</td>
                </tr>
                <tr>
                    <td>Condition 1</td>
                    <td>Detail</td>
                    <td>Comment</td>
                </tr>
                <tr>
                    <td>Condition 1</td>
                    <td>Detail</td>
                    <td>Comment</td>
                </tr>
                <tr>
                    <td>Condition 1</td>
                    <td>Detail</td>
                    <td>Comment</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Alergies;