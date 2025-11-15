exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { filename } = JSON.parse(event.body);
    
    // Cari file dari localStorage simulasi
    const files = global.uploadedFiles || [];
    const file = files.find(f => f.filename === filename);
    
    if (!file) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'File not found' })
      };
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify(file.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};