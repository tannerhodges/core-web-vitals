# Testing Core Web Vitals

This repo includes basic tests to see how well Lighthouse measures Core Web Vitals.

Specifically, I'm looking for buggy behavior—situations where Lighthouse reports something unexpected for FCP, CLS, etc.

## Running Tests

I've added [`http-server`](https://github.com/http-party/http-server#readme) to load the test pages locally, and a rough `npm test` command to quickly batch-run Lighthouse tests.

```sh
npm install
npm start
npm test
```

Open the HTML files in the `lighthouse/` folder to see the reports.

By default, `npm test` only checks the FCP Opacity test. To test other pages, edit the `test` script in `package.json` and change the paths to the page you want to test. (I'll improve this soon.)
