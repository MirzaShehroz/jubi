import '../assets/css/dashboardtables.css';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faStar } from "@fortawesome/free-regular-svg-icons";
import Box from '@mui/material/Box';
import { Chart } from 'react-google-charts';
import expandButton from '../assets/img/expandButton.png';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

//initialize datatable
$(document).ready(function () {
    setTimeout(function () {
        $('#example').DataTable();
    }, 1000);

    // $('#example').DataTable({
    //     "scrollY": "450px",
    //     "scrollCollapse": true,
    // });
});

function DashboardTable() {

    return (
        <div className='dashboard_child2'>
            <div id={'container'}>
                <div id={'filters'}>
                    <div className={'container-fluid'}>
                        <div className={'row'}>
                            <div style={{ padding: '1%', borderRadius: '13px 0 0 0 ' }} className={'col-md-4 col-sm-12'}>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-sm-12'}>
                                            <h5 style={{ color: "#3E6578" }}>Med Types</h5>
                                        </div>
                                        <div className={'col-sm-12'}>
                                            <button className={'filterButtons'}  >All</button>
                                            <button className={'filterButtons'}  >Jubi Watch Only</button>
                                            <button className={'filterButtons'}  >Others</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: '1%' }} className={'col-md-4 col-sm-12'}>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-sm-12'}>
                                            <h5 style={{ color: "#3E6578" }}>Medication Adherence Rate</h5>
                                        </div>
                                        <div className={'col-sm-12'}>
                                            <button className={'filterButtons'}  >All</button>
                                            <button className={'filterButtons'}  >50% and more</button>
                                            <button className={'filterButtons'}  >Under 50%</button>
                                            <button className={'filterButtons'}  >Under 30%</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: '1%', borderRadius: '0 13px 0 0 ' }} className={'col-md-4 col-sm-12'}>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-sm-12'}>
                                            <h5 style={{ color: "#3E6578" }}>Search</h5>
                                        </div>
                                        <div className={'col-sm-12 d-flex'}>
                                            <FormControl
                                                type="search"
                                                placeholder={'User name/ Insurance/ Medication'}
                                                className="me-2"
                                                aria-label="Search"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={'datatable'}>
                    <table id="example" className="table table-hover table-bordered" style={{ borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Status</th>
                                <th>Name</th>
                                <th>Sex</th>
                                <th>Last Visit</th>
                                <th>Primary cvg</th>
                                <th>Adherence rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={'tableTD'}>
                                <td>1</td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-2 col-sm-12'}></div>
                                            <div className={'col-lg-4 col-sm-12'}>
                                                <Box sx={{ color: 'action.active' }}>
                                                    <Badge color="error" variant="dot">
                                                        <FontAwesomeIcon id={'commentBadge'} icon={faComment} />
                                                    </Badge>
                                                </Box>
                                            </div>
                                            <div className={'col-lg-4 col-sm-12'}>
                                                <FontAwesomeIcon id={'starIcon'} icon={faStar} />
                                            </div>
                                            <div className={'col-lg-2 col-sm-12'}></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ textAlign: 'center' }}>M</td>
                                <td style={{ textAlign: 'center' }}>Oct.30.<br />2021</td>
                                <td>Insurance Name<br />Insurance Name</td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                            <div className={'col-lg-5 col-sm-5'}>
                                                <Chart

                                                    chartType="AreaChart"
                                                    loader={<div>Loading Chart</div>}
                                                    data={[
                                                        ['', '', ''],
                                                        ['', 140, 300],
                                                        ['', 110, 300],
                                                        ['', 660, 300],
                                                        ['', 103, 300],
                                                    ]}
                                                    options={{
                                                        backgroundColor: { fill: 'transparent' },
                                                        legend: 'none',
                                                        hAxis: {},
                                                        vAxis: { textPosition: 'none', },
                                                        chartArea: { width: '100%', height: '100%' },
                                                    }}
                                                />
                                            </div>
                                            <div className={'col-lg-5 col-sm-5'}>
                                                [Jubi] Medication name 1<br />
                                                Medication name 2<br />
                                                Medication name 3<br />
                                                Medication name 4<br />
                                                <u style={{ color: 'red' }}>+1 more</u>
                                            </div>
                                            <div className={'col-lg-1 col-sm-1'}>
                                                <img src={expandButton} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className={'tableTD'}>
                                <td>1</td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-2 col-sm-12'}></div>
                                            <div className={'col-lg-4 col-sm-12'}>
                                                <Box sx={{ color: 'action.active' }}>
                                                    <Badge color="error" variant="dot">
                                                        <FontAwesomeIcon id={'commentBadge'} icon={faComment} />
                                                    </Badge>
                                                </Box>
                                            </div>
                                            <div className={'col-lg-4 col-sm-12'}>
                                                <FontAwesomeIcon id={'starIcon'} icon={faStar} />
                                            </div>
                                            <div className={'col-lg-2 col-sm-12'}></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ textAlign: 'center' }}>M</td>
                                <td style={{ textAlign: 'center' }}>Oct.30.<br />2021</td>
                                <td>Insurance Name<br />Insurance Name</td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                            <div className={'col-lg-5 col-sm-5'}>
                                                <Chart

                                                    chartType="AreaChart"
                                                    loader={<div>Loading Chart</div>}
                                                    data={[
                                                        ['', '', ''],
                                                        ['', 140, 300],
                                                        ['', 110, 300],
                                                        ['', 660, 300],
                                                        ['', 103, 300],
                                                    ]}
                                                    options={{
                                                        backgroundColor: { fill: 'transparent' },
                                                        legend: 'none',
                                                        hAxis: {},
                                                        vAxis: { textPosition: 'none', },
                                                        chartArea: { width: '100%', height: '100%' },
                                                    }}
                                                />
                                            </div>
                                            <div className={'col-lg-5 col-sm-5'}>
                                                [Jubi] Medication name 1<br />
                                                Medication name 2<br />
                                                Medication name 3<br />
                                                Medication name 4<br />
                                                <u style={{ color: 'red' }}>+1 more</u>
                                            </div>
                                            <div className={'col-lg-1 col-sm-1'}>
                                                <img src={expandButton} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className={'tableTD'}>
                                <td>1</td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-2 col-sm-12'}></div>
                                            <div className={'col-lg-4 col-sm-12'}>
                                                <Box sx={{ color: 'action.active' }}>
                                                    <Badge color="error" variant="dot">
                                                        <FontAwesomeIcon id={'commentBadge'} icon={faComment} />
                                                    </Badge>
                                                </Box>
                                            </div>
                                            <div className={'col-lg-4 col-sm-12'}>
                                                <FontAwesomeIcon id={'starIcon'} icon={faStar} />
                                            </div>
                                            <div className={'col-lg-2 col-sm-12'}></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ textAlign: 'center' }}>M</td>
                                <td style={{ textAlign: 'center' }}>Oct.30.<br />2021</td>
                                <td>Insurance Name<br />Insurance Name</td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                            <div className={'col-lg-5 col-sm-5'}>
                                                <Chart

                                                    chartType="AreaChart"
                                                    loader={<div>Loading Chart</div>}
                                                    data={[
                                                        ['', '', ''],
                                                        ['', 140, 300],
                                                        ['', 110, 300],
                                                        ['', 660, 300],
                                                        ['', 103, 300],
                                                    ]}
                                                    options={{
                                                        backgroundColor: { fill: 'transparent' },
                                                        legend: 'none',
                                                        hAxis: {},
                                                        vAxis: { textPosition: 'none', },
                                                        // For the legend to fit, we make the chart area smaller
                                                        chartArea: { width: '100%', height: '100%' },
                                                        // lineWidth: 25
                                                    }}
                                                />
                                            </div>
                                            <div className={'col-lg-5 col-sm-5'}>
                                                [Jubi] Medication name 1<br />
                                                Medication name 2<br />
                                                Medication name 3<br />
                                                Medication name 4<br />
                                                <u style={{ color: 'red' }}>+1 more</u>
                                            </div>
                                            <div className={'col-lg-1 col-sm-1'}>
                                                <img src={expandButton} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className={'tableTD'}>
                                <td>1</td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-2 col-sm-12'}></div>
                                            <div className={'col-lg-4 col-sm-12'}>
                                                <Box sx={{ color: 'action.active' }}>
                                                    <Badge color="error" variant="dot">
                                                        <FontAwesomeIcon id={'commentBadge'} icon={faComment} />
                                                    </Badge>
                                                </Box>
                                            </div>
                                            <div className={'col-lg-4 col-sm-12'}>
                                                <FontAwesomeIcon id={'starIcon'} icon={faStar} />
                                            </div>
                                            <div className={'col-lg-2 col-sm-12'}></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ textAlign: 'center' }}>M</td>
                                <td style={{ textAlign: 'center' }}>Oct.30.<br />2021</td>
                                <td>Insurance Name<br />Insurance Name</td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                            <div className={'col-lg-5 col-sm-5'}>
                                                <Chart

                                                    chartType="AreaChart"
                                                    loader={<div>Loading Chart</div>}
                                                    data={[
                                                        ['', '', ''],
                                                        ['', 140, 300],
                                                        ['', 110, 300],
                                                        ['', 660, 300],
                                                        ['', 103, 300],
                                                    ]}
                                                    options={{
                                                        backgroundColor: { fill: 'transparent' },
                                                        legend: 'none',
                                                        hAxis: {},
                                                        vAxis: { textPosition: 'none', },
                                                        // For the legend to fit, we make the chart area smaller
                                                        chartArea: { width: '100%', height: '100%' },
                                                        // lineWidth: 25
                                                    }}
                                                />
                                            </div>
                                            <div className={'col-lg-5 col-sm-5'}>
                                                [Jubi] Medication name 1<br />
                                                Medication name 2<br />
                                                Medication name 3<br />
                                                Medication name 4<br />
                                                <u style={{ color: 'red' }}>+1 more</u>
                                            </div>
                                            <div className={'col-lg-1 col-sm-1'}>
                                                <img src={expandButton} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className={'tableTD'}>
                                <td>1</td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-2 col-sm-12'}></div>
                                            <div className={'col-lg-4 col-sm-12'}>
                                                <Box sx={{ color: 'action.active' }}>
                                                    <Badge color="error" variant="dot">
                                                        <FontAwesomeIcon id={'commentBadge'} icon={faComment} />
                                                    </Badge>
                                                </Box>
                                            </div>
                                            <div className={'col-lg-4 col-sm-12'}>
                                                <FontAwesomeIcon id={'starIcon'} icon={faStar} />
                                            </div>
                                            <div className={'col-lg-2 col-sm-12'}></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ textAlign: 'center' }}>M</td>
                                <td style={{ textAlign: 'center' }}>Oct.30.<br />2021</td>
                                <td>Insurance Name<br />Insurance Name</td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                            <div className={'col-lg-5 col-sm-5'}>
                                                <Chart

                                                    chartType="AreaChart"
                                                    loader={<div>Loading Chart</div>}
                                                    data={[
                                                        ['', '', ''],
                                                        ['', 140, 300],
                                                        ['', 110, 300],
                                                        ['', 660, 300],
                                                        ['', 103, 300],
                                                    ]}
                                                    options={{
                                                        backgroundColor: { fill: 'transparent' },
                                                        legend: 'none',
                                                        hAxis: {},
                                                        vAxis: { textPosition: 'none', },
                                                        // For the legend to fit, we make the chart area smaller
                                                        chartArea: { width: '100%', height: '100%' },
                                                        // lineWidth: 25
                                                    }}
                                                />
                                            </div>
                                            <div className={'col-lg-5 col-sm-5'}>
                                                [Jubi] Medication name 1<br />
                                                Medication name 2<br />
                                                Medication name 3<br />
                                                Medication name 4<br />
                                                <u style={{ color: 'red' }}>+1 more</u>
                                            </div>
                                            <div className={'col-lg-1 col-sm-1'}>
                                                <img src={expandButton} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className={'tableTD'}>
                                <td>1</td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-2 col-sm-12'}></div>
                                            <div className={'col-lg-4 col-sm-12'}>
                                                <Box sx={{ color: 'action.active' }}>
                                                    <Badge color="error" variant="dot">
                                                        <FontAwesomeIcon id={'commentBadge'} icon={faComment} />
                                                    </Badge>
                                                </Box>
                                            </div>
                                            <div className={'col-lg-4 col-sm-12'}>
                                                <FontAwesomeIcon id={'starIcon'} icon={faStar} />
                                            </div>
                                            <div className={'col-lg-2 col-sm-12'}></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ textAlign: 'center' }}>M</td>
                                <td style={{ textAlign: 'center' }}>Oct.30.<br />2021</td>
                                <td>Insurance Name<br />Insurance Name</td>
                                <td>
                                    <div className={'container'}>
                                        <div className={'row'}>
                                            <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                            <div className={'col-lg-5 col-sm-5'}>
                                                <Chart

                                                    chartType="AreaChart"
                                                    loader={<div>Loading Chart</div>}
                                                    data={[
                                                        ['', '', ''],
                                                        ['', 140, 300],
                                                        ['', 110, 300],
                                                        ['', 660, 300],
                                                        ['', 103, 300],
                                                    ]}
                                                    options={{
                                                        backgroundColor: { fill: 'transparent' },
                                                        legend: 'none',
                                                        hAxis: {},
                                                        vAxis: { textPosition: 'none', },
                                                        // For the legend to fit, we make the chart area smaller
                                                        chartArea: { width: '100%', height: '100%' },
                                                        // lineWidth: 25
                                                    }}
                                                />
                                            </div>
                                            <div className={'col-lg-5 col-sm-5'}>
                                                [Jubi] Medication name 1<br />
                                                Medication name 2<br />
                                                Medication name 3<br />
                                                Medication name 4<br />
                                                <u style={{ color: 'red' }}>+1 more</u>
                                            </div>
                                            <div className={'col-lg-1 col-sm-1'}>
                                                <img src={expandButton} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DashboardTable;
