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
-- Database: `projekresto`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `masakans`
--

CREATE TABLE `masakans` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kategori` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `harga` int(11) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `masakans`
--

INSERT INTO `masakans` (`id`, `nama`, `kategori`, `harga`, `status`, `gambar`, `created_at`, `updated_at`) VALUES
(1, 'Mie Goreng', 'makanan', 20000, 'tersedia', '5fac11c71e032.png', '2020-11-11 09:31:03', '2020-11-17 07:21:18'),
(2, 'Nasi Goreng', 'makanan', 15000, 'tersedia', '5fac245fe5249.png', '2020-11-11 10:50:23', '2020-11-17 01:12:02'),
(3, 'Es Teh', 'minuman', 5000, 'tersedia', '5fafeb889380b.jpg', '2020-11-14 07:36:56', '2020-11-16 07:09:47'),
(4, 'Es Jeruk', 'minuman', 5000, 'tersedia', '5fafebab1738f.jpg', '2020-11-14 07:37:31', '2020-11-15 21:20:50'),
(5, 'Nasi Kuning', 'makanan', 10000, 'tersedia', '5fb287716fdac.jpg', '2020-11-16 07:06:41', '2020-11-17 01:14:50'),
(6, 'Lontong', 'makanan', 13000, 'tersedia', '5fb2c5b1d8af8.jpg', '2020-11-16 11:32:17', '2020-11-17 01:15:04'),
(7, 'Mie Mawut', 'makanan', 80000, 'tersedia', '5fb3d3784b10e.jpg', '2020-11-17 06:43:20', '2020-11-17 06:43:20'),
(8, 'Nasi Ayam', 'makanan', 20000, 'tersedia', '5fb3dc2764021.jpg', '2020-11-17 07:20:23', '2020-11-17 07:20:23');

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
(20, '2014_10_12_000000_create_users_table', 1),
(21, '2014_10_12_100000_create_password_resets_table', 1),
(22, '2019_08_19_000000_create_failed_jobs_table', 1),
(23, '2020_11_08_053813_create_masakans_table', 1),
(24, '2020_11_15_061148_create_orders_table', 2),
(25, '2020_11_16_081036_create_transactions_table', 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `meja_id` int(11) NOT NULL,
  `masakan_id` int(11) NOT NULL,
  `jumlah` bigint(20) NOT NULL,
  `total_harga` bigint(20) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggal` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `meja_id`, `masakan_id`, `jumlah`, `total_harga`, `status`, `tanggal`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 2, 40000, 'selesai', '2020-11-16', '2020-11-15 07:51:19', '2020-11-17 06:42:16'),
(2, 1, 2, 1, 20000, 'selesai', '2020-11-16', '2020-11-15 07:57:05', '2020-11-17 06:42:16'),
(3, 2, 2, 1, 20000, 'selesai', '2020-11-16', '2020-11-15 18:17:16', '2020-11-17 02:07:01'),
(4, 2, 2, 2, 40000, 'selesai', '2020-11-16', '2020-11-15 21:10:27', '2020-11-17 02:07:01'),
(5, 3, 1, 3, 60000, 'selesai', '2020-11-16', '2020-11-15 21:11:02', '2020-11-17 00:31:02'),
(6, 4, 2, 2, 30000, 'selesai', '2020-11-16', '2020-11-15 22:00:03', '2020-11-16 18:10:24'),
(7, 4, 3, 1, 5000, 'selesai', '2020-11-16', '2020-11-15 22:00:26', '2020-11-16 18:10:24'),
(8, 4, 2, 3, 45000, 'selesai', '2020-11-16', '2020-11-16 00:45:52', '2020-11-16 18:10:24'),
(9, 4, 2, 1, 15000, 'selesai', '2020-11-16', '2020-11-16 00:46:24', '2020-11-16 18:10:24'),
(10, 4, 1, 2, 40000, 'selesai', '2020-11-16', '2020-11-16 05:24:39', '2020-11-16 18:10:24'),
(11, 4, 3, 1, 5000, 'selesai', '2020-11-16', '2020-11-16 05:24:57', '2020-11-16 18:10:24'),
(12, 5, 2, 2, 30000, 'selesai', '2020-11-16', '2020-11-16 06:19:25', '2020-11-17 00:36:15'),
(13, 4, 2, 1, 15000, 'selesai', '2020-11-16', '2020-11-16 07:16:10', '2020-11-16 18:10:24'),
(14, 4, 3, 1, 5000, 'selesai', '2020-11-16', '2020-11-16 07:16:29', '2020-11-16 18:10:24'),
(15, 5, 1, 2, 40000, 'selesai', '2020-11-17', '2020-11-16 17:36:56', '2020-11-17 00:36:15'),
(16, 3, 3, 1, 5000, 'selesai', '2020-11-17', '2020-11-16 17:38:01', '2020-11-17 00:31:02'),
(17, 6, 1, 2, 40000, 'selesai', '2020-11-16', '2020-11-16 17:39:48', '2020-11-17 07:19:03'),
(18, 5, 4, 2, 10000, 'selesai', '2020-11-17', '2020-11-16 17:42:06', '2020-11-17 00:36:15'),
(19, 7, 1, 2, 40000, 'selesai', '2020-11-17', '2020-11-16 18:37:09', '2020-11-17 00:36:55'),
(20, 3, 2, 2, 30000, 'selesai', '2020-11-17', '2020-11-16 19:23:50', '2020-11-17 00:31:02'),
(21, 2, 1, 2, 40000, 'selesai', '2020-11-17', '2020-11-17 00:37:45', '2020-11-17 02:07:01'),
(22, 2, 1, 2, 40000, 'selesai', '2020-11-17', '2020-11-17 00:46:22', '2020-11-17 02:07:01'),
(23, 1, 1, 1, 20000, 'selesai', '2020-11-17', '2020-11-17 02:07:36', '2020-11-17 06:42:16'),
(24, 1, 3, 1, 5000, 'selesai', '2020-11-17', '2020-11-17 02:07:43', '2020-11-17 06:42:16'),
(25, 1, 1, 1, 20000, 'selesai', '2020-11-17', '2020-11-17 02:19:18', '2020-11-17 06:42:16'),
(26, 1, 3, 1, 5000, 'selesai', '2020-11-17', '2020-11-17 02:19:32', '2020-11-17 06:42:16'),
(27, 2, 1, 1, 20000, 'proses', '2020-11-17', '2020-11-17 03:40:43', '2020-11-17 03:40:43'),
(28, 1, 3, 1, 5000, 'selesai', '2020-11-17', '2020-11-17 03:40:50', '2020-11-17 06:42:16'),
(29, 6, 2, 1, 15000, 'selesai', '2020-11-17', '2020-11-17 04:56:14', '2020-11-17 07:19:03'),
(30, 5, 6, 1, 13000, 'proses', '2020-11-17', '2020-11-17 04:56:31', '2020-11-17 04:56:31'),
(31, 2, 4, 1, 5000, 'proses', '2020-11-17', '2020-11-17 04:56:50', '2020-11-17 04:56:50'),
(32, 1, 1, 1, 20000, 'selesai', '2020-11-17', '2020-11-17 06:40:56', '2020-11-17 06:42:16'),
(33, 1, 3, 1, 5000, 'selesai', '2020-11-17', '2020-11-17 06:41:09', '2020-11-17 06:42:16'),
(34, 6, 2, 1, 15000, 'selesai', '2020-11-17', '2020-11-17 07:17:41', '2020-11-17 07:19:03'),
(35, 6, 3, 1, 5000, 'selesai', '2020-11-17', '2020-11-17 07:18:02', '2020-11-17 07:19:03');

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
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `meja_id` int(11) NOT NULL,
  `nama_masakan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_harga` bigint(20) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggal` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `meja_id`, `nama_masakan`, `total_harga`, `status`, `tanggal`, `created_at`, `updated_at`) VALUES
(1, 2, 'Nasi Goreng,Nasi Goreng', 60000, 'selesai', '2020-11-16', '2020-11-16 06:31:29', '2020-11-16 06:31:29'),
(2, 4, 'Mie Goreng,Es Teh', 45000, 'selesai', '2020-11-16', '2020-11-16 07:13:56', '2020-11-16 07:13:56'),
(3, 4, 'Nasi Goreng,Es Teh,Es Teh,Mie Goreng', 65000, 'selesai', '2020-11-16', '2020-11-16 07:17:19', '2020-11-16 07:17:19'),
(4, 4, 'Mie Goreng,Nasi Goreng,Es Teh,Es Teh', 65000, 'selesai', '2020-11-16', '2020-11-16 09:03:25', '2020-11-16 09:03:25'),
(5, 1, 'Mie Goreng,Es Teh', 25000, 'selesai', '2020-11-17', '2020-11-17 02:21:47', '2020-11-17 02:21:47'),
(6, 1, 'Es Teh', 5000, 'selesai', '2020-11-17', '2020-11-17 03:41:07', '2020-11-17 03:41:07'),
(7, 1, 'Mie Goreng,Es Teh', 25000, 'selesai', '2020-11-17', '2020-11-17 06:42:16', '2020-11-17 06:42:16'),
(8, 6, 'Nasi Goreng,Nasi Goreng,Es Teh', 35000, 'selesai', '2020-11-17', '2020-11-17 07:19:03', '2020-11-17 07:19:03');

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
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_telp` bigint(20) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `level`, `email`, `email_verified_at`, `password`, `jenis_kelamin`, `alamat`, `gambar`, `no_telp`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Ananda Arya', 'admin', 'admin@gmail.com', NULL, '$2y$10$Wv1En0naUQ8AfGJobGxhZOL8XooKLhdm7.FC4th1t0xfxpQ2LgGS.', 'laki-laki', 'Jl. HKSN NO 82, Banjarmasin Utara', 'user1.jpg', 123456, 'XHJ26aGalZ1scI71E3WrKYZDSgwCIN6FxJBVSuosZOoJGrXlMyT9u4F8m0Gg', '2020-11-11 09:03:35', '2020-11-17 04:57:55'),
(3, 'Abdul Wahid', 'admin', 'abdul@gmail.com', NULL, '12345', 'laki-laki', 'Banjarmasin', '5faf78e4587c6.png', 89301823, NULL, '2020-11-11 10:33:18', '2020-11-17 04:58:08'),
(5, 'Pelanggan', 'admin', 'pelanggan@gmail.com', NULL, '$2y$10$ArUpwhtGwqVmVh3pzUexweiPhkRUW1fUs6yoeMI34Sk96YBynK0zK', 'laki-laki', 'Jl. Banua Anyar NO 82, Banjarmasin Utara', '5fb29919cf481.png', 81254678712, NULL, '2020-11-16 08:22:01', '2020-11-17 04:58:15'),
(6, 'Waiter', 'waiter', 'waiter@gmail.com', NULL, '$2y$10$rUM8noQbrsUDaq5Wr/Tf.OicAwBfAa9q6zZKeke26gwwuMVIN77UO', 'laki-laki', 'Jl. Sungai Andai NO 82, Banjarmasin Utara', '5fb29def45b16.png', 81952678712, NULL, '2020-11-16 08:42:39', '2020-11-17 07:05:58'),
(7, 'dapur', 'dapur', 'dapur@gmail.com', NULL, '$2y$10$NaKi98z5qeLurxdy.bhCLuXUC9mc.Fe8rkJHxLrAZv60.jQtTkNVu', 'laki-laki', 'Jl. Sungai Kindaung  NO 82, Banjarmasin Utara', '5fb29f20ef416.png', 85354678712, NULL, '2020-11-16 08:47:45', '2020-11-17 07:06:34'),
(8, 'testuser', 'user', 'testuser@gmail.com', NULL, '$2y$10$q.MD4kZr3wz0VDEq3enXl./7GZMr7cEcH5F3h7XMETorW/Q/QzHae', 'laki-laki', 'Jl. Gajah Mdaha no 28, Yogyakarta', '5fb3b2c516fd8.png', 82354678712, NULL, '2020-11-17 04:23:49', '2020-11-17 04:23:49'),
(9, 'naruto', 'admin', 'naruto@gmail.com', NULL, '$2y$10$mVRpGMLGCH5Ox/EB1sZjG.EwuokbPkMCpBC3VRZgNX.y0/tHKGmp.', 'laki-laki', 'Jl. Banua Anyar NO 82, Banjarmasin Utara', '5fb3d2c302984.png', 8120321313, NULL, '2020-11-17 06:40:19', '2020-11-17 06:44:40'),
(10, 'sasuke', 'user', 'sasuke@gmail.com', NULL, '$2y$10$nF4p9SKwxI5D1cbxEmffteqfTtaOSVygA1u8f5JBBj8o9i/3gqStm', 'laki-laki', 'Jl. Banua Anyar NO 82, Banjarmasin Utara', '5fb3da388e293.png', 81242781232, NULL, '2020-11-17 07:12:08', '2020-11-17 07:12:08'),
(11, 'Ananda Ar Ridho', 'user', 'anandaridho@gmail.com', NULL, '$2y$10$ksdoyaoIG/rLoXtyfUz41.Fa6IQss0z8kdMNmA.WWz612Lh94hUK.', 'laki-laki', 'Jl. Pangeran Antasari NO 82, Banjarmasin Utara', '5fb3dac19b40e.png', 82354678222, NULL, '2020-11-17 07:14:25', '2020-11-17 07:14:25'),
(12, 'Ridho', 'admin', 'ridho01@gmail.com', NULL, '$2y$10$0QQ52dl5A8aXRoji69UbwOfso2lZijELfblOQQDX5E7xSm0REB8kq', 'laki-laki', 'Jl. Brigjen hasan basri No 82, Banjarmasin Utara', '5fb3db55b5c56.png', 84354678712, NULL, '2020-11-17 07:16:53', '2020-11-17 07:21:59'),
(13, 'nugee', 'user', 'nuge@gmail.com', NULL, '$2y$10$P8K8CG.2UhLbZbtUpxsyn./yRgqXAkU4m/7qH2PqvdZi/VlVYbXf.', 'laki-laki', 'Banjarmasin', '601df890b4988.png', 81254678712, NULL, '2021-02-05 19:01:52', '2021-02-05 19:01:52'),
(14, 'user', 'user', 'user@gmail.com', NULL, '$2y$10$ER.qE4XSGd.t.hOW/9P0auI2fxHbhNCfrTOXDs7dAeytbl03t0Usa', 'laki-laki', 'Yogyakarta', '64b0e18791e6f.jpg', 81234567890, NULL, '2023-07-13 22:47:51', '2023-07-13 22:47:51'),
(15, 'ananda', 'user', 'ananda@gmail.com', NULL, '$2y$10$9Yw1hm04xUpR5KiPQ9jcaOad6kmmp8uZ16CMX24mY5KTkLt6ZXOdO', 'laki-laki', 'Yogyakarta', '64b0e1ae5d538.jpg', 81234567890, NULL, '2023-07-13 22:48:30', '2023-07-13 22:48:30'),
(16, 'ricell', 'user', 'ricell@gmail.com', NULL, '$2y$10$OrvPM1FUYU7mH/zMIfX82eOd.KbY9atIPOBunxx0M7hY.baUWNkjG', 'laki-laki', 'Yogyakarta', '64b0e23758dea.jpg', 81234567890, NULL, '2023-07-13 22:50:47', '2023-07-13 22:50:47');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `masakans`
--
ALTER TABLE `masakans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
