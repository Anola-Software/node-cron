import { schedule } from 'node-cron';
import 'dotenv/config'

schedule(`0 * * * *`, async () => {
  try {
    const response = await fetch(`${process.env.VORA_FRONTEND_URL}/api/fetch-tvl`, { method: 'GET' });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error calling the route:', error);
  }
});