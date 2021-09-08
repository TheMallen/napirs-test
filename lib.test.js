/* eslint-env jest */
const { transformSync } = require("./");

const swc = async (code) => {
  let output = await transformSync(code);
  return output.code;
};

const trim = (s) => s.join("\n").trim().replace(/^\s+/gm, "");

describe("swcify", () => {
  it("returns JS", () => {
    const output = swc(
      trim`
      import {foo} from 'bar';

      export function helloWorld() {
        console.log("hi ", foo);
      }
    `
    );

    expect(output).toMatch(trim`
    import {foo} from 'bar';

    export function helloWorld() {
      console.log("hi ", foo);
    }
  `);
  });
});
