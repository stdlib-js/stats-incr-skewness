// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";function n(){var n,r,i,a,m,l,d,h,o;return n=0,r=0,i=0,a=0,d=0,h=0,o=0,function(p){if(0===arguments.length)return o<3?t(h)?NaN:null:(l=s(o)*h/e(d,1.5),s(o*(o-1))*l/(o-2));if(m=(i=(r=p-a)*(n=r/(o+=1))*(o-1))*n*(o-2),h+=m-=3*n*d,d+=i,a+=n,o<3)return t(h)?NaN:null;return l=s(o)*h/e(d,1.5),s(o*(o-1))*l/(o-2)}}export{n as default};
//# sourceMappingURL=index.mjs.map
