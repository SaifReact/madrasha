<?php
// Get current page name
$current_page = basename($_SERVER['PHP_SELF']);
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
                        <a class="nav-link <?php echo ($current_page == 'index.php' && (!isset($_GET['section']) || $_GET['section'] == 'home')) ? 'active' : ''; ?>" href="index.php#home">
                            <i class="bi bi-house-door"></i> প্রচ্ছদ
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php#about">
                            <i class="bi bi-info-circle"></i> পরিচিতি
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo ($current_page == 'mespage.php') ? 'active' : ''; ?>" href="mespage.php">
                            <i class="bi bi-person-badge"></i> বাণী
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php#courses">
                            <i class="bi bi-book"></i> শিক্ষা কার্যক্রম
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php#teachers">
                            <i class="bi bi-people"></i> শিক্ষকবৃন্দ
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php#facilities">
                            <i class="bi bi-building"></i> সুবিধাসমূহ
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php#gallery">
                            <i class="bi bi-images"></i> ফটো গ্যালারি
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php#contact">
                            <i class="bi bi-envelope"></i> যোগাযোগ
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>