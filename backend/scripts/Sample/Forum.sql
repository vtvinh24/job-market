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