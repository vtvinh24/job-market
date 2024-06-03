import React from 'react';
import '../../assets/css/EnlistJob.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const EnlistJob = () => {
  return (
    <div className="job-form-container">
      <button className="back-button">Back</button>
      <h1 className='header1'>Enlist a Job</h1>
      <form className="job-form">
        <div className="section">
          <h2 className='header2'>General Information</h2>
          <label>
            Job's Title:
            <input type="text" className="title" required />
          </label>
          <div>
          <label>
            Location:
            <input type="text" name="location" />
          </label>
          <label>
            Work type:
            <select className="workType">
              <option value="VND">VND</option>
              <option value="USD">USD</option>
              {/* Add more currencies as needed */}
            </select>
          </label>
          </div>
          <label>
            Tags:
            <input type="text" name="tags" placeholder="#online #it #ketoan ..." />
          </label>
        </div>
        
        <div className="section">
          <h2 className='header2'>Recruitment Settings</h2>
          <label>
            Max applications:
            <input type="number" name="maxApplications" />
          </label>
          <label>
            Approval method:
            <input type="text" name="approvalMethod" />
          </label>
          <label>
            Number of recruits:
            <input type="number" name="numberOfRecruits" />
          </label>
          <div>
          <label>
            Start date:
            <input type="date" name="startDate" />
          </label>
          <label>
            End date:
            <input type="date" name="endDate" />
          </label>
          </div>
        </div>
        
        <div className="section">
          <h2 className='header2'>Requirements</h2>
          <label>
            Document: CV
            <input type="checkbox" name="documentCV" />
          </label>
        </div>
        
        <div className="section">
          <h2 className='header2'>Compensation</h2>
          <label>
            Compensation Type:
            <input type="text" className="compensationType" />
            <label className="payWithBalance">
            Pay with mJOB balance:
            <input type="checkbox" name="payWithBalance" />
          </label>
          </label>
          <div>
          <label>
            Amount:
            <input type="number" name="amount" />
            <select className="currency">
              <option value="VND">VND</option>
              <option value="USD">USD</option>
              {/* Add more currencies as needed */}
            </select>
            per:
            <select className="currency">
              <option value="month">month</option>
              <option value="week">week</option>
              {/* Add more periods as needed */}
            </select>
            <input type="text" className="customIteration" placeholder="custom iteration/hours per day" />
          </label>
          
          </div>
        </div>
        
        <div className="section">
          <h2 className='header2'>Additional Information</h2>
          <label>
            Description:
            <div>
            <textarea className="description"  placeholder='Enter Description'required></textarea>
            </div>
          </label>
        </div>
        
        <div className="section">
          <label>
            Contact Info:
            <input type="text" className="contactInfo" required />
          </label>
        </div>
        
        <button type="submit" className="enlist-button">Enlist</button>
      </form>
    </div>
  );
}

export default EnlistJob;