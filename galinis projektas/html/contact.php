<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="../style/style.css">
        <title>Contact Us</title>
    </head>
<body>
    <header>
        <div class="for-mobile">
            <a href="../index.html">
                <h1>&#47;Workspaces&#47;</h1>
            </a>
            <p class="menu">Menu
                <i class="fas fa-bars" onclick="changeDisplay()"></i>
            </p>
        </div>
        <ul id="menu">
            <li><a href="news.html">News</a></li>
            <li><a href="about.html">About us</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="contact.php">Contact Us</a></li>
        </ul>
        <div class="logo-picture">
            <img src="../img/img1.jpg" alt="workspace"/>
            <img src="../img/img2.jpg" alt="workspace"/>
            <img src="../img/img3.jpg" alt="workspace"/>
        </div>
    </header>
    <main>

       <h2>Contact Us</h2>
        <div class="social-media">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-pinterest"></i>
        </div>
        <form action="result.php" method="post">
            <input type="text" id="name" name="name" placeholder="Your Name"><br>
            <input type="text" id="email" name="email" placeholder="Your E-mail address"><br>
            <textarea placeholder="Your Message Here..." id="message" name="message" rows="4" cols="50"></textarea>
            <input id="send-message" type="submit" value="Send">
        </form>
    </main>
    <footer>
        &copy; Aleksandra C. 22 gr. PHP
    </footer>
    <script src="../script/script.js"></script>
</body>
</html>