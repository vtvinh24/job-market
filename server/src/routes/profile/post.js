const db = require('../../models/DBContext');

const INSERT_PROFILE = `
INSERT INTO profile (user_id, user_avatar, user_bio, user_dob, user_address, user_citizen_id, user_email, user_phone_number, work_job_title, work_job_description, work_company, work_start_date, work_end_date, work_other_infor) 
VALUES (@user_id, @user_avatar, @user_bio, @user_dob, @user_address, @user_citizen_id, @user_email, @user_phone_number, @work_job_title, @work_job_description, @work_company, @work_start_date, @work_end_date, @work_other_inform);


`;

const profile = async (req, res) => {
  var inserted;
  try {
    const { userId, userAvatar, userBio, userDob, userAddress, userCitizenId, userEmail, userPhoneNumber, jobTitle, jobDescription, company, startDate, endDate, otherInformation } = req.body;
    const pool = await db.poolPromise;

    await pool
      .request()
      // User data
      .input("user_id", db.sql.Int, userId)
      .input("user_avatar", db.sql.NVarChar, userAvatar || null) // Ensure to handle null values
      .input("user_bio", db.sql.NVarChar, userBio || null)
      .input("user_dob", db.sql.Date, userDob)
      .input("user_address", db.sql.NVarChar, userAddress || null)
      .input("user_citizen_id", db.sql.VarChar, userCitizenId)
      .input("user_email", db.sql.VarChar, userEmail)
      .input("user_phone_number", db.sql.VarChar, userPhoneNumber)
      // Work experience data
      .input("work_job_title", db.sql.NVarChar, jobTitle || null) // Ensure to handle null values
      .input("work_job_description", db.sql.NVarChar, jobDescription || null)
      .input("work_company", db.sql.NVarChar, company || null)
      .input("work_start_date", db.sql.Date, startDate)
      .input("work_end_date", db.sql.Date, endDate || null) // end date can be null if the job is current
      .input("work_other_infor", db.sql.NVarChar, otherInformation || null)
      .query(INSERT_PROFILE);

    inserted = true;
  } catch (err) {
    console.error('Error inserting data:', err);
    inserted = false;
  }

  if (!inserted) {
    res.status(500).send('Error inserting data');
  } else {
    res.status(201).send('Data inserted successfully');
  }
};

module.exports = {
  profile
};


