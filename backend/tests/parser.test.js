const parseHTML = require("../utils/parser");

describe("HTML Parser", () => {

  test("Extracts title correctly", () => {

    const html = `
      <html>
        <head>
          <title>My Website</title>
          <meta name="description" content="Test Description">
        </head>
        <body>
          <h1>Hello</h1>
          <img src="image.jpg">
          <p>This is a simple webpage.</p>
        </body>
      </html>
    `;

    const result = parseHTML(html);

    expect(result.title).toBe("My Website");
    expect(result.metaDescription).toBe("Test Description");
    expect(result.h1Count).toBe(1);
    expect(result.imagesMissingAlt).toBe(1);
    expect(result.wordCount).toBeGreaterThan(0);

  });

  test("Returns 'Not Found' when meta description is missing", () => {

    const html = `
      <html>
        <head>
          <title>No Meta</title>
        </head>
        <body></body>
      </html>
    `;

    const result = parseHTML(html);

    expect(result.metaDescription).toBe("Not Found");

  });

  test("Returns zero when page has no H1 or images", () => {

    const html = `
      <html>
        <head>
          <title>Empty</title>
        </head>
        <body>
          <p>Hello World</p>
        </body>
      </html>
    `;

    const result = parseHTML(html);

    expect(result.h1Count).toBe(0);
    expect(result.imagesMissingAlt).toBe(0);

  });

});