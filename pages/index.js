import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

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
