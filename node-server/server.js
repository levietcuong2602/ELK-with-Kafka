const express = require("express");
const { logger } = require("./logger");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, async () => {
  for (let i = 0; 100000; i++) {
    await new Promise((rs) => setTimeout(rs, 500));

    logger.log(`Logging index=${i}`);
  }

  // console.log(`Server is running on port ${3000}`);
  logger.log(`Server is running on port ${3000}`);
});
