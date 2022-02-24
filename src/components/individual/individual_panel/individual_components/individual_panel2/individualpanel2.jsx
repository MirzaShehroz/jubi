import './individualpanel2.css';
import React, { useCallback, useEffect, useState } from 'react'
import medicAdd from '../../../../../assets/img/medicadd.png';
import medicDel from '../../../../../assets/img/medicdel.png';
import frwdBtn from '../../../../../assets/img/forward_arrow.png';
import prevBtn from '../../../../../assets/img/previous_arrow.png';
import LBChart from '../linebar_chart/linebarchart';
import { PieChart, Pie, Sector, Cell } from "recharts";
import { useHistory } from 'react-router-dom';
import ApiServices from '../../../../../services/apiservices';

const gdata = [{ name: "Jul 2021", value: 400 }, { name: "Jul 2021", value: 100 }];
const COLORS = ["#7D9DAE", "#EEEEEE"];
const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
        </g>
    );
};

function IndividualPanel2() {
    const [activeIndex] = useState(0);
    const [medicActiveList, setActiveMedicList] = useState([]);
    const [medicInactiveList, setInactiveMedicList] = useState([]);
    const history = useHistory();
    const getMedicList = useCallback(async () => {
        const res = await ApiServices.getMedicList(parseInt(sessionStorage.getItem('uid')));
        if (res.status === 200) {
            res.data.list.map(item => {
                if (item.active === 'active') return setActiveMedicList(item.medicine_list)
                if (item.active === 'inactive') return setInactiveMedicList(item.medicine_list)
                if (item.active !== 'active' && item.active !== 'inactive') {
                    setActiveMedicList([]);
                    setInactiveMedicList([]);
                }
            })
        } else if (res.data.code === 401 || res.data.code === 403) {
            history.push('/sign-in');
        } else if (res.data.code === 404) {
            setActiveMedicList([]);
            setInactiveMedicList([]);
        }
    }, [history]);
    useEffect(() => {
        getMedicList();
    }, [getMedicList])
    const data = [
        {
            date: '2021.07.31',
            image: medicAdd,
            medic: [
                {
                    name: 'Medicine Name 1',
                    time: '12:30 PM',
                    image: medicDel
                },
                {
                    name: 'Medicine Name 2',
                    time: '12:30 PM',
                    image: medicAdd
                },
                {
                    name: 'Medicine Name 3',
                    time: '12:30 PM',
                    image: medicDel
                },
                {
                    name: 'Medicine Name 4',
                    time: '12:30 PM',
                    image: medicAdd
                },
            ]
        },
        {
            date: '2021.07.30',
            image: medicDel,
            medic: [
                {
                    name: 'Medicine Name 1',
                    time: '12:30 PM',
                    image: medicAdd
                },
                {
                    name: 'Medicine Name 2',
                    time: '12:30 PM',
                    image: medicAdd
                },
                {
                    name: 'Medicine Name 3',
                    time: '12:30 PM',
                    image: medicDel
                },
                {
                    name: 'Medicine Name 4',
                    time: '12:30 PM',
                    image: medicAdd
                },
            ]
        }
    ]
    const [btnClr1, setBtnClr1] = useState({ background: '#4A7389', color: '#C1D6E1' })
    const [btnClr2, setBtnClr2] = useState({ background: '#4A7389', color: '#C1D6E1' })
    const [btnClr3, setBtnClr3] = useState({ background: '#4A7389', color: '#C1D6E1' })
    const changeBtnClr1 = () => {
        setBtnClr1({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr2({ background: '#4A7389', color: '#C1D6E1' });
        setBtnClr3({ background: '#4A7389', color: '#C1D6E1' });
    }
    const changeBtnClr2 = () => {
        setBtnClr1({ background: '#4A7389', color: '#C1D6E1' });
        setBtnClr2({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr3({ background: '#4A7389', color: '#C1D6E1' });
    }
    const changeBtnClr3 = () => {
        setBtnClr1({ background: '#4A7389', color: '#C1D6E1' });
        setBtnClr2({ background: '#4A7389', color: '#C1D6E1' });
        setBtnClr3({ background: '#FFFFFF', color: '#3E6578' });
    }
    return (
        <>
            <div className='individualPanel_child21'>
                <h5 style={{ color: 'white' }}>Period</h5>
                <div className='dashboard_child11_1_btn' style={{ margin: '0 2% 0 2%' }}>
                    <button onClick={changeBtnClr1} style={btnClr1} >Weekly</button>
                    <button onClick={changeBtnClr2} style={btnClr2}>Monthly</button>
                    <button onClick={changeBtnClr3} style={btnClr3}>Annual</button>
                </div>
                <div className='dashboard_child11_2_1'>
                    <form >
                        <select name="months" id="dashboard_month_select">
                            <option value="Jan">Jan</option>
                            <option value="Feb">Feb</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="Aug">Aug</option>
                            <option value="Sep">Sep</option>
                            <option value="Oct">Oct</option>
                            <option value="Nov">Nov</option>
                            <option value="Dec">Dec</option>
                        </select>
                        <select name="years" id="dashboard_year_select">
                            <option value={2019}>2019</option>
                            <option value={2020}>2020</option>
                            <option value={2021}>2021</option>
                            <option value={2022}>2022</option>
                            <option value={2023}>2023</option>
                            <option value={2024}>2024</option>
                            <option value={2025}>2025</option>
                        </select>
                        <button type='button'>G0!</button>
                    </form>
                </div>
            </div>
            <div className='individualPanel_child22'>
                <div className='individualPanel_child22_1'>
                    <div className='individualPanel_child22_11'>
                        <div className='individualPanel_child22_head'>
                            <h4>Medications Adherence rate</h4>
                            <div className='individualPanel_child22_date'>
                                <img src={prevBtn} alt="" />
                                <h5 style={{ fontWeight: '400' }}>W4 Jul. 2021</h5>
                                <img src={frwdBtn} alt="" />
                            </div>
                        </div>
                        <div className='individualPanel_child22_graph'>
                            <div className='individualPanel_graph1'>
                                <h5>Total</h5>
                                <PieChart width={400} height={400}>
                                    <Pie
                                        activeIndex={activeIndex}
                                        activeShape={renderActiveShape}
                                        data={gdata}
                                        cx={115}
                                        cy={90}
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#7D9DAE"
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </div>
                            <div className='individualPanel_graph2'>
                                <LBChart />
                            </div>
                        </div>
                    </div>
                    <div className='individualPanel_child22_12'>
                        {/* ... JUBI watch*/}
                        <div className='individualPanel_child22_12child'>
                            <div className='signin_checkout individual2_input'>
                                <input type="checkbox" defaultChecked={true} />
                                <h5>JUBI watch (1/1)</h5>
                            </div>
                            <div className='individual_History_medics' style={{ padding: '2% 2.5%' }}>
                                <div className='signin_checkout individual2_input2'>
                                    <input type="checkbox" defaultChecked={true} />
                                </div>
                                <div className='medicsImg'>
                                    <img src={medicAdd} alt="" />
                                </div>
                                <div className="individual_History_medic">
                                    <div className='medicsH5'>
                                        <h5>Medicine Name 1</h5>
                                        <p>2 times everyday(2 pills) / 8:00 AM and 1:00PM</p>
                                    </div>
                                    <div>
                                        <h4>100%</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ... Active Medications */}
                        <div className='individualPanel_child22_12child'>
                            {medicActiveList.length > 0 ? <>
                                <div className='signin_checkout individual2_input'>
                                    <input type="checkbox" defaultChecked={true} />
                                    <h5>Active Medications ({medicActiveList.length})</h5>
                                </div>
                                {medicActiveList.map(item => (
                                    <div key={item.mid} className='individual_History_medics' style={{ padding: '2% 2.5%' }}>
                                        <div className='signin_checkout individual2_input2'>
                                            <input type="checkbox" defaultChecked={true} />
                                        </div>
                                        <div className='medicsImg'>
                                            <img src={medicAdd} alt="" />
                                        </div>
                                        <div className="individual_History_medic">
                                            <div className='medicsH5'>
                                                <h5>{item.name}</h5>
                                                {item.frequency === 'as_needed' ? <p>As needed</p> : <p>2 times {item.frequency}(2 pills) / 8:00 AM and 1:00PM</p>}
                                            </div>
                                            <div>
                                                <h4>100%</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </> : <div className='signin_checkout individual2_input'>
                                <h5>No Active Medications</h5>
                            </div>}
                        </div>
                        {/* ...Inactive Medications */}
                        <div className='individualPanel_child22_12child'>
                            {medicInactiveList.length > 0 ? <>
                                <div className='signin_checkout individual2_input'>
                                    <input type="checkbox" defaultChecked={false} />
                                    <h5>Inactive Medications ({medicInactiveList.length})</h5>
                                </div>
                                {medicInactiveList.map(item => (
                                    <div key={item.mid} className='individual_History_medics' style={{ padding: '2% 2.5%' }}>
                                        <div className='signin_checkout individual2_input2'>
                                            <input type="checkbox" defaultChecked={false} />
                                        </div>
                                        <div className='medicsImg'>
                                            <img src={medicDel} alt="" />
                                        </div>
                                        <div className="individual_History_medic">
                                            <div className='medicsH5'>
                                                <h5>{item.name}</h5>
                                                {item.frequency === 'as_needed' ? <p>As needed</p> : <p>2 times {item.frequency}(2 pills) / 8:00 AM and 1:00PM</p>}
                                            </div>
                                            <div>
                                                <h4>100%</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </> : <div className='signin_checkout individual2_input'>
                                <h5>No Inactive Medications</h5>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className='individualPanel_child22_2'>
                    <div className='individualPanel_child22_2_child'>
                        <h4>History Logs</h4>
                    </div>
                    {data.map((item) => (
                        <div className='individual_History'>
                            <div className='individual_History_date'>
                                <p>{item.date}</p>
                            </div>
                            {item.medic.map(item1 => (
                                <div className='individual_History_medics'>
                                    <div className='medicsImg'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="individual_History_medic">
                                        <div className='medicsH5'>
                                            <h5>{item1.name}</h5>
                                            <p>{item1.time}</p>
                                        </div>
                                        <div>
                                            <img src={item1.image} style={{ cursor: 'pointer' }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default IndividualPanel2