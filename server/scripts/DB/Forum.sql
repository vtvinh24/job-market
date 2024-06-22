USE mJOB;

GO
CREATE TABLE
	post (
		post_id INT IDENTITY (1, 1) PRIMARY KEY,
		post_title NVARCHAR (255) NOT NULL,
		post_content NVARCHAR (MAX) NOT NULL,
		user_id INT NOT NULL FOREIGN KEY REFERENCES auth (user_id),
		post_status VARCHAR(16) NOT NULL DEFAULT 'PUBLISHED', -- DRAFT, PUBLISHED, ARCHIVED
		post_created_time DATETIME NOT NULL DEFAULT GETDATE (),
		post_updated_time DATETIME NOT NULL DEFAULT GETDATE (),
		post_view_count INT NOT NULL DEFAULT 0
	);

GO
INSERT INTO
	system_log (system_log_type, system_log_data)
VALUES
	('INFO', 'Created table: post');

GO
CREATE TABLE
	comment (
		comment_id INT IDENTITY (1, 1) PRIMARY KEY,
		user_id INT NOT NULL FOREIGN KEY REFERENCES auth (user_id),
		post_id INT NOT NULL FOREIGN KEY REFERENCES post (post_id),
		comment NVARCHAR (MAX),
		comment_created_time DATETIME NOT NULL DEFAULT GETDATE (),
		comment_updated_time DATETIME NOT NULL DEFAULT GETDATE (),
	);

GO
INSERT INTO
	system_log (system_log_type, system_log_data)
VALUES
	('INFO', 'Created table: comment');

GO

-- ON UPDATING POST, INSERT NEW CONTENT TO THIS TABLE (ALSO INSERT AT POST CREATION)
CREATE TABLE
	post_history (
		post_history_id INT IDENTITY (1, 1) PRIMARY KEY,
		post_id INT NOT NULL,
		post_title NVARCHAR (MAX) NOT NULL,
		post_content NVARCHAR (MAX) NOT NULL,
		post_updated_time DATETIME NOT NULL DEFAULT GETDATE ()
	);

GO
INSERT INTO
	system_log (system_log_type, system_log_data)
VALUES
	('INFO', 'Created table: post_history');

GO
-- SAME RULES AS POST_HISTORY
CREATE TABLE
	comment_history (
		comment_history_id INT IDENTITY (1, 1) PRIMARY KEY,
		comment_id INT NOT NULL,
		comment NVARCHAR (MAX) NOT NULL,
		comment_updated_time DATETIME NOT NULL DEFAULT GETDATE ()
	);

GO
INSERT INTO
	system_log (system_log_type, system_log_data)
VALUES
	('INFO', 'Created table: comment_history');

GO