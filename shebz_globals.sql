-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 11, 2026 at 11:16 AM
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
-- Table structure for table `about_stories`
--

CREATE TABLE `about_stories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `page` varchar(255) NOT NULL DEFAULT 'about',
  `heading` varchar(255) NOT NULL DEFAULT 'About Us',
  `title` varchar(255) NOT NULL DEFAULT 'Our Story',
  `paragraph1` longtext DEFAULT NULL,
  `paragraph2` longtext DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `about_stories`
--

INSERT INTO `about_stories` (`id`, `page`, `heading`, `title`, `paragraph1`, `paragraph2`, `image`, `is_active`, `created_at`, `updated_at`, `meta_title`, `meta_description`) VALUES
(1, 'about', 'About Us', 'Our Story', 'Founded by Shebin Abraham, a global occupational health and safety professional with over 21 years of experience, Shebz Global Safety Solutions was born from a clear vision. Its goal is to bridge the gap between traditional safety practices and the power of digital transformation.', 'From manufacturing hubs to global safety exhibitions, Shebs has witnessed the evolution of industrial safety firsthand. Today, Shebs Global helps manufacturers, startups, and corporations embrace innovation and digital strategies to create a safer industrial world.', 'about_story/FfrS9yxbtpAMHhgWO0H5aeVXhDG5quadkAhZUzkN.webp', 1, '2026-01-30 01:27:50', '2026-08-11 02:57:08', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `title`, `content`, `image`, `created_at`, `updated_at`, `meta_title`, `meta_description`) VALUES
(2, 'Shebz Global: Building a Strong Digital Presence with a Modern Company Website', 'In today’s digital-first business environment, a professional website is more than just an online presence—it is an important part of how a company introduces itself to potential customers. For Shebz Global, we developed a modern company website designed to present the business professionally, communicate its services clearly, and create a strong first impression for visitors.\r\n\r\nThe website was created with a clean and user-friendly design, making it easy for visitors to explore the company, understand its offerings, and find the information they need. Every section was structured with the customer journey in mind, helping transform website visitors into potential enquiries and customers.\r\n\r\nA key focus of the project was creating a responsive digital experience that works smoothly across desktops, tablets, and mobile devices. The website combines professional visuals, clear content, intuitive navigation, and strategically organized sections to ensure that visitors can engage with Shebz Global from any device.\r\n\r\nThe new Shebz Global website also provides a stronger platform for the company’s digital growth. With a professional online identity and a website built around customer needs, Shebz Global can showcase its capabilities, build credibility, reach new audiences, and provide potential customers with a convenient way to connect with the business.\r\n\r\nThis project demonstrates how a well-planned company website can help businesses strengthen their brand and create new opportunities online. For companies looking to establish or improve their digital presence, investing in a professional, customer-focused website can be an important step toward long-term growth.', 'blog/EzMUzrHw9GIWjRVv1WzHxFL6bbOnDyUY1UWHs59a.webp', '2026-08-08 04:39:38', '2026-08-10 11:08:49', NULL, NULL);

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
-- Table structure for table `coaching_mentorships`
--

CREATE TABLE `coaching_mentorships` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT 'COACHING & MENTORSHIP',
  `subtitle` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `coaching_mentorships`
--

INSERT INTO `coaching_mentorships` (`id`, `title`, `subtitle`, `image`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'COACHING & MENTORSHIP', 'Helping safety professionals grow, influence, and lead.', 'coaching/F43JAGfq6PRMMWInQBlETtjKzxUsdbd336AyTpxb.webp', 1, '2026-01-30 09:55:54', '2026-04-09 02:03:52');

-- --------------------------------------------------------

--
-- Table structure for table `coaching_programs`
--

CREATE TABLE `coaching_programs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `coaching_mentorship_id` bigint(20) UNSIGNED NOT NULL,
  `text` varchar(255) NOT NULL,
  `position` int(11) NOT NULL DEFAULT 1,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `coaching_programs`
--

INSERT INTO `coaching_programs` (`id`, `coaching_mentorship_id`, `text`, `position`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 1, 'One-on-one coaching for career growth and leadership skills', 1, 1, '2026-01-30 09:56:26', '2026-02-05 00:47:47'),
(2, 1, 'LinkedIn branding and visibility strategy.', 2, 1, '2026-01-30 09:56:33', '2026-01-30 09:56:33'),
(3, 1, 'Resume and interview guidance for global safety roles.', 3, 1, '2026-01-30 09:56:42', '2026-01-30 09:56:42'),
(4, 1, '1-on-1 mentorship with Shebin Abraham.', 4, 1, '2026-01-30 09:56:54', '2026-01-30 09:56:54');

-- --------------------------------------------------------

--
-- Table structure for table `contact_list`
--

CREATE TABLE `contact_list` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact_page_contents`
--

CREATE TABLE `contact_page_contents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `page_title` varchar(255) DEFAULT NULL,
  `page_description` text DEFAULT NULL,
  `map_embed_url` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `head_office` varchar(255) DEFAULT NULL,
  `right_title` varchar(255) DEFAULT NULL,
  `right_description` text DEFAULT NULL,
  `whatsapp_number` varchar(255) DEFAULT NULL,
  `whatsapp_text` text DEFAULT NULL,
  `linkedin_url` varchar(255) DEFAULT NULL,
  `why_title` varchar(255) DEFAULT NULL,
  `why_description` text DEFAULT NULL,
  `why_points` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`why_points`)),
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_page_contents`
--

INSERT INTO `contact_page_contents` (`id`, `page_title`, `page_description`, `map_embed_url`, `email`, `website`, `head_office`, `right_title`, `right_description`, `whatsapp_number`, `whatsapp_text`, `linkedin_url`, `why_title`, `why_description`, `why_points`, `is_active`, `created_at`, `updated_at`, `meta_title`, `meta_description`) VALUES
(2, 'Contact Us', 'Let\'s Build a Safer Tomorrow — Together. We\'d love to hear from you. Whether you\'re a manufacturer, industrial client, or safety innovator, let\'s collaborate to make workplaces safer, smarter, and more sustainable.', 'https://www.google.com/maps?q=Dubai,UAE&output=embed', 'info@qhsedirectory.com', 'www.shebzglobalsafety.com', 'Dubai, UAE — Serving Clients Worldwide', 'Let\'s Build a Safer Tomorrow — Together', 'Whether you\'re a manufacturer, industrial client, or safety innovator, SHEBZ Global Safety Solutions is ready to collaborate with you.', '+971527815997', 'Hello, I would like to know more about your services', 'https://www.linkedin.com/company/shebz-global-safety-solutions/', 'Why Reach Out to SHEBZ Global Safety Solutions?', 'We partner with manufacturers, industrial companies, and safety innovators worldwide to deliver practical, compliant, and performance-driven safety solutions.', '[\"\\u2705 Industry-Experienced Safety Professionals\",\"\\ud83c\\udf0d Serving Clients Worldwide\",\"\\u2699\\ufe0f Digital-First & Remote Support\",\"\\ud83d\\udcca Compliance-Focused, Results-Driven\"]', 1, '2026-01-31 04:41:03', '2026-08-10 13:08:27', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `core_values`
--

CREATE TABLE `core_values` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `value_title` varchar(255) NOT NULL,
  `value_description` varchar(1000) DEFAULT NULL,
  `position` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `core_values`
--

INSERT INTO `core_values` (`id`, `value_title`, `value_description`, `position`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Integrity', 'Doing what\'s right — every time.', 1, 1, '2026-01-30 01:57:58', '2026-01-30 02:58:33'),
(2, 'Innovation', 'Leveraging technology to improve safety outcomes.', 2, 1, '2026-01-30 02:49:30', '2026-01-30 02:58:38'),
(3, 'Excellence', 'Striving for world-class safety performance.', 3, 1, '2026-01-30 02:51:16', '2026-01-30 02:58:42'),
(4, 'Collaboration', 'Working together with clients and partners globally.', 4, 1, '2026-01-30 02:52:13', '2026-01-30 02:58:48'),
(5, 'Sustainability', 'Promoting safe and responsible operations.', 5, 1, '2026-01-30 02:53:57', '2026-01-30 02:58:52');

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
-- Table structure for table `founder_messages`
--

CREATE TABLE `founder_messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT 'Founder''s Message',
  `message` longtext DEFAULT NULL,
  `founder_name` varchar(255) NOT NULL DEFAULT 'Shebin Abraham',
  `founder_role` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `founder_messages`
--

INSERT INTO `founder_messages` (`id`, `title`, `message`, `founder_name`, `founder_role`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Founder\'s Message', '“I\'ve dedicated my career to occupational safety since 2004, and I\'ve seen firsthand how lives can change with the right safety system in place. We combine real-world experience with digital innovation.”', 'Shebin Abraham', 'Founder & Global Safety Solution Consultant', 1, '2026-01-29 10:31:42', '2026-01-29 23:13:51');

-- --------------------------------------------------------

--
-- Table structure for table `home_headers`
--

CREATE TABLE `home_headers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `background_image` varchar(255) DEFAULT NULL,
  `hero_title` varchar(255) NOT NULL,
  `hero_paragraph1` longtext DEFAULT NULL,
  `hero_paragraph2` longtext DEFAULT NULL,
  `button_text` varchar(255) DEFAULT NULL,
  `button_link` varchar(255) DEFAULT NULL,
  `banner_text` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_headers`
--

INSERT INTO `home_headers` (`id`, `background_image`, `hero_title`, `hero_paragraph1`, `hero_paragraph2`, `button_text`, `button_link`, `banner_text`, `is_active`, `created_at`, `updated_at`, `meta_title`, `meta_description`) VALUES
(1, 'home_headers/1vGwwf6ypTemOaPrBroJK0DO1glyOuHAA7Z0szVe.webp', 'Global Digital Safety Consulting', 'At Shebz Global Safety Solutions, we help companies around the world strengthen workplace safety through innovation, technology, and expertise. With over 21 years of global industrial safety experience, we provide digital-first, remote, and research-based safety services.', 'Our mission is simple. To save lives in the workplace by empowering industries through innovative tools, training, and consulting.', 'Learn More', '/learn-more', 'Saving Lives. Strengthening Safety.', 1, '2026-01-27 02:33:41', '2026-08-10 09:15:48', NULL, NULL);

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
-- Table structure for table `knowledge_hubs`
--

CREATE TABLE `knowledge_hubs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT 'Knowledge Hub',
  `subtitle` varchar(255) DEFAULT NULL,
  `box_title` varchar(255) NOT NULL DEFAULT 'What You''ll Find',
  `image` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `knowledge_hubs`
--

INSERT INTO `knowledge_hubs` (`id`, `title`, `subtitle`, `box_title`, `image`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Knowledge Hub', 'A growing digital library for safety professionals worldwide.', 'What You\'ll Find', 'knowledgehub/3uqS2blPOUudCeYfDQ8MxId9FfU0Iot9Cl43LRHj.webp', 1, '2026-01-30 09:51:34', '2026-04-09 01:54:26');

-- --------------------------------------------------------

--
-- Table structure for table `knowledge_hub_items`
--

CREATE TABLE `knowledge_hub_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `knowledge_hub_id` bigint(20) UNSIGNED NOT NULL,
  `text` varchar(255) NOT NULL,
  `position` int(11) NOT NULL DEFAULT 1,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `knowledge_hub_items`
--

INSERT INTO `knowledge_hub_items` (`id`, `knowledge_hub_id`, `text`, `position`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 1, 'Articles on digital transformation in industrial safety', 1, 1, '2026-01-30 09:52:28', '2026-01-30 11:15:54'),
(2, 1, 'Practical guides on AI & VR applications in occupational safety', 2, 1, '2026-01-30 09:52:43', '2026-01-30 09:52:43'),
(3, 1, 'Free downloads: safety checklists, SOP templates, dashboards', 3, 1, '2026-01-30 09:53:11', '2026-01-30 09:53:11'),
(4, 1, 'Expert videos & podcasts featuring Shebin Abraham', 4, 1, '2026-01-30 09:53:29', '2026-01-30 09:53:29');

-- --------------------------------------------------------

--
-- Table structure for table `learn_mores`
--

CREATE TABLE `learn_mores` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `top_image` varchar(255) DEFAULT NULL,
  `hero_title` varchar(255) DEFAULT NULL,
  `hero_paragraph1` longtext DEFAULT NULL,
  `hero_paragraph2` longtext DEFAULT NULL,
  `expertise_title` varchar(255) DEFAULT NULL,
  `expertise_items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`expertise_items`)),
  `why_title` varchar(255) DEFAULT NULL,
  `why_description` longtext DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `learn_mores`
--

INSERT INTO `learn_mores` (`id`, `top_image`, `hero_title`, `hero_paragraph1`, `hero_paragraph2`, `expertise_title`, `expertise_items`, `why_title`, `why_description`, `is_active`, `created_at`, `updated_at`, `meta_title`, `meta_description`) VALUES
(1, 'learn_more/n93wOBhELzgHAXm6OCuXvYc3leZVCNxD7ixIImOA.webp', 'Global Digital Safety Consulting You Can Trust', 'At Shebz Global Safety Solutions, we help companies worldwide strengthen workplace safety through innovation, technology, and expertise. With over 21 years of global industrial safety experience, we deliver digital-first, remote, and research-driven safety services that make workplaces safer, smarter, and more efficient.', 'Our mission is simple—to save lives in the workplace by empowering industries and safety manufacturers with advanced tools, training, and consulting.', 'Our Expertise', '[\"Global Safety Product & Solution Audits\",\"Website & Application Development for Safety Companies\",\"EHS Dashboards and Safety Data Analytics\",\"Digital Marketing & Branding for Safety Businesses\",\"Industrial Safety Research & Product Design\",\"Remote Training & Coaching for Safety Professionals\"]', 'Why Choose SHEBZ Global?', 'With over 21 years of international occupational safety experience, Shebz Global stands out as a trusted partner for global safety product manufacturers, known for its expertise and reliability. We provide remote and digital safety services accessible anywhere in the world, making professional safety support more efficient and scalable. By combining deep safety expertise with advanced technologies such as AI, VR, and AR, we help organizations innovate while maintaining high safety standards. Our mission is to save lives by promoting safe workplaces through intelligent, forward-thinking solutions.', 1, '2026-01-29 01:46:49', '2026-08-10 10:25:59', NULL, NULL);

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
(4, '2025_12_05_153241_our_service', 1),
(5, '2026_01_17_055708_create_quote_requests_table', 2),
(6, '2026_01_17_093804_create_contact_list_table', 3),
(7, '2026_01_21_085326_add_role_to_users_table', 4),
(8, '2026_01_27_065727_create_home_headers_table', 5),
(9, '2026_01_27_072407_add_background_image_to_home_headers_table', 6),
(10, '2026_01_27_074427_add_banner_text_to_home_headers_table', 7),
(11, '2026_01_28_064337_create_mission_visions_table', 8),
(12, '2026_01_28_064930_create_mission_visions_table', 9),
(13, '2026_01_29_060623_create_learn_mores_table', 10),
(14, '2026_01_29_094648_create_founder_messages_table', 11),
(15, '2026_01_29_100919_create_founder_messages_table', 12),
(16, '2026_01_30_053910_create_about_stories_table', 13),
(17, '2026_01_30_063638_create_core_values_table', 14),
(18, '2026_01_30_063831_create_core_values_table', 15),
(19, '2026_01_30_101138_create_knowledge_hubs_table', 16),
(20, '2026_01_30_101138_create_solution_case_studies_table', 16),
(21, '2026_01_30_101138_create_solutions_table', 16),
(22, '2026_01_30_101139_create_coaching_mentorships_table', 16),
(23, '2026_01_30_101527_create_coaching_programs_table', 16),
(24, '2026_01_30_111907_create_knowledge_hub_items_table', 17),
(25, '2026_01_31_085655_create_contact_page_contents_table', 18),
(26, '2026_01_31_101804_add_right_section_to_contact_page_contents_table', 19),
(27, '2026_01_31_114048_add_permissions_to_users_table', 20),
(28, '2026_02_11_072354_create_testimonials_table', 21),
(29, '2026_08_07_072403_create_blog_table', 22),
(30, '2026_08_07_102439_add_meta_title_to_blog_table', 23),
(31, '2026_08_07_102538_add_meta_description_to_blog_table', 23),
(32, '2026_08_10_141332_add_columns_to_our__services_table', 24),
(33, '2026_08_10_143407_add_meta_columns_to_home_headers_table', 25),
(34, '2026_08_10_154735_add_meta_columns_to_learn_mores_table', 26),
(35, '2026_08_10_162430_add_meta_columns_to_about_stories_table', 27),
(36, '2026_08_10_172649_add_meta_columns_to_solutions_table', 28),
(37, '2026_08_10_180453_add_meta_columns_to_contact_page_contents_table', 29),
(38, '2026_08_11_060957_add_category_to_our_services_table', 30);

-- --------------------------------------------------------

--
-- Table structure for table `mission_visions`
--

CREATE TABLE `mission_visions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('mission','vision') NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` longtext DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mission_visions`
--

INSERT INTO `mission_visions` (`id`, `type`, `title`, `description`, `image`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'mission', 'Our Mission', 'Saving lives in the workplace. Every service we provide, every strategy we implement, every digital solution we implement supports one goal. Safer workplaces through modern safety innovation.', 'mission_vision/E1FyQm5xc484WCNdKed4Q3NvPDPK5CFTsO6XYQaK.webp', 1, '2026-01-28 01:35:24', '2026-04-09 01:42:45'),
(2, 'vision', 'Our Vision', 'To be the world\'s most trusted digital and remote security solutions company, setting new standards in industrial security innovation.', 'mission_vision/7x36ibvaVdUx0aujAuhjeO6UerRWGimGoj9cgB1F.webp', 1, '2026-01-28 01:36:26', '2026-04-09 01:44:13');

-- --------------------------------------------------------

--
-- Table structure for table `our__services`
--

CREATE TABLE `our__services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `our__services`
--

INSERT INTO `our__services` (`id`, `icon`, `title`, `category`, `description`, `created_at`, `updated_at`, `meta_title`, `meta_description`) VALUES
(4, 'services/bOO6Men5A603KeLeray9O8C8aQh9RS5IiUiPVbiN.webp', 'Safety Business Digital Transformation', NULL, 'We help safety-focused businesses modernize and scale through end-to-end digital transformation built for trust, compliance, and performance. From high-impact website development optimized for SEO, conversions, and industry credibility, to custom application and software solutions—such as inspection apps, audit tools, analytics dashboards, and safety LMS platforms—we design technology that fits real operational needs. By creating a connected digital safety ecosystem that seamlessly integrates websites, mobile apps, and CRM systems, we enable better data flow, smarter decision-making, and improved client engagement across the entire safety value chain.', '2025-12-06 04:34:23', '2026-08-11 03:41:38', NULL, NULL),
(5, 'services/1IwlfaZLCI3FNeNpjt0yL1rsk265JYqwcieUkpHa.webp', 'AI & Technology Integration for Safety', NULL, 'We integrate advanced AI and emerging technologies to elevate safety performance and future-proof safety operations. Our services include consultation on AI-based safety monitoring solutions that enable real-time risk detection, behavior analysis, and proactive incident prevention. We design and implement VR- and AR-enabled training and safety awareness tools that create immersive, hands-on learning experiences without exposing workers to real-world hazards. Additionally, we develop digital twins and simulation models to support workplace safety planning—allowing organizations to test scenarios, optimize layouts, and evaluate risks virtually before implementing changes on the ground.', '2025-12-06 05:13:38', '2026-08-11 01:31:18', NULL, NULL),
(8, 'services/7VEnzNUXCTIHJez5BNwekFW4UZDBQ7P0ANCxZT05.webp', 'Digital Marketing for Safety Industry', NULL, 'We deliver result-driven digital marketing solutions tailored specifically for the safety industry, helping brands stand out in a trust- and compliance-driven market. Our services include strategic branding for safety product manufacturers, ensuring consistent positioning, visual identity, and messaging across global markets. We manage end-to-end social media presence and targeted campaigns, supported by AI-powered content creation for high-impact posts, blogs, videos, and thought-leadership assets. To elevate engagement and product understanding, we leverage advanced technologies such as VR, AR, and 3D content marketing, along with professional product video production and YouTube channel branding—turning complex safety solutions into compelling, easy-to-understand digital experiences.', '2025-12-06 05:33:29', '2026-08-11 01:31:31', NULL, NULL),
(9, 'services/8HZPfX2TKY948cwH4C4qMdiCnGMxeK0oHhpGVCzt.webp', 'Remote Training & Safety Education', NULL, 'We design and deliver immersive remote training and safety education programs that make learning effective, engaging, and scalable. Our customized training solutions are tailored to specific safety products, systems, and industry requirements—ensuring practical understanding and real-world application. By leveraging VR-based simulations and gamified learning models, we transform traditional safety training into interactive experiences that improve knowledge retention and behavior change. We also build digital safety academies for employees and clients, supported by high-quality product demo videos, animations, and live virtual training sessions, enabling consistent, measurable, and globally accessible safety education.', '2025-12-17 08:38:37', '2026-04-09 01:16:13', NULL, NULL),
(10, 'services/vvAzZZ0RIfF7LcN3MUJoeBusiEJXFTORPZMeRehn.webp', 'Professional Development & Coaching', NULL, 'We empower safety professionals to grow with confidence, clarity, and industry relevance through focused professional development and coaching. Our one-on-one coaching programs support emerging safety professionals with personalized career roadmaps, leadership development, and technical excellence aligned to global safety standards. We also specialize in LinkedIn branding for safety professionals—helping individuals build credibility, expand influence, and increase visibility within the safety ecosystem. Complementing this, our online masterclasses on digital transformation in the safety industry equip professionals with modern skills, tools, and strategic insight needed to lead in an increasingly digital-first', '2025-12-17 08:40:02', '2026-04-09 01:18:28', NULL, NULL),
(11, 'services/7gE7dmbBXUQR8JFxCeO0COWPc6BqgztxPrxmReTJ.webp', 'Research & Development for Occupational Safety', NULL, 'We drive innovation in occupational safety through structured research and development that transforms ideas into high-performance, market-ready solutions. Our R&D services cover new safety product design and conceptualization, backed by deep industrial safety research, user behavior analysis, and risk-based innovation insights. We conduct rigorous product performance testing and validation to ensure reliability, durability, and compliance with global standards. Through collaboration with leading global R&D laboratories, we further enhance material science, ergonomics, and usability—delivering safer, smarter, and more effective safety solutions for modern workplaces.', '2025-12-17 08:42:24', '2026-04-09 01:29:59', NULL, NULL),
(12, 'services/7xWSALBK1r4R1uyBhei4TT0PmdRhUhGl7SKYk0N0.webp', 'Industrial Safety Product Design & Sampling', NULL, 'We support industrial safety innovation from concept to sample with a structured, user-centered product development approach. Our services include end-to-end concept-to-prototype development, transforming safety ideas into functional, test-ready samples. We provide expert guidance on material selection and global sourcing, balancing performance, compliance, cost efficiency, and sustainability. By integrating real user experience feedback and field insights into the design process, we continuously refine products to improve comfort, usability, and protection—ensuring safety solutions are practical, reliable, and ready for successful market adoption.', '2025-12-17 08:43:43', '2026-04-09 01:22:22', NULL, NULL),
(13, 'services/M5oweiwVIwOBc6nQp7GF8DXvSaxTdeqEAlJ8nehs.webp', 'Digital Advertising for Safety Manufacturers', NULL, 'We help safety manufacturers reach the right global audiences through precision-driven digital advertising strategies built for B2B markets. Our campaigns are designed to increase brand visibility, generate qualified leads, and support international expansion across key safety-driven industries. We execute targeted advertising and outreach through high-impact channels such as WhatsApp, LinkedIn, and email marketing, ensuring consistent engagement with decision-makers and procurement leaders. To further amplify reach and credibility, we deliver sponsored content placements and influencer collaborations through the QHSE Directory and the Shebin Abraham professional network—connecting safety brands with a trusted global safety community.', '2025-12-17 08:44:28', '2026-04-09 01:25:40', NULL, NULL),
(17, 'services/Cv06zXyADMfung7K0TOHHtJAxShHJSCGdI6kJkNi.webp', 'Safety Data Analytics & Reporting', NULL, 'We transform safety data into actionable intelligence that drives smarter decisions and measurable risk reduction. Our services include the development of customized EHS dashboards using Excel and Power BI, tailored to visualize key safety metrics, compliance status, and performance trends with clarity. By applying predictive analytics, we help organizations anticipate incidents, identify high-risk patterns, and implement proactive accident prevention strategies. Through data-driven audit insights and advanced reporting, we enable structured safety improvement planning—turning raw data into clear priorities, continuous improvement actions, and stronger safety outcomes.', '2026-01-08 01:23:34', '2026-04-09 01:27:43', NULL, NULL),
(18, 'services/hYC67Ua3VlJCFyemK8nMkNVEL0OpRgaFNWMQ2Zoy.webp', 'Virtual Consulting Services', NULL, 'We deliver expert virtual consulting services that make professional safety guidance accessible, efficient, and globally scalable. Our remote safety consultations support organizations worldwide with regulatory alignment, risk assessment, and solution advisory—without geographical limitations. Using digital audits through live video walkthroughs and remote inspections, we evaluate workplace conditions, processes, and compliance in real time. We also assess organizational safety culture through advanced digital engagement tools, surveys, and analytics—providing clear insights and practical recommendations to strengthen behavior, accountability, and long-term safety performance.', '2026-01-08 01:27:19', '2026-04-09 01:34:20', NULL, NULL),
(19, 'services/0w43Vjsl4XRLBYU1rx91wIMTzPXGKqW9OsIhLimz.webp', 'Strategic Partnerships & Representation', NULL, 'We enable safety brands to expand globally through strategic partnerships and strong regional representation. Our services include acting as trusted partners for international safety product manufacturers, managing local representation, brand positioning, and stakeholder engagement. We support new safety technology brands with structured market entry strategies for GCC and Asian markets—covering regulatory alignment, competitive analysis, and go-to-market planning. In addition, we establish and manage effective channel partner networks and regional distributor setups, ensuring sustainable growth, consistent brand presence, and long-term market success.', '2026-01-08 01:34:26', '2026-04-09 01:36:33', NULL, NULL),
(20, 'services/lyLuw7v4YRg1tsGDzlX0uirEX6EEiCqCwEDhdOgm.webp', 'Content & Media Creation', NULL, 'We create clear, engaging, and visually impactful content that simplifies safety communication and drives awareness across diverse audiences. Our services include the development of safety posters, comics, infographics, SOPs, and checklists that translate complex safety requirements into easy-to-understand visual formats. We also design interactive digital manuals for effective product training and knowledge retention. Complementing this, we produce thought-leadership content for LinkedIn and leading safety journals, helping organizations and professionals build credibility, influence industry conversations, and position themselves as trusted voices in occupational safety.', '2026-01-08 01:40:46', '2026-04-09 01:38:20', NULL, NULL),
(23, 'services/PoHpfhOg3l3TsGLt0aPcE3aMTMPexpWy8vcD1Ypi.webp', 'Global Safety Product & Solution Audit', NULL, 'Global Safety Product & Solution Audit provides a comprehensive evaluation of your safety products and solutions to ensure they meet international expectations and perform competitively in global markets. We conduct in-depth technical and functional audits of PPE, safety software, and integrated systems to identify gaps, risks, and improvement opportunities. This is complemented by competitor benchmarking and market-readiness analysis, helping you understand where your product stands and how it can be strengthened. Our experts also offer certification and compliance advisory aligned with OSHA, ISO, CE, and EN standards, while delivering strategic guidance on global product positioning to enhance credibility, acceptance, and long-term market success.', '2026-02-05 01:52:14', '2026-04-09 01:40:20', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
('shebzglobalsafety@gmail.com', '$2y$12$DZWqiKLuhWh1qULnfZHoEeyfxcIb4ElLN7aM3BkUIrVCSjQUXdwcG', '2026-01-10 01:54:19');

-- --------------------------------------------------------

--
-- Table structure for table `quote_requests`
--

CREATE TABLE `quote_requests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `company` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
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
('2Qv7UtHHU4DElcMr6sKAX43fJPVyxkaPm6XVi4X5', NULL, '127.0.0.1', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNTI1c0ZpUE9XUG5Ja3hiZm9zVlFCTUhoSFlrU3ZvU3ZRcm1IZE9iQyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7czo0OiJob21lIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1768113645),
('EmZAYgYTHUmcgPd7H8UPib3wMRVKBRBFj7QFG3qw', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibWhYcUszckMxRjgxYVZONFJSeWZpdUpvMkZ6eVg2NExtUVY3WHVSZyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hYm91dCI7czo1OiJyb3V0ZSI7czo1OiJhYm91dCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1768123306);

-- --------------------------------------------------------

--
-- Table structure for table `solutions`
--

CREATE TABLE `solutions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `position` int(11) NOT NULL DEFAULT 1,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `solutions`
--

INSERT INTO `solutions` (`id`, `title`, `description`, `image`, `position`, `is_active`, `created_at`, `updated_at`, `meta_title`, `meta_description`) VALUES
(1, 'For Safety Manufacturers', 'We help safety equipment makers improve product design, marketing impact, and global acceptance through expert audits, user feedback, and strategic branding.', 'solutions/jxohLrvKHpPOTxgNzlCKCH7Zlh9kQYGdEuefvRdh.webp', 1, 1, '2026-01-30 09:38:00', '2026-08-10 12:03:41', NULL, NULL),
(2, 'For Industrial Companies', 'Our remote digital audits, EHS dashboards, and customized training programs strengthen safety culture and regulatory compliance across global operations.', 'solutions/Q96QuVasQcrZnPxBa6NuMeRJSGlTg9C9h0k8Q0yl.webp', 2, 1, '2026-01-30 09:38:32', '2026-04-09 01:50:40', NULL, NULL),
(3, 'For Safety Startups', 'From idea validation to global launch, we support startups in designing, testing, and scaling innovative safety solutions efficiently.', 'solutions/fp9Oql5K6wNz8D7niq2s52DNOvf5Q0G1EhJ3aqUV.webp', 3, 1, '2026-01-30 09:39:00', '2026-04-09 01:52:22', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `solution_case_studies`
--

CREATE TABLE `solution_case_studies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `text` varchar(255) NOT NULL,
  `position` int(11) NOT NULL DEFAULT 1,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `solution_case_studies`
--

INSERT INTO `solution_case_studies` (`id`, `text`, `position`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Improved safety product visibility by 250% for an Indian PPE brand.', 1, 1, '2026-01-30 09:39:28', '2026-02-03 04:46:10'),
(2, 'Digitized EHS audits across 5 countries for a global industrial firm.', 2, 1, '2026-01-30 09:39:43', '2026-01-30 09:39:43');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `rating` int(11) NOT NULL DEFAULT 5,
  `date` date DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL DEFAULT 'admin',
  `permissions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`permissions`)),
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `permissions`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Shebz Global', 'shebzglobalsafety@gmail.com', 'admin', NULL, NULL, '$2y$12$4ypmzTTZRhyxWLY6T6K2jeOUomTfQP8yb3DUIXRC7aVmsIrtRWFd.', NULL, '2026-01-13 00:50:12', '2026-01-13 00:50:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_stories`
--
ALTER TABLE `about_stories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `coaching_mentorships`
--
ALTER TABLE `coaching_mentorships`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coaching_programs`
--
ALTER TABLE `coaching_programs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `coaching_programs_coaching_mentorship_id_foreign` (`coaching_mentorship_id`);

--
-- Indexes for table `contact_list`
--
ALTER TABLE `contact_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_page_contents`
--
ALTER TABLE `contact_page_contents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `core_values`
--
ALTER TABLE `core_values`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `founder_messages`
--
ALTER TABLE `founder_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_headers`
--
ALTER TABLE `home_headers`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `knowledge_hubs`
--
ALTER TABLE `knowledge_hubs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knowledge_hub_items`
--
ALTER TABLE `knowledge_hub_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `knowledge_hub_items_knowledge_hub_id_foreign` (`knowledge_hub_id`);

--
-- Indexes for table `learn_mores`
--
ALTER TABLE `learn_mores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mission_visions`
--
ALTER TABLE `mission_visions`
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
-- Indexes for table `quote_requests`
--
ALTER TABLE `quote_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `solutions`
--
ALTER TABLE `solutions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `solution_case_studies`
--
ALTER TABLE `solution_case_studies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `about_stories`
--
ALTER TABLE `about_stories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `coaching_mentorships`
--
ALTER TABLE `coaching_mentorships`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coaching_programs`
--
ALTER TABLE `coaching_programs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contact_list`
--
ALTER TABLE `contact_list`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contact_page_contents`
--
ALTER TABLE `contact_page_contents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `core_values`
--
ALTER TABLE `core_values`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `founder_messages`
--
ALTER TABLE `founder_messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_headers`
--
ALTER TABLE `home_headers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `knowledge_hubs`
--
ALTER TABLE `knowledge_hubs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `knowledge_hub_items`
--
ALTER TABLE `knowledge_hub_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `learn_mores`
--
ALTER TABLE `learn_mores`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `mission_visions`
--
ALTER TABLE `mission_visions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `our__services`
--
ALTER TABLE `our__services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `quote_requests`
--
ALTER TABLE `quote_requests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `solutions`
--
ALTER TABLE `solutions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `solution_case_studies`
--
ALTER TABLE `solution_case_studies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `coaching_programs`
--
ALTER TABLE `coaching_programs`
  ADD CONSTRAINT `coaching_programs_coaching_mentorship_id_foreign` FOREIGN KEY (`coaching_mentorship_id`) REFERENCES `coaching_mentorships` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `knowledge_hub_items`
--
ALTER TABLE `knowledge_hub_items`
  ADD CONSTRAINT `knowledge_hub_items_knowledge_hub_id_foreign` FOREIGN KEY (`knowledge_hub_id`) REFERENCES `knowledge_hubs` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
