import Head from "next/head";

/**
 * @title string: Title of the page
 * @description string: Description of the page
 *
 **/

type Props = {
  title: string;
  description?: string;
};

const SEO = ({ title, description = "This is an amazing app" }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
