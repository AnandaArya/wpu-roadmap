-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Sep 2023 pada 14.31
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
-- Database: `tampillink3`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `buttons`
--

CREATE TABLE `buttons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `style` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `buttons`
--

INSERT INTO `buttons` (`id`, `name`, `image`, `style`, `created_at`, `updated_at`) VALUES
(1, 'radius', 'button_radius_image.jpg', 'btn-radius', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `cards`
--

CREATE TABLE `cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` bigint(20) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `cards`
--

INSERT INTO `cards` (`id`, `user_id`, `text`, `image`, `order`, `created_at`, `updated_at`) VALUES
(1, 2, 'Hoodie', '1634116839.png', 3, '2021-10-13 02:20:39', '2023-07-14 06:28:23'),
(9, 2, 'Hoodie 2', '64b0f343b616f1689318211.png', 0, '2023-07-14 08:03:31', '2023-07-14 08:03:31');

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
-- Struktur dari tabel `fonts`
--

CREATE TABLE `fonts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cdn` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `fonts`
--

INSERT INTO `fonts` (`id`, `name`, `image`, `cdn`, `created_at`, `updated_at`) VALUES
(1, 'Roboto', 'roboto_image.jpg', '<link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap\" rel=\"stylesheet\">', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `icons`
--

CREATE TABLE `icons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unicode` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `icons`
--

INSERT INTO `icons` (`id`, `name`, `icon`, `unicode`, `image`, `created_at`, `updated_at`) VALUES
(8, 'whatsapp', 'fab fa-whatsapp', '&#xf232;', 'whatsapp.png', '2021-10-15 02:12:42', '2021-10-15 02:12:42'),
(9, 'instagram', 'fab fa-instagram', '&#xf16d;', 'instagram.png', '2021-10-15 02:15:27', '2021-10-15 02:15:27'),
(10, 'facebook', 'fab fa-facebook-square', '&#xf082;', 'facebook.png', '2021-10-15 02:16:34', '2021-10-15 02:16:34'),
(11, 'tiktok', 'fab fa-tiktok', 'fab fa-tiktok', '6168d7b03ebfa.png', '2021-10-15 02:21:52', '2021-10-15 02:21:52'),
(12, 'twitch', 'fab fa-twitch', '&#xf1e8;', '6168d9a76ebac.png', '2021-10-15 02:30:15', '2021-10-15 02:30:15'),
(14, 'youtube', 'fab fa-youtube', '&#xf167;', '6168dc1e07155.png', '2021-10-15 02:40:46', '2021-10-15 02:40:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `links`
--

CREATE TABLE `links` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` bigint(20) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `links`
--

INSERT INTO `links` (`id`, `user_id`, `title`, `url`, `image`, `order`, `created_at`, `updated_at`) VALUES
(5, 2, 'Facebook', 'https://www.facebook.com/mark', '616771e1411e4.jpg', 3, '2021-10-13 16:55:13', '2023-07-14 06:38:25'),
(11, 2, 'Youtube', 'https://YouTube.com', '616de95fd7314.png', 1, '2021-10-18 22:38:39', '2023-07-14 06:28:54');

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
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2021_08_30_021516_create_links_table', 1),
(6, '2021_09_08_025618_create_icons_table', 1),
(7, '2021_09_26_061811_create_cards_table', 1),
(8, '2021_09_26_062048_create_socials_table', 1),
(9, '2021_09_26_062235_create_themes_table', 1),
(10, '2021_09_26_070042_create_fonts_table', 1),
(11, '2021_09_27_071031_create_buttons_table', 1),
(12, '2021_10_11_200135_create_visits_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('user@gmail.com', '$2y$10$psN6xrm4Z8LtnDLwsRNgKeEAH0TSDAtNsFGMMNA44k4ugQ5VNxZcy', '2021-10-15 06:55:34'),
('ridho@banjart.com', '$2y$10$H0Oh76k4utQWjEleB5FIMuVMf9hgLDdyFl0gn8HY4bbin865Co0gS', '2021-10-19 01:42:52');

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `socials`
--

CREATE TABLE `socials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon_id` bigint(20) UNSIGNED NOT NULL,
  `order` bigint(20) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `socials`
--

INSERT INTO `socials` (`id`, `user_id`, `url`, `icon_id`, `order`, `created_at`, `updated_at`) VALUES
(4, 2, 'https://instagram.com/ananda', 8, 6, '2021-10-15 02:16:58', '2021-10-19 01:23:51'),
(5, 2, 'https://Facebook.com', 10, 1, '2021-10-15 02:17:06', '2021-10-19 01:23:51'),
(7, 2, 'https://instagram.com/ananda', 14, 3, '2021-10-15 02:40:57', '2021-10-19 01:23:51'),
(8, 2, 'asd', 12, 4, '2021-10-15 03:01:17', '2021-10-19 01:23:51'),
(9, 2, 'dsa', 11, 5, '2021-10-15 03:01:24', '2021-10-19 01:23:51'),
(11, 2, 'https://www.cegahcorona.epizy.com', 9, 2, '2021-10-15 03:43:47', '2021-10-19 01:23:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `themes`
--

CREATE TABLE `themes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `background` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text_color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `button_text_color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `button_bg_color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `button_id` bigint(20) UNSIGNED NOT NULL,
  `font_id` bigint(20) UNSIGNED NOT NULL,
  `order` bigint(20) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `themes`
--

INSERT INTO `themes` (`id`, `user_id`, `name`, `image`, `background`, `text_color`, `button_text_color`, `button_bg_color`, `button_id`, `font_id`, `order`, `created_at`, `updated_at`) VALUES
(1, 1, 'minimalis', 'theme1.png', 'minimal_background.jpg', 'black', 'white', 'lightblue', 1, 1, 1, NULL, NULL),
(2, 1, 'theme2', 'theme2.png', 'white', 'black', 'black', 'white', 1, 1, 2, NULL, NULL),
(3, 1, 'theme3', 'theme3.png', 'white', 'black', 'black', 'white', 1, 1, 3, NULL, NULL),
(4, 1, 'theme4', 'theme4.png', 'white', 'black', 'black', 'white', 1, 1, 4, NULL, NULL),
(5, 1, 'theme6', 'theme6.png', 'white', 'black', 'black', 'white', 1, 1, 5, NULL, NULL),
(6, 1, 'theme6', 'theme6.png', 'white', 'black', 'black', 'white', 1, 1, 6, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.jpg',
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `no_telp` bigint(20) NOT NULL,
  `theme_id` bigint(20) UNSIGNED NOT NULL DEFAULT 1,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `email_verified_at`, `password`, `about`, `image`, `role`, `no_telp`, `theme_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'administrator', 'admin', 'tampillink@gmail.com', NULL, '$2y$10$fGIk4aCVBu/Q2kdXm1diBui6TTQgpGy/Co2EHuL6pTEno1Nmlad.O', '', 'default.jpg', 'admin', 896123123, 1, NULL, '2021-10-15 01:31:10', '2021-10-15 01:32:16'),
(2, 'user', 'user', 'user@gmail.com', NULL, '$2y$10$P5dgxgkUn9DDdrafKisUP.tCc2EdZ9DcNSEdiBk2ZkBvvUX2sRJqq', 'dsdsdss', '616e0cf10debb1634602225.png', 'user', 8123456, 6, NULL, NULL, '2023-07-14 08:03:46'),
(8, 'ridho', 'tester12', 'ridho@banjart.com', NULL, '$2y$10$eI/N1lXb95CwuwSlDNMDH.T8fWm1JdcTqjJMoRmxzz4TtXy8Ow7w6', '', 'default.jpg', 'user', 81231, 1, 'WOWWpitN1R6uxb2MCHuJuWE6JZAxhlmwctfcCGkEO6CswcA3ua3SaTvYwNze', '2021-10-15 06:56:52', '2021-10-15 07:14:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `visits`
--

CREATE TABLE `visits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `link_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `visits`
--

INSERT INTO `visits` (`id`, `link_id`, `created_at`, `updated_at`) VALUES
(8, 5, '2021-10-13 16:55:25', '2021-10-13 16:55:25'),
(15, 5, '2021-10-14 05:45:56', '2021-10-14 05:45:56'),
(16, 5, '2021-10-14 05:45:58', '2021-10-14 05:45:58'),
(17, 5, '2021-10-14 06:05:39', '2021-10-14 06:05:39'),
(18, 5, '2021-10-14 14:40:32', '2021-10-14 14:40:32'),
(19, 5, '2021-10-14 14:40:39', '2021-10-14 14:40:39'),
(21, 5, '2021-10-14 14:43:54', '2021-10-14 14:43:54'),
(22, 5, '2021-10-14 22:52:46', '2021-10-14 22:52:46'),
(27, 5, '2021-10-18 22:30:29', '2021-10-18 22:30:29'),
(28, 11, '2021-10-18 22:38:52', '2021-10-18 22:38:52'),
(29, 11, '2021-10-18 22:40:16', '2021-10-18 22:40:16'),
(31, 11, '2021-10-18 22:40:25', '2021-10-18 22:40:25'),
(32, 11, '2021-10-18 22:41:17', '2021-10-18 22:41:17'),
(33, 11, '2021-10-18 22:43:34', '2021-10-18 22:43:34'),
(34, 5, '2021-10-18 22:43:37', '2021-10-18 22:43:37'),
(37, 11, '2021-10-18 22:44:24', '2021-10-18 22:44:24'),
(38, 11, '2021-10-18 22:50:13', '2021-10-18 22:50:13'),
(39, 11, '2021-10-18 22:50:19', '2021-10-18 22:50:19'),
(48, 5, '2021-10-19 18:15:43', '2021-10-19 18:15:43'),
(52, 5, '2021-10-19 18:17:26', '2021-10-19 18:17:26');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `buttons`
--
ALTER TABLE `buttons`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cards_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `fonts`
--
ALTER TABLE `fonts`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `icons`
--
ALTER TABLE `icons`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `links_user_id_foreign` (`user_id`);

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
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `socials`
--
ALTER TABLE `socials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `socials_user_id_foreign` (`user_id`),
  ADD KEY `socials_icon_id_foreign` (`icon_id`);

--
-- Indeks untuk tabel `themes`
--
ALTER TABLE `themes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `themes_font_id_foreign` (`font_id`),
  ADD KEY `themes_button_id_foreign` (`button_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_theme_id_foreign` (`theme_id`);

--
-- Indeks untuk tabel `visits`
--
ALTER TABLE `visits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `visits_link_id_foreign` (`link_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `buttons`
--
ALTER TABLE `buttons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `cards`
--
ALTER TABLE `cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `fonts`
--
ALTER TABLE `fonts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `icons`
--
ALTER TABLE `icons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `links`
--
ALTER TABLE `links`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `socials`
--
ALTER TABLE `socials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `themes`
--
ALTER TABLE `themes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `visits`
--
ALTER TABLE `visits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `cards`
--
ALTER TABLE `cards`
  ADD CONSTRAINT `cards_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `links`
--
ALTER TABLE `links`
  ADD CONSTRAINT `links_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `socials`
--
ALTER TABLE `socials`
  ADD CONSTRAINT `socials_icon_id_foreign` FOREIGN KEY (`icon_id`) REFERENCES `icons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `socials_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `themes`
--
ALTER TABLE `themes`
  ADD CONSTRAINT `themes_button_id_foreign` FOREIGN KEY (`button_id`) REFERENCES `buttons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `themes_font_id_foreign` FOREIGN KEY (`font_id`) REFERENCES `fonts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_theme_id_foreign` FOREIGN KEY (`theme_id`) REFERENCES `themes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `visits`
--
ALTER TABLE `visits`
  ADD CONSTRAINT `visits_link_id_foreign` FOREIGN KEY (`link_id`) REFERENCES `links` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
