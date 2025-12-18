<footer class="footer py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="footer-widget">
                        <h4>মাদিনাতুল উলূম হাফিজিয়া মাদরাসা ও এতিমখানা</h4>
                        <p class="mt-3">ইসলামী শিক্ষা ও আদর্শ বিকাশে নিবেদিত একটি প্রতিষ্ঠান। কুরআন ও হাদিসের আলোকে সমাজে আদর্শবান মানুষ গড়ে তোলাই আমাদের লক্ষ্য।</p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <div class="footer-widget">
                        <h5>দ্রুত লিংক</h5>
                        <ul class="footer-links">
                            <li><a href="#home">প্রচ্ছদ</a></li>
                            <li><a href="#about">পরিচিতি</a></li>
                            <li><a href="#courses">কোর্সসমূহ</a></li>
                            <li><a href="#teachers">শিক্ষকবৃন্দ</a></li>
                            <li><a href="#contact">যোগাযোগ</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget">
                        <h5>আমাদের সেবা</h5>
                        <ul class="footer-links">
                            <li><a href="#courses">হিফজুল কুরআন</a></li>
                            <li><a href="#courses">হাদিস শিক্ষা</a></li>
                            <li><a href="#courses">ফিকহ ও উসূল</a></li>
                            <li><a href="#courses">আরবি ভাষা</a></li>
                            <li><a href="#courses">এতিমখানা</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget">
                        <h5>সোশ্যাল মিডিয়া</h5>
                        <div class="social-links">
                            <a href="https://www.facebook.com/share/1CR1S8S7VZ/" class="social-link"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="social-link" id="whatsappQRBtn"><i class="bi bi-whatsapp"></i></a>
                                    <!-- WhatsApp QR Modal -->
                                    <div id="whatsappQRModal" class="qr-modal" style="display:none;">
                                        <span class="qr-modal-close">&times;</span>
                                        <div style="display:flex;justify-content:center;align-items:center;height:90vh;">
                                            <img src="images/qr.jpeg" alt="WhatsApp QR" style="max-width:80vw;max-height:80vh;border-radius:10px;box-shadow:0 0 20px #000;">
                                        </div>
                                    </div>
                            <style>
                            .qr-modal {
                                display: none;
                                position: fixed;
                                z-index: 9999;
                                padding-top: 60px;
                                left: 0;
                                top: 0;
                                width: 100%;
                                height: 100%;
                                overflow: auto;
                                background-color: rgba(0,0,0,0.9);
                                text-align: center;
                            }
                            .qr-modal-close {
                                position: absolute;
                                top: 30px;
                                right: 50px;
                                color: #fff;
                                font-size: 40px;
                                font-weight: bold;
                                cursor: pointer;
                                z-index: 10000;
                            }
                            </style>
                            <script>
                            document.addEventListener('DOMContentLoaded', function() {
                                var qrModal = document.getElementById('whatsappQRModal');
                                var qrBtn = document.getElementById('whatsappQRBtn');
                                var closeBtn = document.querySelector('.qr-modal-close');
                                if(qrBtn) {
                                    qrBtn.addEventListener('click', function(e) {
                                        e.preventDefault();
                                        qrModal.style.display = 'block';
                                    });
                                }
                                if(closeBtn) {
                                    closeBtn.onclick = function() {
                                        qrModal.style.display = 'none';
                                    };
                                }
                                qrModal.onclick = function(e) {
                                    if (e.target === qrModal) {
                                        qrModal.style.display = 'none';
                                    }
                                };
                            });
                            </script>
                        </div>
                        <div class="mt-4">
                            <h6>নামাজের সময়সূচী</h6>
                            <div class="prayer-times">
                                <small>ফজর: ৫:১৫ | যোহর: ১২:১৫</small><br>
                                <small>আসর: ৪:৩০ | মাগরিব: ৫:৪৫</small><br>
                                <small>এশা: ৭:০০</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-4">
            <div class="row">
                <div class="col-md-6 text-center text-md-start">
                    <p class="mb-0">&copy; ২০২৫ মাদিনাতুল উলূম হাফিজিয়া মাদরাসা ও এতিমখানা। সর্বস্বত্ব সংরক্ষিত।</p>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <p class="mb-0">Developed with <i class="bi bi-heart-fill text-danger"></i> for Coder Station</p>
                </div>
            </div>
        </div>
    </footer>