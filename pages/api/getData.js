import parse from "rss-to-json";
import * as Sentry from "@sentry/nextjs";
import SOSData from "../../services/data"

export default function handler(req, res) {
  const country = (req.geo && req.geo.country) || 'MX';
  parse(`https://www.promodescuentos.com/rss?country=${country}`)
    .then((data) => {
      res.status(200).json(data.items);
    })
    .catch((error) => {
      Sentry.captureException(error);
      res.status(200).json(SOSData);
    });
}
