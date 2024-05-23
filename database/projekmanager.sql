-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Sep 2023 pada 14.33
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
-- Database: `projekmanager`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `emails`
--

CREATE TABLE `emails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `users_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `emails`
--

INSERT INTO `emails` (`id`, `users_id`, `title`, `email`, `password`, `note`, `created_at`, `updated_at`) VALUES
(2, 1, 'Email Youtube', 'emailku123@gmail.com', 'email001', 'Ada 1000 Subscriber di akun ini', '2021-03-03 21:53:33', '2021-03-03 21:53:33'),
(3, 1, 'Gmail', 'ananda@gmail.com', '123', 'Kosong', '2021-03-04 01:06:32', '2021-03-04 01:06:32'),
(4, 1, 'Email Sekolah', 'sekolahan@gmail.com', '12345', 'Test', '2021-03-06 21:04:02', '2021-03-06 21:04:02');

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `games`
--

CREATE TABLE `games` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `users_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `game_level` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `games`
--

INSERT INTO `games` (`id`, `users_id`, `title`, `game_level`, `username`, `password`, `note`, `gambar`, `created_at`, `updated_at`) VALUES
(4, 1, 'Genshin Impact', '422', 'akunbaru01', 'akunbaru12345', 'Ada  2 Karakter Bintang 5', '60405f8fa2574.jpg', '2021-03-03 21:18:23', '2021-03-04 07:28:49'),
(6, 2, 'Genshin Impact', '30', 'arya', 'testaja123', 'Ada Venti dan WGS', '6040eb933a8ed.jpg', '2021-03-04 07:15:47', '2021-03-04 07:15:47'),
(7, 2, 'Genshin Impact', '55', 'banzai', 'test123', 'Ada 10 Bintang 5', '6046c7047e647.jpg', '2021-03-08 17:53:24', '2021-03-08 17:53:24'),
(8, 1, 'Mobile Legends', '199', 'ananda', '1234', 'Ada 200 Item', '604870a270350.png', '2021-03-10 00:09:22', '2021-03-10 00:09:22'),
(9, 1, 'Mobile Legends', '30', 'xezon@gmail.com', 'xezon123', 'Have 123 Skin and 25 hero', '60cb0bb32d4c9.jpg', '2021-06-17 01:45:39', '2021-06-17 01:45:39'),
(10, 4, 'Mobile Legends', '30', 'admin', '123', 'sadsa', '61314bc11e0a8.png', '2021-09-02 15:10:09', '2021-09-02 15:10:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_03_03_024056_create_emails_table', 1),
(5, '2021_03_03_025445_create_webs_table', 1),
(6, '2021_03_03_030243_create_games_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jenis_kelamin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_telp` bigint(20) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `level`, `email`, `email_verified_at`, `password`, `jenis_kelamin`, `alamat`, `image`, `no_telp`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Ananda Arya', 'user', 'ananda@gmail.com', NULL, '$2y$10$6KUEx71dYsYspt8L395riOWL066MprGfzlwXKM.h.0yqTUY7NMha2', 'laki-laki', 'Banjarmasin, Jl. HKSN NO 42', 'default.png', 89112345112, NULL, '2021-03-02 23:04:42', '2021-03-02 23:04:42'),
(2, 'User', 'user', 'user@gmail.com', NULL, '$2y$10$hZ3yD0wtAmVEiK2f7BTBveg68vLNaY2vKzvN2eLkebN4RaeoFsIqu', 'laki-laki', 'Jl. Banua Anyar NO 82, Banjarmasin Utara', '6040dfaeb3604.png', 12345123, NULL, '2021-03-04 06:25:02', '2021-03-04 06:25:02'),
(3, 'Vorius', 'user', 'voruis@yahoo.com', NULL, '$2y$10$lrqnNYa42nR9VAkeHgZVYOSgpjTc89NkAZjp.hY3Ri9uVmZ1XkwCu', 'Laki-laki', 'Jl. Gajah Mdaha no 28, Yogyakarta', '6040e12d05a73.png', 81254678712, NULL, '2021-03-04 06:31:25', '2021-03-04 06:31:25'),
(4, 'Arya Pratama', 'user', 'anandaar0404@gmail.com', NULL, '$2y$10$DOzyPGgjaHtSZ1rJQWngueLHLRugEB0vRnmTI7C5JxCrwFUMeEozq', 'Laki-laki', 'Jl. Gajah Mdaha no 28, Yogyakarta', '6131491548088.png', 81254678712, NULL, '2021-09-02 14:58:45', '2021-09-02 14:58:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `webs`
--

CREATE TABLE `webs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `users_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `webs`
--

INSERT INTO `webs` (`id`, `users_id`, `title`, `url`, `email`, `password`, `note`, `created_at`, `updated_at`) VALUES
(4, 1, 'Web Corona', 'https://www.cegahcorona.epizy.com', 'admin@gmail.com', 'admin', 'REAL TIME CORONA', '2021-03-04 00:14:31', '2021-03-04 00:14:31'),
(5, 1, 'Corona', 'https://www.cegahcorona.epizy.com', 'doddy@gmail.com', 'ananda123', 'Web Corona Realtime data', '2021-03-04 00:20:25', '2021-03-04 00:20:25'),
(6, 1, 'Mobile Legends', 'google.com', 'admin@gmail.com', '123', 'asd', '2021-03-04 00:20:56', '2021-03-04 00:20:56'),
(7, 1, 'Web Restoran', 'https://webrestos.000webhostapp.com/', 'aryapratama@gmail.com', 'arya123', 'Pernah Makan 2x disini', '2021-03-04 05:15:35', '2021-03-04 05:15:35'),
(8, 1, 'Web Sekolah', 'http://sekolahanweb.000webhostapp.com/', 'admin', 'admon', 'Web Sekolah', '2021-03-04 05:17:19', '2021-03-04 05:27:09'),
(9, 1, 'Web Klinik', 'https://klinik-anugerah.000webhostapp.com/dokter', 'nuge', 'rahasia', 'Jabatan Administrator', '2021-03-04 05:19:45', '2021-03-04 05:19:45');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `emails`
--
ALTER TABLE `emails`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indeks untuk tabel `webs`
--
ALTER TABLE `webs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `emails`
--
ALTER TABLE `emails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `games`
--
ALTER TABLE `games`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `webs`
--
ALTER TABLE `webs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
