exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { data, timestamp } = JSON.parse(event.body);
    
    // Simpan dashboard data ke variable global
    global.dashboardData = data;
    global.dashboardLastUpdated = timestamp;
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        source: 'cloud'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};