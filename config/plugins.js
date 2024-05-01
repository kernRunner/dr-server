// module.exports = () => ({});


// file: config/plugins.js
"use strict";

module.exports = ({ env }) => ({
  // ...
  meilisearch: {
    config: {
      // Your meili host
      host: "http://localhost:7700",
      // Your master key or private key
      apiKey: env('MEILI_MASTER_KEY', ''),
    }
  }
  // ...
});