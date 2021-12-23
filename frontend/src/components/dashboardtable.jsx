import React from 'react';
import '../assets/css/dashboardDatatables.css';
import Badge from '@mui/material/Badge';
import { FormControl} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment,faStar} from "@fortawesome/free-regular-svg-icons";
import Box from '@mui/material/Box';
import {Chart} from 'react-google-charts';
import expandButton from '../assets/img/expandButton.png';
import {Modal,Typography} from "@mui/material";
import {useState} from 'react';
import user from '../assets/img/avatar2.png'

//jQuery libraries

import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import AddWathListModal from "./addWatchListModal";
import RemoveWatchModal from "./removeWatchListModal";

//initialize datatable
$(document).ready(function () {
    setTimeout(function () {
        $('#example').DataTable();
    }, 1000);

    $('#example').DataTable( {
        pageLength : 5,
        "scrollCollapse": true,
        "bPaginate": true,
        "bLengthChange": true,
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": false,
        "searching": false,


        "dom": '<"top"i>rt<"bottom"flp><"clear">',

    } );
});

function DashboardTable() {

    const [modalShowAW, setModalShowAW] = React.useState(false);
    const [modalShowRW, setModalShowRW] = React.useState(false);

    return (
        <div className='dashboard_child2'>
            <div id={'container'}>
                <div id={'filters'}>
                    <div className={'container-fluid'}>
                        <div className={'row'}>
                            <div style={{padding: '1%',borderRadius: '20px 0 0 0 '}} className={'col-md-4 col-sm-12'}>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-sm-12'}>
                                            <h5 style={{color: "#3E6578"}}>Med Types</h5>
                                        </div>
                                        <div className={'col-sm-12'}>
                                            <button className={'filterButtons'}  >All</button>
                                            <button className={'filterButtons'}  >Jubi Watch Only</button>
                                            <button className={'filterButtons'}  >Others</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{padding: '1%'}} className={'col-md-4 col-sm-12'}>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-sm-12'}>
                                            <h5 style={{color: "#3E6578"}}>Medication Adherence Rate</h5>
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
                            <div style={{padding: '1%',borderRadius: '0 20px 0 0 '}} className={'col-md-4 col-sm-12'}>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-sm-12'}>
                                            <h5 style={{color: "#3E6578"}}>Search</h5>
                                        </div>
                                        <div className={'col-sm-12 d-flex'}>
                                            <FormControl
                                                type="search"
                                                placeholder={'Search'}
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
                    <table id="example" className="table table-hover table-bordered" style={{borderCollapse: 'collapse',background: '#F5F5F5'}}>
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
                                                    <FontAwesomeIcon id={'commentBadge'} icon={faComment}/>
                                                </Badge>
                                            </Box>
                                        </div>
                                        <div className={'col-lg-4 col-sm-12'}>
                                            <FontAwesomeIcon id={'starIcon'} icon={faStar}/>
                                        </div>
                                        <div className={'col-lg-2 col-sm-12'}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-lg-5 col-sm-5'}>
                                            <img onClick={() => setModalShowRW(true)} src={user}/>
                                        </div>
                                        <div className={'col-lg-7 col-sm-7'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td style={{textAlign: 'center'}}>M</td>
                            <td style={{textAlign: 'center'}}>Oct.30.<br/>2021</td>
                            <td>Insurance Name<br/>Insurance Name</td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                        <div id={'chart'} className={'col-lg-5 col-sm-5'}>
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
                                                    backgroundColor: { fill:'transparent' },
                                                    legend: 'none',
                                                    hAxis: {  },
                                                    vAxis: { textPosition: 'none', },
                                                    // For the legend to fit, we make the chart area smaller
                                                    chartArea: { width: '100%', height: '60%' },
                                                    // lineWidth: 25
                                                }}
                                            />
                                        </div>
                                        <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                            <span>[Jubi] Medication name 1</span><br/>
                                            <span>Medication name 2</span><br/>
                                            <span>Medication name 3</span><br/>
                                            <span>Medication name 4</span><br/>
                                            <u style={{color: 'red'}}>+1 more</u>
                                        </div>
                                        <div className={'col-lg-1 col-sm-1'}>
                                            <img id={'expandButton'} src={expandButton}/>
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
                                                    <FontAwesomeIcon id={'commentBadge'} icon={faComment}/>
                                                </Badge>
                                            </Box>
                                        </div>
                                        <div className={'col-lg-4 col-sm-12'}>
                                            <FontAwesomeIcon id={'starIcon'} icon={faStar}/>
                                        </div>
                                        <div className={'col-lg-2 col-sm-12'}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-lg-5 col-sm-5'}>
                                            <img onClick={() => setModalShowAW(true)}  src={user}/>
                                        </div>
                                        <div className={'col-lg-7 col-sm-7'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td style={{textAlign: 'center'}}>M</td>
                            <td style={{textAlign: 'center'}}>Oct.30.<br/>2021</td>
                            <td>Insurance Name<br/>Insurance Name</td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                        <div id={'chart'} className={'col-lg-5 col-sm-5'}>
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
                                                    backgroundColor: { fill:'transparent' },
                                                    legend: 'none',
                                                    hAxis: {  },
                                                    vAxis: { textPosition: 'none', },
                                                    // For the legend to fit, we make the chart area smaller
                                                    chartArea: { width: '100%', height: '70%' },
                                                    // lineWidth: 25
                                                }}
                                            />
                                        </div>
                                        <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                            <span>[Jubi] Medication name 1</span><br/>
                                            <span>Medication name 2</span><br/>
                                            <span>Medication name 3</span><br/>
                                            <span>Medication name 4</span><br/>
                                            <u style={{color: 'red'}}>+1 more</u>
                                        </div>
                                        <div className={'col-lg-1 col-sm-1'}>
                                            <img data-toggle="modal" data-target="#exampleModalCenter" id={'expandButton'} src={expandButton}/>
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
                                                    <FontAwesomeIcon id={'commentBadge'} icon={faComment}/>
                                                </Badge>
                                            </Box>
                                        </div>
                                        <div className={'col-lg-4 col-sm-12'}>
                                            <FontAwesomeIcon id={'starIcon'} icon={faStar}/>
                                        </div>
                                        <div className={'col-lg-2 col-sm-12'}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-lg-5 col-sm-5'}>
                                            <img src={user}/>
                                        </div>
                                        <div className={'col-lg-7 col-sm-7'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td style={{textAlign: 'center'}}>M</td>
                            <td style={{textAlign: 'center'}}>Oct.30.<br/>2021</td>
                            <td>Insurance Name<br/>Insurance Name</td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                        <div id={'chart'} className={'col-lg-5 col-sm-5'}>
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
                                                    backgroundColor: { fill:'transparent' },
                                                    legend: 'none',
                                                    hAxis: {  },
                                                    vAxis: { textPosition: 'none', },
                                                    // For the legend to fit, we make the chart area smaller
                                                    chartArea: { width: '100%', height: '60%' },
                                                    // lineWidth: 25
                                                }}
                                            />
                                        </div>
                                        <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                            <span>[Jubi] Medication name 1</span><br/>
                                            <span>Medication name 2</span><br/>
                                            <span>Medication name 3</span><br/>
                                            <span>Medication name 4</span><br/>
                                            <u style={{color: 'red'}}>+1 more</u>
                                        </div>
                                        <div className={'col-lg-1 col-sm-1'}>
                                            <img id={'expandButton'} src={expandButton}/>
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
                                                    <FontAwesomeIcon id={'commentBadge'} icon={faComment}/>
                                                </Badge>
                                            </Box>
                                        </div>
                                        <div className={'col-lg-4 col-sm-12'}>
                                            <FontAwesomeIcon id={'starIcon'} icon={faStar}/>
                                        </div>
                                        <div className={'col-lg-2 col-sm-12'}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-lg-5 col-sm-5'}>
                                            <img src={user}/>
                                        </div>
                                        <div className={'col-lg-7 col-sm-7'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td style={{textAlign: 'center'}}>M</td>
                            <td style={{textAlign: 'center'}}>Oct.30.<br/>2021</td>
                            <td>Insurance Name<br/>Insurance Name</td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                        <div id={'chart'} className={'col-lg-5 col-sm-5'}>
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
                                                    backgroundColor: { fill:'transparent' },
                                                    legend: 'none',
                                                    hAxis: {  },
                                                    vAxis: { textPosition: 'none', },
                                                    // For the legend to fit, we make the chart area smaller
                                                    chartArea: { width: '100%', height: '60%' },
                                                    // lineWidth: 25
                                                }}
                                            />
                                        </div>
                                        <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                            <span>[Jubi] Medication name 1</span><br/>
                                            <span>Medication name 2</span><br/>
                                            <span>Medication name 3</span><br/>
                                            <span>Medication name 4</span><br/>
                                            <u style={{color: 'red'}}>+1 more</u>
                                        </div>
                                        <div className={'col-lg-1 col-sm-1'}>
                                            <img id={'expandButton'} src={expandButton}/>
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
                                                    <FontAwesomeIcon id={'commentBadge'} icon={faComment}/>
                                                </Badge>
                                            </Box>
                                        </div>
                                        <div className={'col-lg-4 col-sm-12'}>
                                            <FontAwesomeIcon id={'starIcon'} icon={faStar}/>
                                        </div>
                                        <div className={'col-lg-2 col-sm-12'}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-lg-5 col-sm-5'}>
                                            <img src={user}/>
                                        </div>
                                        <div className={'col-lg-7 col-sm-7'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td style={{textAlign: 'center'}}>M</td>
                            <td style={{textAlign: 'center'}}>Oct.30.<br/>2021</td>
                            <td>Insurance Name<br/>Insurance Name</td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                        <div id={'chart'} className={'col-lg-5 col-sm-5'}>
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
                                                    backgroundColor: { fill:'transparent' },
                                                    legend: 'none',
                                                    hAxis: {  },
                                                    vAxis: { textPosition: 'none', },
                                                    // For the legend to fit, we make the chart area smaller
                                                    chartArea: { width: '100%', height: '60%' },
                                                    // lineWidth: 25
                                                }}
                                            />
                                        </div>
                                        <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                            <span>[Jubi] Medication name 1</span><br/>
                                            <span>Medication name 2</span><br/>
                                            <span>Medication name 3</span><br/>
                                            <span>Medication name 4</span><br/>
                                            <u style={{color: 'red'}}>+1 more</u>
                                        </div>
                                        <div className={'col-lg-1 col-sm-1'}>
                                            <img id={'expandButton'} src={expandButton}/>
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
                                                    <FontAwesomeIcon id={'commentBadge'} icon={faComment}/>
                                                </Badge>
                                            </Box>
                                        </div>
                                        <div className={'col-lg-4 col-sm-12'}>
                                            <FontAwesomeIcon id={'starIcon'} icon={faStar}/>
                                        </div>
                                        <div className={'col-lg-2 col-sm-12'}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-lg-5 col-sm-5'}>
                                            <img src={user}/>
                                        </div>
                                        <div className={'col-lg-7 col-sm-7'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td style={{textAlign: 'center'}}>M</td>
                            <td style={{textAlign: 'center'}}>Oct.30.<br/>2021</td>
                            <td>Insurance Name<br/>Insurance Name</td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                        <div id={'chart'} className={'col-lg-5 col-sm-5'}>
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
                                                    backgroundColor: { fill:'transparent' },
                                                    legend: 'none',
                                                    hAxis: {  },
                                                    vAxis: { textPosition: 'none', },
                                                    // For the legend to fit, we make the chart area smaller
                                                    chartArea: { width: '100%', height: '60%' },
                                                    // lineWidth: 25
                                                }}
                                            />
                                        </div>
                                        <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                            <span>[Jubi] Medication name 1</span><br/>
                                            <span>Medication name 2</span><br/>
                                            <span>Medication name 3</span><br/>
                                            <span>Medication name 4</span><br/>
                                            <u style={{color: 'red'}}>+1 more</u>
                                        </div>
                                        <div className={'col-lg-1 col-sm-1'}>
                                            <img id={'expandButton'} src={expandButton}/>
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
                                                    <FontAwesomeIcon id={'commentBadge'} icon={faComment}/>
                                                </Badge>
                                            </Box>
                                        </div>
                                        <div className={'col-lg-4 col-sm-12'}>
                                            <FontAwesomeIcon id={'starIcon'} icon={faStar}/>
                                        </div>
                                        <div className={'col-lg-2 col-sm-12'}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-lg-5 col-sm-5'}>
                                            <img src={user}/>
                                        </div>
                                        <div className={'col-lg-7 col-sm-7'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td style={{textAlign: 'center'}}>M</td>
                            <td style={{textAlign: 'center'}}>Oct.30.<br/>2021</td>
                            <td>Insurance Name<br/>Insurance Name</td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                        <div id={'chart'} className={'col-lg-5 col-sm-5'}>
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
                                                    backgroundColor: { fill:'transparent' },
                                                    legend: 'none',
                                                    hAxis: {  },
                                                    vAxis: { textPosition: 'none', },
                                                    // For the legend to fit, we make the chart area smaller
                                                    chartArea: { width: '100%', height: '60%' },
                                                    // lineWidth: 25
                                                }}
                                            />
                                        </div>
                                        <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                            <span>[Jubi] Medication name 1</span><br/>
                                            <span>Medication name 2</span><br/>
                                            <span>Medication name 3</span><br/>
                                            <span>Medication name 4</span><br/>
                                            <u style={{color: 'red'}}>+1 more</u>
                                        </div>
                                        <div className={'col-lg-1 col-sm-1'}>
                                            <img id={'expandButton'} src={expandButton}/>
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
                                                    <FontAwesomeIcon id={'commentBadge'} icon={faComment}/>
                                                </Badge>
                                            </Box>
                                        </div>
                                        <div className={'col-lg-4 col-sm-12'}>
                                            <FontAwesomeIcon id={'starIcon'} icon={faStar}/>
                                        </div>
                                        <div className={'col-lg-2 col-sm-12'}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-lg-5 col-sm-5'}>
                                            <img src={user}/>
                                        </div>
                                        <div className={'col-lg-7 col-sm-7'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td style={{textAlign: 'center'}}>M</td>
                            <td style={{textAlign: 'center'}}>Oct.30.<br/>2021</td>
                            <td>Insurance Name<br/>Insurance Name</td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                        <div id={'chart'} className={'col-lg-5 col-sm-5'}>
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
                                                    backgroundColor: { fill:'transparent' },
                                                    legend: 'none',
                                                    hAxis: {  },
                                                    vAxis: { textPosition: 'none', },
                                                    // For the legend to fit, we make the chart area smaller
                                                    chartArea: { width: '100%', height: '60%' },
                                                    // lineWidth: 25
                                                }}
                                            />
                                        </div>
                                        <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                            <span>[Jubi] Medication name 1</span><br/>
                                            <span>Medication name 2</span><br/>
                                            <span>Medication name 3</span><br/>
                                            <span>Medication name 4</span><br/>
                                            <u style={{color: 'red'}}>+1 more</u>
                                        </div>
                                        <div className={'col-lg-1 col-sm-1'}>
                                            <img id={'expandButton'} src={expandButton}/>
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
                                                    <FontAwesomeIcon id={'commentBadge'} icon={faComment}/>
                                                </Badge>
                                            </Box>
                                        </div>
                                        <div className={'col-lg-4 col-sm-12'}>
                                            <FontAwesomeIcon id={'starIcon'} icon={faStar}/>
                                        </div>
                                        <div className={'col-lg-2 col-sm-12'}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-lg-5 col-sm-5'}>
                                            <img src={user}/>
                                        </div>
                                        <div className={'col-lg-7 col-sm-7'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td style={{textAlign: 'center'}}>M</td>
                            <td style={{textAlign: 'center'}}>Oct.30.<br/>2021</td>
                            <td>Insurance Name<br/>Insurance Name</td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                        <div id={'chart'} className={'col-lg-5 col-sm-5'}>
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
                                                    backgroundColor: { fill:'transparent' },
                                                    legend: 'none',
                                                    hAxis: {  },
                                                    vAxis: { textPosition: 'none', },
                                                    // For the legend to fit, we make the chart area smaller
                                                    chartArea: { width: '100%', height: '60%' },
                                                    // lineWidth: 25
                                                }}
                                            />
                                        </div>
                                        <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                            <span>[Jubi] Medication name 1</span><br/>
                                            <span>Medication name 2</span><br/>
                                            <span>Medication name 3</span><br/>
                                            <span>Medication name 4</span><br/>
                                            <u style={{color: 'red'}}>+1 more</u>
                                        </div>
                                        <div className={'col-lg-1 col-sm-1'}>
                                            <img id={'expandButton'} src={expandButton}/>
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
                                                    <FontAwesomeIcon id={'commentBadge'} icon={faComment}/>
                                                </Badge>
                                            </Box>
                                        </div>
                                        <div className={'col-lg-4 col-sm-12'}>
                                            <FontAwesomeIcon id={'starIcon'} icon={faStar}/>
                                        </div>
                                        <div className={'col-lg-2 col-sm-12'}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-lg-5 col-sm-5'}>
                                            <img src={user}/>
                                        </div>
                                        <div className={'col-lg-7 col-sm-7'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td style={{textAlign: 'center'}}>M</td>
                            <td style={{textAlign: 'center'}}>Oct.30.<br/>2021</td>
                            <td>Insurance Name<br/>Insurance Name</td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                        <div id={'chart'} className={'col-lg-5 col-sm-5'}>
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
                                                    backgroundColor: { fill:'transparent' },
                                                    legend: 'none',
                                                    hAxis: {  },
                                                    vAxis: { textPosition: 'none', },
                                                    // For the legend to fit, we make the chart area smaller
                                                    chartArea: { width: '100%', height: '60%' },
                                                    // lineWidth: 25
                                                }}
                                            />
                                        </div>
                                        <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                            <span>[Jubi] Medication name 1</span><br/>
                                            <span>Medication name 2</span><br/>
                                            <span>Medication name 3</span><br/>
                                            <span>Medication name 4</span><br/>
                                            <u style={{color: 'red'}}>+1 more</u>
                                        </div>
                                        <div className={'col-lg-1 col-sm-1'}>
                                            <img id={'expandButton'} src={expandButton}/>
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
                                                    <FontAwesomeIcon id={'commentBadge'} icon={faComment}/>
                                                </Badge>
                                            </Box>
                                        </div>
                                        <div className={'col-lg-4 col-sm-12'}>
                                            <FontAwesomeIcon id={'starIcon'} icon={faStar}/>
                                        </div>
                                        <div className={'col-lg-2 col-sm-12'}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-lg-5 col-sm-5'}>
                                            <img src={user}/>
                                        </div>
                                        <div className={'col-lg-7 col-sm-7'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td style={{textAlign: 'center'}}>M</td>
                            <td style={{textAlign: 'center'}}>Oct.30.<br/>2021</td>
                            <td>Insurance Name<br/>Insurance Name</td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                        <div id={'chart'} className={'col-lg-5 col-sm-5'}>
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
                                                    backgroundColor: { fill:'transparent' },
                                                    legend: 'none',
                                                    hAxis: {  },
                                                    vAxis: { textPosition: 'none', },
                                                    // For the legend to fit, we make the chart area smaller
                                                    chartArea: { width: '100%', height: '60%' },
                                                    // lineWidth: 25
                                                }}
                                            />
                                        </div>
                                        <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                            <span>[Jubi] Medication name 1</span><br/>
                                            <span>Medication name 2</span><br/>
                                            <span>Medication name 3</span><br/>
                                            <span>Medication name 4</span><br/>
                                            <u style={{color: 'red'}}>+1 more</u>
                                        </div>
                                        <div className={'col-lg-1 col-sm-1'}>
                                            <img id={'expandButton'} src={expandButton}/>
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
                                                    <FontAwesomeIcon id={'commentBadge'} icon={faComment}/>
                                                </Badge>
                                            </Box>
                                        </div>
                                        <div className={'col-lg-4 col-sm-12'}>
                                            <FontAwesomeIcon id={'starIcon'} icon={faStar}/>
                                        </div>
                                        <div className={'col-lg-2 col-sm-12'}></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-lg-5 col-sm-5'}>
                                            <img src={user}/>
                                        </div>
                                        <div className={'col-lg-7 col-sm-7'}>
                                            <div className={'col-lg-12 col-sm-12'}><b>First Name</b> : John</div>
                                            <div className={'col-lg-12 col-sm-12'}><b>Last Name</b> : Doe</div>
                                            <div id={'year'} className={'col-sm-12'}>52 y.o. (02/19/1966)</div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td style={{textAlign: 'center'}}>M</td>
                            <td style={{textAlign: 'center'}}>Oct.30.<br/>2021</td>
                            <td>Insurance Name<br/>Insurance Name</td>
                            <td>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                        <div id={'chart'} className={'col-lg-5 col-sm-5'}>
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
                                                    backgroundColor: { fill:'transparent' },
                                                    legend: 'none',
                                                    hAxis: {  },
                                                    vAxis: { textPosition: 'none', },
                                                    // For the legend to fit, we make the chart area smaller
                                                    chartArea: { width: '100%', height: '60%' },
                                                    // lineWidth: 25
                                                }}
                                            />
                                        </div>
                                        <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                            <span>[Jubi] Medication name 1</span><br/>
                                            <span>Medication name 2</span><br/>
                                            <span>Medication name 3</span><br/>
                                            <span>Medication name 4</span><br/>
                                            <u style={{color: 'red'}}>+1 more</u>
                                        </div>
                                        <div className={'col-lg-1 col-sm-1'}>
                                            <img id={'expandButton'} src={expandButton}/>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>



                {/* Modal */}
                {/*    <Modal*/}
                {/*        open={open}*/}
                {/*        onClose={handleClose}*/}
                {/*        aria-labelledby="modal-modal-title"*/}
                {/*        aria-describedby="modal-modal-description"*/}
                {/*    >*/}
                {/*        <Box sx={{*/}
                {/*            position: 'absolute',*/}
                {/*            top: '50%',*/}
                {/*            left: '50%',*/}
                {/*            transform: 'translate(-50%, -50%)',*/}
                {/*            width: 400,*/}
                {/*            bgcolor: 'background.paper',*/}
                {/*            border: '2px solid #000',*/}
                {/*            boxShadow: 24,*/}
                {/*            p: 4,*/}
                {/*        }}>*/}
                {/*            <Typography id="modal-modal-title" variant="h6" component="h2" style={{color: '#3E6578'}}>*/}
                {/*                Add this person to watchlist?*/}
                {/*            </Typography>*/}
                {/*            <Typography id="modal-modal-description" sx={{ mt: 2 }}>*/}
                {/*                <div className={'container-fluid'}>*/}
                {/*                    <div className={'row'}>*/}
                {/*                        <div className={'col-lg-4 col-sm-4'}>*/}
                {/*                            <img id={'modalImage'} src={user1} />*/}
                {/*                        </div>*/}
                {/*                        <div className={'col-lg-8 col-sm-8'}>*/}
                {/*                            <span>John Doe</span><br/>*/}
                {/*                            <span style={{color: '#767676'}}>52 y.o. (02/19/1966)</span>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <br/>*/}
                {/*                <div className={'container-fluid'}>*/}
                {/*                    <div className={'row'}>*/}
                {/*                        <div className={'col-lg-12 col-sm-12'}>*/}
                {/*                            <textarea  className="form-control" id="modalTextarea" rows="3"></textarea>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </Typography>*/}
                {/*        </Box>*/}
                {/*    </Modal>*/}

                {/* WatchList AddModal*/}
                <AddWathListModal
                    show={modalShowAW}
                    onHide={() => setModalShowAW(false)}
                />
                {/**/}
                {/* WatchList AddModal*/}
                <RemoveWatchModal
                    show={modalShowRW}
                    onHide={() => setModalShowRW(false)}
                />
                {/**/}


            </div>
        </div>
    )
}

export default DashboardTable;
