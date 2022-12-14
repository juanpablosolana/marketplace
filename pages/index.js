import Head from "next/head";
import { getSession } from "next-auth/react";
import Header from "../components/Header";
import { ProductList } from "../components/ProductList";

export default function Home({ data, session }) {

  const products = data;

  return (
    <div className="bg-gray-900">
      <Head>
        <title>Matketplace cool</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container px-6 py-10 mx-auto">
        <Header />
        <ProductList products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const result = await fetch("https://marketplace.pablosolana.dev/api/getData");
  const data = await result.json();
  const session = await getSession(context);

  return { props: { data, session } };
}
