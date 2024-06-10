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
  process.exit(1);
});

// POST route to insert a job
router.post('/', async (req, res) => {
  const {
    title,
    workType,
    location,
    tags,
    maxApplications,
    approvalMethod,
    numberOfRecruits,
    startDate,
    endDate,
    compensationType,
    isChecked,
    amount,
    currency,
    per,
    customIteration,
    description,
    contactInfo,
    additionalRequirements
  } = req.body;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('title', sql.NVarChar, title)
      .input('work_type', sql.NVarChar, workType)
      .input('location', sql.NVarChar, location)
      .input('tags', sql.NVarChar, tags)
      .input('max_applications', sql.Int, maxApplications)
      .input('approval_method', sql.NVarChar, approvalMethod)
      .input('number_of_recruits', sql.Int, numberOfRecruits)
      .input('start_date', sql.Date, startDate)
      .input('end_date', sql.Date, endDate)
      .input('compensation_type', sql.NVarChar, compensationType)
      .input('pay_with_balance', sql.Bit, isChecked)
      .input('amount', sql.Decimal, amount)
      .input('currency', sql.NVarChar, currency)
      .input('per', sql.NVarChar, per)
      .input('custom_iteration', sql.NVarChar, customIteration)
      .input('description', sql.NVarChar, description)
      .input('contact_info', sql.NVarChar, contactInfo)
      .input('additional_requirements', sql.NVarChar, JSON.stringify(additionalRequirements))
      .query(`
        INSERT INTO jobs (
            title,
            work_type,
            location,
            tags,
            max_applications,
            approval_method,
            number_of_recruits,
            start_date,
            end_date,
            compensation_type,
            pay_with_balance,
            amount,
            currency,
            per,
            custom_iteration,
            description,
            contact_info,
            additional_requirements
        ) VALUES (
            @title, @work_type, @location, @tags, @max_applications, @approval_method, @number_of_recruits
             @start_date, @end_date, @compensation_type, @pay_with_balance, @amount, @currency, @per, @custom_iteration, @description, @contact_info, @additional_requirements
        );
      `);

    res.status(201).send({ message: 'Job successfully inserted' });
  } catch (error) {
    console.error('Error inserting job:', error);
    res.status(500).send({ error: 'An error occurred while inserting the job' });
  }
});
router.post('/update', async (req, res) => {
  const {
    id,
    title,
    workType,
    location,
    tags,
    maxApplications,
    approvalMethod,
    numberOfRecruits,
    startDate,
    endDate,
    compensationType,
    isChecked,
    amount,
    currency,
    per,
    customIteration,
    description,
    contactInfo,
    additionalRequirements
  } = req.body;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('id', sql.Int, id)
      .input('title', sql.NVarChar, title)
      .input('work_type', sql.NVarChar, workType)
      .input('location', sql.NVarChar, location)
      .input('tags', sql.NVarChar, tags)
      .input('max_applications', sql.Int, maxApplications)
      .input('approval_method', sql.NVarChar, approvalMethod)
      .input('number_of_recruits', sql.Int, numberOfRecruits)
      .input('start_date', sql.Date, startDate)
      .input('end_date', sql.Date, endDate)
      .input('compensation_type', sql.NVarChar, compensationType)
      .input('pay_with_balance', sql.Bit, isChecked)
      .input('amount', sql.Decimal, amount)
      .input('currency', sql.NVarChar, currency)
      .input('per', sql.NVarChar, per)
      .input('custom_iteration', sql.NVarChar, customIteration)
      .input('description', sql.NVarChar, description)
      .input('contact_info', sql.NVarChar, contactInfo)
      .input('additional_requirements', sql.NVarChar, JSON.stringify(additionalRequirements))
      .query(`
        UPDATE jobs SET
            title = @title,
            work_type = @work_type,
            location = @location,
            tags = @tags,
            max_applications = @max_applications,
            approval_method = @approval_method,
            number_of_recruits = @number_of_recruits,
            start_date = @start_date,
            end_date = @end_date,
            compensation_type = @compensation_type,
            pay_with_balance = @pay_with_balance,
            amount = @amount,
            currency = @currency,
            per = @per,
            custom_iteration = @custom_iteration,
            description = @description,
            contact_info = @contact_info,
            additional_requirements = @additional_requirements
        WHERE id = @id;
      `);

    res.status(200).send({ message: 'Job successfully updated' });
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).send({ error: 'An error occurred while updating the job' });
  }
});

module.exports = router;