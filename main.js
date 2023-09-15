const axios = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5054;
app.use(express.json({ limit: '50mb' }));

const apiKey = '';

const userID = 'user_123';

async function startInteract(prompt) {

  const response = await axios({
    method: 'POST',
    baseURL: 'https://general-runtime.voiceflow.com',
    url: `/state/user/${userID}/interact`,
    headers: {
    Authorization: apiKey,
    },
    data: {
        action: {
            type: 'text',
            payload: prompt,
        }
    }
});

  console.log(response.data);
  return response.data[1].payload.message
}

app.post('//complete', async (req, res, next) => {
    const body = req.body
    const { prompt } = body
    console.log({prompt})
    try {
        let result = await startInteract(prompt)
        console.log(result)
        res.json({"completion": result,"stop_reason":"stop_sequence","model":"claude-2.0","stop":"\n\nHuman:","log_id":"7a26811de5ac9a124f3790ce43634126558e955faa6c84b3743cdab99f2a45a5"});

        res.end();
    }
    catch(e) {
        console.log(e)
        next(e);
    }
  });

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(400).json({ error: { message: err.toString() }});
  });

  app.listen(PORT, () => {
    console.log(`Claude proxy: \x1b[32m%s\x1b[0m`, `http://127.0.0.1:${PORT}/`);
  });
