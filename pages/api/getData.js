export default function handler(req, res) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2c4386998amsh20ad509a78335cbp153360jsn898167d1a911',
      'X-RapidAPI-Host': 'walmart.p.rapidapi.com'
    }
  };

  fetch('https://walmart.p.rapidapi.com/products/v2/list?cat_id=0&sort=best_seller&page=1', options)
    .then(response => response.json())
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
}
