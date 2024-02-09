
const { google } = require('googleapis');
const sheets = google.sheets('v4');
const credentials = require('../chystoshvydko-ad9f8a152b8b.json'); // path to your JSON file

module.exports.createOrder_post = async (req, res) => {
    let { orders } = req.body;
    try {
        console.log(orders);

        await appendDataToSheet(orders);

        res.status(200).json({message: 'Order created'});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'});
    }
}


async function appendDataToSheet(data) {
  const client = new google.auth.JWT(
    credentials.client_email, 
    null, 
    credentials.private_key, 
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  await client.authorize();

  const request = {
    spreadsheetId: '1oiy-hE8p75V6DgafWTFbF_PzJqGZuhqcSOdLWGXnh7M', // found in your sheet URL
    range: 'CRM', // or whatever your sheet is named
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [data],
    },
    auth: client,
  };

  try {
    await sheets.spreadsheets.values.append(request);
  } catch (err) {
    console.error('Error appending data to Sheet:', err);
  }
}

// Usage: appendDataToSheet(['Name', 'Email', 'Product', 'Quantity']);
