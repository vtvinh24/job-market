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
    job_requirements
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
      .query(`
        INSERT INTO job (user_id, job_title, job_work_location, job_tags, job_max_applications, job_approval_method, job_description, job_contact_info, job_start_date, job_end_date, job_number_of_recruits, job_requirements)
        VALUES (@user_id, @job_title,  @job_work_location, @job_tags, @job_max_applications, @job_approval_method,  @job_description, @job_contact_info, @job_start_date, @job_end_date, @job_number_of_recruits, @job_requirements);
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
    job_requirements
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

  // POST route to insert job compensation
router.post('/:id/compensation', async (req, res) => {
  const {
    job_compensation_platform,
    job_compensation_type,
    job_compensation_amount,
    job_compensation_currency,
    job_compensation_period,
    job_custom_iteration,
    job_hours_per_day
  } = req.body;

  const { job_id } = req.params;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('job_id', sql.Int, job_id)
      .input('job_compensation_platform', sql.Bit, job_compensation_platform)
      .input('job_compensation_type', sql.NVarChar, job_compensation_type)
      .input('job_compensation_amount', sql.Decimal(10, 2), job_compensation_amount)
      .input('job_compensation_currency', sql.NVarChar, job_compensation_currency)
      .input('job_compensation_period', sql.NVarChar, job_compensation_period)
      .input('job_custom_iteration', sql.NVarChar, job_custom_iteration)
      .input('job_hours_per_day', sql.Int, job_hours_per_day)
      .query(`
        INSERT INTO job_compensation (job_id, job_compensation_platform, job_compensation_type, job_compensation_amount, job_compensation_currency, job_compensation_period, job_custom_iteration, job_hours_per_day)
        VALUES (@job_id, @job_compensation_platform, @job_compensation_type, @job_compensation_amount, @job_compensation_currency, @job_compensation_period, @job_custom_iteration, @job_hours_per_day);
      `);

    res.status(201).send({ message: 'Job compensation successfully inserted' });
  } catch (error) {
    console.error('Error inserting job compensation:', error);
    res.status(500).send({ error: 'An error occurred while inserting the job compensation' });
  }
});

router.put('/:id/compensation', async (req, res) => {
  const {
    job_compensation_platform,
    job_compensation_type,
    job_compensation_amount,
    job_compensation_currency,
    job_compensation_period,
    job_custom_iteration,
    job_hours_per_day
  } = req.body;

  const { job_id } = req.params;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('job_id', sql.Int, job_id)
      .input('job_compensation_platform', sql.Bit, job_compensation_platform)
      .input('job_compensation_type', sql.NVarChar, job_compensation_type)
      .input('job_compensation_amount', sql.Decimal(10, 2), job_compensation_amount)
      .input('job_compensation_currency', sql.NVarChar, job_compensation_currency)
      .input('job_compensation_period', sql.NVarChar, job_compensation_period)
      .input('job_custom_iteration', sql.NVarChar, job_custom_iteration)
      .input('job_hours_per_day', sql.Int, job_hours_per_day)
      .query(`
        UPDATE job_compensation SET
          job_compensation_platform = @job_compensation_platform,
          job_compensation_type = @job_compensation_type,
          job_compensation_amount = @job_compensation_amount,
          job_compensation_currency = @job_compensation_currency,
          job_compensation_period = @job_compensation_period,
          job_custom_iteration = @job_custom_iteration,
          job_hours_per_day = @job_hours_per_day
        WHERE job_id = @job_id;
      `);

    res.status(200).send({ message: 'Job compensation successfully updated' });
  } catch (error) {
    console.error('Error updating job compensation:', error);
    res.status(500).send({ error: 'An error occurred while updating the job compensation' });
  }
});

router.get('/:id/compensation', async (req, res) => {
  const { job_id } = req.params;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('job_id', sql.Int, job_id)
      .query('SELECT * FROM job_compensation WHERE job_id = @job_id');

    if (result.recordset.length === 0) {
      return res.status(404).send({ message: 'Job compensation not found' });
    }

    res.send(result.recordset[0]);
  } catch (error) {
    console.error('Error fetching job compensation details:', error);
    res.status(500).send({ error: 'An error occurred while fetching job compensation details' });
  }
});

router.delete('/:id/compensation', async (req, res) => {
  const { job_id } = req.params;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('job_id', sql.Int, job_id)
      .query('DELETE FROM job_compensation WHERE job_id = @job_id');

    res.status(200).send({ message: 'Job compensation successfully deleted' });
  } catch (error) {
    console.error('Error deleting job compensation:', error);
    res.status(500).send({ error: 'An error occurred while deleting the job compensation' });
  }
});

module.exports = router;