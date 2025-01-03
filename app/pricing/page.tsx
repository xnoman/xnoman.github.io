import Head from "next/head";
import Pricing from "../components/ui/Pricing";
import FAQs from "../components/ui/FAQs";

export default function index() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>Pricing - Split</title>
      </Head>
      {/* <Navbar /> */}
      <Pricing />
      <FAQs />
    </>
  );
}
