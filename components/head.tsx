import Head from "next/head"

type Props = {
  title: string,
  description: string,
}

const HeadTag = ({ title, description }: Props) => (
  <Head>
    <meta charSet="utf-8"/>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    <meta name="description" content={description}/>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤔</text></svg>"/>
    <meta property="og:title" content={title}/>
    <meta property="og:site_name" content='asny23のホームページ'/>
    <meta property="og:description" content={description}/>
  </Head>
)

export default HeadTag
