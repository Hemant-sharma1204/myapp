import "./footer.css"

function Footer(){
    return(
        <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></link>
    <footer>
        <div class="footer-container">
            <div class="footer-about">
                <h2>SHOP.CO</h2>
                <p>Bringing you closer to your dream home, one click at a time</p>
                
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                </div>
            </div>

            <div class="footer-links">
                <h3>HELP</h3>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Safety Information</a></li>
                    <li><a href="#">Cancellation option</a></li>
                </ul>
            </div>

            <div class="footer-links">
                <h3>COMPANY</h3>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Community Blog</a></li>
                    <li><a href="#">Terms of service</a></li>
                </ul>
            </div>

            <div class="footer-links">
                <h3>FAQ</h3>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Get in touch</a></li>
                    <li><a href="#">Partnerships</a></li>
                </ul>
            </div>

            <div class="footer-links">
                <h3>RESOURCES</h3>
                <ul>
                    <li><a href="#">Free ebooking</a></li>
                    <li><a href="#">How to blog</a></li>
                    <li><a href="#">YouTube Playlist</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 SHOP.CO | All Rights Reserved</p>
        </div>
    </footer>
        </>
    )
}

export default Footer