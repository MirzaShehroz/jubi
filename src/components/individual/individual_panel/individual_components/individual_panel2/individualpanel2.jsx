import './individualpanel2.css';
import React, { useCallback, useEffect, useState } from 'react'
import LBChart from '../linebar_chart/linebarchart';
import { useHistory } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell } from "recharts";
import { useRecoilState } from 'recoil';
import { medicHistoryList } from '../../../../../data/atom';
import ApiServices from '../../../../../services/apiservices';
import medicAdd from '../../../../../assets/img/medicadd.png';
import medicDel from '../../../../../assets/img/medicdel.png';
import frwdBtn from '../../../../../assets/img/forward_arrow.png';
import prevBtn from '../../../../../assets/img/previous_arrow.png';


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
    const [historyLogs, setHistoryLogs] = useRecoilState(medicHistoryList);
    const history = useHistory();
    const [btnClr1, setBtnClr1] = useState({ background: '#4A7389', color: '#C1D6E1' })
    const [btnClr2, setBtnClr2] = useState({ background: '#4A7389', color: '#C1D6E1' })
    const [btnClr3, setBtnClr3] = useState({ background: '#FFFFFF', color: '#3E6578' })
    const [count, setCount] = useState(3)
    const [month, setMonth] = useState("Jan")
    const [year, setYear] = useState(2022)
    const [totalAdh, setTotalAdh] = useState(0)
    const [filterMedic, setFilterMedic] = useState('annual')
    const [showFilterMedic, setShowFilterMedic] = useState('2022')
    const [gdata, setGdata] = useState([{ name: "Year", value: 400 }, { name: "Year", value: 100 }]);
    const [arrBtn, setArrBtn] = useState({ prev: true, frwd: true });
    const [labels, setLabels] = useState(['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

    const getMedicList = useCallback(async () => {
        const res = await ApiServices.getMedicList(parseInt(sessionStorage.getItem('uid')), 'active');
        if (res.status === 200) {
            res.data.list.map(item => {
                if (item.active === 'active') return setActiveMedicList(item.medicine_list)
                if (item.active === 'inactive') return setInactiveMedicList(item.medicine_list)
                if (item.active !== 'active' && item.active !== 'inactive') {
                    setActiveMedicList([]);
                    setInactiveMedicList([]);
                }
            })
        }
    }, []);

    const getMedicReport = useCallback(async (data) => {
        const res = await ApiServices.getMedicReport(parseInt(sessionStorage.getItem('uid')), data);
        if (res.status === 200) {
            if (res.data.list.adherence === null) {
                setLabels([]);
            } else {
                setLabels(res.data.list.adherence)
            }
            if (res.data.list.active_inactive_medicine === null) {
                setActiveMedicList([]);
                setInactiveMedicList([]);
            } else {
                res.data.list.active_inactive_medicine.map(item => {
                    if (item.active === 'active') return setActiveMedicList(item.medicine_list)
                    if (item.active === 'inactive') return setInactiveMedicList(item.medicine_list)
                })
            }
            if (res.data.list.total === null) {
                setTotalAdh(0);
            } else {
                setTotalAdh(res.data.list.total)
            }
            if (res.data.list.history === null) {
                setHistoryLogs([]);
            } else {
                setHistoryLogs(res.data.list.history);
            }
        } else if (res.data.code === 401 || res.data.code === 403) {
            history.push('/sign-in');
        } else if (res.data.code === 404) {
            setActiveMedicList([]);
            setInactiveMedicList([]);
        }
    }, [setHistoryLogs, history]);

    // useEffect(() => {
    //     getMedicList();
    // }, [getMedicList])

    useEffect(() => {
        getMedicReport({ type: "annual", year: year });
    }, [getMedicReport])

    const changeBtnClr1 = () => {
        setBtnClr1({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr2({ background: '#4A7389', color: '#C1D6E1' });
        setBtnClr3({ background: '#4A7389', color: '#C1D6E1' });
        setFilterMedic('weekly');
    }
    const changeBtnClr2 = () => {
        setBtnClr1({ background: '#4A7389', color: '#C1D6E1' });
        setBtnClr2({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr3({ background: '#4A7389', color: '#C1D6E1' });
        setFilterMedic('monthly');
    }
    const changeBtnClr3 = () => {
        setBtnClr1({ background: '#4A7389', color: '#C1D6E1' });
        setBtnClr2({ background: '#4A7389', color: '#C1D6E1' });
        setBtnClr3({ background: '#FFFFFF', color: '#3E6578' });
        setFilterMedic('annual');
    }
    const weekFilter = (week_) => {
        switch (week_) {
            case 1:
                getMedicReport({ type: "weekly", week: 1, month: monthFilter(month), year: parseInt(year) })
                break;
            case 2:
                getMedicReport({ type: "weekly", week: 2, month: monthFilter(month), year: parseInt(year) })
                break;
            case 3:
                getMedicReport({ type: "weekly", week: 3, month: monthFilter(month), year: parseInt(year) })
                break;
            case 4:
                getMedicReport({ type: "weekly", week: 4, month: monthFilter(month), year: parseInt(year) })
                break;
            case 5:
                getMedicReport({ type: "weekly", week: 5, month: monthFilter(month), year: parseInt(year) })
                break;
            default:
                break;
        }
    }
    const monthFilter = (month_) => {
        if (month_ === "Jan") return 1;
        else if (month_ === "Feb") return 2;
        else if (month_ === "March") return 3;
        else if (month_ === "April") return 4;
        else if (month_ === "May") return 5;
        else if (month_ === "June") return 6;
        else if (month_ === "July") return 7;
        else if (month_ === "Aug") return 8;
        else if (month_ === "Sep") return 9;
        else if (month_ === "Oct") return 10;
        else if (month_ === "Nov") return 11;
        else if (month_ === "Dec") return 12;
    }
    const setFilters = () => {
        setActiveMedicList([]);
        setInactiveMedicList([]);
        switch (filterMedic) {
            case 'weekly':
                setCount(2);
                // setLabels(['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']);
                setArrBtn({ prev: false, frwd: true })
                setGdata([{ name: `W1 ${month} ${year}`, value: 400 }, { name: `W1 ${month} ${year}`, value: 100 }]);
                setShowFilterMedic(`W1 ${month}, ${year}`);
                weekFilter(1);
                break;
            case 'monthly':
                setCount(2);
                // setLabels(['W1', 'W2', 'W3', 'W4', 'W5']);
                setArrBtn({ prev: false, frwd: true })
                setGdata([{ name: `${month} ${year}`, value: 400 }, { name: `${month} ${year}`, value: 100 }]);
                setShowFilterMedic(`${month}, ${year}`);
                getMedicReport({ type: "monthly", month: monthFilter(month), year: parseInt(year) });
                break;
            case 'annual':
                setCount(3);
                // setLabels(['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
                setArrBtn({ prev: true, frwd: true })
                setGdata([{ name: "Year", value: 400 }, { name: "Year", value: 100 }]);
                setShowFilterMedic(`${year}`);
                getMedicReport({ type: "annual", year: parseInt(year) })
                break;
            default:
                break;
        }
    }
    const showYearHandle = () => {
        setActiveMedicList([]);
        setInactiveMedicList([]);
        switch (count) {
            case 1:
                setShowFilterMedic('2021');
                getMedicReport({ type: "annual", year: 2021 })
                setArrBtn({ prev: false, frwd: true })
                setCount(2);
                break;
            case 2:
                setShowFilterMedic('2022');
                getMedicReport({ type: "annual", year: 2022 })
                setArrBtn({ prev: true, frwd: true })
                break;
            case 3:
                setShowFilterMedic('2023');
                getMedicReport({ type: "annual", year: 2023 })
                setArrBtn({ prev: true, frwd: true })
                break;
            case 4:
                setShowFilterMedic('2024');
                getMedicReport({ type: "annual", year: 2024 })
                setArrBtn({ prev: true, frwd: true })
                break;
            case 5:
                setShowFilterMedic('2025');
                getMedicReport({ type: "annual", year: 2025 })
                setArrBtn({ prev: true, frwd: true })
                break;
            case 6:
                setShowFilterMedic('2026');
                getMedicReport({ type: "annual", year: 2026 })
                setArrBtn({ prev: true, frwd: true })
                break;
            case 7:
                setShowFilterMedic('2027');
                getMedicReport({ type: "annual", year: 2027 })
                setArrBtn({ prev: true, frwd: false })
                setCount(6);
                break;
            default:
                break;
        }
    }
    const showMonthHandle = () => {
        setActiveMedicList([]);
        setInactiveMedicList([]);
        switch (count) {
            case 1:
                setShowFilterMedic(`Jan ${year}`);
                getMedicReport({ type: "monthly", month: 1, year: parseInt(year) });
                setGdata([{ name: `Jan ${year}`, value: 400 }, { name: `Jan ${year}`, value: 100 }]);
                setArrBtn({ prev: false, frwd: true })
                setCount(2);
                break;
            case 2:
                getMedicReport({ type: "monthly", month: 2, year: parseInt(year) });
                setShowFilterMedic(`Feb ${year}`);
                setGdata([{ name: `Feb ${year}`, value: 400 }, { name: `Feb ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 3:
                getMedicReport({ type: "monthly", month: 3, year: parseInt(year) });
                setShowFilterMedic(`March ${year}`);
                setGdata([{ name: `March ${year}`, value: 400 }, { name: `March ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 4:
                getMedicReport({ type: "monthly", month: 4, year: parseInt(year) });
                setShowFilterMedic(`April ${year}`);
                setGdata([{ name: `April ${year}`, value: 400 }, { name: `April ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 5:
                getMedicReport({ type: "monthly", month: 5, year: parseInt(year) });
                setShowFilterMedic(`May ${year}`);
                setGdata([{ name: `May ${year}`, value: 400 }, { name: `May ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 6:
                getMedicReport({ type: "monthly", month: 6, year: parseInt(year) });
                setShowFilterMedic(`June ${year}`);
                setGdata([{ name: `June ${year}`, value: 400 }, { name: `June ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 7:
                getMedicReport({ type: "monthly", month: 7, year: parseInt(year) });
                setShowFilterMedic(`July ${year}`);
                setGdata([{ name: `July ${year}`, value: 400 }, { name: `July ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 8:
                getMedicReport({ type: "monthly", month: 8, year: parseInt(year) });
                setShowFilterMedic(`Aug ${year}`);
                setGdata([{ name: `Aug ${year}`, value: 400 }, { name: `Aug ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 9:
                getMedicReport({ type: "monthly", month: 9, year: parseInt(year) });
                setShowFilterMedic(`Sep ${year}`);
                setGdata([{ name: `Sep ${year}`, value: 400 }, { name: `Sep ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 10:
                getMedicReport({ type: "monthly", month: 10, year: parseInt(year) });
                setShowFilterMedic(`Oct ${year}`);
                setGdata([{ name: `Oct ${year}`, value: 400 }, { name: `Oct ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 11:
                getMedicReport({ type: "monthly", month: 11, year: parseInt(year) });
                setShowFilterMedic(`Nov ${year}`);
                setGdata([{ name: `Nov ${year}`, value: 400 }, { name: `Nov ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 12:
                getMedicReport({ type: "monthly", month: 12, year: parseInt(year) });
                setShowFilterMedic(`Dec ${year}`);
                setGdata([{ name: `Dec ${year}`, value: 400 }, { name: `Dec ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: false })
                setCount(11);
                break;
            default:
                break;
        }
    }
    const showWeekHandle = () => {
        setActiveMedicList([]);
        setInactiveMedicList([]);
        switch (count) {
            case 1:
                weekFilter(1);
                setShowFilterMedic(`W1 ${month} ${year}`);
                setGdata([{ name: `W1 ${month} ${year}`, value: 400 }, { name: `W1 ${month} ${year}`, value: 100 }]);
                setArrBtn({ prev: false, frwd: true })
                setCount(2);
                break;
            case 2:
                weekFilter(2);
                setShowFilterMedic(`W2 ${month} ${year}`);
                setGdata([{ name: `W2 ${month} ${year}`, value: 400 }, { name: `W2 ${month} ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 3:
                weekFilter(3);
                setShowFilterMedic(`W3 ${month} ${year}`);
                setGdata([{ name: `W3 ${month} ${year}`, value: 400 }, { name: `W3 ${month} ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 4:
                weekFilter(4);
                setShowFilterMedic(`W4 ${month} ${year}`);
                setGdata([{ name: `W4 ${month} ${year}`, value: 400 }, { name: `W4 ${month} ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: true })
                break;
            case 5:
                weekFilter(5);
                setShowFilterMedic(`W5 ${month} ${year}`);
                setGdata([{ name: `W5 ${month} ${year}`, value: 400 }, { name: `W5 ${month} ${year}`, value: 100 }]);
                setArrBtn({ prev: true, frwd: false })
                setCount(4);
                break;
            default:
                break;
        }
    }

    const arrBtnHandle = () => {
        switch (filterMedic) {
            case 'weekly':
                showWeekHandle();
                break;
            case 'monthly':
                showMonthHandle();
                break;
            case 'annual':
                showYearHandle();
                break;

            default:
                break;
        }
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
                        <select name="months" onChange={(e) => setMonth(e.target.value)} id="dashboard_month_select">
                            <option value={"Jan"}>Jan</option>
                            <option value={"Feb"}>Feb</option>
                            <option value={"March"}>March</option>
                            <option value={"April"}>April</option>
                            <option value={"May"}>May</option>
                            <option value={"June"}>June</option>
                            <option value={"July"}>July</option>
                            <option value={"Aug"}>Aug</option>
                            <option value={"Sep"}>Sep</option>
                            <option value={"Oct"}>Oct</option>
                            <option value={"Nov"}>Nov</option>
                            <option value={"Dec"}>Dec</option>
                        </select>
                        <select name="years" onChange={(e) => setYear(e.target.value)} id="dashboard_year_select">
                            <option value={2021} >2021</option>
                            <option selected value={2022}>2022</option>
                            <option value={2023}>2023</option>
                            <option value={2024}>2024</option>
                            <option value={2025}>2025</option>
                            <option value={2026}>2026</option>
                            <option value={2027}>2027</option>
                        </select>
                        <button onClick={setFilters} type='button'>G0!</button>
                    </form>
                </div>
            </div>
            <div className='individualPanel_child22'>
                <div className='individualPanel_child22_1'>
                    <div className='individualPanel_child22_11'>
                        <div className='individualPanel_child22_head'>
                            <h4 >Medications Adherence rate</h4>
                            <div className='individualPanel_child22_date'>
                                {arrBtn.prev ? <img src={prevBtn} alt="" onClick={() => {
                                    setCount(count - 1);
                                    arrBtnHandle();
                                }} /> : ''}
                                <h5 style={{ fontWeight: '400', margin: '0 6px' }}>{showFilterMedic}</h5>
                                {arrBtn.frwd ? <img src={frwdBtn} alt="" onClick={() => {
                                    setCount(count + 1);
                                    arrBtnHandle();
                                }} /> : ''}
                            </div>
                        </div>
                        <div className='individualPanel_child22_graph'>
                            <div className='individualPanel_graph1'>
                                <h5>Total {totalAdh}%</h5>
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
                                        {gdata.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </div>
                            <div className='individualPanel_graph2'>
                                <LBChart label={labels} />
                            </div>
                        </div>
                    </div>
                    <div className='individualPanel_child22_12'>
                        {/* ... JUBI watch*/}
                        {/* <div className='individualPanel_child22_12child'>
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
                                        <h4 style={{ color: '#122A36' }}>100%</h4>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* ... Active Medications */}
                        <div className='individualPanel_child22_12child'>
                            {medicActiveList.length > 0 ? <>
                                <div className='signin_checkout individual2_input'>
                                    <input type="checkbox" defaultChecked={true} />
                                    <h5>Active Medications ({medicActiveList.length})</h5>
                                </div>
                                {medicActiveList.map(item => (
                                    <div key={item.mrid} className='individual_History_medics' style={{ padding: '2% 2.5%' }}>
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
                                                <h4 style={{ color: item.goal > 30 ? '#122A36' : '#D7575F' }}>{item.goal}%</h4>
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
                                    {/* <input type="checkbox" defaultChecked={false} /> */}
                                    <h5>Inactive Medications ({medicInactiveList.length})</h5>
                                </div>
                                {medicInactiveList.map(item => (
                                    <div key={item.mrid} className='individual_History_medics' style={{ padding: '2% 2.5%' }}>
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
                                                <h4 style={{ color: item.goal > 30 ? '#122A36' : '#D7575F' }}>{item.goal}%</h4>
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
                {/* HistoryLogs */}
                <div className='individualPanel_child22_2'>
                    <div className='individualPanel_child22_2_child'>
                        <h4>History Logs</h4>
                    </div>
                    {historyLogs.length > 0 ?
                        historyLogs.map((item) => (
                            <div className='individual_History'>
                                <div className='individual_History_date'>
                                    <p>{item.date}</p>
                                </div>
                                {item.data.map(item1 => (
                                    item1.medicine_list.map(item2 => (
                                        <div className='individual_History_medics'>
                                            <div className='medicsImg'>
                                                <img src={medicAdd} alt="" />
                                            </div>
                                            <div className="individual_History_medic">
                                                <div className='medicsH5'>
                                                    <h5>{item2.name}</h5>
                                                    <p>{item1.time.slice(0, 5)}</p>
                                                </div>
                                                <div>
                                                    <img src={item2.active ? medicAdd : medicDel} style={{ cursor: 'pointer' }} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ))}
                            </div>
                        )) :
                        <div>
                            <h5>&nbsp; No History yet</h5>
                        </div>}
                </div>
            </div>
        </>
    )
}
export default IndividualPanel2