<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrskewness

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a [corrected sample skewness][sample-skewness] incrementally.

<section class="intro">

The [skewness][sample-skewness] for a random variable `X` is defined as

<!-- <equation class="equation" label="eq:skewness" align="center" raw="\operatorname{Skewness}[X] = \mathrm{E}\biggl[ \biggl( \frac{X - \mu}{\sigma} \biggr)^3 \biggr]" alt="Equation for skewness."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Skewness}[X] = \mathrm{E}\biggl[ \biggl( \frac{X - \mu}{\sigma} \biggr)^3 \biggr]" data-equation="eq:skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/skewness/docs/img/equation_skewness.svg" alt="Equation for skewness.">
    <br>
</div>

<!-- </equation> -->

For a sample of `n` values, the [sample skewness][sample-skewness] is

<!-- <equation class="equation" label="eq:sample_skewness" align="center" raw="b_1 = \frac{m_3}{s^3} = \frac{\frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^3}{\biggl( \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2 \biggr)^{3/2}}" alt="Equation for the sample skewness."> -->

<div class="equation" align="center" data-raw-text="b_1 = \frac{m_3}{s^3} = \frac{\frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^3}{\biggl( \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2 \biggr)^{3/2}}" data-equation="eq:sample_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/skewness/docs/img/equation_sample_skewness.svg" alt="Equation for the sample skewness.">
    <br>
</div>

<!-- </equation> -->

where `m_3` is the sample third central moment and `s` is the sample standard deviation.

An alternative definition for the [sample skewness][sample-skewness] which includes an adjustment factor (and is the implemented definition) is

<!-- <equation class="equation" label="eq:adjusted_sample_skewness" align="center" raw="G_1 = \frac{n^2}{(n-1)(n-2)} \frac{m_3}{s^3} = \frac{\sqrt{n(n-1)}}{n-2} \frac{\frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^3}{\biggl( \frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^2 \biggr)^{3/2}}" alt="Equation for the adjusted sample skewness."> -->

<div class="equation" align="center" data-raw-text="G_1 = \frac{n^2}{(n-1)(n-2)} \frac{m_3}{s^3} = \frac{\sqrt{n(n-1)}}{n-2} \frac{\frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^3}{\biggl( \frac{1}{n} \sum_{i=0}^{n-1} (x_i - \bar{x})^2 \biggr)^{3/2}}" data-equation="eq:adjusted_sample_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/skewness/docs/img/equation_adjusted_sample_skewness.svg" alt="Equation for the adjusted sample skewness.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-skewness
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var incrskewness = require( '@stdlib/stats-incr-skewness' );
```

#### incrskewness()

Returns an accumulator `function` which incrementally computes a [corrected sample skewness][sample-skewness].

```javascript
var accumulator = incrskewness();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [corrected sample skewness][sample-skewness]. If not provided an input value `x`, the accumulator function returns the current [corrected sample skewness][sample-skewness].

```javascript
var accumulator = incrskewness();

var skewness = accumulator();
// returns null

skewness = accumulator( 2.0 );
// returns null

skewness = accumulator( -5.0 );
// returns null

skewness = accumulator( -10.0 );
// returns ~0.492

skewness = accumulator();
// returns ~0.492
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrskewness = require( '@stdlib/stats-incr-skewness' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrskewness();

// For each simulated datum, update the corrected sample skewness...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Joanes, D. N., and C. A. Gill. 1998. "Comparing measures of sample skewness and kurtosis." _Journal of the Royal Statistical Society: Series D (The Statistician)_ 47 (1). Blackwell Publishers Ltd: 183???89. doi:[10.1111/1467-9884.00122][@joanes:1998].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/kurtosis`][@stdlib/stats/incr/kurtosis]</span><span class="delimiter">: </span><span class="description">compute a corrected sample excess kurtosis incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mean`][@stdlib/stats/incr/mean]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/stdev`][@stdlib/stats/incr/stdev]</span><span class="delimiter">: </span><span class="description">compute a corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/summary`][@stdlib/stats/incr/summary]</span><span class="delimiter">: </span><span class="description">compute a statistical summary incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/variance`][@stdlib/stats/incr/variance]</span><span class="delimiter">: </span><span class="description">compute an unbiased sample variance incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-skewness.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-skewness

[test-image]: https://github.com/stdlib-js/stats-incr-skewness/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-skewness/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-skewness/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-skewness?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-skewness.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-skewness/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-skewness/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-skewness/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-skewness/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-skewness/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-skewness/main/LICENSE

[sample-skewness]: https://en.wikipedia.org/wiki/Skewness

[@joanes:1998]: http://onlinelibrary.wiley.com/doi/10.1111/1467-9884.00122/

<!-- <related-links> -->

[@stdlib/stats/incr/kurtosis]: https://github.com/stdlib-js/stats-incr-kurtosis

[@stdlib/stats/incr/mean]: https://github.com/stdlib-js/stats-incr-mean

[@stdlib/stats/incr/stdev]: https://github.com/stdlib-js/stats-incr-stdev

[@stdlib/stats/incr/summary]: https://github.com/stdlib-js/stats-incr-summary

[@stdlib/stats/incr/variance]: https://github.com/stdlib-js/stats-incr-variance

<!-- </related-links> -->

</section>

<!-- /.links -->
