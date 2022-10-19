import parse from 'rss-to-json'

export default function handler(req, res) {
  const category = req.query.category
  parse(`https://www.promodescuentos.com/rss?group=${category}`)
    .then((data) => {
      res.status(200).json(data.items)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
}