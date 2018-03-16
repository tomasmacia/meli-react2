module.exports = (title, body, bundle) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
      </head>
      <body>
        <div id='root'>${body}</div>
        <script src="/public/${bundle}.bundle.js"></script>
      </body>
    </html>
  `;
