const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbConfig = require('../../config/db.json');

// SQL Server connection pool
const poolPromise = new sql.ConnectionPool(dbConfig).connect().then(pool => {
  console.log('Connected to SQL Server');
  return pool;
}).catch(err => {
  console.error('Database Connection Failed!', err);
});

const checkUserIdExists = async (user_id) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('user_id', sql.Int, user_id)
      .query('SELECT COUNT(*) as count FROM auth WHERE user_id = @user_id');
    
    return result.recordset[0].count > 0;
  } catch (error) {
    console.error('Error checking user_id:', error);
    throw error;
  }
};
// POST route to insert a job
router.post('/', async (req, res) => {
  const {
    user_id, 
    job_title, 
    job_work_type, 
    job_work_location, 
    job_tags, 
    job_max_applications, 
    job_approval_method,
    job_requirement,
    job_description, 
    job_contact_info
   
  } = req.body;

  try {
    const userExists = await checkUserIdExists(user_id);
    if (!userExists) {
      return res.status(400).send({ error: 'User ID does not exist' });
    }

    const pool = await poolPromise;
    const result = await pool.request()
    .input('user_id', sql.Int, user_id)
    .input('job_title', sql.NVarChar, job_title)
    .input('job_work_type', sql.Bit, job_work_type)
    .input('job_work_location', sql.NVarChar, job_work_location)
    .input('job_tags', sql.NVarChar, job_tags)
    .input('job_max_applications', sql.Int, job_max_applications)
    .input('job_approval_method', sql.Bit, job_approval_method)
    .input('job_requirement', sql.NVarChar, job_requirement)
    .input('job_description', sql.NVarChar, job_description)
    .input('job_contact_info', sql.NVarChar, job_contact_info)
    .query(`
      INSERT INTO job (user_id, job_title, job_work_type, job_work_location, job_tags, job_max_applications, job_approval_method, job_requirement, job_description, job_contact_info)
      VALUES (@user_id, @job_title, @job_work_type, @job_work_location, @job_tags, @job_max_applications, @job_approval_method, @job_requirement, @job_description, @job_contact_info);
    `)

    res.status(201).send({ message: 'Job successfully inserted' });
  } catch (error) {
    console.error('Error inserting job:', error);
    res.status(500).send({ error: 'An error occurred while inserting the job' });
  }
});
router.post('/update', async (req, res) => {
  const {
    user_id, 
    job_title, 
    job_work_type, 
    job_work_location, 
    job_tags, 
    job_max_applications, 
    job_approval_method,
    job_description, 
    job_contact_info
  } = req.body;

  try {
    const userExists = await checkUserIdExists(user_id);
    if (!userExists) {
      return res.status(400).send({ error: 'User ID does not exist' });
    }

    const pool = await poolPromise;
    const result = await pool.request()
    .input('user_id', sql.Int, user_id)
    .input('job_title', sql.NVarChar, job_title)
    .input('job_work_type', sql.Bit, job_work_type)
    .input('job_work_location', sql.NVarChar, job_work_location)
    .input('job_tags', sql.NVarChar, job_tags)
    .input('job_max_applications', sql.Int, job_max_applications)
    .input('job_approval_method', sql.Bit, job_approval_method)
    .input('job_requirement', sql.NVarChar, job_requirement)
    .input('job_description', sql.NVarChar, job_description)
    .input('job_contact_info', sql.NVarChar, job_contact_info)
      .query(`
        UPDATE job SET
        job_title = @job_title,
        job_work_type = @job_work_type,
        job_work_location = @job_work_location,
        job_tags = @job_tags,
        job_max_applications = @job_max_applications,
        job_approval_method = @job_approval_method,
        job_requirement = @job_requirement,
        job_description = @job_description,
        job_contact_info = @job_contact_info
        WHERE user_id = @user_id;  
      `);

    res.status(200).send({ message: 'Job successfully updated' });
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).send({ error: 'An error occurred while updating the job' });
  }
});

module.exports = router;