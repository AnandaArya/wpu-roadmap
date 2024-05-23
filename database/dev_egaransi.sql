-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Sep 2023 pada 14.38
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.3.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dev_egaransi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(12) UNSIGNED NOT NULL,
  `admin_name` varchar(50) DEFAULT NULL,
  `admin_email` varchar(320) NOT NULL,
  `admin_password` varchar(255) NOT NULL,
  `admin_role` int(3) NOT NULL DEFAULT 2,
  `admin_added` datetime DEFAULT current_timestamp(),
  `admin_updated` datetime DEFAULT NULL,
  `admin_deleted` int(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `garansi`
--

CREATE TABLE `garansi` (
  `garansi_id` int(12) UNSIGNED NOT NULL,
  `garansi_jenis` int(12) NOT NULL,
  `garansi_merk` int(12) NOT NULL,
  `garansi_model` varchar(50) NOT NULL,
  `garansi_seri` int(255) DEFAULT NULL,
  `garansi_buy_date` datetime NOT NULL,
  `garansi_time` int(4) NOT NULL,
  `garansi_time_format` int(1) NOT NULL DEFAULT 1 COMMENT '(1 = hari, 2 = minggu, 3 = bulan, 4 = tahun)',
  `garansi_card` varchar(255) DEFAULT NULL,
  `garansi_storage` varchar(255) DEFAULT NULL,
  `garansi_user` int(12) NOT NULL,
  `garansi_added` datetime DEFAULT current_timestamp(),
  `garansi_updated` datetime DEFAULT NULL,
  `garansi_deleted` int(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `garansi`
--

INSERT INTO `garansi` (`garansi_id`, `garansi_jenis`, `garansi_merk`, `garansi_model`, `garansi_seri`, `garansi_buy_date`, `garansi_time`, `garansi_time_format`, `garansi_card`, `garansi_storage`, `garansi_user`, `garansi_added`, `garansi_updated`, `garansi_deleted`) VALUES
(46, 1, 1, 'Elektronik', 123123, '2020-03-18 00:00:00', 1, 3, NULL, 'Meja', 0, '2020-03-18 11:02:48', NULL, 0),
(47, 1, 1, 'Elektronik', 123123, '2020-05-16 00:00:00', 7, 4, NULL, 'Lemari', 0, '2020-04-07 18:41:16', NULL, 1),
(48, 1, 1, 'Laptop', 1231234, '2020-05-16 00:00:00', 2, 3, NULL, 'Lemari', 0, '2020-05-16 20:06:30', NULL, 1),
(49, 1, 1, 'Elektronik', 10202, '2012-11-18 00:00:00', 6, 1, NULL, 'Lemari', 0, '2020-06-10 09:05:49', NULL, 0),
(50, 1, 1, 'Elektronik', 123415, '2020-08-03 00:00:00', 2, 4, NULL, 'Lemari', 0, '2020-08-10 15:48:47', NULL, 0),
(51, 1, 1, 'Elektronik', 1234124, '2023-03-03 00:00:00', 5, 4, NULL, 'Meja', 0, '2023-07-24 23:15:28', NULL, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `jenis`
--

CREATE TABLE `jenis` (
  `jenis_id` int(12) UNSIGNED NOT NULL,
  `jenis_name` varchar(50) NOT NULL,
  `jenis_added` datetime DEFAULT current_timestamp(),
  `jenis_updated` datetime DEFAULT NULL,
  `jenis_deleted` int(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `jenis`
--

INSERT INTO `jenis` (`jenis_id`, `jenis_name`, `jenis_added`, `jenis_updated`, `jenis_deleted`) VALUES
(1, 'Laptop', '2020-01-16 14:58:21', '2020-01-01 00:00:00', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `merk`
--

CREATE TABLE `merk` (
  `merk_id` int(12) UNSIGNED NOT NULL,
  `merk_name` varchar(50) NOT NULL,
  `merk_added` datetime DEFAULT current_timestamp(),
  `merk_updated` datetime DEFAULT NULL,
  `merk_deleted` int(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `merk`
--

INSERT INTO `merk` (`merk_id`, `merk_name`, `merk_added`, `merk_updated`, `merk_deleted`) VALUES
(1, 'Asus', '2020-01-23 10:03:45', NULL, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `role`
--

CREATE TABLE `role` (
  `role_id` int(3) UNSIGNED NOT NULL,
  `role_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, 'SUPER'),
(2, 'ADMIN');

-- --------------------------------------------------------

--
-- Struktur dari tabel `service_center`
--

CREATE TABLE `service_center` (
  `service_id` int(12) UNSIGNED NOT NULL,
  `service_name` varchar(50) NOT NULL,
  `service_address` varchar(255) NOT NULL,
  `service_phone` int(20) DEFAULT NULL,
  `service_location` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `user_id` int(12) UNSIGNED NOT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `user_email` varchar(320) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_added` datetime DEFAULT current_timestamp(),
  `user_updated` datetime DEFAULT NULL,
  `user_deleted` int(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_added`, `user_updated`, `user_deleted`) VALUES
(1, NULL, 'Ridho@gmail.com', '202cb962ac59075b964b07152d234b70', '2020-01-15 11:03:16', NULL, 0),
(2, NULL, 'arya@gmail.com', '202cb962ac59075b964b07152d234b70', '2020-01-15 11:08:46', NULL, 0),
(3, NULL, 'yudha2@gmail.com', '202cb962ac59075b964b07152d234b70', '2020-01-15 13:11:36', NULL, 0),
(4, NULL, 'yudha5@gmail.com', '202cb962ac59075b964b07152d234b70', '2020-01-21 15:57:10', NULL, 0),
(5, NULL, 'yudha111@gmail.com', '202cb962ac59075b964b07152d234b70', '2020-01-21 16:16:03', NULL, 0),
(6, NULL, 'yudha.rifqi.ananta@gmail.com', '202cb962ac59075b964b07152d234b70', '2020-01-22 10:18:14', NULL, 0),
(7, NULL, 'yudha6@gmail.com', '202cb962ac59075b964b07152d234b70', '2020-01-22 16:15:42', NULL, 0),
(8, NULL, 'ridho123@gmail.com', '202cb962ac59075b964b07152d234b70', '2020-03-18 11:06:19', NULL, 0),
(9, NULL, 'anandaarya@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2020-05-16 20:05:29', NULL, 0),
(10, NULL, 'presentasi01@yahoo.com', '81dc9bdb52d04dc20036dbd8313ed055', '2020-06-10 09:04:51', NULL, 0),
(11, NULL, 'ananda@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', '2023-07-24 23:01:37', NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `unique_email` (`admin_email`);

--
-- Indeks untuk tabel `garansi`
--
ALTER TABLE `garansi`
  ADD PRIMARY KEY (`garansi_id`);

--
-- Indeks untuk tabel `jenis`
--
ALTER TABLE `jenis`
  ADD PRIMARY KEY (`jenis_id`),
  ADD UNIQUE KEY `unique_jenis` (`jenis_name`);

--
-- Indeks untuk tabel `merk`
--
ALTER TABLE `merk`
  ADD PRIMARY KEY (`merk_id`),
  ADD UNIQUE KEY `unique_merk` (`merk_name`);

--
-- Indeks untuk tabel `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indeks untuk tabel `service_center`
--
ALTER TABLE `service_center`
  ADD PRIMARY KEY (`service_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `unique_email` (`user_email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(12) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `garansi`
--
ALTER TABLE `garansi`
  MODIFY `garansi_id` int(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT untuk tabel `jenis`
--
ALTER TABLE `jenis`
  MODIFY `jenis_id` int(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `merk`
--
ALTER TABLE `merk`
  MODIFY `merk_id` int(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `service_center`
--
ALTER TABLE `service_center`
  MODIFY `service_id` int(12) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
