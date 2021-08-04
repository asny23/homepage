import { Box, Card, CardHeader, CardBody, Anchor, Paragraph, Text } from 'grommet'
import { Network } from 'grommet-icons'

type Props = {
  name: string
  forked?: boolean
  url: string
  description: string
  tags?: Array<string>
}

const renderTags = (tags: Array<string>) => (
  <Box direction='row'>
    {tags.map((tag, index) => (
      <Text key={index} className='tag'>
        {tag}
      </Text>
    ))}
  </Box>
)

const Produit = ({name, forked, url, description, tags}: Props) => {
  return (
    <>
      <Card width='large'>
        <CardHeader pad='xsmall' justify='center' style={{ fontSize: '125%' }}>
          <>
            {forked && <Network />}
            {name}
          </>
        </CardHeader>
        <CardBody>
          <Anchor href={url} label={url} target='_blank' rel='noreferer'/>
          <Paragraph margin='xsmall'>{description}</Paragraph>
          {tags?.length && renderTags(tags)}
        </CardBody>
      </Card>
    </>
  )
}

export default Produit
