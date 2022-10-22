import parse from "rss-to-json";
import * as Sentry from "@sentry/nextjs";

export default function handler(req, res) {
  const category = req.query.category;
  parse(`https://www.promodescuentos.com/rss?group=${category}`)
    .then((data) => {
      res.status(200).json(data.items);
    })
    .catch((error) => {
      Sentry.captureException(error);
      res.status(500).json(error);
    });
}
