<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Homepage - Job Market</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .header {
            background-color: #333;
            color: white;
            padding: 10px 0;
            text-align: center;
        }
        .navbar {
            display: flex;
            justify-content: space-around;
            background-color: #444;
            padding: 10px 0;
        }
        .navbar a {
            color: white;
            text-decoration: none;
            padding: 8px 16px;
        }
        .navbar a:hover {
            background-color: #555;
        }
        .container {
            display: flex;
            padding: 20px;
        }
        .sidebar {
            width: 20%;
            background-color: #333;
            color: white;
            padding: 20px;
        }
        .content {
            width: 80%;
            padding: 20px;
        }
        .card {
            background-color: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .card h3 {
            margin-top: 0;
        }
        .stats {
            display: flex;
            justify-content: space-between;
        }
        .stats .stat {
            width: 30%;
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
        }
        .recent-activities, .recent-jobs {
            margin-top: 20px;
        }
        .activity, .job {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Admin Dashboard - Job Market</h1>
    </div>
    <div class="navbar">
        <a href="#dashboard">Dashboard</a>
        <a href="#jobs">Jobs</a>
        <a href="#users">Users</a>
        <a href="#settings">Settings</a>
        <a href="#logout">Logout</a>
    </div>
    <div class="container">
        <div class="sidebar">
            <h2>Navigation</h2>
            <a href="#dashboard">Dashboard</a><br>
            <a href="#jobs">Jobs</a><br>
            <a href="#users">Users</a><br>
            <a href="#settings">Settings</a><br>
            <a href="#logout">Logout</a>
        </div>
        <div class="content">
            <div class="stats">
                <div class="stat">
                    <h2>120</h2>
                    <p>Total Jobs</p>
                </div>
                <div class="stat">
                    <h2>80</h2>
                    <p>Active Users</p>
                </div>
                <div class="stat">
                    <h2>15</h2>
                    <p>New Applications</p>
                </div>
            </div>
            <div class="card recent-jobs">
                <h3>Recent Job Postings</h3>
                <div class="job">
                    <span>Software Engineer</span>
                    <span>2 days ago</span>
                </div>
                <div class="job">
                    <span>Product Manager</span>
                    <span>3 days ago</span>
                </div>
                <div class="job">
                    <span>Data Analyst</span>
                    <span>4 days ago</span>
                </div>
            </div>
            <div class="card recent-activities">
                <h3>Recent Activities</h3>
                <div class="activity">
                    <span>John Doe applied for Software Engineer</span>
                    <span>2 hours ago</span>
                </div>
                <div class="activity">
                    <span>Jane Smith registered</span>
                    <span>5 hours ago</span>
                </div>
                <div class="activity">
                    <span>Mike Brown posted a new job</span>
                    <span>1 day ago</span>
                </div>
            </div>
        </div>
    </div>
</body>
</html>