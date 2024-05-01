// module.exports = () => ({});


// file: config/plugins.js
"use strict";

module.exports = ({ env }) => ({
  // ...
  meilisearch: {
    config: {
      // Your meili host
      host: env('MEILI_API_ENDPOINT', ''),
      // Your master key or private key
      apiKey: env('MEILI_MASTER_KEY', ''),
    }
  }
  // ...
});