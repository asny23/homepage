import HeadTag from '../../components/head'
import Produit from '../../components/produit'

export default function Produits() {
  return (
    <>
      <HeadTag
        title='Produits / asny23のホームページ'
        description='Made from thinking'
      />
      <Produit
        name='DeVolta'
        url='https://hub.docker.com/r/asny23/devolta'
        description='Volta installed minideb container image'
        tags={['Docker', 'Volta']}
      />
      <Produit
        name='misezan'
        url='https://rubygems.org/gems/misezan'
        description='見せ算 implemented on Integer'
        tags={['Ruby', 'RubyGems']}
      />
      <Produit
        name='metacog'
        url='https://github.com/asny23/metacog'
        description='Open Graph data scraper API'
        tags={['Node.js', 'metascraper']}
      />
      <Produit
        name='darts-travel'
        url='https://asny23.github.io/darts-travel/'
        description='Choose your travel destination with darts'
        tags={['JavaScript', 'React']}
      />
      <Produit
        name='.lack'
        url='https://dotlack.vercel.app/'
        description='Message aggregator for Slack'
        tags={['Typescript', 'Next.js', 'Vercel', 'Slack']}
      />
      <Produit
        name='docker-hub-search'
        forked
        url='https://addons.mozilla.org/ja/firefox/addon/docker-hub-search/'
        description='Firefox Addon for searching Docker Hub quickly'
        tags={['WebExtensions', 'Firefox']}
      />
      <Produit
        name='FavorCreates'
        url='https://favorcreates.cf/'
        description='You can mark&find favorite creations in FavorCreates'
        tags={['Typescript', 'Next.js', 'Vercel', 'Firebase', 'algolia']}
      />
      <Produit
        name='micro-open-graph'
        forked
        url='https://github.com/asny23/micro-open-graph'
        description='Open Graph data scraper API'
        tags={['Node.js', 'micro', 'metascraper']}
      />
      <Produit
        name='EasyIssue'
        url='https://gitlab.com/asny23/easy-issue'
        description='A simple issue view & post app'
        tags={['Typescript', 'Next.js', 'SheetDB']}
      />
      <Produit
        name='firebase-functions-tavern'
        url='https://hub.docker.com/r/asny23/firebase-functions-tavern'
        description='Docker image for firebase functions CI'
        tags={['Docker', 'firebase-tools', 'Tavern']}
      />
      <Produit
        name='thinking-language'
        url='https://github.com/asny23/thinking-language'
        description='Brainf*ck based programming language🤔'
        tags={['Ruby', 'r-fxxk']}
      />
      <Produit
        name='hyper-cola-theme'
        url='https://github.com/asny23/hyper-cola-theme'
        description='Cola color theme for Hyper terminal'
        tags={['Hyper']}
      />
    </>
  )
}
