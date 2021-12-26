import '../assets/css/alergies.css'
import { Table } from "react-bootstrap";

function Alergies() {
    return (
        <div className={'individualPanel_child3'}>
            <h3 className={'alergiesHead'}>Alergies (11)</h3>
            <Table responsive>
                <thead>
                    <th className={'alergiesTable'}>Name</th>
                    <th className={'alergiesTable'}>Severity</th>
                    <th className={'alergiesTable'}>Reactions</th>
                    <th className={'alergiesTable'}>Comments</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Allergy Name 1</td>
                        <td>Strong</td>
                        <td>Pimple</td>
                        <td>Heart Attack History</td>
                    </tr>
                    <tr>
                        <td>Allergy Name 2</td>
                        <td>Medium</td>
                        <td>itching</td>
                        <td>Blah Blah</td>
                    </tr>
                    <tr>
                        <td>Allergy Name 3</td>
                        <td>Strong</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Allergy Name 4</td>
                        <td>Strong</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Allergy Name 5</td>
                        <td>Strong</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Allergy Name 6</td>
                        <td>Strong</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Allergy Name 7</td>
                        <td>Strong</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
            <br />
            <h3 className={'alergiesHead'}>Conditions (9)</h3>
            <Table responsive>
                <thead>
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
                        <td>Condition 2</td>
                        <td>Detail</td>
                        <td>Comment</td>
                    </tr>
                    <tr>
                        <td>Condition 3</td>
                        <td>Detail</td>
                        <td>Comment</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Alergies;