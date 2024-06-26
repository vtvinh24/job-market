USE [master]
GO
/****** Object:  Database [mJOB]    Script Date: 6/27/2024 9:47:40 AM ******/
CREATE DATABASE [mJOB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'mJOB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\mJOB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'mJOB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\mJOB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [mJOB] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [mJOB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [mJOB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [mJOB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [mJOB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [mJOB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [mJOB] SET ARITHABORT OFF 
GO
ALTER DATABASE [mJOB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [mJOB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [mJOB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [mJOB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [mJOB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [mJOB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [mJOB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [mJOB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [mJOB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [mJOB] SET  ENABLE_BROKER 
GO
ALTER DATABASE [mJOB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [mJOB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [mJOB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [mJOB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [mJOB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [mJOB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [mJOB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [mJOB] SET RECOVERY FULL 
GO
ALTER DATABASE [mJOB] SET  MULTI_USER 
GO
ALTER DATABASE [mJOB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [mJOB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [mJOB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [mJOB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [mJOB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [mJOB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'mJOB', N'ON'
GO
ALTER DATABASE [mJOB] SET QUERY_STORE = ON
GO
ALTER DATABASE [mJOB] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [mJOB]
GO
/****** Object:  Table [dbo].[accomplishment]    Script Date: 6/27/2024 9:47:40 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[accomplishment](
	[user_id] [int] NULL,
	[accomplishment_id] [int] IDENTITY(1,1) NOT NULL,
	[accomplishment_url] [varchar](max) NOT NULL,
	[accomplishment_content] [nvarchar](max) NULL,
	[accomplishment_year] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[accomplishment_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auth]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auth](
	[user_id] [int] NULL,
	[email] [varchar](320) NULL,
	[hash] [char](64) NOT NULL,
	[salt] [char](16) NOT NULL,
	[role] [char](16) NOT NULL,
	[auth_code] [varchar](8) NULL,
	[status] [varchar](8) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auth_log]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auth_log](
	[auth_log_id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NULL,
	[auth_action] [varchar](16) NOT NULL,
	[auth_time] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[auth_log_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[comment]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[comment](
	[comment_id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NOT NULL,
	[post_id] [int] NOT NULL,
	[comment_content] [nvarchar](max) NULL,
	[comment_created_time] [datetime] NOT NULL,
	[comment_updated_time] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[comment_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[comment_history]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[comment_history](
	[comment_history_id] [int] IDENTITY(1,1) NOT NULL,
	[comment_id] [int] NOT NULL,
	[comment_content] [nvarchar](max) NOT NULL,
	[comment_updated_time] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[comment_history_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[comment_like]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[comment_like](
	[comment_id] [int] NOT NULL,
	[user_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[comment_id] ASC,
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[compensation_type]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[compensation_type](
	[compensation_id] [int] IDENTITY(1,1) NOT NULL,
	[compensation_type] [varchar](16) NULL,
PRIMARY KEY CLUSTERED 
(
	[compensation_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[daily_activity]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[daily_activity](
	[activity_date] [date] NOT NULL,
	[total_user] [int] NOT NULL,
	[max_active_user] [int] NOT NULL,
	[new_user] [int] NOT NULL,
	[unique_visitor] [int] NOT NULL,
	[post_created] [int] NOT NULL,
	[comment_created] [int] NOT NULL,
	[like_added] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[activity_date] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job](
	[job_id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NOT NULL,
	[job_title] [nvarchar](max) NOT NULL,
	[job_work_location] [nvarchar](max) NULL,
	[job_tags] [varchar](max) NULL,
	[job_max_applications] [int] NULL,
	[job_approval_method] [bit] NOT NULL,
	[job_description] [nvarchar](max) NOT NULL,
	[job_contact_info] [nvarchar](max) NULL,
	[job_start_date] [date] NULL,
	[job_end_date] [date] NULL,
	[job_number_of_recruits] [int] NULL,
	[job_requirements] [nvarchar](max) NULL,
	[job_compensation_type] [varchar](16) NULL,
	[job_compensation_amounts] [nvarchar](max) NULL,
	[job_compensation_currencies] [nvarchar](max) NULL,
	[job_compensation_periods] [nvarchar](max) NULL,
	[job_custom_iterations] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[job_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_application]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_application](
	[job_id] [int] NOT NULL,
	[user_id] [int] NOT NULL,
	[job_requirement_data] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_compensation]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_compensation](
	[job_id] [int] NOT NULL,
	[job_compensation_platform] [bit] NOT NULL,
	[job_compensation_type] [varchar](12) NULL,
	[job_compensation_amount] [decimal](10, 2) NULL,
	[job_compensation_currency] [varchar](4) NULL,
	[job_compensation_period] [varchar](8) NULL,
	[job_custom_iteration] [varchar](24) NULL,
	[job_hours_per_day] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[job_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_history]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_history](
	[user_id] [int] NOT NULL,
	[job_id] [int] NOT NULL,
	[job_status] [char](12) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC,
	[job_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_log]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_log](
	[job_log_id] [int] IDENTITY(1,1) NOT NULL,
	[job_id] [int] NOT NULL,
	[job_log_type] [varchar](16) NOT NULL,
	[job_log_time] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[job_log_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_preference]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_preference](
	[user_id] [int] NOT NULL,
	[job_interest] [nvarchar](max) NULL,
	[preferred_location] [nvarchar](max) NULL,
	[salary_expectation] [decimal](10, 2) NULL,
	[job_availability] [char](16) NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_recruitment]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_recruitment](
	[job_id] [int] NOT NULL,
	[job_recruitment_number] [int] NOT NULL,
	[job_recruitment_deadline] [date] NULL,
	[job_recruitment_status] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[job_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_requirement]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_requirement](
	[requirement_id] [int] IDENTITY(1,1) NOT NULL,
	[job_id] [int] NOT NULL,
	[job_requirement] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[requirement_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[linked_profile]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[linked_profile](
	[user_id] [int] NULL,
	[linked_profile_url] [varchar](max) NULL,
	[linked_profile_type] [bit] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[payment_history]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[payment_history](
	[tx_id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NOT NULL,
	[tx_action] [varchar](16) NULL,
	[tx_action_value] [decimal](10, 2) NULL,
	[tx_action_target] [nvarchar](32) NULL,
PRIMARY KEY CLUSTERED 
(
	[tx_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[payment_method]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[payment_method](
	[payment_method_id] [int] IDENTITY(1,1) NOT NULL,
	[payment_method_name] [varchar](50) NOT NULL,
	[payment_method_type] [varchar](20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[payment_method_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[payment_method_log]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[payment_method_log](
	[log_id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NOT NULL,
	[payment_method_log_type] [varchar](16) NULL,
	[payment_method_log_time] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[log_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[post]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[post](
	[post_id] [int] IDENTITY(1,1) NOT NULL,
	[post_title] [nvarchar](255) NOT NULL,
	[post_content] [nvarchar](max) NOT NULL,
	[user_id] [int] NOT NULL,
	[post_status] [varchar](16) NOT NULL,
	[post_created_time] [datetime] NOT NULL,
	[post_updated_time] [datetime] NOT NULL,
	[post_view_count] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[post_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[post_history]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[post_history](
	[post_history_id] [int] IDENTITY(1,1) NOT NULL,
	[post_id] [int] NOT NULL,
	[post_title] [nvarchar](255) NOT NULL,
	[post_content] [nvarchar](max) NOT NULL,
	[post_history_time] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[post_history_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[post_like]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[post_like](
	[post_id] [int] NOT NULL,
	[user_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[post_id] ASC,
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[profile]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[profile](
	[user_id] [int] NOT NULL,
	[user_avatar] [nvarchar](max) NULL,
	[user_bio] [nvarchar](256) NULL,
	[user_dob] [date] NULL,
	[user_address] [nvarchar](max) NULL,
	[user_citizen_id] [varchar](32) NOT NULL,
	[user_email] [varchar](320) NULL,
	[user_phone_number] [varchar](16) NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[profile_log]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[profile_log](
	[profile_log_id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NULL,
	[profile_log_time] [datetime] NULL,
	[profile_log] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[profile_log_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[session]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[session](
	[session_id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NULL,
	[session_token] [varchar](255) NOT NULL,
	[session_timeout] [datetime] NOT NULL,
	[session_data] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[session_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[skill]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[skill](
	[skill_id] [int] IDENTITY(1,1) NOT NULL,
	[skill_name] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[skill_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[system_log]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[system_log](
	[system_log_id] [int] IDENTITY(1,1) NOT NULL,
	[system_log_type] [varchar](16) NULL,
	[system_log_data] [nvarchar](max) NULL,
	[system_log_time] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[system_log_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ticket]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ticket](
	[ticket_id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NULL,
	[ticket_category] [varchar](16) NOT NULL,
	[ticket_title] [nvarchar](255) NOT NULL,
	[ticket_content] [nvarchar](max) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ticket_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ticket_log]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ticket_log](
	[ticket_log_id] [int] IDENTITY(1,1) NOT NULL,
	[ticket_id] [int] NOT NULL,
	[ticket_log_type] [varchar](16) NOT NULL,
	[ticket_log_time] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[ticket_log_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[title]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[title](
	[title_id] [int] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[title_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[user_id] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](50) NOT NULL,
	[user_created_time] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_balance]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_balance](
	[user_id] [int] NOT NULL,
	[balance] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_payment_method]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_payment_method](
	[user_id] [int] NOT NULL,
	[payment_method_id] [int] NOT NULL,
	[payment_method_details] [varchar](320) NOT NULL,
	[is_default] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC,
	[payment_method_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_skill]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_skill](
	[user_id] [int] NOT NULL,
	[skill_id] [int] NOT NULL,
	[skill_level] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC,
	[skill_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_title]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_title](
	[user_id] [int] NOT NULL,
	[title_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC,
	[title_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[work_xp]    Script Date: 6/27/2024 9:47:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[work_xp](
	[user_id] [int] NULL,
	[work_job_title] [nvarchar](255) NOT NULL,
	[work_job_description] [nvarchar](max) NULL,
	[work_company] [nvarchar](255) NULL,
	[work_start_date] [date] NULL,
	[work_end_date] [date] NULL,
	[work_other_info] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[auth] ADD  DEFAULT ('USER') FOR [role]
GO
ALTER TABLE [dbo].[auth] ADD  DEFAULT ('OFFLINE') FOR [status]
GO
ALTER TABLE [dbo].[auth_log] ADD  DEFAULT (getdate()) FOR [auth_time]
GO
ALTER TABLE [dbo].[comment] ADD  DEFAULT (getdate()) FOR [comment_created_time]
GO
ALTER TABLE [dbo].[comment] ADD  DEFAULT (getdate()) FOR [comment_updated_time]
GO
ALTER TABLE [dbo].[comment_history] ADD  DEFAULT (getdate()) FOR [comment_updated_time]
GO
ALTER TABLE [dbo].[daily_activity] ADD  DEFAULT ((0)) FOR [total_user]
GO
ALTER TABLE [dbo].[daily_activity] ADD  DEFAULT ((0)) FOR [max_active_user]
GO
ALTER TABLE [dbo].[daily_activity] ADD  DEFAULT ((0)) FOR [new_user]
GO
ALTER TABLE [dbo].[daily_activity] ADD  DEFAULT ((0)) FOR [unique_visitor]
GO
ALTER TABLE [dbo].[daily_activity] ADD  DEFAULT ((0)) FOR [post_created]
GO
ALTER TABLE [dbo].[daily_activity] ADD  DEFAULT ((0)) FOR [comment_created]
GO
ALTER TABLE [dbo].[daily_activity] ADD  DEFAULT ((0)) FOR [like_added]
GO
ALTER TABLE [dbo].[job] ADD  DEFAULT ((0)) FOR [job_max_applications]
GO
ALTER TABLE [dbo].[job] ADD  DEFAULT ((1)) FOR [job_approval_method]
GO
ALTER TABLE [dbo].[job] ADD  DEFAULT ((0)) FOR [job_number_of_recruits]
GO
ALTER TABLE [dbo].[job_compensation] ADD  DEFAULT ((0)) FOR [job_compensation_platform]
GO
ALTER TABLE [dbo].[job_log] ADD  DEFAULT (getdate()) FOR [job_log_time]
GO
ALTER TABLE [dbo].[job_recruitment] ADD  DEFAULT ((1)) FOR [job_recruitment_status]
GO
ALTER TABLE [dbo].[payment_method_log] ADD  DEFAULT (getdate()) FOR [payment_method_log_time]
GO
ALTER TABLE [dbo].[post] ADD  DEFAULT ('PUBLISHED') FOR [post_status]
GO
ALTER TABLE [dbo].[post] ADD  DEFAULT (getdate()) FOR [post_created_time]
GO
ALTER TABLE [dbo].[post] ADD  DEFAULT (getdate()) FOR [post_updated_time]
GO
ALTER TABLE [dbo].[post] ADD  DEFAULT ((0)) FOR [post_view_count]
GO
ALTER TABLE [dbo].[post_history] ADD  DEFAULT (getdate()) FOR [post_history_time]
GO
ALTER TABLE [dbo].[profile_log] ADD  DEFAULT (getdate()) FOR [profile_log_time]
GO
ALTER TABLE [dbo].[session] ADD  DEFAULT (dateadd(hour,(1),getdate())) FOR [session_timeout]
GO
ALTER TABLE [dbo].[system_log] ADD  DEFAULT (getdate()) FOR [system_log_time]
GO
ALTER TABLE [dbo].[ticket_log] ADD  DEFAULT (getdate()) FOR [ticket_log_time]
GO
ALTER TABLE [dbo].[user] ADD  DEFAULT (getdate()) FOR [user_created_time]
GO
ALTER TABLE [dbo].[user_payment_method] ADD  DEFAULT ((0)) FOR [is_default]
GO
ALTER TABLE [dbo].[accomplishment]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[auth]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[auth_log]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[comment]  WITH CHECK ADD FOREIGN KEY([post_id])
REFERENCES [dbo].[post] ([post_id])
GO
ALTER TABLE [dbo].[comment]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[comment_history]  WITH CHECK ADD FOREIGN KEY([comment_id])
REFERENCES [dbo].[comment] ([comment_id])
GO
ALTER TABLE [dbo].[comment_like]  WITH CHECK ADD FOREIGN KEY([comment_id])
REFERENCES [dbo].[comment] ([comment_id])
GO
ALTER TABLE [dbo].[comment_like]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[job]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[job_application]  WITH CHECK ADD FOREIGN KEY([job_id])
REFERENCES [dbo].[job] ([job_id])
GO
ALTER TABLE [dbo].[job_application]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[job_compensation]  WITH CHECK ADD FOREIGN KEY([job_id])
REFERENCES [dbo].[job] ([job_id])
GO
ALTER TABLE [dbo].[job_history]  WITH CHECK ADD FOREIGN KEY([job_id])
REFERENCES [dbo].[job] ([job_id])
GO
ALTER TABLE [dbo].[job_history]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[job_log]  WITH CHECK ADD FOREIGN KEY([job_id])
REFERENCES [dbo].[job] ([job_id])
GO
ALTER TABLE [dbo].[job_preference]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[job_recruitment]  WITH CHECK ADD FOREIGN KEY([job_id])
REFERENCES [dbo].[job] ([job_id])
GO
ALTER TABLE [dbo].[job_requirement]  WITH CHECK ADD FOREIGN KEY([job_id])
REFERENCES [dbo].[job] ([job_id])
GO
ALTER TABLE [dbo].[linked_profile]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[payment_history]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[payment_method_log]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[post]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[post_history]  WITH CHECK ADD FOREIGN KEY([post_id])
REFERENCES [dbo].[post] ([post_id])
GO
ALTER TABLE [dbo].[post_like]  WITH CHECK ADD FOREIGN KEY([post_id])
REFERENCES [dbo].[post] ([post_id])
GO
ALTER TABLE [dbo].[post_like]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[profile]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[profile_log]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[session]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[ticket]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[ticket_log]  WITH CHECK ADD FOREIGN KEY([ticket_id])
REFERENCES [dbo].[ticket] ([ticket_id])
GO
ALTER TABLE [dbo].[user_balance]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[user_payment_method]  WITH CHECK ADD FOREIGN KEY([payment_method_id])
REFERENCES [dbo].[payment_method] ([payment_method_id])
GO
ALTER TABLE [dbo].[user_payment_method]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[user_skill]  WITH CHECK ADD FOREIGN KEY([skill_id])
REFERENCES [dbo].[skill] ([skill_id])
GO
ALTER TABLE [dbo].[user_skill]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[user_title]  WITH CHECK ADD FOREIGN KEY([title_id])
REFERENCES [dbo].[title] ([title_id])
GO
ALTER TABLE [dbo].[user_title]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
ALTER TABLE [dbo].[work_xp]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[user] ([user_id])
GO
USE [master]
GO
ALTER DATABASE [mJOB] SET  READ_WRITE 
GO
