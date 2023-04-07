Create database ApiTestDB1
GO
USE [ApiTestDB1]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 4/7/2023 12:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Complaints]    Script Date: 4/7/2023 12:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Complaints](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Content] [nvarchar](max) NULL,
	[CustomerName] [nvarchar](max) NULL,
	[CustomerId] [int] NOT NULL,
	[EmployeName] [nvarchar](max) NULL,
	[EmployeId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[StatusId] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[LastModified] [datetime2](7) NULL,
	[LastModifiedBy] [nvarchar](max) NULL,
	[ProductName] [nvarchar](max) NULL,
	[StatusName] [nvarchar](max) NULL,
 CONSTRAINT [PK_Complaints] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 4/7/2023 12:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[LastModified] [datetime2](7) NULL,
	[LastModifiedBy] [nvarchar](max) NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employes]    Script Date: 4/7/2023 12:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[CustomerId] [int] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[LastModified] [datetime2](7) NULL,
	[LastModifiedBy] [nvarchar](max) NULL,
 CONSTRAINT [PK_Employes] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Module]    Script Date: 4/7/2023 12:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Module](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
	[Package] [nvarchar](max) NOT NULL,
	[Key] [nvarchar](max) NOT NULL,
	[Index] [int] NOT NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[LastModifiedBy] [nvarchar](max) NULL,
	[LastModified] [datetime2](7) NULL,
	[Name] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Module] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 4/7/2023 12:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[LastModified] [datetime2](7) NULL,
	[LastModifiedBy] [nvarchar](max) NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Status]    Script Date: 4/7/2023 12:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Status](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[LastModified] [datetime2](7) NULL,
	[LastModifiedBy] [nvarchar](max) NULL,
 CONSTRAINT [PK_Status] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 4/7/2023 12:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](max) NOT NULL,
	[LastName] [nvarchar](max) NOT NULL,
	[UserName] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[Role] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221109121254_ComplaintMigration', N'6.0.10')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221109122127_CustomerMigration', N'6.0.10')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221109122405_EmployeMigration', N'6.0.10')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221109123002_ProductMigration', N'6.0.10')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221109123108_StatusMigration', N'6.0.10')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221130204357_entityMigration', N'6.0.10')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221201201435_migrationEntity', N'6.0.10')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230321120917_updateUserModel', N'6.0.10')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230321220723_removeTokenFromUser', N'6.0.10')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230329004047_ModuleMigration', N'6.0.10')
GO
SET IDENTITY_INSERT [dbo].[Complaints] ON
GO
INSERT [dbo].[Complaints] ([Id], [Content], [CustomerName], [CustomerId], [EmployeName], [EmployeId], [ProductId], [StatusId], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy], [ProductName], [StatusName]) VALUES (1005, N'string', N'string', 5, N'string', 2, 1, 2, CAST(N'2023-01-14T12:58:31.4676852' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T12:58:31.4676852' AS DateTime2), N'DESKTOP-EF44SML', N'string', N'string')
GO
INSERT [dbo].[Complaints] ([Id], [Content], [CustomerName], [CustomerId], [EmployeName], [EmployeId], [ProductId], [StatusId], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy], [ProductName], [StatusName]) VALUES (1008, N'string', N'string', 6, N'string', 3, 2, 3, CAST(N'2023-01-14T13:29:38.3230902' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T13:29:38.3230902' AS DateTime2), N'DESKTOP-EF44SML', N'string', N'string')
GO
INSERT [dbo].[Complaints] ([Id], [Content], [CustomerName], [CustomerId], [EmployeName], [EmployeId], [ProductId], [StatusId], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy], [ProductName], [StatusName]) VALUES (1009, N'string', N'string', 7, N'string', 4, 3, 4, CAST(N'2023-01-14T13:29:47.8603705' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T13:29:47.8603705' AS DateTime2), N'DESKTOP-EF44SML', N'string', N'string')
GO
SET IDENTITY_INSERT [dbo].[Complaints] OFF
GO
SET IDENTITY_INSERT [dbo].[Customers] ON
GO
INSERT [dbo].[Customers] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (1, N'hhhhjhh', CAST(N'2023-01-14T12:48:50.3271745' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T12:48:50.3271745' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Customers] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (2, N'c1', CAST(N'2023-01-14T12:50:08.0739481' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T12:50:08.0739481' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Customers] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (3, N'b2', CAST(N'2023-01-14T12:50:17.4394843' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T12:50:17.4394843' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Customers] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (4, N'b33', CAST(N'2023-01-14T12:50:25.8097018' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T12:50:25.8097018' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Customers] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (5, N'string', CAST(N'2023-01-14T12:58:31.4676852' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T12:58:31.4676852' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Customers] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (6, N'string', CAST(N'2023-01-14T13:29:38.3230902' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T13:29:38.3230902' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Customers] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (7, N'string', CAST(N'2023-01-14T13:29:47.8603705' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T13:29:47.8603705' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Customers] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (8, N'Lamachi', CAST(N'2023-02-22T10:45:12.8658111' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-02-22T10:45:12.8658111' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Customers] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (9, N'hafssa', CAST(N'2023-02-22T10:45:28.7580761' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-02-22T10:45:28.7580761' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Customers] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (10, N'fati', CAST(N'2023-02-22T11:22:16.3570155' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-02-22T11:22:16.3570155' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Customers] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (11, N'fgdg', CAST(N'2023-04-01T12:37:57.4382847' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-04-01T12:37:57.4382847' AS DateTime2), N'DESKTOP-EF44SML')
GO
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET IDENTITY_INSERT [dbo].[Employes] ON
GO
INSERT [dbo].[Employes] ([Id], [Name], [CustomerId], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (1, N'Lamachi.', 0, CAST(N'2023-01-11T13:05:25.8865604' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T12:49:28.6993421' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Employes] ([Id], [Name], [CustomerId], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (2, N'string', 0, CAST(N'2023-01-14T12:58:31.4676852' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T12:58:31.4676852' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Employes] ([Id], [Name], [CustomerId], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (3, N'string', 0, CAST(N'2023-01-14T13:29:38.3230902' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T13:29:38.3230902' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Employes] ([Id], [Name], [CustomerId], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (4, N'string', 0, CAST(N'2023-01-14T13:29:47.8603705' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T13:29:47.8603705' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Employes] ([Id], [Name], [CustomerId], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (5, N'kklk', 0, CAST(N'2023-03-29T14:31:10.9583498' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-03-29T14:31:10.9583498' AS DateTime2), N'DESKTOP-EF44SML')
GO
SET IDENTITY_INSERT [dbo].[Employes] OFF
GO
SET IDENTITY_INSERT [dbo].[Products] ON
GO
INSERT [dbo].[Products] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (1, N'string', CAST(N'2023-01-14T12:58:31.4676852' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T12:58:31.4676852' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Products] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (2, N'string', CAST(N'2023-01-14T13:29:38.3230902' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T13:29:38.3230902' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Products] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (3, N'string', CAST(N'2023-01-14T13:29:47.8603705' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T13:29:47.8603705' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Products] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (4, N'p1', CAST(N'2023-01-14T14:54:33.8404054' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T14:54:33.8404054' AS DateTime2), N'DESKTOP-EF44SML')
GO
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
SET IDENTITY_INSERT [dbo].[Status] ON
GO
INSERT [dbo].[Status] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (1, N'iii', CAST(N'2023-01-04T11:18:49.2714209' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-04T11:18:49.2714209' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Status] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (2, N'string', CAST(N'2023-01-14T12:58:31.4676852' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T12:58:31.4676852' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Status] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (3, N'string', CAST(N'2023-01-14T13:29:38.3230902' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T13:29:38.3230902' AS DateTime2), N'DESKTOP-EF44SML')
GO
INSERT [dbo].[Status] ([Id], [Name], [CreatedAt], [CreatedBy], [LastModified], [LastModifiedBy]) VALUES (4, N'string', CAST(N'2023-01-14T13:29:47.8603705' AS DateTime2), N'DESKTOP-EF44SML', CAST(N'2023-01-14T13:29:47.8603705' AS DateTime2), N'DESKTOP-EF44SML')
GO
SET IDENTITY_INSERT [dbo].[Status] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [UserName], [Password], [Role], [Email]) VALUES (1, N'dd', N'fbvb', N'fd', N'vbt', N'fgg', N'sgfdg')
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [UserName], [Password], [Role], [Email]) VALUES (2, N'sgbfg', N'fbg', N'fg', N'Hkndlc.23', N'HQGKiMLBQwcaYpdp59l1DhBlj2XXi9ZabfSgU8HSdLw82XQj', N'bfg')
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [UserName], [Password], [Role], [Email]) VALUES (3, N'rth', N'hth', N'thrt', N'Edfhbf.54', N'P0bqJxgN2pikaQkqmPsrEJajztnij0GuV26Wxkuv7E8WW5uK', N'sfrg')
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [UserName], [Password], [Role], [Email]) VALUES (5, N'hafssa', N'lamachi', N'hafssaLamachi', N'rAYrx7xZpulreXTSobkWN13vOxnq1yyTByFawBk+xP8nDZCJ', N'User', N'hafssa.la@gmail.com')
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [UserName], [Password], [Role], [Email]) VALUES (6, N'chaimae', N'lamachi', N'chaimaeLamachi', N'eG4YlQv0/FGmMblVSMh7PLg5LXZ9IfhOwsnwoWfqNPt9SbUC', N'User', N'chaimae.la@gmail.com')
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Complaints] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Customers] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Employes] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Status] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Complaints]  WITH CHECK ADD  CONSTRAINT [FK_Complaints_Customers_CustomerId] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Complaints] CHECK CONSTRAINT [FK_Complaints_Customers_CustomerId]
GO
ALTER TABLE [dbo].[Complaints]  WITH CHECK ADD  CONSTRAINT [FK_Complaints_Employes_EmployeId] FOREIGN KEY([EmployeId])
REFERENCES [dbo].[Employes] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Complaints] CHECK CONSTRAINT [FK_Complaints_Employes_EmployeId]
GO
ALTER TABLE [dbo].[Complaints]  WITH CHECK ADD  CONSTRAINT [FK_Complaints_Products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Complaints] CHECK CONSTRAINT [FK_Complaints_Products_ProductId]
GO
ALTER TABLE [dbo].[Complaints]  WITH CHECK ADD  CONSTRAINT [FK_Complaints_Status_StatusId] FOREIGN KEY([StatusId])
REFERENCES [dbo].[Status] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Complaints] CHECK CONSTRAINT [FK_Complaints_Status_StatusId]
GO
