IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'mJOB')
BEGIN
    CREATE DATABASE mJOB;
END;
GO

USE mJOB;
GO

CREATE TABLE auth (
	user_id INT IDENTITY(1,1) PRIMARY KEY,
	username NVARCHAR(50) UNIQUE,
	hash NVARCHAR(255) NOT NULL,
	user_created_date DATETIME NOT NULL DEFAULT GETDATE(),
	last_session DATETIME NULL DEFAULT GETDATE()
);
GO

CREATE TABLE auth_log (
	log_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	auth_action VARCHAR(16) NOT NULL, -- register, login, logout
	auth_time DATETIME NOT NULL DEFAULT GETDATE()
);
GO

CREATE TABLE session (
	session_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	session_token NVARCHAR(255) NOT NULL,
	session_expiration DATETIME NOT NULL DEFAULT DATEADD(day, 1, GETDATE()),
	session_data NVARCHAR(MAX) NULL -- JSON data
);
GO

CREATE TABLE post (
	post_id INT IDENTITY(1,1) PRIMARY KEY,
	post_is_original BIT, -- true if the post is Original Post
	post_title NVARCHAR(255) NOT NULL,
	post_content NVARCHAR(MAX) NOT NULL,
	post_created_date DATETIME NOT NULL DEFAULT GETDATE(),
	user_id INT NOT NULL FOREIGN KEY REFERENCES auth(user_id),
	post_status NVARCHAR(50) NOT NULL
);
GO

CREATE TABLE post_log (
	log_id INT IDENTITY(1,1) PRIMARY KEY,
	post_id INT FOREIGN KEY REFERENCES post(post_id),
	post_action VARCHAR(16) NOT NULL, -- create, edit, delete, archive, ...
	post_action_time DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE post_history (
	history_id INT IDENTITY(1,1) PRIMARY KEY,
	post_id INT FOREIGN KEY REFERENCES post(post_id),
	post_content NVARCHAR(MAX) NOT NULL,
	post_updated_time DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE job (
	job_id INT IDENTITY(1,1) PRIMARY KEY,
	job_creator INT NOT NULL FOREIGN KEY REFERENCES auth(user_id),
	job_created_time DATETIME NOT NULL DEFAULT GETDATE(),
	job_title NVARCHAR(MAX) NOT NULL,
	job_work_type BIT NOT NULL,
	job_work_location NVARCHAR(MAX),
	job_tags VARCHAR(MAX),
	job_max_applications INT DEFAULT 0,
	job_approval_method BIT NOT NULL DEFAULT 1,
	job_recruits_number INT NOT NULL,
	job_recruits_start_date DATE DEFAULT GETDATE(),
	job_recruits_end_date DATE,
	job_recruitment_status BIT NOT NULL DEFAULT 1,
	job_compensation_platform BIT NOT NULL DEFAULT 0,
	job_compensation_type CHAR(12) NOT NULL,
	job_compensation_amount DECIMAL(10, 2),
	job_compensation_currency CHAR(4),
	job_compensation_period CHAR(6),
	job_custom_iteration CHAR(24),
	job_hours_per_day INT,
	job_description NVARCHAR(MAX) NOT NULL,
	job_contact_info NVARCHAR(MAX) NOT NULL
);
GO

CREATE TABLE job_log (
	log_id INT IDENTITY(1,1) PRIMARY KEY,
	job_id INT FOREIGN KEY REFERENCES job(job_id),
	job_action VARCHAR(16) NOT NULL, -- create, edit, delete, status
	job_action_time DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE job_requirement (
	requirement_id INT IDENTITY(1,1) PRIMARY KEY,
	job_id INT NOT NULL FOREIGN KEY REFERENCES job(job_id),
	requirement_type CHAR(32) NOT NULL,
	requirement_content NVARCHAR(MAX)
);
GO

CREATE TABLE job_history (
	history_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	job_id INT NOT NULL FOREIGN KEY REFERENCES job(job_id),
	job_status CHAR(12) NOT NULL -- ongoing, done, pending, cancelled
);
GO

CREATE TABLE profile (
	user_id INT PRIMARY KEY FOREIGN KEY REFERENCES auth(user_id),
	user_avatar NVARCHAR(MAX), -- URL or Base64 encoded image
	user_bio NVARCHAR(256),
	user_dob DATE,
	user_address NVARCHAR(MAX),
	user_citizen_id NVARCHAR(32),
	user_email NVARCHAR(320),
	user_phone_number NVARCHAR(16)
);
GO

CREATE TABLE profile_log (
	log_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	profile_action_time DATETIME DEFAULT GETDATE(),
	profile_action NVARCHAR(MAX) -- JSON storing old and new version of profile data
);
GO

CREATE TABLE linked_profile (
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	linked_profile_id INT IDENTITY(1,1) PRIMARY KEY,
	linked_profile_url NVARCHAR(MAX),
	linked_profile_type BIT -- 0 for social, 1 for professional
);
GO

CREATE TABLE work_xp (
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	work_id INT IDENTITY(1,1) PRIMARY KEY,
	work_job_title NVARCHAR(255),
	work_job_description NVARCHAR(MAX),
	work_company NVARCHAR(255),
	work_start_date DATE,
	work_end_date DATE,
	work_other_info NVARCHAR(MAX)
);
GO

CREATE TABLE title (
	title_id INT IDENTITY(1,1) PRIMARY KEY,
	title NVARCHAR(50)
);
GO

CREATE TABLE user_title (
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	title_id INT FOREIGN KEY REFERENCES title(title_id),
	PRIMARY KEY (user_id, title_id)
);
GO


CREATE TABLE accomplishment (
	accomplishment_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	accomplishment_url NVARCHAR(MAX),
	accomplishment_location NVARCHAR(MAX),
	accomplishment_year INT,
	accomplishment_description NVARCHAR(MAX)
);
GO

CREATE TABLE skill (
	skill_id INT IDENTITY(1,1) PRIMARY KEY,
	skill_name NVARCHAR(100)
);
GO

CREATE TABLE user_skill (
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	skill_id INT FOREIGN KEY REFERENCES skill(skill_id),
	skill_level INT,
	PRIMARY KEY (user_id, skill_id)
);
GO

CREATE TABLE job_preference (
	user_id INT PRIMARY KEY FOREIGN KEY REFERENCES auth(user_id),
	job_interest NVARCHAR(MAX),
	preferred_location NVARCHAR(MAX),
	salary_expectation DECIMAL(10, 2),
	availability CHAR(16) -- NONE, SEEKING, WORKING
);
GO

CREATE TABLE user_balance (
	user_id INT PRIMARY KEY FOREIGN KEY REFERENCES auth(user_id),
	balance DECIMAL(10, 2)
);
GO

CREATE TABLE payment_method (
	payment_method_id INT IDENTITY(1,1) PRIMARY KEY,
	payment_method_name VARCHAR(50) NOT NULL,
	payment_method_type VARCHAR(20) NOT NULL -- e.g. credit_card, paypal, etc.
);
GO

CREATE TABLE user_payment_method (
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	payment_method_id INT FOREIGN KEY REFERENCES payment_method(payment_method_id),
	payment_method_details NVARCHAR(200) NOT NULL, -- e.g. credit card number, paypal email, etc.
	is_default BIT NOT NULL DEFAULT 0,
	PRIMARY KEY (user_id, payment_method_id)
);
GO

CREATE TABLE payment_method_log (
	log_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	payment_method_action VARCHAR(16), -- add, edit, remove
	payment_method_action_time DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE payment_history (
	tx_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	tx_action VARCHAR(8), -- deposit, withdraw
	tx_action_value DECIMAL(10, 2), -- sync data type with user_balance(balance)
	tx_action_target NVARCHAR(32) -- destination or source
);
GO

CREATE TABLE system_log (
	system_log_id INT IDENTITY(1,1) PRIMARY KEY,
	system_log_type VARCHAR(8), -- info, error, ...
	system_log_data NVARCHAR(MAX), -- detail
	system_log_time DATETIME DEFAULT GETDATE()
);
GO

INSERT INTO system_log (system_log_type, system_log_data)
VALUES ('INFO', 'Created database.');
GO