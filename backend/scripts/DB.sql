-- Creating Users table
CREATE TABLE Users (
	user_id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50) UNIQUE,
    hash NVARCHAR(255) NOT NULL,
    user_created_date DATETIME NOT NULL DEFAULT GETDATE(),
    last_session DATETIME NULL DEFAULT GETDATE()
);

-- Creating Posts table
CREATE TABLE Posts (
    post_id INT IDENTITY(1,1) PRIMARY KEY,
    post_title NVARCHAR(255) NOT NULL,
    post_content NVARCHAR(MAX) NOT NULL,
    post_created_date DATETIME NOT NULL DEFAULT GETDATE(),
    user_id NVARCHAR(50) NOT NULL,
    post_status NVARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Creating Comments table
CREATE TABLE Comments (
    comment_id INT IDENTITY(1,1) PRIMARY KEY,
    comment_content NVARCHAR(MAX) NOT NULL,
    user_id NVARCHAR(50) NOT NULL,
    post_id INT NOT NULL,
    comment_created_date DATETIME NOT NULL DEFAULT GETDATE(),
    comment_status NVARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (post_id) REFERENCES Posts(post_id)
);

