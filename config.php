<?php
// URL Encryption/Decryption Functions
define('ENCRYPT_KEY', 'MadrashaSecretKey2025');

function encryptUrl($string) {
    $encrypted = base64_encode($string);
    // Make URL safe
    $encrypted = str_replace(['+', '/', '='], ['-', '_', ''], $encrypted);
    return $encrypted;
}

function decryptUrl($string) {
    // Restore base64 characters
    $string = str_replace(['-', '_'], ['+', '/'], $string);
    // Add padding if needed
    $mod4 = strlen($string) % 4;
    if ($mod4) {
        $string .= substr('====', $mod4);
    }
    return base64_decode($string);
}

// Get current page name
function getCurrentPage() {
    return basename($_SERVER['PHP_SELF']);
}

// Check if URL parameter matches
function isActivePage($pageName) {
    $current = getCurrentPage();
    if (isset($_GET['p'])) {
        $decrypted = decryptUrl($_GET['p']);
        return ($decrypted == $pageName);
    }
    return ($current == $pageName);
}
?>
