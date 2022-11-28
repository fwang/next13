import Layout from "../components/layout";

export async function getServerSideProps(context) {
  return {
    props: {
      isMiddlewareHeaderSet: context.req.headers["x-hello-from-middleware1"] === "hello" ? "yes" : "no",
    },
  };
}

export default function Page({ isMiddlewareHeaderSet }) {
  return (
    <Layout>
      <p>Placeholder</p>
      <p>Is middleware header set? {isMiddlewareHeaderSet}</p>
    </Layout>
  );
}
