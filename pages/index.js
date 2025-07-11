
+ import Head from 'next/head'
+ import Header from '@components/Header'
+ import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NearaNavi – Find What’s Been Overlooked</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Welcome to NearaNavi</h1>
        <p style={{ fontSize: '18px', margin: '20px 0' }}>
          Discover hidden local gems in your area — even if they don’t have a website.
          <br />
          We shine a light on the places most platforms miss.
        </p>
        <p style={{ fontWeight: 'bold' }}>💡 No reviews. No ratings. Just facts.</p>
        <button style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>
          Add Your Business
        </button>
      </main>

      <Footer />
    </div>
  );
}


