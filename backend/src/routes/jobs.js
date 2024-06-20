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
  }
};

// POST route to insert a job
router.post('/', async (req, res) => {
  const {
    // user_id, 
    job_title, 
    job_work_location, 
    job_tags, 
    job_max_applications, 
    job_approval_method,
    job_description, 
    job_contact_info,
    job_start_date,
    job_end_date,
    job_number_of_recruits,
    job_requirements,
    job_compensation_types,
    job_compensation_amounts ,
    job_compensation_currencies ,
    job_compensation_periods ,
    job_custom_iterations 
  } = req.body;
  const user_id = 1;
  try {
    const userExists = await checkUserIdExists(user_id);
    if (!userExists) {
      return res.status(400).send({ error: 'User ID does not exist' });
    }

    const pool = await poolPromise;
    const result = await pool.request()
    .input('user_id', sql.Int, user_id)
    .input('job_title', sql.NVarChar, job_title)
    .input('job_work_location', sql.NVarChar, job_work_location)
    .input('job_tags', sql.NVarChar, job_tags)
    .input('job_max_applications', sql.Int, job_max_applications)
    .input('job_approval_method', sql.Bit, job_approval_method)
    .input('job_description', sql.NVarChar, job_description)
    .input('job_contact_info', sql.NVarChar, job_contact_info)
    .input('job_start_date', sql.Date, job_start_date)
    .input('job_end_date', sql.Date, job_end_date)
    .input('job_number_of_recruits', sql.Int, job_number_of_recruits)
    .input('job_requirements', sql.NVarChar, job_requirements)
    .input('job_compensation_types', sql.NVarChar, job_compensation_types)
    .input('job_compensation_amounts', sql.NVarChar, job_compensation_amounts)
    .input('job_compensation_currencies', sql.NVarChar, job_compensation_currencies)
    .input('job_compensation_periods', sql.NVarChar, job_compensation_periods)
    .input('job_custom_iterations', sql.NVarChar, job_custom_iterations)
      .query(`
        INSERT INTO job (user_id, job_title, job_work_location, job_tags, job_max_applications, job_approval_method, job_description, job_contact_info, job_start_date, job_end_date, job_number_of_recruits, job_requirements, job_compensation_types, job_compensation_amounts, job_compensation_currencies, job_compensation_periods, job_custom_iterations)
        VALUES (@user_id, @job_title,  @job_work_location, @job_tags, @job_max_applications, @job_approval_method,  @job_description, @job_contact_info, @job_start_date, @job_end_date, @job_number_of_recruits, @job_requirements, @job_compensation_types, @job_compensation_amounts, @job_compensation_currencies, @job_compensation_periods, @job_custom_iterations);
      `);

    res.status(201).send({ message: 'Job successfully inserted' });
  } catch (error) {
    console.error('Error inserting job:', error);
    res.status(500).send({ error: 'An error occurred while inserting the job' });
  }
});
router.put('/update', async (req, res) => {
  const {
    // user_id, 
    job_title, 
    job_work_location, 
    job_tags, 
    job_max_applications, 
    job_approval_method,
    job_description, 
    job_contact_info,
    job_start_date,
    job_end_date,
    job_number_of_recruits,
    job_requirements,
    job_compensation_types,
    job_compensation_amounts ,
    job_compensation_currencies ,
    job_compensation_periods ,
    job_custom_iterations 
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
    .input('job_work_location', sql.NVarChar, job_work_location)
    .input('job_tags', sql.NVarChar, job_tags)
    .input('job_max_applications', sql.Int, job_max_applications)
    .input('job_approval_method', sql.Bit, job_approval_method)
    .input('job_requirement', sql.NVarChar, job_requirement)
    .input('job_description', sql.NVarChar, job_description)
    .input('job_contact_info', sql.NVarChar, job_contact_info)
    .input('job_start_date', sql.Date, job_start_date)
    .input('job_end_date', sql.Date, job_end_date)
    .input('job_number_of_recruits', sql.Int, job_number_of_recruits)
    .input('job_requirements', sql.NVarChar, job_requirements)
    .input('job_compensation_types', sql.NVarChar, job_compensation_types)
    .input('job_compensation_amounts', sql.NVarChar, job_compensation_amounts)
    .input('job_compensation_currencies', sql.NVarChar, job_compensation_currencies)
    .input('job_compensation_periods', sql.NVarChar, job_compensation_periods)
    .input('job_custom_iterations', sql.NVarChar, job_custom_iterations)
      .query(`
        UPDATE job SET
        job_title = @job_title,
        job_work_location = @job_work_location,
        job_tags = @job_tags,
        job_max_applications = @job_max_applications,
        job_approval_method = @job_approval_method,
        job_requirement = @job_requirement,
        job_description = @job_description,
        job_contact_info = @job_contact_info
        job_start_date = @job_start_date,
        job_end_date = @job_end_date,
        job_number_of_recruits = @job_number_of_recruits
        job_requirements = @job_requirements
        job_compensation_types = @job_compensation_types
        job_compensation_amounts = @job_compensation_amounts
        job_compensation_currencies = @job_compensation_currencies
        job_compensation_periods = @job_compensation_periods
        job_custom_iterations = @job_custom_iterations
        WHERE user_id = @user_id;  
      `);

    res.status(200).send({ message: 'Job successfully updated' });
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).send({ error: 'An error occurred while updating the job' });
  }
});

router.get("/:id", async (req, res) => {

  
    try {
      const { id } = req.params;
      const pool = await poolPromise;
      const result = await pool.request()
        .input('id', sql.Int, id)
        .query('SELECT * FROM job WHERE job_id = @id');
  
      if (result.recordset.length === 0) {
        return res.status(404).send({ message: 'Job not found' });
      }
  
      res.send(result.recordset[0]);
    } catch (error) {
      console.error('Error fetching job details:', error);
      res.status(500).send({ error: 'An error occurred while fetching job details' });
    }
  });
module.exports = router;