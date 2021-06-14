-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 10, 2021 at 10:44 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `ID_restaurant` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `address` varchar(100) NOT NULL,
  `lat` decimal(17,15) NOT NULL,
  `lng` decimal(17,16) NOT NULL,
  `Kind_food` set('Mexicà','Vegetarià','Mediterrani','Japonés','Libanés','Indi','Italià') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`ID_restaurant`, `name`, `address`, `lat`, `lng`, `Kind_food`) VALUES
(1, 'La Pachuca', 'Carrer d\'en Carabassa, 19, 08002 Barcelona', '41.380152219125700', '2.1797073320004063', 'Mexicà'),
(2, 'Oaxaca', 'Pla de Palau, 19, 08003 Barcelona\r\n\r\n', '41.382172520583630', '2.1840083253739110', 'Mexicà,Vegetarià'),
(3, 'La Gavina', 'Plaça de Pau Vila, 1, 08039 Palau De Mar, Barcelona', '41.381600400728430', '2.1854041255715204', 'Mediterrani'),
(4, 'The Green Spot', 'Carrer de la Reina Cristina, 12, 08003 Barcelona', '41.382147639124256', '2.1839020880886384', 'Vegetarià,Mediterrani'),
(5, 'Honest Green Born', 'Pla de Palau, 11, 08003 Barcelona', '41.383685418039605', '2.1836702280101060', 'Vegetarià'),
(6, 'Takumi Sapporo Ramen Kitchen', 'Via Laietana, 32, 08003 Barcelona', '41.385140629739105', '2.1774248283505240', 'Japonés'),
(7, 'Restaurante Beirut', 'Carrer de Josep Anselm Clavé, 7, 08002 Barcelona', '41.378400641536150', '2.1778721825791780', 'Libanés'),
(8, 'Bombay Spicy Restaurant', 'Carrer de Sant Pau, 16, 18, 08001 Barcelona', '41.380845979505020', '2.1729320847270737', 'Indi'),
(9, 'Restaurante Italiano Rossini', 'Pl. Reial, 13, 08002 Barcelona', '41.380553159180040', '2.1745144385083592', 'Italià'),
(10, 'Restaurante La Tagliatella', 'Ronda de la Universitat, 31, 08007 Barcelona', '41.387192622132820', '2.1672743479438600', 'Mediterrani,Italià');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`ID_restaurant`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
