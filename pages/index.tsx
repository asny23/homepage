import { Box, Card, CardHeader, CardBody, Anchor, Text, Image } from 'grommet'
import { Github, Medium } from 'grommet-icons'
import HeadTag from '../components/head'

export default function Home() {
  return (
    <>
      <HeadTag
        title='asny23のホームページ'
        description='thinking cola'
      />
      <Box align='center' pad='small'>
        <Image src='/asny.png'/>
        <Text>yun asny23</Text>
      </Box>
      <Card>
        <CardHeader>
          <>
            GitHub
            <Github />
          </>
        </CardHeader>
        <CardBody>
          <Anchor href='https://github.com/asny23' label='https://github.com/asny23' target='_blank' rel='noreferer'/>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <>
            GitLab
            <Image src='/gitlab-icon.svg#svgView(viewBox(70,70,240,240))' height='32px' width='32px'/>
          </>
        </CardHeader>
        <CardBody>
          <Anchor href='https://gitlab.com/asny23' label='https://gitlab.com/asny23' target='_blank' rel='noreferer'/>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <>
            Medium
            <Medium />
          </>
        </CardHeader>
        <CardBody>
          <Anchor href='https://asny23.medium.com/' label='https://asny23.medium.com/' target='_blank' rel='noreferer'/>
        </CardBody>
      </Card>
    </>
  )
}
