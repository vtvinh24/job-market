USE mJOB;
GO

-- Add 10 random users
INSERT INTO auth (username, hash)
VALUES 
('andz1207', 'a6f63a5fb10b3bba180a79f2fc565b1db2101040ce71ea80692d671857fe2117'),
-- andz1207 | passWord
('DeNhatQuocSu', 'ea6cecea0bafcc1b93a80230e42cde46710c4212787453beced211ebbd342326'),
-- passWord2
('trannam29', '97b9f0055e1e2ddde718eb79d5ba18c2cc4af174c29ff2a49869dfce4b334342'),
-- passWord3
('__OwO__', '4cde37e3789f19ed189b1f81f8cd36ba8420ebe505d79ebc9803ae579073de7a'),
-- passWord4
('TheRealAdmin', 'b912027fd35321538ec00c1a3e7a1d7e565d9a05af17697179f3ebff238fb581'),
-- passWord5
('admin01', 'b20e740845579ac8b50edb08f61dea0f0a573f3f5f2a3d6337c824193a59627f'),
-- passWord6
('he250178', 'd12d9f42c6caf07537a1fb0c43ccab990f4883d73d05c7612de9bb93d8e33f3f'),
-- passWord7
('hoang_tuna', '3f36c04a18c1d77e273404ca9ccfbeb508611cecc514ac0961b46f0fb28d2bf1'),
-- passWord8
('NguyenKhanh', '6e038144402f05839a8e2491ee89a455bed0acec6379a622a6b0ad3c2c4e1108'),
-- passWord9
('TrumBacKi', 'a70cc00b99169c648c41762aa456f89099eb7236dfb8cf6b5c1f57c946b19d5d');
-- passWord10
GO

INSERT INTO auth_log (user_id, auth_action, auth_time)
VALUES
(1, 'REGISTER', '20190618 11:34:09 AM'),
(2, 'REGISTER', '20170317 09:34:09 AM'),
(3, 'REGISTER', '20150715 02:34:09 PM'),
(4, 'REGISTER', '20110811 04:34:09 PM'),
(5, 'REGISTER', '20080922 06:34:09 PM'),
(6, 'REGISTER', '20201127 07:34:09 PM'),
(7, 'REGISTER', '20221231 10:34:09 PM'),
(8, 'REGISTER', '20210218 05:34:09 PM'),
(9, 'REGISTER', '20230115 06:34:09 AM'),
(10, 'REGISTER', '20190911 09:34:09 AM'),
(1, 'LOGIN', '20190618 11:39:09 AM'),
(2, 'LOGIN', '20170317 09:39:09 AM'),
(3, 'LOGIN', '20150715 02:44:09 PM'),
(4, 'LOGIN', '20110811 04:44:09 PM'),
(5, 'LOGIN', '20080922 06:54:09 PM'),
(6, 'LOGIN', '20201127 07:44:09 PM'),
(7, 'LOGIN', '20221231 10:54:09 PM'),
(8, 'LOGIN', '20210218 05:44:09 PM'),
(9, 'LOGIN', '20230115 06:44:09 AM'),
(10, 'LOGIN', '20190911 09:54:09 AM'),
(1, 'LOGOUT', '20190618 11:42:09 AM'),
(2, 'LOGOUT', '20170317 09:49:09 AM'),
(3, 'LOGOUT', '20150715 02:54:09 PM'),
(4, 'LOGOUT', '20110811 04:54:09 PM'),
(5, 'LOGOUT', '20080922 07:54:09 PM'),
(6, 'LOGOUT', '20201127 08:44:09 PM'),
(7, 'LOGOUT', '20221231 11:54:09 PM'),
(8, 'LOGOUT', '20210218 06:44:09 PM'),
(9, 'LOGOUT', '20230115 08:44:09 AM'),
(10, 'LOGOUT', '20190911 11:54:09 AM');
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

INSERT INTO job(user_id, job_title, job_work_type, job_work_location, job_tags, job_max_applications, job_approval_method, job_description, job_contact_info)
VALUES
-- job_work_type: 0 = office, 1 = remote
-- method: 0 = auto, 1 = manual
(1, 'Phiên dịch', 1, 'Online', 'abstudio studio online english translate commission', 3, 0, 'AB Studio cần tuyển 3 bạn phiên dịch tài liệu sang tiếng Anh, không dịch máy.', 'nguyenan1999@abstudio.vn hoặc 0357924816'),
(1, 'Người mẫu', 0, 'AB Studio, số 123, 69 Luis St., Quận XX, Hà Nội', 'model fashion abstudio studio office', 1, 1, 'AB Studio tuyển 1 người mẫu ảnh nữ.', 'nguyenan1999@abstudio.vn hoặc 0357924816'),
(2, 'Nhà quảng cáo', 1, 'Online', 'marketing DeNhatQuocSu advertisement', 1, 1, 'Đệ Nhất Quốc Sư tuyển gấp 1 nhà quảng cáo.', 'tigertran@xmail.com')
GO