USE [master]
GO
/****** Object:  Database [Hospital]    Script Date: 11/11/2023 00:44:21 ******/
CREATE DATABASE [Hospital]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Hospital', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Hospital.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Hospital_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Hospital_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Hospital] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Hospital].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Hospital] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Hospital] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Hospital] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Hospital] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Hospital] SET ARITHABORT OFF 
GO
ALTER DATABASE [Hospital] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Hospital] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Hospital] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Hospital] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Hospital] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Hospital] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Hospital] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Hospital] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Hospital] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Hospital] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Hospital] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Hospital] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Hospital] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Hospital] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Hospital] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Hospital] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Hospital] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Hospital] SET RECOVERY FULL 
GO
ALTER DATABASE [Hospital] SET  MULTI_USER 
GO
ALTER DATABASE [Hospital] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Hospital] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Hospital] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Hospital] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Hospital] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Hospital] SET QUERY_STORE = OFF
GO
USE [Hospital]
GO
/****** Object:  User [alumno]    Script Date: 11/11/2023 00:44:22 ******/
CREATE USER [alumno] FOR LOGIN [Alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [alumno]
GO
/****** Object:  Table [dbo].[DiasLaborales]    Script Date: 11/11/2023 00:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DiasLaborales](
	[IdDiasLaborales] [int] IDENTITY(1,1) NOT NULL,
	[Lunes] [bit] NULL,
	[Martes] [bit] NULL,
	[Miercoles] [bit] NULL,
	[Jueves] [bit] NULL,
	[Viernes] [bit] NULL,
	[Sabado] [bit] NULL,
 CONSTRAINT [PK_DiasLaborales] PRIMARY KEY CLUSTERED 
(
	[IdDiasLaborales] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Especialidad]    Script Date: 11/11/2023 00:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Especialidad](
	[IdEspecialidad] [int] IDENTITY(1,1) NOT NULL,
	[Especialidad] [varchar](200) NOT NULL,
 CONSTRAINT [PK_Especialidad] PRIMARY KEY CLUSTERED 
(
	[IdEspecialidad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Estudio]    Script Date: 11/11/2023 00:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Estudio](
	[IdEstudio] [int] IDENTITY(1,1) NOT NULL,
	[Estudio] [varchar](50) NOT NULL,
	[FkEspecialidad] [int] NULL,
 CONSTRAINT [PK_Estudio] PRIMARY KEY CLUSTERED 
(
	[IdEstudio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GrupoFamiliar]    Script Date: 11/11/2023 00:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GrupoFamiliar](
	[IdGrupoFamiliar] [int] IDENTITY(1,1) NOT NULL,
	[DNI] [int] NOT NULL,
	[FkPaciente] [varchar](50) NOT NULL,
 CONSTRAINT [PK_GrupoFamiliar] PRIMARY KEY CLUSTERED 
(
	[IdGrupoFamiliar] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Medico]    Script Date: 11/11/2023 00:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Medico](
	[IdMedico] [int] IDENTITY(1,1) NOT NULL,
	[FkEspecialidad] [int] NOT NULL,
	[Mail] [varchar](50) NOT NULL,
	[Telefono] [int] NOT NULL,
	[NombreApellidoM] [varchar](50) NOT NULL,
	[FkDiasLaborales] [int] NOT NULL,
 CONSTRAINT [PK_Medico] PRIMARY KEY CLUSTERED 
(
	[IdMedico] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Paciente]    Script Date: 11/11/2023 00:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Paciente](
	[IdPaciente] [int] IDENTITY(1,1) NOT NULL,
	[NombreApellido] [varchar](200) NOT NULL,
	[DNI] [int] NOT NULL,
	[CoberturaMedica] [varchar](50) NOT NULL,
	[Mail] [varchar](50) NOT NULL,
	[Telefono] [int] NOT NULL,
	[FechaNacimiento] [date] NOT NULL,
	[FKGrupoFamiliar] [int] NULL,
	[FkUsuarioPaciente] [int] NOT NULL,
 CONSTRAINT [PK_Paciente] PRIMARY KEY CLUSTERED 
(
	[IdPaciente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rol]    Script Date: 11/11/2023 00:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rol](
	[IdRol] [int] IDENTITY(1,1) NOT NULL,
	[Tipo] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Rol] PRIMARY KEY CLUSTERED 
(
	[IdRol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sede]    Script Date: 11/11/2023 00:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sede](
	[IdSede] [int] IDENTITY(1,1) NOT NULL,
	[Sede] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Sede] PRIMARY KEY CLUSTERED 
(
	[IdSede] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Turno]    Script Date: 11/11/2023 00:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Turno](
	[IdTurno] [int] IDENTITY(1,1) NOT NULL,
	[FkSede] [int] NOT NULL,
	[Fecha] [date] NOT NULL,
	[FkPaciente] [int] NOT NULL,
	[FkMedico] [int] NOT NULL,
	[Cancelado] [bit] NOT NULL,
	[Asistio] [bit] NOT NULL,
	[FkEstudio] [int] NOT NULL,
	[FkEspecialidad] [int] NOT NULL,
	[Hora] [time](4) NOT NULL,
 CONSTRAINT [PK_Turno] PRIMARY KEY CLUSTERED 
(
	[IdTurno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 11/11/2023 00:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
	[Usuarios] [varchar](50) NOT NULL,
	[Contraseña] [varchar](50) NOT NULL,
	[FkRol] [int] NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[DiasLaborales] ON 

INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (2, 1, 1, 0, 1, 1, 1)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (3, 1, 1, 0, 1, 1, 1)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (4, 1, 1, 0, 1, 1, 1)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (5, 1, 1, 0, 1, 1, 1)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (6, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (7, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (8, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (9, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (10, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (11, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (12, 1, 0, 0, 0, 1, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (13, 1, 0, 0, 1, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (14, 1, 1, 1, 1, 1, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (15, 1, 0, 0, 1, 1, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (16, 1, 0, 1, 0, 1, 1)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (17, 1, 0, 1, 0, 1, 1)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (18, 1, 0, 1, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (19, 1, 0, 0, 0, 1, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (20, 1, 0, 0, 0, 1, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (21, 1, 0, 0, 1, 0, 1)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (22, 1, 0, 1, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (23, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (24, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (25, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (26, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (27, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (28, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (29, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (30, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (31, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (32, 1, 0, 0, 0, 0, 1)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (33, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (34, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (35, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (36, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (37, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (38, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (39, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (40, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (41, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (42, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (43, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (44, 0, 0, 0, 0, 0, 0)
SET IDENTITY_INSERT [dbo].[DiasLaborales] OFF
GO
SET IDENTITY_INSERT [dbo].[Especialidad] ON 

INSERT [dbo].[Especialidad] ([IdEspecialidad], [Especialidad]) VALUES (1, N'Dermatologia')
INSERT [dbo].[Especialidad] ([IdEspecialidad], [Especialidad]) VALUES (2, N'Ginecologia')
INSERT [dbo].[Especialidad] ([IdEspecialidad], [Especialidad]) VALUES (3, N'Neurologia')
INSERT [dbo].[Especialidad] ([IdEspecialidad], [Especialidad]) VALUES (4, N'Pediatria')
INSERT [dbo].[Especialidad] ([IdEspecialidad], [Especialidad]) VALUES (5, N'Cardiologia')
SET IDENTITY_INSERT [dbo].[Especialidad] OFF
GO
SET IDENTITY_INSERT [dbo].[Estudio] ON 

INSERT [dbo].[Estudio] ([IdEstudio], [Estudio], [FkEspecialidad]) VALUES (1, N'Ecografia', 4)
INSERT [dbo].[Estudio] ([IdEstudio], [Estudio], [FkEspecialidad]) VALUES (2, N'Mamografia', 2)
INSERT [dbo].[Estudio] ([IdEstudio], [Estudio], [FkEspecialidad]) VALUES (3, N'Electrocardiograma', 5)
INSERT [dbo].[Estudio] ([IdEstudio], [Estudio], [FkEspecialidad]) VALUES (4, N'Peeling', 1)
INSERT [dbo].[Estudio] ([IdEstudio], [Estudio], [FkEspecialidad]) VALUES (5, N'Control Neuronal', 3)
INSERT [dbo].[Estudio] ([IdEstudio], [Estudio], [FkEspecialidad]) VALUES (6, N'Consulta dermatologica', 1)
SET IDENTITY_INSERT [dbo].[Estudio] OFF
GO
SET IDENTITY_INSERT [dbo].[GrupoFamiliar] ON 

INSERT [dbo].[GrupoFamiliar] ([IdGrupoFamiliar], [DNI], [FkPaciente]) VALUES (1, 47350201, N'3')
SET IDENTITY_INSERT [dbo].[GrupoFamiliar] OFF
GO
SET IDENTITY_INSERT [dbo].[Medico] ON 

INSERT [dbo].[Medico] ([IdMedico], [FkEspecialidad], [Mail], [Telefono], [NombreApellidoM], [FkDiasLaborales]) VALUES (1, 1, N'carlos.lewit@gmail.com', 1155555555, N'Carlos Lewit', 2)
INSERT [dbo].[Medico] ([IdMedico], [FkEspecialidad], [Mail], [Telefono], [NombreApellidoM], [FkDiasLaborales]) VALUES (2, 4, N'kuni@gmail.com', 1123453648, N'Liam Kuniewsky', 2)
INSERT [dbo].[Medico] ([IdMedico], [FkEspecialidad], [Mail], [Telefono], [NombreApellidoM], [FkDiasLaborales]) VALUES (4, 2, N'a.a@gmail.com', 1121212121, N'dsa dasds', 2)
INSERT [dbo].[Medico] ([IdMedico], [FkEspecialidad], [Mail], [Telefono], [NombreApellidoM], [FkDiasLaborales]) VALUES (5, 2, N'a.a@gmail.com', 1121212121, N'Juliana pansooo', 2)
INSERT [dbo].[Medico] ([IdMedico], [FkEspecialidad], [Mail], [Telefono], [NombreApellidoM], [FkDiasLaborales]) VALUES (6, 2, N'a.a@gmail.com', 1121212121, N'Nadine', 2)
INSERT [dbo].[Medico] ([IdMedico], [FkEspecialidad], [Mail], [Telefono], [NombreApellidoM], [FkDiasLaborales]) VALUES (7, 2, N'a.a@gmail.com', 1121212121, N'Nadine', 2)
INSERT [dbo].[Medico] ([IdMedico], [FkEspecialidad], [Mail], [Telefono], [NombreApellidoM], [FkDiasLaborales]) VALUES (8, 3, N'jpansowy@gmail.com', 1569726916, N'DAria', 12)
SET IDENTITY_INSERT [dbo].[Medico] OFF
GO
SET IDENTITY_INSERT [dbo].[Paciente] ON 

INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (2, N'Nadine Lewit', 47169188, N'OSDE', N'nadine.lewit@gmail.com', 1150276669, CAST(N'2006-04-10' AS Date), 1, 1)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (3, N'Juliana Pansowy Furno', 47350201, N'OSDE', N'julipansofurno@gmail.com', 1173613783, CAST(N'2006-06-04' AS Date), 1, 2)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (5, N'Daiu Cumple', 45323232, N'OSDE', N'daiu.daiu@gmail.com', 1123232323, CAST(N'2005-07-04' AS Date), 2, 3)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (8, N'Flecha Snieg', 47350201, N'OSDE', N'juli@pura.com', 1150276669, CAST(N'2006-04-10' AS Date), NULL, 39)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (9, N'Flecha Snieg', 47350201, N'OSDE', N'juli@pura.com', 1150276669, CAST(N'2006-04-10' AS Date), NULL, 40)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (10, N'Flecha Snieg', 47350201, N'OSDE', N'juli@pura.com', 1150276669, CAST(N'2006-04-10' AS Date), NULL, 42)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (11, N'Flecha Snieg', 47350201, N'OSDE', N'juli@pura.com', 1150276669, CAST(N'2006-04-10' AS Date), NULL, 47)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (12, N'Fede', 123123123, N'cfg', N'a@a.com', 123, CAST(N'2023-07-04' AS Date), NULL, 47)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (13, N'Dario', 25537751, N'Osde', N'dario@gmail.com', 1569726916, CAST(N'2023-08-10' AS Date), NULL, 48)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (14, N'Javier Leonardo Pansowy', 24881545, N'OSDE', N'jpansowy@gmail.com', 1150276699, CAST(N'1975-09-10' AS Date), NULL, 49)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (15, N'Nuria Alemany Palles', 15586211, N'OSDE', N'nalemany@gmail.comm', 1150276699, CAST(N'1948-09-25' AS Date), NULL, 50)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (16, N'Maira Alemanny', 46969525, N'OSDE', N'mairi@gmail.com', 34555555, CAST(N'2005-02-10' AS Date), NULL, 52)
SET IDENTITY_INSERT [dbo].[Paciente] OFF
GO
SET IDENTITY_INSERT [dbo].[Rol] ON 

INSERT [dbo].[Rol] ([IdRol], [Tipo]) VALUES (1, N'Administrador')
INSERT [dbo].[Rol] ([IdRol], [Tipo]) VALUES (2, N'Paciente')
SET IDENTITY_INSERT [dbo].[Rol] OFF
GO
SET IDENTITY_INSERT [dbo].[Sede] ON 

INSERT [dbo].[Sede] ([IdSede], [Sede]) VALUES (1, N'Almagro')
INSERT [dbo].[Sede] ([IdSede], [Sede]) VALUES (2, N'Belgrano')
INSERT [dbo].[Sede] ([IdSede], [Sede]) VALUES (3, N'Flores')
SET IDENTITY_INSERT [dbo].[Sede] OFF
GO
SET IDENTITY_INSERT [dbo].[Turno] ON 

INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (1, 1, CAST(N'2023-01-01' AS Date), 8, 1, 1, 0, 2, 1, CAST(N'11:00:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (3, 2, CAST(N'2023-07-04' AS Date), 5, 2, 0, 0, 2, 2, CAST(N'11:00:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (5, 2, CAST(N'2022-06-10' AS Date), 3, 1, 0, 1, 3, 2, CAST(N'11:00:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (6, 2, CAST(N'2022-06-10' AS Date), 3, 1, 0, 1, 3, 5, CAST(N'11:00:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (7, 1, CAST(N'2023-07-04' AS Date), 5, 2, 0, 0, 2, 3, CAST(N'11:00:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (8, 1, CAST(N'2023-07-04' AS Date), 5, 2, 0, 0, 2, 3, CAST(N'11:00:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (9, 2, CAST(N'2023-10-27' AS Date), 13, 1, 1, 1, 3, 2, CAST(N'11:00:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (11, 3, CAST(N'2023-12-15' AS Date), 13, 1, 1, 1, 3, 4, CAST(N'12:00:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (12, 2, CAST(N'2023-10-04' AS Date), 13, 1, 1, 1, 3, 4, CAST(N'13:00:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (13, 2, CAST(N'2022-06-10' AS Date), 3, 1, 0, 1, 3, 2, CAST(N'11:00:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (14, 2, CAST(N'2020-10-10' AS Date), 0, 2, 0, 0, 4, 1, CAST(N'20:20:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (15, 1, CAST(N'2023-02-20' AS Date), 13, 2, 1, 0, 6, 5, CAST(N'20:20:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (18, 1, CAST(N'2023-11-22' AS Date), 13, 2, 1, 0, 5, 3, CAST(N'11:11:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (20, 1, CAST(N'2023-11-22' AS Date), 3, 2, 0, 0, 5, 3, CAST(N'11:11:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (21, 1, CAST(N'2023-11-22' AS Date), 5, 2, 1, 1, 5, 3, CAST(N'12:12:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (24, 1, CAST(N'2023-11-29' AS Date), 13, 2, 0, 0, 4, 1, CAST(N'10:10:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (25, 1, CAST(N'2023-12-09' AS Date), 13, 2, 0, 0, 3, 5, CAST(N'04:40:00' AS Time))
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [Fecha], [FkPaciente], [FkMedico], [Cancelado], [Asistio], [FkEstudio], [FkEspecialidad], [Hora]) VALUES (26, 2, CAST(N'2020-05-10' AS Date), 16, 2, 0, 0, 2, 2, CAST(N'10:10:00' AS Time))
SET IDENTITY_INSERT [dbo].[Turno] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (1, N'Nadine Lewit', N'nadueslinda', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (3, N'Juliana Pansowy Furno', N'juliNOeslinda', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (4, N'Daiu Cumple', N'DaiuCumple', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (5, N'Uriel Strauss', N'Uri1234', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (6, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (36, N'Flechi', N'Uri1234', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (45, N'nadine', N'Uri1234', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (46, N'a', N'a', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (47, N't', N't', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (48, N'dario', N'hola', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (49, N'javipan', N'juli', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (50, N'nuriaP', N'juli', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (51, N'Administrador', N'Hospital1234', 1)
INSERT [dbo].[Usuario] ([IdUsuario], [Usuarios], [Contraseña], [FkRol]) VALUES (52, N'mai', N'mai', 2)
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO
USE [master]
GO
ALTER DATABASE [Hospital] SET  READ_WRITE 
GO
