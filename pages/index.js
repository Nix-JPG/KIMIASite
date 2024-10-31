import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
<?php
require once "../_config/config.php";
if(isset($_SESSION['user'])) {
  echo "https://github.com/Nix-JPG/kimiasite/blob/main/pages/index.js";
}
?>
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WELLCOME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Selamat Datang Pelayanan Praktikum" />
        <p className="description">
          Silahkan <code> <a href="login.google.com">LOGIN</a></code> terlebih dahulu
        </p>
      </main>

      <Footer />
    </div>
  )
}
