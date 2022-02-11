import './alergies.css'
import { Table } from "react-bootstrap";
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userDataIndividual } from '../../data/atom';
import { useState } from 'react';
import { useCallback } from 'react';

function Alergies() {
    const userIndData = useRecoilValue(userDataIndividual);
    const [allergies, setAllergies] = useState([]);
    const [conditions, setConditions] = useState([]);

    const findUserIndData = useCallback(() => {
        userIndData.map(item => {
            if (item.allergies.length > 0) {
                setAllergies(item.allergies);
            } else {
                setAllergies([]);
            }
            if (item.conditions.length > 0) {
                setConditions(item.conditions);
            } else {
                setConditions([]);
            }
        })
    }, [userIndData])

    useEffect(() => {
        findUserIndData();
    }, [findUserIndData])

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