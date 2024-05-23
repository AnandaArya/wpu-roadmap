-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Sep 2023 pada 14.40
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
-- Database: `penjadwalan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `guru`
--

CREATE TABLE `guru` (
  `nip` varchar(20) NOT NULL,
  `nama` varchar(40) NOT NULL,
  `jenkel` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `guru`
--

INSERT INTO `guru` (`nip`, `nama`, `jenkel`) VALUES
('1082145', 'Bapak Johansyah', 'Laki-laki'),
('123123', 'Bapak Murni', 'Laki-laki'),
('1234567', 'Bapak Ory rahman', 'Laki-laki');

-- --------------------------------------------------------

--
-- Struktur dari tabel `jadwal_sekolah`
--

CREATE TABLE `jadwal_sekolah` (
  `id_jadwal` varchar(20) NOT NULL,
  `tanggal` date NOT NULL,
  `jam_mulai` varchar(10) NOT NULL,
  `jam_akhir` varchar(10) NOT NULL,
  `kode_jurusan` varchar(10) NOT NULL,
  `kode_kelas` varchar(10) NOT NULL,
  `nip` varchar(20) NOT NULL,
  `kode_mata_pelajaran` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `jadwal_sekolah`
--

INSERT INTO `jadwal_sekolah` (`id_jadwal`, `tanggal`, `jam_mulai`, `jam_akhir`, `kode_jurusan`, `kode_kelas`, `nip`, `kode_mata_pelajaran`) VALUES
('01', '2020-01-01', '08:00', '09:00', 'KTKJD9', 'TKJD08', '123123', '04'),
('02', '2020-01-01', '09:00', '15:00', 'KTKJD9', 'TKJD08', '123123', '04'),
('03', '2020-01-01', '15:00', '16:00', 'FXRPLD0', 'RPLXI0D2', '1234567', '01'),
('04', '2020-01-01', '16:00', '18:00', 'FXRPLD0', 'RPLXI0D2', '1234567', '02'),
('05', '2021-03-02', '08:00', '10:00', 'JTB01', 'BG10X', '1234567', '02');

-- --------------------------------------------------------

--
-- Struktur dari tabel `jurusan`
--

CREATE TABLE `jurusan` (
  `kode_jurusan` varchar(10) NOT NULL,
  `nama_jurusan` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `jurusan`
--

INSERT INTO `jurusan` (`kode_jurusan`, `nama_jurusan`) VALUES
('FXRPLD0', 'Rekayasa Perangkat Lunak'),
('JRSN01', 'Pemograman Web'),
('JTB01', 'Tata Busana'),
('KTKJD9', 'Tenik Komputer dan Jaringan'),
('XBGA8E', 'Tata Boga');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kelas`
--

CREATE TABLE `kelas` (
  `kode_kelas` varchar(10) NOT NULL,
  `nama_kelas` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kelas`
--

INSERT INTO `kelas` (`kode_kelas`, `nama_kelas`) VALUES
('BG03', 'XI-BOGA-3'),
('BG10X', 'X-BOGA-1'),
('BSN01', 'XI-Busana-2'),
('FGRPL02', 'XI-RPL-1'),
('RPLXI0D2', 'XII-RPL-2'),
('TKJD08', 'XII-TKJ-2');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mata_pelajaran`
--

CREATE TABLE `mata_pelajaran` (
  `kode_mata_pelajaran` varchar(10) NOT NULL,
  `nama_mata_pelajaran` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `mata_pelajaran`
--

INSERT INTO `mata_pelajaran` (`kode_mata_pelajaran`, `nama_mata_pelajaran`) VALUES
('01', 'Desain Grafiss'),
('02', 'Pemograman Web'),
('03', 'Matematika'),
('04', 'PPKN'),
('05', 'PBO'),
('06', 'BAPAK HIDAYATULLAH');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `guru`
--
ALTER TABLE `guru`
  ADD PRIMARY KEY (`nip`);

--
-- Indeks untuk tabel `jadwal_sekolah`
--
ALTER TABLE `jadwal_sekolah`
  ADD PRIMARY KEY (`id_jadwal`),
  ADD KEY `kode_jurusan` (`kode_jurusan`),
  ADD KEY `kode_kelas` (`kode_kelas`),
  ADD KEY `nip` (`nip`),
  ADD KEY `kode_mata_pelajaran` (`kode_mata_pelajaran`);

--
-- Indeks untuk tabel `jurusan`
--
ALTER TABLE `jurusan`
  ADD PRIMARY KEY (`kode_jurusan`);

--
-- Indeks untuk tabel `kelas`
--
ALTER TABLE `kelas`
  ADD PRIMARY KEY (`kode_kelas`);

--
-- Indeks untuk tabel `mata_pelajaran`
--
ALTER TABLE `mata_pelajaran`
  ADD PRIMARY KEY (`kode_mata_pelajaran`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `jadwal_sekolah`
--
ALTER TABLE `jadwal_sekolah`
  ADD CONSTRAINT `jadwal_sekolah_ibfk_1` FOREIGN KEY (`kode_jurusan`) REFERENCES `jurusan` (`kode_jurusan`),
  ADD CONSTRAINT `jadwal_sekolah_ibfk_2` FOREIGN KEY (`kode_mata_pelajaran`) REFERENCES `mata_pelajaran` (`kode_mata_pelajaran`),
  ADD CONSTRAINT `jadwal_sekolah_ibfk_3` FOREIGN KEY (`nip`) REFERENCES `guru` (`nip`),
  ADD CONSTRAINT `jadwal_sekolah_ibfk_4` FOREIGN KEY (`kode_kelas`) REFERENCES `kelas` (`kode_kelas`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
