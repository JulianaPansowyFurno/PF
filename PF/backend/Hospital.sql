USE [master]
GO
/****** Object:  Database [Hospital]    Script Date: 3/7/2023 12:09:34 ******/
CREATE DATABASE [Hospital]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Hospital', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Hospital.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Hospital_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Hospital_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
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
EXEC sys.sp_db_vardecimal_storage_format N'Hospital', N'ON'
GO
ALTER DATABASE [Hospital] SET QUERY_STORE = OFF
GO
USE [Hospital]
GO
/****** Object:  User [alumno]    Script Date: 3/7/2023 12:09:35 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[DiasLaborales]    Script Date: 3/7/2023 12:09:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DiasLaborales](
	[IdDiasLaborales] [int] IDENTITY(1,1) NOT NULL,
	[Lunes] [bit] NOT NULL,
	[Martes] [bit] NOT NULL,
	[Miercoles] [bit] NOT NULL,
	[Jueves] [bit] NOT NULL,
	[Viernes] [bit] NOT NULL,
	[Sabado] [bit] NOT NULL,
 CONSTRAINT [PK_DiasLaborales] PRIMARY KEY CLUSTERED 
(
	[IdDiasLaborales] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Especialidad]    Script Date: 3/7/2023 12:09:35 ******/
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
/****** Object:  Table [dbo].[Estudio]    Script Date: 3/7/2023 12:09:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Estudio](
	[IdEstudio] [int] IDENTITY(1,1) NOT NULL,
	[Estudio] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Estudio] PRIMARY KEY CLUSTERED 
(
	[IdEstudio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GrupoFamiliar]    Script Date: 3/7/2023 12:09:35 ******/
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
/****** Object:  Table [dbo].[Medico]    Script Date: 3/7/2023 12:09:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Medico](
	[IdMedico] [int] IDENTITY(1,1) NOT NULL,
	[FkEspecialidad] [int] NOT NULL,
	[Mail] [varchar](50) NOT NULL,
	[Telefono] [int] NOT NULL,
	[NombreApellido] [varchar](50) NOT NULL,
	[FkDiasLaborales] [int] NOT NULL,
 CONSTRAINT [PK_Medico] PRIMARY KEY CLUSTERED 
(
	[IdMedico] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Paciente]    Script Date: 3/7/2023 12:09:35 ******/
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
	[FKGrupoFamiliar] [int] NOT NULL,
	[FkUsuarioPaciente] [int] NOT NULL,
 CONSTRAINT [PK_Paciente] PRIMARY KEY CLUSTERED 
(
	[IdPaciente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rol]    Script Date: 3/7/2023 12:09:35 ******/
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
/****** Object:  Table [dbo].[Sede]    Script Date: 3/7/2023 12:09:35 ******/
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
/****** Object:  Table [dbo].[Servicio]    Script Date: 3/7/2023 12:09:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Servicio](
	[IdServicio] [int] IDENTITY(1,1) NOT NULL,
	[Servicio] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Servicio] PRIMARY KEY CLUSTERED 
(
	[IdServicio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Turno]    Script Date: 3/7/2023 12:09:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Turno](
	[IdTurno] [int] IDENTITY(1,1) NOT NULL,
	[FkSede] [int] NOT NULL,
	[FechaYHora] [datetime] NOT NULL,
	[FkPaciente] [int] NOT NULL,
	[FkMedico] [int] NOT NULL,
	[Estado] [bit] NOT NULL,
	[Asistio] [bit] NOT NULL,
	[FkEstudio] [int] NOT NULL,
	[FkServicio] [int] NOT NULL,
 CONSTRAINT [PK_Turno] PRIMARY KEY CLUSTERED 
(
	[IdTurno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 3/7/2023 12:09:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
	[NombreApellido] [varchar](50) NOT NULL,
	[Contraseña] [varchar](50) NOT NULL,
	[FkRol] [int] NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UsuarioPaciente]    Script Date: 3/7/2023 12:09:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsuarioPaciente](
	[FkUsuario] [int] NOT NULL,
	[FkPaciente] [int] NOT NULL,
	[IdUsuarioPaciente] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_UsuarioPaciente] PRIMARY KEY CLUSTERED 
(
	[IdUsuarioPaciente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[DiasLaborales] ON 

INSERT [dbo].[DiasLaborales] ([IdDiasLaborales], [Lunes], [Martes], [Miercoles], [Jueves], [Viernes], [Sabado]) VALUES (2, 1, 1, 0, 1, 1, 1)
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

INSERT [dbo].[Estudio] ([IdEstudio], [Estudio]) VALUES (1, N'Ecografia')
INSERT [dbo].[Estudio] ([IdEstudio], [Estudio]) VALUES (2, N'Analisis de sangre')
INSERT [dbo].[Estudio] ([IdEstudio], [Estudio]) VALUES (3, N'Electrocardiograma')
INSERT [dbo].[Estudio] ([IdEstudio], [Estudio]) VALUES (4, N'Hisopado nasal')
SET IDENTITY_INSERT [dbo].[Estudio] OFF
GO
SET IDENTITY_INSERT [dbo].[GrupoFamiliar] ON 

INSERT [dbo].[GrupoFamiliar] ([IdGrupoFamiliar], [DNI], [FkPaciente]) VALUES (1, 47350201, N'3')
SET IDENTITY_INSERT [dbo].[GrupoFamiliar] OFF
GO
SET IDENTITY_INSERT [dbo].[Medico] ON 

INSERT [dbo].[Medico] ([IdMedico], [FkEspecialidad], [Mail], [Telefono], [NombreApellido], [FkDiasLaborales]) VALUES (1, 1, N'carlos.lewit@gmail.com', 1155555555, N'Carlos Lewit', 2)
INSERT [dbo].[Medico] ([IdMedico], [FkEspecialidad], [Mail], [Telefono], [NombreApellido], [FkDiasLaborales]) VALUES (2, 4, N'kuni@gmail.com', 1123453648, N'Liam Kuniewsky', 2)
SET IDENTITY_INSERT [dbo].[Medico] OFF
GO
SET IDENTITY_INSERT [dbo].[Paciente] ON 

INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (2, N'Nadine Lewit', 47169188, N'OSDE', N'nadine.lewit@gmail.com', 1150276669, CAST(N'2006-04-10' AS Date), 1, 1)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (3, N'Juliana Pansowy Furno', 47350201, N'OSDE', N'julipansofurno@gmail.com', 1173613783, CAST(N'2006-06-04' AS Date), 1, 2)
INSERT [dbo].[Paciente] ([IdPaciente], [NombreApellido], [DNI], [CoberturaMedica], [Mail], [Telefono], [FechaNacimiento], [FKGrupoFamiliar], [FkUsuarioPaciente]) VALUES (5, N'Daiu Cumple', 45323232, N'OSDE', N'daiu.daiu@gmail.com', 1123232323, CAST(N'2005-07-04' AS Date), 2, 3)
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
SET IDENTITY_INSERT [dbo].[Servicio] ON 

INSERT [dbo].[Servicio] ([IdServicio], [Servicio]) VALUES (1, N'Laboratorio')
INSERT [dbo].[Servicio] ([IdServicio], [Servicio]) VALUES (2, N'Consulta')
SET IDENTITY_INSERT [dbo].[Servicio] OFF
GO
SET IDENTITY_INSERT [dbo].[Turno] ON 

INSERT [dbo].[Turno] ([IdTurno], [FkSede], [FechaYHora], [FkPaciente], [FkMedico], [Estado], [Asistio], [FkEstudio], [FkServicio]) VALUES (1, 1, CAST(N'2023-04-10T11:00:00.000' AS DateTime), 2, 1, 1, 0, 2, 1)
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [FechaYHora], [FkPaciente], [FkMedico], [Estado], [Asistio], [FkEstudio], [FkServicio]) VALUES (3, 2, CAST(N'2023-07-04T12:00:00.000' AS DateTime), 5, 2, 0, 0, 2, 2)
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [FechaYHora], [FkPaciente], [FkMedico], [Estado], [Asistio], [FkEstudio], [FkServicio]) VALUES (5, 2, CAST(N'2022-06-10T00:00:00.000' AS DateTime), 3, 1, 1, 1, 3, 2)
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [FechaYHora], [FkPaciente], [FkMedico], [Estado], [Asistio], [FkEstudio], [FkServicio]) VALUES (6, 2, CAST(N'2022-06-10T00:00:00.000' AS DateTime), 3, 1, 0, 1, 3, 2)
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [FechaYHora], [FkPaciente], [FkMedico], [Estado], [Asistio], [FkEstudio], [FkServicio]) VALUES (7, 1, CAST(N'2023-07-04T12:00:00.000' AS DateTime), 5, 2, 0, 0, 2, 3)
INSERT [dbo].[Turno] ([IdTurno], [FkSede], [FechaYHora], [FkPaciente], [FkMedico], [Estado], [Asistio], [FkEstudio], [FkServicio]) VALUES (8, 1, CAST(N'2023-07-04T12:00:00.000' AS DateTime), 5, 2, 1, 0, 2, 3)
SET IDENTITY_INSERT [dbo].[Turno] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (1, N'Nadine Lewit', N'nadueslinda', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (3, N'Juliana Pansowy Furno', N'juliNOeslinda', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (4, N'Daiu Cumple', N'DaiuCumple', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (5, N'Uriel Strauss', N'Uri1234', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (6, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (7, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (8, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (9, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (10, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (11, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (12, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (13, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (14, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (15, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (16, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (17, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (18, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (19, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (20, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (21, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (22, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (23, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (24, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (25, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (26, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (27, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (28, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (29, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (30, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (31, N'Uri', N'Uri4', 2)
INSERT [dbo].[Usuario] ([IdUsuario], [NombreApellido], [Contraseña], [FkRol]) VALUES (32, N'Uri', N'Uri4', 2)
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO
SET IDENTITY_INSERT [dbo].[UsuarioPaciente] ON 

INSERT [dbo].[UsuarioPaciente] ([FkUsuario], [FkPaciente], [IdUsuarioPaciente]) VALUES (1, 2, 1)
INSERT [dbo].[UsuarioPaciente] ([FkUsuario], [FkPaciente], [IdUsuarioPaciente]) VALUES (3, 3, 2)
INSERT [dbo].[UsuarioPaciente] ([FkUsuario], [FkPaciente], [IdUsuarioPaciente]) VALUES (4, 5, 3)
SET IDENTITY_INSERT [dbo].[UsuarioPaciente] OFF
GO
USE [master]
GO
ALTER DATABASE [Hospital] SET  READ_WRITE 
GO
