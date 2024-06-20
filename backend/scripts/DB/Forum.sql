USE mJOB;
GO

CREATE TABLE post (
	post_id INT IDENTITY(1,1) PRIMARY KEY,
	post_title NVARCHAR(255) NOT NULL,
	post_content NVARCHAR(MAX) NOT NULL,
	user_id INT NOT NULL FOREIGN KEY REFERENCES auth(user_id),
	post_status VARCHAR(16) NOT NULL
);
GO

INSERT INTO system_log (system_log_type, system_log_data)
VALUES ('INFO', 'Created table: post');
GO

CREATE TABLE comment (
	comment_id INT IDENTITY(1, 1) PRIMARY KEY,
	post_id INT NOT NULL FOREIGN KEY REFERENCES post(post_id),
	comment_content NVARCHAR(MAX),
	comment_status VARCHAR(16) NOT NULL
)

INSERT INTO system_log (system_log_type, system_log_data)
VALUES ('INFO', 'Created table: comment');
GO

CREATE TABLE content_history (
	content_history_id INT IDENTITY(1,1) PRIMARY KEY,
	content_type BIT NOT NULL, -- 0 if Post, 1 if Comment
	content_id INT NOT NULL,
	content NVARCHAR(MAX) NOT NULL,
	content_updated_time DATETIME NOT NULL DEFAULT GETDATE()
);
GO

INSERT INTO system_log (system_log_type, system_log_data)
VALUES ('INFO', 'Created table: content_history');
GO

CREATE TABLE forum_log (
	forum_log_id INT IDENTITY(1,1) PRIMARY KEY,
	content_id INT NOT NULL,
	content_history_id INT NOT NULL FOREIGN KEY REFERENCES content_history(content_history_id),
	forum_log_type VARCHAR(16) NOT NULL, -- create, edit, delete, archive, ...
	forum_log_time DATETIME DEFAULT GETDATE()
);
GO

INSERT INTO system_log (system_log_type, system_log_data)
VALUES ('INFO', 'Created table: forum_log');
GO