<?php
// Include config for URL encryption
require_once 'config.php';

// Get current page name
$current_page = basename($_SERVER['PHP_SELF']);

// Encrypt page names and sections
$homeUrl = 'index.php?p=' . encryptUrl('home') . '&s=' . encryptUrl('home');
$aboutUrl = 'index.php?p=' . encryptUrl('about') . '&s=' . encryptUrl('about');
$messageUrl = 'mespage.php?p=' . encryptUrl('message');
$coursesUrl = 'index.php?p=' . encryptUrl('courses') . '&s=' . encryptUrl('courses');
$teachersUrl = 'index.php?p=' . encryptUrl('teachers') . '&s=' . encryptUrl('teachers');
$facilitiesUrl = 'index.php?p=' . encryptUrl('facilities') . '&s=' . encryptUrl('facilities');
$galleryUrl = 'index.php?p=' . encryptUrl('gallery') . '&s=' . encryptUrl('gallery');
$contactUrl = 'index.php?p=' . encryptUrl('contact') . '&s=' . encryptUrl('contact');
?>
<nav class="navbar navbar-expand-lg navbar-dark sticky-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand d-lg-none" href="index.php">
                <img src="images/logo.png" alt="Logo" height="40">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link <?php echo (isActivePage('home') || ($current_page == 'index.php' && !isset($_GET['p']))) ? 'active' : ''; ?>" href="<?php echo $homeUrl; ?>">
                            <i class="bi bi-house-door"></i> প্রচ্ছদ
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo isActivePage('about') ? 'active' : ''; ?>" href="<?php echo $aboutUrl; ?>">
                            <i class="bi bi-info-circle"></i> পরিচিতি
                        </a>
                    </li>
                    <li class="nav-item">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle <?php echo ($current_page == 'mespage.php' || isActivePage('message')) ? 'active' : ''; ?>" href="#" id="messageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-badge"></i> বাণী
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="messageDropdown">
                            <li><a class="dropdown-item" href="mespage.php?p=<?php echo encryptUrl('president'); ?>">প্রতিষ্ঠাতা সভাপতি</a></li>
                            <li><a class="dropdown-item" href="secmespage.php?p=<?php echo encryptUrl('secretary'); ?>">সাধারণ সম্পাদক</a></li>
                            <li><a class="dropdown-item" href="images/executive_committee.pdf" target="_blank">কার্যকরী কমিটি</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo isActivePage('courses') ? 'active' : ''; ?>" href="<?php echo $coursesUrl; ?>">
                            <i class="bi bi-book"></i> শিক্ষা কার্যক্রম
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo isActivePage('teachers') ? 'active' : ''; ?>" href="<?php echo $teachersUrl; ?>">
                            <i class="bi bi-people"></i> শিক্ষকবৃন্দ
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo isActivePage('facilities') ? 'active' : ''; ?>" href="<?php echo $facilitiesUrl; ?>">
                            <i class="bi bi-building"></i> সুবিধাসমূহ
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo isActivePage('gallery') ? 'active' : ''; ?>" href="<?php echo $galleryUrl; ?>">
                            <i class="bi bi-images"></i> ফটো গ্যালারি
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo isActivePage('contact') ? 'active' : ''; ?>" href="<?php echo $contactUrl; ?>">
                            <i class="bi bi-envelope"></i> যোগাযোগ
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>