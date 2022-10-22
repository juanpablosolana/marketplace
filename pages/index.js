import Image from 'next/image'
import Head from 'next/head'
import { getSession } from 'next-auth/react'

export default function Home({ data, session }) {
  console.log(session)
  const products = data

  return (
    <div className='container'>
      <Head>
        <title>Matketplace chido</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        {products.map(({ title, media, published, category }) => (

          <div key={published}>
            <h1>{title}</h1>
            <Image src={media.thumbnail.url} alt={title} width={100} height={100} />
            <p>{category}</p>
          </div>
        ))}
      </main>
    </div>
  )

}

export async function getServerSideProps(context) {
  const result = await fetch('https://marketplace.pablosolana.dev/api/getData');
  const data = await result.json();
  const session = await getSession(context);

  return { props: { data, session } }
}