<!DOCTYPE html>
<html lang="bn" dir="ltr">
<?php 
require_once 'config.php';
include 'head.php'; 
?>
<body>

    <!-- Top Bar with Bismillah -->
    <?php include 'top.php'; ?>

    <!-- Header with Logo and Title -->
    <?php include 'header.php'; ?>

    <!-- Navigation Menu -->
    <?php include 'menu.php'; ?>

    <!-- Hero Banner Section -->
    <?php include 'banner.php'; ?>

    <!-- Quick Info Cards -->
    <?php include 'quick.php'; ?>

    <!-- About Section -->
    <?php include 'about.php'; ?>

    <!-- Registration Certificate Section -->
    <?php include 'certificate.php'; ?>

    <!-- Courses Section -->
    <?php include 'course.php'; ?>

    <!-- Teachers Section -->
    <?php include 'teacher.php'; ?>

    <!-- Facilities Section -->
    <?php include 'facility.php'; ?>

    <!-- Gallery Section -->
    <?php include 'gallery.php'; ?>

    <!-- Contact Section -->
    <?php include 'contact.php'; ?>

    <!-- Footer -->
    <?php include 'footer.php'; ?>

    <!-- Scroll to Top Button -->
    <?php include 'js.php'; ?>
    
    <script>
    // Handle encrypted section scroll
    document.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const encryptedSection = urlParams.get('s');
        
        if (encryptedSection) {
            // Decrypt and scroll to section
            const sectionMap = {
                '<?php echo encryptUrl("home"); ?>': 'home',
                '<?php echo encryptUrl("about"); ?>': 'about',
                '<?php echo encryptUrl("courses"); ?>': 'courses',
                '<?php echo encryptUrl("teachers"); ?>': 'teachers',
                '<?php echo encryptUrl("facilities"); ?>': 'facilities',
                '<?php echo encryptUrl("gallery"); ?>': 'gallery',
                '<?php echo encryptUrl("contact"); ?>': 'contact'
            };
            
            const sectionId = sectionMap[encryptedSection];
            if (sectionId) {
                setTimeout(function() {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        const navbar = document.getElementById('mainNav');
                        const navbarHeight = navbar ? navbar.offsetHeight : 80;
                        const elementPosition = section.offsetTop;
                        const offsetPosition = elementPosition - navbarHeight;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 300);
            }
        }
    });
    </script>

</body>
</html>
