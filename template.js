module.exports = (title, body) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
      </head>
      <body>
        <div id='root'>${body}</div>
        <script src="/public/bundle.js"></script>
      </body>
    </html>
  `;
