import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { path: string }> = async (
  ctx
) => {
  if (!ctx?.params?.path || ctx?.params?.path === "page1") {
    return {
      redirect: {
        destination: "/test/page2",
        permanent: true,
      },
    };
  }
  if (!ctx?.params?.path || ctx?.params?.path === "page2") {
    return {
      redirect: {
        destination: "/test/page1",
        permanent: true,
      },
    };
  }

  return {
    props: {},
    revalidate: 60 * 10,
  };
};

const Page = () => {
  return <div>Test Page </div>;
};

export default Page;
