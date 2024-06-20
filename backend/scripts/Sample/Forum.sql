USE mJOB;
GO

INSERT INTO post (post_title, post_content, user_id, post_status)
VALUES
('Need Help to Write CV for Software Engineer', 'Data analysts play a crucial role in helping organizations make informed business decisions by analyzing and interpreting complex data.', 1, 'PUBLISHED'),
('Hiring Waitress for Busy Restaurant', 'Software engineers design, develop, and test software programs to meet the needs of businesses and individuals.', 1, 'PUBLISHED'),
('Become a Marketing Manager and Boost Your Career', 'Marketing managers develop and implement marketing strategies to reach target audiences and drive business growth.', 2, 'PUBLISHED'),
('Nurse Practitioner Job Opportunities Available', 'Nurse practitioners provide primary and specialty healthcare services to patients, often working independently or in collaboration with physicians.', 2, 'PUBLISHED'),
('Graphic Designer Wanted for Creative Agency', 'Graphic designers create visual communications and designs to convey messages and express ideas.', 3, 'PUBLISHED'),
('Sales Representative Needed for Tech Startup', 'Sales representatives work with customers to understand their needs and provide solutions through products or services.', 3, 'PUBLISHED'),
('Web Developer Job Opening at Leading Company', 'Web developers design and build websites, applications, and other online platforms to meet the needs of businesses and individuals.', 4, 'PUBLISHED'),
('Human Resources Manager Position Available', 'Human resources managers oversee the recruitment, training, and development of employees, as well as benefits and compensation.', 5, 'PUBLISHED'),
('Financial Advisor Career Opportunities', 'Financial advisors provide guidance and advice to individuals and businesses on investment and financial planning.', 6, 'PUBLISHED'),
('Teaching Jobs Available for Passionate Educators', 'Teachers educate and inspire students, helping them to develop knowledge, skills, and values.', 7, 'PUBLISHED'),
('Customer Service Representative Wanted', 'Customer service representatives provide assistance and support to customers, resolving issues and improving customer satisfaction.', 1, 'PUBLISHED'),
('Operations Manager Job Opening at Manufacturing Company', 'Operations managers oversee the day-to-day activities of businesses, ensuring efficiency, productivity, and quality.', 2, 'PUBLISHED'),
('IT Project Manager Position Available at Tech Firm', 'IT project managers plan, coordinate, and execute technology projects, ensuring they are completed on time and within budget.', 3, 'PUBLISHED'),
('Accountant Job Opportunities in Finance Industry', 'Accountants prepare and examine financial records, ensuring accuracy and compliance with laws and regulations.', 5, 'PUBLISHED'),
('Digital Marketing Specialist Wanted for E-commerce Company', 'Digital marketing specialists develop and implement online marketing campaigns to reach target audiences and drive business growth.', 7, 'PUBLISHED'),
('Network Administrator Job Opening at IT Company', 'Network administrators install, configure, and maintain computer networks, ensuring they are secure and running smoothly.', 1, 'PUBLISHED'),
('Recruiter Position Available at Staffing Agency', 'Recruiters identify, attract, and select top talent to fill job openings, often working with hiring managers and HR teams.', 1, 'PUBLISHED'),
('UX Designer Job Opportunities in Tech Industry', 'UX designers create user-centered designs for products and services, focusing on usability, accessibility, and user experience.', 2, 'PUBLISHED'),
('Business Analyst Position Available at Consulting Firm', 'Business analysts work with stakeholders to identify business needs and develop solutions to improve operations and performance.', 5, 'PUBLISHED'),
('Cybersecurity Specialist Job Opening at Security Firm', 'Cybersecurity specialists protect computer systems and networks from cyber threats, developing and implementing security protocols.', 7, 'PUBLISHED'),
('Event Planner Wanted for Wedding Planning Company', 'Event planners coordinate and execute events, such as conferences, weddings, and parties, ensuring they are successful and memorable.', 1, 'PUBLISHED'),
('Content Writer Job Opportunities in Publishing Industry', 'Content writers create engaging and informative content for various mediums, including websites, blogs, and social media.', 3, 'PUBLISHED'),
('Database Administrator Job Opening at Data Company', 'Database administrators design, implement, and maintain databases, ensuring data is secure and easily accessible.', 2, 'PUBLISHED'),
('HR Generalist Position Available at Non-profit Organization', 'HR generalists handle a range of HR tasks, including recruitment, benefits, and employee relations.', 1, 'PUBLISHED'),
('Webmaster Job Opening at Digital Agency', 'Webmasters maintain and update websites, ensuring they are running smoothly and efficiently.', 9, 'PUBLISHED');
GO

INSERT INTO system_log (system_log_type, system_log_data)
VALUES ('INFO', 'Added samples for table: post');
GO

INSERT INTO comment (post_id, user_id, comment_content, comment_status)
VALUES
(1, 2, 'Wow, this looks great!', 'PUBLISHED'),
(1, 3, 'Damn', 'PUBLISHED'),
(2, 4, 'I am interested in this position.', 'PUBLISHED'),
(2, 5, 'Great opportunity!', 'PUBLISHED'),
(3, 6, 'I have always wanted to be a marketing manager.', 'PUBLISHED'),
(3, 7, 'This is my dream job!', 'PUBLISHED'),
(4, 8, 'I am a nurse practitioner and I love my job.', 'PUBLISHED'),
(4, 9, 'Nurse practitioners are amazing!', 'PUBLISHED'),
(5, 10, 'I am a graphic designer and I am interested in this position.', 'PUBLISHED'),
(5, 1, 'I love graphic design!', 'PUBLISHED'),
(6, 2, 'I am a sales representative and I am excited about this opportunity.', 'PUBLISHED'),
(6, 3, 'Sales is my passion!', 'PUBLISHED'),
(7, 4, 'I am a web developer and I am interested in this job.', 'PUBLISHED'),
(7, 5, 'Web development is my passion!', 'PUBLISHED'),
(8, 6, 'I am a human resources manager and I am looking for a new opportunity.', 'PUBLISHED'),
(8, 7, 'HR is my calling!', 'PUBLISHED'),
(9, 8, 'I am a financial advisor and I am interested in this position.', 'PUBLISHED'),
(9, 9, 'Finance is my expertise!', 'PUBLISHED'),
(10, 10, 'I am a teacher and I am passionate about education.', 'PUBLISHED'),
(10, 1, 'Teaching is my life!', 'PUBLISHED'),
(11, 2, 'I am a customer service representative and I am interested in this job.', 'PUBLISHED'),
(11, 3, 'Customer service is my specialty!', 'PUBLISHED'),
(12, 4, 'I am an operations manager and I am excited about this opportunity.', 'PUBLISHED'),
(12, 5, 'Operations is my forte!', 'PUBLISHED'),
(13, 6, 'I am an IT project manager and I am looking for a new challenge.', 'PUBLISHED'),
(13, 7, 'IT projects are my passion!', 'PUBLISHED');
GO

INSERT INTO system_log (system_log_type, system_log_data)
VALUES ('INFO', 'Added samples for table: comment');
GO

INSERT INTO content_history (content_type, content_id, content, content_updated_time)
VALUES
(0, 1, 'Data analysts play a crucial role in helping organizations make informed business decisions by analyzing and interpreting complex data.', GETDATE()),
(0, 2, 'Software engineers design, develop, and test software programs to meet the needs of businesses and individuals.', GETDATE()),
(0, 3, 'Marketing managers develop and implement marketing strategies to reach target audiences and drive business growth.', GETDATE()),
(0, 4, 'Nurse practitioners provide primary and specialty healthcare services to patients, often working independently or in collaboration with physicians.', GETDATE()),
(0, 5, 'Graphic designers create visual communications and designs to convey messages and express ideas.', GETDATE()),
(0, 6, 'Sales representatives work with customers to understand their needs and provide solutions through products or services.', GETDATE()),
(0, 7, 'Web developers design and build websites, applications, and other online platforms to meet the needs of businesses and individuals.', GETDATE()),
(0, 8, 'Human resources managers oversee the recruitment, training, and development of employees, as well as benefits and compensation.', GETDATE()),
(0, 9, 'Financial advisors provide guidance and advice to individuals and businesses on investment and financial planning.', GETDATE()),
(0, 10, 'Teachers educate and inspire students, helping them to develop knowledge, skills, and values.', GETDATE()),
(0, 11, 'Customer service representatives provide assistance and support to customers, resolving issues and improving customer satisfaction.', GETDATE()),
(0, 12, 'Operations managers oversee the day-to-day activities of businesses, ensuring efficiency, productivity, and quality.', GETDATE()),
(0, 13, 'IT project managers plan, coordinate, and execute technology projects, ensuring they are completed on time and within budget.', GETDATE()),
(0, 14, 'Accountants prepare and examine financial records, ensuring accuracy and compliance with laws and regulations.', GETDATE()),
(0, 15, 'Digital marketing specialists develop and implement online marketing campaigns to reach target audiences and drive business growth.', GETDATE()),
(0, 16, 'Network administrators install, configure, and maintain computer networks, ensuring they are secure and running smoothly.', GETDATE()),
(0, 17, 'Recruiters identify, attract, and select top talent to fill job openings, often working with hiring managers and HR teams.', GETDATE()),
(0, 18, 'UX designers create user-centered designs for products and services, focusing on usability, accessibility, and user experience.', GETDATE()),
(0, 19, 'Business analysts work with stakeholders to identify business needs and develop solutions to improve operations and performance.', GETDATE()),
(0, 20, 'Cybersecurity specialists protect computer systems and networks from cyber threats, developing and implementing security protocols.', GETDATE()),
(0, 21, 'Event planners coordinate and execute events, such as conferences, weddings, and parties, ensuring they are successful and memorable.', GETDATE()),
(0, 22, 'Content writers create engaging and informative content for various mediums, including websites, blogs, and social media.', GETDATE()),
(0, 23, 'Database administrators design, implement, and maintain databases, ensuring data is secure and easily accessible.', GETDATE()),
(0, 24, 'HR generalists handle a range of HR tasks, including recruitment, benefits, and employee relations.', GETDATE()),
(0, 25, 'Webmasters maintain and update websites, ensuring they are running smoothly and efficiently.', GETDATE()),
(1, 1, 'Wow, this looks great!', GETDATE()),
(1, 2, 'Damn', GETDATE()),
(1, 3, 'I am interested in this position.', GETDATE()),
(1, 4, 'Great opportunity!', GETDATE()),
(1, 5, 'I have always wanted to be a marketing manager.', GETDATE()),
(1, 6, 'This is my dream job!', GETDATE()),
(1, 7, 'I am a nurse practitioner and I love my job.', GETDATE()),
(1, 8, 'Nurse practitioners are amazing!', GETDATE()),
(1, 9, 'I am a graphic designer and I am interested in this position.', GETDATE()),
(1, 10, 'I love graphic design!', GETDATE()),
(1, 11, 'I am a sales representative and I am excited about this opportunity.', GETDATE()),
(1, 12, 'Sales is my passion!', GETDATE()),
(1, 13, 'I am a web developer and I am interested in this job.', GETDATE()),
(1, 14, 'Web development is my passion!', GETDATE()),
(1, 15, 'I am a human resources manager and I am looking for a new opportunity.', GETDATE()),
(1, 16, 'HR is my calling!', GETDATE()),
(1, 17, 'I am a financial advisor and I am interested in this position.', GETDATE()),
(1, 18, 'Finance is my expertise!', GETDATE()),
(1, 19, 'I am a teacher and I am passionate about education.', GETDATE()),
(1, 20, 'Teaching is my life!', GETDATE()),
(1, 21, 'I am a customer service representative and I am interested in this job.', GETDATE()),
(1, 22, 'Customer service is my specialty!', GETDATE()),
(1, 23, 'I am an operations manager and I am excited about this opportunity.', GETDATE()),
(1, 24, 'Operations is my forte!', GETDATE()),
(1, 25, 'I am an IT project manager and I am looking for a new challenge.', GETDATE()),
(1, 26, 'IT projects are my passion!', GETDATE());
GO

INSERT INTO system_log (system_log_type, system_log_data)
VALUES ('INFO', 'Added samples for table: content_history');
GO

INSERT INTO forum_log (content_type, content_id, content_history_id, forum_log_type)
VALUES
(0, 1, 1, 'create'),
(0, 2, 2, 'create'),
(0, 3, 3, 'create'),
(0, 4, 4, 'create'),
(0, 5, 5, 'create'),
(0, 6, 6, 'create'),
(0, 7, 7, 'create'),
(0, 8, 8, 'create'),
(0, 9, 9, 'create'),
(0, 10, 10, 'create'),
(0, 11, 11, 'create'),
(0, 12, 12, 'create'),
(0, 13, 13, 'create'),
(0, 14, 14, 'create'),
(0, 15, 15, 'create'),
(0, 16, 16, 'create'),
(0, 17, 17, 'create'),
(0, 18, 18, 'create'),
(0, 19, 19, 'create'),
(0, 20, 20, 'create'),
(0, 21, 21, 'create'),
(0, 22, 22, 'create'),
(0, 23, 23, 'create'),
(0, 24, 24, 'create'),
(0, 25, 25, 'create'),
(1, 1, 26, 'create'),
(1, 2, 27, 'create'),
(1, 3, 28, 'create'),
(1, 4, 29, 'create'),
(1, 5, 30, 'create'),
(1, 6, 31, 'create'),
(1, 7, 32, 'create'),
(1, 8, 33, 'create'),
(1, 9, 34, 'create'),
(1, 10, 35, 'create'),
(1, 11, 36, 'create'),
(1, 12, 37, 'create'),
(1, 13, 38, 'create'),
(1, 14, 39, 'create'),
(1, 15, 40, 'create'),
(1, 16, 41, 'create'),
(1, 17, 42, 'create'),
(1, 18, 43, 'create'),
(1, 19, 44, 'create'),
(1, 20, 45, 'create'),
(1, 21, 46, 'create'),
(1, 22, 47, 'create'),
(1, 23, 48, 'create'),
(1, 24, 49, 'create'),
(1, 25, 50, 'create'),
(1, 26, 51, 'create');
GO

INSERT INTO system_log (system_log_type, system_log_data)
VALUES ('INFO', 'Added samples for table: forum_log');
GO