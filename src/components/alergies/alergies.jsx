import './alergies.css'
import { Table } from "react-bootstrap";
import { useRecoilValue } from 'recoil';
import { userConditions } from '../../data/atom';

function Alergies() {
    const allergies = useRecoilValue(userConditions);
    const conditions = useRecoilValue(userConditions);

    return (
        <div className={'individualPanel_child3'}>
            <h3 className={'alergiesHead'}>Alergies ({allergies.length})</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th className={'alergiesTable'}>Name</th>
                        <th className={'alergiesTable'}>Severity</th>
                        <th className={'alergiesTable'}>Reactions</th>
                        <th className={'alergiesTable'}>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {allergies.map((item, i) => (
                        <tr key={i}>
                            <td>{item}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <br />
            <h3 className={'alergiesHead'}>Conditions ({conditions.length})</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th className={'alergiesTable'}>Name</th>
                        <th className={'alergiesTable'}>Detail</th>
                        <th className={'alergiesTable'}>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {conditions.map((item, i) => (
                        <tr key={i}>
                            <td>{item}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div >
    )
}

export default Alergies;