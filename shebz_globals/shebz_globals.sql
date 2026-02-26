-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 08, 2026 at 04:20 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shebz_globals`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_12_05_153241_our_service', 1);

-- --------------------------------------------------------

--
-- Table structure for table `our__services`
--

CREATE TABLE `our__services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `our__services`
--

INSERT INTO `our__services` (`id`, `icon`, `title`, `description`, `created_at`, `updated_at`) VALUES
(4, 'services/PE4o1RsiEn0GKQaOattVhIjN5pZvGGvjoYBh8WRg.png', 'Global Safety Product & Solution Audit', 'Global Safety Product & Solution Audit provides a comprehensive evaluation of safety products, systems, and digital solutions to ensure they meet international performance, quality, and compliance expectations. Our audit covers in-depth technical and functional assessments of PPE, software, and integrated safety systems, identifying gaps, risks, and improvement opportunities. We conduct detailed competitor benchmarking and market readiness analysis to help organizations understand their positioning in global markets. In addition, we offer expert certification and compliance advisory aligned with OSHA, ISO, CE, and EN standards, ensuring regulatory readiness. Through strategic global product positioning and consultation, we help brands enhance credibility, competitiveness, and long-term market success.', '2025-12-06 04:34:23', '2026-01-08 09:12:57'),
(5, 'services/3xAwgVVeeUnp6R8Y87bBdR2Xw1ADNbckgn1MMi4U.png', 'Safety Business Digital Transformation', 'We help safety-focused businesses modernize and scale through end-to-end digital transformation built for trust, compliance, and performance. From high-impact website development optimized for SEO, conversions, and industry credibility, to custom application and software solutions—such as inspection apps, audit tools, analytics dashboards, and safety LMS platforms—we design technology that fits real operational needs. By creating a connected digital safety ecosystem that seamlessly integrates websites, mobile apps, and CRM systems, we enable better data flow, smarter decision-making, and improved client engagement across the entire safety value chain.', '2025-12-06 05:13:38', '2026-01-08 09:16:35'),
(8, 'services/K6hQ30jdvDDNKjSjMLd1r4TmSE0l9McyoWPnNdly.png', 'Digital Marketing for Safety Industry', 'We deliver result-driven digital marketing solutions tailored specifically for the safety industry, helping brands stand out in a trust- and compliance-driven market. Our services include strategic branding for safety product manufacturers, ensuring consistent positioning, visual identity, and messaging across global markets. We manage end-to-end social media presence and targeted campaigns, supported by AI-powered content creation for high-impact posts, blogs, videos, and thought-leadership assets. To elevate engagement and product understanding, we leverage advanced technologies such as VR, AR, and 3D content marketing, along with professional product video production and YouTube channel branding—turning complex safety solutions into compelling, easy-to-understand digital experiences.', '2025-12-06 05:33:29', '2026-01-08 09:20:55'),
(9, 'services/MPXoRsU7LXvNpbv1BEcKyTIC4RreXzM4ccm4a8qf.png', 'Remote Training & Safety Education', 'We design and deliver immersive remote training and safety education programs that make learning effective, engaging, and scalable. Our customized training solutions are tailored to specific safety products, systems, and industry requirements—ensuring practical understanding and real-world application. By leveraging VR-based simulations and gamified learning models, we transform traditional safety training into interactive experiences that improve knowledge retention and behavior change. We also build digital safety academies for employees and clients, supported by high-quality product demo videos, animations, and live virtual training sessions, enabling consistent, measurable, and globally accessible safety education.', '2025-12-17 08:38:37', '2026-01-08 09:26:53'),
(10, 'services/TXu9zyptXrTrH728db7CcsJO2PEp5wFJRynH36h8.png', 'Professional Development & Coaching', 'We empower safety professionals to grow with confidence, clarity, and industry relevance through focused professional development and coaching. Our one-on-one coaching programs support emerging safety professionals with personalized career roadmaps, leadership development, and technical excellence aligned to global safety standards. We also specialize in LinkedIn branding for safety professionals—helping individuals build credibility, expand influence, and increase visibility within the safety ecosystem. Complementing this, our online masterclasses on digital transformation in the safety industry equip professionals with modern skills, tools, and strategic insight needed to lead in an increasingly digital-first', '2025-12-17 08:40:02', '2026-01-07 11:21:21'),
(11, 'services/ZitXyxLoQAnm3s70pZScVqxM8EuNQ18NjwUQUkiL.png', 'Research & Development for Occupational Safety', 'We drive innovation in occupational safety through structured research and development that transforms ideas into high-performance, market-ready solutions. Our R&D services cover new safety product design and conceptualization, backed by deep industrial safety research, user behavior analysis, and risk-based innovation insights. We conduct rigorous product performance testing and validation to ensure reliability, durability, and compliance with global standards. Through collaboration with leading global R&D laboratories, we further enhance material science, ergonomics, and usability—delivering safer, smarter, and more effective safety solutions for modern workplaces.', '2025-12-17 08:42:24', '2026-01-07 11:33:40'),
(12, 'services/kmIxIhXDy5Y2daPMwYlnN474RVfAH2VW1FbHN5LO.png', 'Industrial Safety Product Design & Sampling', 'We support industrial safety innovation from concept to sample with a structured, user-centered product development approach. Our services include end-to-end concept-to-prototype development, transforming safety ideas into functional, test-ready samples. We provide expert guidance on material selection and global sourcing, balancing performance, compliance, cost efficiency, and sustainability. By integrating real user experience feedback and field insights into the design process, we continuously refine products to improve comfort, usability, and protection—ensuring safety solutions are practical, reliable, and ready for successful market adoption.', '2025-12-17 08:43:43', '2026-01-07 11:37:14'),
(13, 'services/G1z7vRpjHiu1ruoXnHpD8syrRSmU9uPvFKmKSvV1.png', 'Digital Advertising for Safety Manufacturers', 'We help safety manufacturers reach the right global audiences through precision-driven digital advertising strategies built for B2B markets. Our campaigns are designed to increase brand visibility, generate qualified leads, and support international expansion across key safety-driven industries. We execute targeted advertising and outreach through high-impact channels such as WhatsApp, LinkedIn, and email marketing, ensuring consistent engagement with decision-makers and procurement leaders. To further amplify reach and credibility, we deliver sponsored content placements and influencer collaborations through the QHSE Directory and the Shebin Abraham professional network—connecting safety brands with a trusted global safety community.', '2025-12-17 08:44:28', '2026-01-08 00:53:06'),
(17, 'services/BmCda0lIhlcZ3Jy8ExahuwqM1ivnZlUMRoReDdwX.png', 'Safety Data Analytics & Reporting', 'We transform safety data into actionable intelligence that drives smarter decisions and measurable risk reduction. Our services include the development of customized EHS dashboards using Excel and Power BI, tailored to visualize key safety metrics, compliance status, and performance trends with clarity. By applying predictive analytics, we help organizations anticipate incidents, identify high-risk patterns, and implement proactive accident prevention strategies. Through data-driven audit insights and advanced reporting, we enable structured safety improvement planning—turning raw data into clear priorities, continuous improvement actions, and stronger safety outcomes.', '2026-01-08 01:23:34', '2026-01-08 09:31:25'),
(18, 'services/rMyMHLRbQPThhEEPjZZddSYQ6fbMm5o38qSYgqwP.png', 'Virtual Consulting Services', 'We deliver expert virtual consulting services that make professional safety guidance accessible, efficient, and globally scalable. Our remote safety consultations support organizations worldwide with regulatory alignment, risk assessment, and solution advisory—without geographical limitations. Using digital audits through live video walkthroughs and remote inspections, we evaluate workplace conditions, processes, and compliance in real time. We also assess organizational safety culture through advanced digital engagement tools, surveys, and analytics—providing clear insights and practical recommendations to strengthen behavior, accountability, and long-term safety performance.', '2026-01-08 01:27:19', '2026-01-08 09:34:47'),
(19, 'services/j1nDZ0tXG9DWX5CVQ3AqVOSAAiLlIIST1ozN279q.png', 'Strategic Partnerships & Representation', 'We enable safety brands to expand globally through strategic partnerships and strong regional representation. Our services include acting as trusted partners for international safety product manufacturers, managing local representation, brand positioning, and stakeholder engagement. We support new safety technology brands with structured market entry strategies for GCC and Asian markets—covering regulatory alignment, competitive analysis, and go-to-market planning. In addition, we establish and manage effective channel partner networks and regional distributor setups, ensuring sustainable growth, consistent brand presence, and long-term market success.', '2026-01-08 01:34:26', '2026-01-08 01:38:17'),
(20, 'services/rFXVws4YK9yUxft20ka9k0khx6PgTFbIvOt7OWBc.png', 'Content & Media Creation', 'We create clear, engaging, and visually impactful content that simplifies safety communication and drives awareness across diverse audiences. Our services include the development of safety posters, comics, infographics, SOPs, and checklists that translate complex safety requirements into easy-to-understand visual formats. We also design interactive digital manuals for effective product training and knowledge retention. Complementing this, we produce thought-leadership content for LinkedIn and leading safety journals, helping organizations and professionals build credibility, influence industry conversations, and position themselves as trusted voices in occupational safety.', '2026-01-08 01:40:46', '2026-01-08 01:40:46'),
(21, 'services/WwJtwCtYe32seT5b83Tstp6aanlNgpoJlPi5AUef.png', 'AI & Technology Integration for Safety', 'We integrate advanced AI and emerging technologies to elevate safety performance and future-proof safety operations. Our services include consultation on AI-based safety monitoring solutions that enable real-time risk detection, behavior analysis, and proactive incident prevention. We design and implement VR- and AR-enabled training and safety awareness tools that create immersive, hands-on learning experiences without exposing workers to real-world hazards. Additionally, we develop digital twins and simulation models to support workplace safety planning—allowing organizations to test scenarios, optimize layouts, and evaluate risks virtually before implementing changes on the ground.', '2026-01-08 05:29:01', '2026-01-08 05:29:01');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('xmDJkGVnbI5gFLU1Jm24X1wm4MmRM7qQacTks1bz', NULL, '127.0.0.1', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieFJNZk1SalRCR011OHU4amRlM1owVlNCZGNFWWQ0MlNCMWVJMnRIaSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMyI7czo1OiJyb3V0ZSI7czo0OiJob21lIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1766221640);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin123@gmail.com', NULL, '$2y$12$5tXluUS8MeGJkOzhk6zlpOAr3bvURaYNAmsw94ZEbMWGF9O4WxAO.', NULL, '2025-12-05 10:08:14', '2025-12-05 10:08:14'),
(2, 'user', 'user@gmail.com', NULL, '$2y$12$HpyDWOeYChK.j06nrhENPef5cg0C7Zbyu9iPNJw325LKJsc5aEK0i', NULL, '2025-12-06 09:11:53', '2025-12-06 09:11:53'),
(4, 'Shebz Global', 'shebzglobalsafety@gmail.com', NULL, '$2y$12$YI/wT2lEI.Mxu40eftVSfe5yF7dIckUbgdudsbDAfP3MOzhcRGKhW', NULL, '2026-01-08 09:37:39', '2026-01-08 09:37:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `our__services`
--
ALTER TABLE `our__services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `our__services`
--
ALTER TABLE `our__services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
