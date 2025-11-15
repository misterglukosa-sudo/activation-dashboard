exports.handler = async function(event, context) {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Ambil dashboard data dari variable global
    const data = global.dashboardData || [];
    
    return {
      statusCode: 200,
      body: JSON.stringify({ data })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};