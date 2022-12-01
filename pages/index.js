import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} v2</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            Static Site Generation
            {allPostsData.map(({ id, title }) => (
              <small className={utilStyles.lightText} key={id}>
                <br />
                <Link href={`/posts/${id}`}>
                  {title}
                </Link>
              </small>
            ))}
          </li>

          <li className={utilStyles.listItem}>
            Static Site Generation (Preview Mode)
            <small className={utilStyles.lightText}>
              <br />
              <Link href={`/ssg-preview/hello`}>
                hello
              </Link>
              <br />
              <Link href={`/ssg-preview/world`}>
                world
              </Link>
            </small>
          </li>

          <li className={utilStyles.listItem}>
            Static Site Generation (Fallback true)
            {allPostsData.map(({ id, title }) => (
              <small className={utilStyles.lightText} key={id}>
                <br />
                <Link href={`/ssg-fallback-true/${id}`}>
                  {title}
                </Link>
              </small>
            ))}
          </li>

        </ul>
        <Link href={`/isr`}>Incremental Static Regeneration</Link><br />
        <Link href={`/ssr`}>Server Side Rendering</Link><br />
        <Link href={`/ssr-not-found`}>Server Side Rendering (Not Found)</Link><br />
        <Link href={`/ssr-redirect`}>Server Side Rendering (Redirect to /ssr)</Link><br />
        <Link href={`/csr`}>Client Side Rendering</Link><br />
        <Link href={`/middleware-redirect`}>Middleware Redirect</Link><br />
        <Link href={`/middleware-set-header`}>Middleware Set Header (with SSR)</Link><br />
        <Link href={`/middleware-do-nothing`}>Middleware Do Nothing (w/o SSR)</Link><br />
        <Link href={`/image-optimization`}>Image Optimization</Link><br />
        <Link href={`/image-html-tag`}>Image using raw html image tag</Link><br />
      </section>
    </Layout>
  );
}
