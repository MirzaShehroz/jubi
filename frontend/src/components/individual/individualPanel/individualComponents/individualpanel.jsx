import '../../../../assets/css/individualpanel.css';
import React, { useCallback, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import Alergies from "../../../alergies/alergies";
import closeIcon from '../../../../assets/img/cancelicon2.png'
import IndividualPanel2 from "./individualpanel2";
import IndividualUserPanel from "../individualuserpanel";
import { useRecoilState } from 'recoil';
import { usersData_, watchList } from '../../../../data/atom';
import axios from 'axios';

function IndividualPanel() {
    const [/*userWatchList*/, setUserWatchList] = useRecoilState(watchList);
    const [/*usersData*/, setUsersData] = useRecoilState(usersData_);
    const history = useHistory();
    const closeHandle = () => {
        history.push('/');
    }
    const getUserWatchList = useCallback(() => {

        axios.get('/affiliate/v1/doctor/watchlist', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`
            }
        }).then(res => {
            setUserWatchList(res.data.data);
        })
            .catch(error => {
                if (error.response.data.data.code === 403) {
                    sessionStorage.clear();
                }
            });
    }, [setUserWatchList])

    const getUsersData = useCallback(() => {
        axios.get('/affiliate/v1/users', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`
            }
        })
            .then(res => {
                setUsersData(res.data.data);
            })
            .catch(error => {
                if (error.response.data.data.code === 403) {
                    sessionStorage.clear();
                }
            }
            );
    }, [setUsersData])

    useEffect(() => {
        getUsersData();
        getUserWatchList();
    }, [getUsersData, getUserWatchList])

    return (
        <div className='individualPanel'>
            <div className='individualPanel_close'>
                <img onClick={closeHandle} src={closeIcon} alt="" />
            </div>
            <div className='individualPanel_main'>
                <div className='individualPanel_child1'>
                    <IndividualUserPanel />
                </div>
                <div className='individualPanel_child2'>
                    {useLocation().pathname === '/individual' ? <IndividualPanel2 /> : null}
                    {useLocation().pathname === '/allergies-condition' ? <Alergies /> : null}

                </div>
            </div>
        </div>
    )
}

export default IndividualPanel
