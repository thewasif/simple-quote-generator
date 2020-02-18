#!/usr/bin/env node

const request = require("request");
const url =
  "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?";

const getQuote = () => {
  request(url, (er, res, body) => {
    try {
      let data = JSON.parse(body);
      let { quoteText, quoteAuthor } = data;
      console.log(quoteText);
      console.log(`- ${quoteAuthor}`);
    } catch (e) {
      getQuote();
    }
  });
};

getQuote();
