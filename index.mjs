// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-one-to@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s){var n=t(s);if(null===n)throw new TypeError(e("invalid argument. First argument must be either an array, typed array, or complex typed array. Value: `%s`.",s));return arguments.length>1&&(n=arguments[1]),r(s.length,n)}export{s as default};
//# sourceMappingURL=index.mjs.map
