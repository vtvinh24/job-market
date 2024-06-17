//dashboard

//jobs list

import React from 'react';
import '../../assets/css/JobDashboard.css';
import {Row,Col} from 'react-bootstrap';
import SideBar from '../../components/job/SideBar';
import Dashboard from '../../components/job/DashBoard';

const MyJobs = () => {
    return (
        <>
       <div className="div">
        <div className="div-2">
          {/* <div className="column">
            <div className="div-3">
              <div className="div-4">
                <div className="div-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1126459f2943e66ef02fb2b69aef364aa14297ec6d3a8d5c3351d9b168c4281f?"
                    className="img"
                  />
                  <div className="div-6">
                    Back
                    <br />
                  </div>
                </div>
                <div className="div-7" />
                <div className="div-8">
                  Username
                  <br />
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/288a79d5c98818a1ae53fc63b183ae2bd95120d772f6be789ae928d1397f2462?"
                className="img-2"
              />
              <div className="div-9">
                <div className="div-10">Dashboard</div>
                <div className="div-11">Job History</div>
                <div className="div-12">Job Applied</div>
                <div className="div-13">Job Completed</div>
              </div>
            </div>
          </div> */}
          <SideBar/>
          <div className="column-2">
            {/* <div className="div-14">
              <div className="div-15">
                <div className="div-16">Dashboard</div>
                <div className="div-17">Create Job</div>
              </div>
              <div className="div-18">
                <div className="div-19">
                  <div className="column-3">
                    <div className="div-20">
                      <div className="div-21">
                        253
                        <br />
                      </div>
                      <div className="div-22">Completed Jobs</div>
                    </div>
                  </div>
                  <div className="column-4">
                    <div className="div-23">
                      <div className="div-24">
                        3<br />
                      </div>
                      <div className="div-25">Current Apply Job</div>
                    </div>
                  </div>
                  <div className="column-5">
                    <div className="div-26">
                      <div className="div-27">7</div>
                      <div className="div-28">Jobs Posted</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-29">Job Applied</div>
              <div className="div-30" />
              <div className="div-31">Job Completed</div>
              <div className="div-32" />
            </div> */}
            <Dashboard/>
          </div>
        </div>
      </div>
        </>
      );
    };
    

export default MyJobs;