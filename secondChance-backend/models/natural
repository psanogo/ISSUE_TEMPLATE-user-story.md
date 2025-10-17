// /sentiment/index.js

// The required line for your assignment
const natural = require('natural');

const { WordTokenizer, SentimentAnalyzer, PorterStemmer } = natural;

const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');
const tokenizer = new WordTokenizer();

function getSentiment(text) {
  if (!text || typeof text !== 'string') {
    return 0; // Neutral sentiment for empty or invalid input
  }
  const tokens = tokenizer.tokenize(text);
  return analyzer.getSentiment(tokens);
}

module.exports = { getSentiment };
