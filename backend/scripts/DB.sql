IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'mJOB')
BEGIN
    CREATE DATABASE mJOB;
END;
GO

USE mJOB;
GO

CREATE TABLE auth (
	user_id INT IDENTITY(1,1) PRIMARY KEY,
	username VARCHAR(50) UNIQUE,
	hash CHAR(64) NOT NULL
);
GO

CREATE TABLE auth_log (
	auth_log_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	auth_action VARCHAR(16) NOT NULL, -- register, login, logout
	auth_time DATETIME NOT NULL DEFAULT GETDATE()
);
GO

CREATE TABLE session (
	session_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	session_token VARCHAR(255) NOT NULL,
	session_expiration DATETIME NOT NULL DEFAULT DATEADD(day, 1, GETDATE()),
	session_data NVARCHAR(MAX) -- NVARCHAR(MAX) data
);
GO

CREATE TABLE post (
	post_id INT IDENTITY(1,1) PRIMARY KEY,
	post_title NVARCHAR(255) NOT NULL,
	post_content NVARCHAR(MAX) NOT NULL,
	user_id INT NOT NULL FOREIGN KEY REFERENCES auth(user_id),
	post_status VARCHAR(16) NOT NULL
);
GO

CREATE TABLE comment (
	comment_id INT IDENTITY(1, 1) PRIMARY KEY,
	post_id INT NOT NULL FOREIGN KEY REFERENCES post(post_id),
	comment_content NVARCHAR(MAX),
	comment_status VARCHAR(16) NOT NULL
)

CREATE TABLE content_history (
	content_history_id INT IDENTITY(1,1) PRIMARY KEY,
	content_type BIT NOT NULL, -- 0 if Post, 1 if Comment
	content_id INT NOT NULL,
	content NVARCHAR(MAX) NOT NULL,
	content_updated_time DATETIME NOT NULL DEFAULT GETDATE()
);
GO

CREATE TABLE forum_log (
	forum_log_id INT IDENTITY(1,1) PRIMARY KEY,
	content_id INT NOT NULL,
	content_history_id INT NOT NULL FOREIGN KEY REFERENCES content_history(content_history_id),
	forum_log_type VARCHAR(16) NOT NULL, -- create, edit, delete, archive, ...
	forum_log_time DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE job (
	job_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT NOT NULL FOREIGN KEY REFERENCES auth(user_id),
	job_title NVARCHAR(MAX) NOT NULL,
	job_work_location NVARCHAR(MAX),
	job_tags VARCHAR(MAX),
	job_max_applications INT DEFAULT 0,
	job_approval_method BIT NOT NULL DEFAULT 1,
	job_description NVARCHAR(MAX) NOT NULL,
	job_contact_info NVARCHAR(MAX)
);
GO

-- Job payment type: HOURLY MONTHLY ONETIME
CREATE TABLE compensation_type (
	compensation_id INT IDENTITY(1,1) PRIMARY KEY,
	compensation_type VARCHAR(16)
);
GO

CREATE TABLE job_compensation (
	job_id INT FOREIGN KEY REFERENCES job(job_id) PRIMARY KEY,
	job_compensation_platform BIT NOT NULL DEFAULT 0,
	job_compensation_type VARCHAR(12),
	job_compensation_amount DECIMAL(10, 2),
	job_compensation_currency VARCHAR(4),
	job_compensation_period VARCHAR(8),
	job_custom_iteration VARCHAR(24),
	job_hours_per_day INT
);
GO

CREATE TABLE job_recruitment (
	job_id INT FOREIGN KEY REFERENCES job(job_id) PRIMARY KEY,
	job_recruitment_number INT NOT NULL,
	job_recruitment_deadline DATE,
	job_recruitment_status BIT NOT NULL DEFAULT 1
	-- 1: still hire; 0: done hiring
);
GO

CREATE TABLE job_log (
	job_log_id INT IDENTITY(1,1) PRIMARY KEY,
	job_id INT NOT NULL FOREIGN KEY REFERENCES job(job_id),
	job_log_type VARCHAR(16) NOT NULL, -- create, edit, delete, status
	job_log_time DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE job_requirement (
	requirement_id INT IDENTITY(1,1) PRIMARY KEY,
	job_id INT NOT NULL FOREIGN KEY REFERENCES job(job_id),
	job_requirement NVARCHAR(MAX) -- JSON
);
GO

CREATE TABLE job_application (
	job_id INT NOT NULL FOREIGN KEY REFERENCES job(job_id),
	user_id INT NOT NULL FOREIGN KEY REFERENCES auth(user_id),
	job_requirement_data NVARCHAR(MAX) -- JSON
);
GO

CREATE TABLE job_history (
	user_id INT NOT NULL FOREIGN KEY REFERENCES auth(user_id),
	job_id INT NOT NULL FOREIGN KEY REFERENCES job(job_id),
	job_status CHAR(12) NOT NULL, -- ongoing, done, pending, cancelled
	PRIMARY KEY (user_id, job_id)
);
GO

CREATE TABLE profile (
	user_id INT PRIMARY KEY FOREIGN KEY REFERENCES auth(user_id),
	user_avatar NVARCHAR(MAX), -- URL or Base64 encoded image
	user_bio NVARCHAR(256),
	user_dob DATE,
	user_address NVARCHAR(MAX),
	user_citizen_id VARCHAR(32) NOT NULL,
	user_email VARCHAR(320),
	user_phone_number VARCHAR(16)
);
GO

CREATE TABLE profile_log (
	profile_log_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	profile_log_time DATETIME DEFAULT GETDATE(),
	profile_log NVARCHAR(MAX)
);
GO

CREATE TABLE linked_profile (
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	linked_profile_url VARCHAR(MAX),
	linked_profile_type BIT NOT NULL -- 0 for social, 1 for professional
);
GO

CREATE TABLE work_xp (
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	work_job_title NVARCHAR(255) NOT NULL,
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
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	accomplishment_id INT IDENTITY(1,1) PRIMARY KEY,
	accomplishment_url VARCHAR(MAX) NOT NULL,
	accomplishment_content NVARCHAR(MAX),
	accomplishment_year INT NOT NULL
);
GO

CREATE TABLE skill (
	skill_id INT IDENTITY(1,1) PRIMARY KEY,
	skill_name NVARCHAR(100)
);
GO

CREATE TABLE user_skill (
	user_id INT NOT NULL FOREIGN KEY REFERENCES auth(user_id),
	skill_id INT NOT NULL FOREIGN KEY REFERENCES skill(skill_id),
	skill_level INT NOT NULL,
	PRIMARY KEY (user_id, skill_id)
);
GO

CREATE TABLE job_preference (
	user_id INT PRIMARY KEY FOREIGN KEY REFERENCES auth(user_id),
	job_interest NVARCHAR(MAX),
	preferred_location NVARCHAR(MAX),
	salary_expectation DECIMAL(10, 2),
	job_availability CHAR(16) -- NONE, SEEKING, WORKING
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
	user_id INT NOT NULL FOREIGN KEY REFERENCES auth(user_id),
	payment_method_id INT NOT NULL FOREIGN KEY REFERENCES payment_method(payment_method_id),
	payment_method_details VARCHAR(320) NOT NULL, -- e.g. credit card number, paypal email, etc.
	is_default BIT NOT NULL DEFAULT 0,
	PRIMARY KEY (user_id, payment_method_id)
);
GO

CREATE TABLE payment_method_log (
	log_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT NOT NULL FOREIGN KEY REFERENCES auth(user_id),
	payment_method_log_type VARCHAR(16), -- add, edit, remove
	payment_method_log_time DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE payment_history (
	tx_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT NOT NULL FOREIGN KEY REFERENCES auth(user_id),
	tx_action VARCHAR(16), -- deposit, withdraw
	tx_action_value DECIMAL(10, 2), -- sync data type with user_balance(balance)
	tx_action_target NVARCHAR(32) -- destination or source
);
GO

CREATE TABLE system_log (
	system_log_id INT IDENTITY(1,1) PRIMARY KEY,
	system_log_type VARCHAR(16), -- info, error, ...
	system_log_data NVARCHAR(MAX), 
	system_log_time DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE ticket (
	ticket_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT FOREIGN KEY REFERENCES auth(user_id),
	ticket_category VARCHAR(16) NOT NULL,
	ticket_title NVARCHAR(MAX) NOT NULL,
	ticket_content NVARCHAR(MAX) NOT NULL,
);
GO

CREATE TABLE ticket_log (
	ticket_log_id INT IDENTITY(1,1) PRIMARY KEY,
	ticket_id INT NOT NULL FOREIGN KEY REFERENCES ticket(ticket_id),
	ticket_log_type VARCHAR(16) NOT NULL,
	ticket_log_time DATETIME DEFAULT GETDATE(),
);
GO

INSERT INTO system_log (system_log_type, system_log_data)
VALUES ('INFO', 'Created database.');
GO