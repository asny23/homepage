import { Card, CardHeader, CardBody, Anchor, Image } from 'grommet'
import { Github, Medium } from 'grommet-icons'

export default function Home() {
  return (
    <>
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
            <Image src='/gitlab-icon.svg' height='40px' width='40px'/>
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
