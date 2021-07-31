module.exports = {
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/place/',
        destination: 'https://place-asny23hub.vercel.app/place/'
      },
      {
        source: '/place/:path*',
        destination: 'https://place-asny23hub.vercel.app/place/:path*'
      }
    ]
  }
}
