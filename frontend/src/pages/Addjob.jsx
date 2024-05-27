import React, { useState } from 'react';

const Addjob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Job Submitted:', { jobTitle, company,address, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      

        
      <div>
        <h1>Add Job</h1>
      </div>
      <div>
        <label>Job's name:</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div><br></br>
      <div>
        <label>Company:</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div><br></br>
      <div>
      <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div><br></br>
      <div>
        <label>Skills:</label>

      </div><br></br>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Job</button>
    </form>
  );
};

export default Addjob;