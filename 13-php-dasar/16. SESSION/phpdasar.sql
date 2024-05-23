-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Apr 2021 pada 08.49
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
-- Database: `phpdasar`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `id` int(11) NOT NULL,
  `nrp` char(9) NOT NULL,
  `nama` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `jurusan` varchar(64) NOT NULL,
  `gambar` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `mahasiswa`
--

INSERT INTO `mahasiswa` (`id`, `nrp`, `nama`, `email`, `jurusan`, `gambar`) VALUES
(1, '123123120', 'Pratama', 'ananda@gmail.com', 'Tekni Mesin', '1.jpg'),
(2, '123123121', 'Reza', 'reza@yahoo.com', 'Teknik Informatika', '5e44cce973203.jpg'),
(3, '123123122', 'Ihza', 'Ihza@gmail.com', 'Ekonomi', '3.jpg'),
(4, '123123123', 'Firdaus', 'firdaus@yahoo.com', 'Teknik Mesin', '4.jpg'),
(5, '123123124', 'Rizky', 'rizky@gmailcom', 'Teknik Elektro', '5.jpg'),
(6, '123123125', 'Pratama', 'pratama@gmail.com', 'Teknik Informatika', '6.jpg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'ananda', '$2y$10$JSjzZJY2iqN2PfkPOg8Ix.IS4nVah4g3YWqo2NUjnEVy2txLHAq9S'),
(2, 'admin', '$2y$10$AEAOnkHp5QZg/yE458sGxuPGbx4sekZ0eYdOWUXb8NvpKS8hZvGLO'),
(3, 'yudha', '$2y$10$Pwdp/XoI2wi581QyNt.DK.9ajraywP1.4LN6fyhYMfq.r10xN.5Le'),
(4, 'arya', '$2y$10$EJK2WV6sfsV.boDjwYX0wegFOzuHFsJg6KEtOK.cNjLcbDyrqaoFW'),
(5, 'testing', '$2y$10$Swm8wy3l7NRJcqLn8W9Mk.udCYEpRlxGUWmy.FyF5.y3TwAjc8hau'),
(6, 'aku', '$2y$10$BV1iKeAZ6uNsd9Uwmt5POuH3gGC7LRXhDN54svsE7vPF0ZsFfr.bS'),
(7, 'dia', '$2y$10$9ELO7y04qHPQGXTDXW1gF.wytVNNtL9COjq2ZAPOfJwCaCNy4jEx.'),
(8, 'acer', '$2y$10$9NrZyg3QTraisCoLI8RKFOOPsq7TGk4SvkDMuRAXQnmi/jtbUhBR.'),
(9, 'coba', '$2y$10$PRcDlSAjyX8x491OpgqY2.IdzIn0KT84a3zY1wQPgPDNbZU/YVoLa'),
(10, 'adi', '$2y$10$fvjoJPRrGRfWHPIi4C87FOKdatSaLWccF496PJT3vq2nvCizcc9ki');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
