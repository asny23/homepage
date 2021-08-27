import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Grommet, Header, Heading, Box, Button } from 'grommet'
import { theme } from '../config/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  return(
    <>
      <Grommet theme={theme}>
        <Header direction='column'>
          <>
            <Heading level={1} textAlign='center'>
              🤔 thinking cola 🤔
            </Heading>
            <Box direction='row'>
              <Button
                label='Produits'
                onClick={() => router.push('/produits/')}
              />
              <Button
                label='Top'
                onClick={() => router.push('/')}
              />
              <Button
                label='Place'
                onClick={() => router.push('/place/')}
              />
            </Box>
          </>
        </Header>
        <Component {...pageProps} />
      </Grommet>
    </>
  )
}

export default MyApp
