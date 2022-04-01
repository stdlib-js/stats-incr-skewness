// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).incrskewness=n()}(this,(function(){"use strict";var r=function(r){return r!=r},n=Math.sqrt,t=Math.floor;var e=function(r){return t(r)===r},u=e;var i=function(r){return u(r/2)};var f=function(r){return i(r>0?r-1:r+1)},o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,c=o,y=a;var v=function(r){return r===c||r===y};var l=function(r){return Math.abs(r)};var p=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var A=function(){return p&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,b=w;var s=function(r){return b.call(r)},U=Object.prototype.hasOwnProperty;var d=function(r,n){return null!=r&&U.call(r,n)},m="function"==typeof Symbol?Symbol.toStringTag:"",h=d,N=m,I=w;var g=s,F=function(r){var n,t,e;if(null==r)return I.call(r);t=r[N],n=h(r,N);try{r[N]=void 0}catch(n){return I.call(r)}return e=I.call(r),n?r[N]=t:delete r[N],e},S=A()?F:g,H=S,O="function"==typeof Uint32Array;var T="function"==typeof Uint32Array?Uint32Array:null,j=function(r){return O&&r instanceof Uint32Array||"[object Uint32Array]"===H(r)},E=T;var G=function(){var r,n;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,4294967296,4294967297]),r=j(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var L="function"==typeof Uint32Array?Uint32Array:void 0,W=function(){throw new Error("not implemented")},M=G()?L:W,x=S,P="function"==typeof Float64Array;var V="function"==typeof Float64Array?Float64Array:null,Y=function(r){return P&&r instanceof Float64Array||"[object Float64Array]"===x(r)},_=V;var k=function(){var r,n;if("function"!=typeof _)return!1;try{n=new _([1,3.14,-3.14,NaN]),r=Y(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var q="function"==typeof Float64Array?Float64Array:void 0,z=function(){throw new Error("not implemented")},B=k()?q:z,C=S,D="function"==typeof Uint8Array;var J="function"==typeof Uint8Array?Uint8Array:null,K=function(r){return D&&r instanceof Uint8Array||"[object Uint8Array]"===C(r)},Q=J;var R=function(){var r,n;if("function"!=typeof Q)return!1;try{n=new Q(n=[1,3.14,-3.14,256,257]),r=K(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var X="function"==typeof Uint8Array?Uint8Array:void 0,Z=function(){throw new Error("not implemented")},$=R()?X:Z,rr=S,nr="function"==typeof Uint16Array;var tr="function"==typeof Uint16Array?Uint16Array:null,er=function(r){return nr&&r instanceof Uint16Array||"[object Uint16Array]"===rr(r)},ur=tr;var ir=function(){var r,n;if("function"!=typeof ur)return!1;try{n=new ur(n=[1,3.14,-3.14,65536,65537]),r=er(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var fr,or="function"==typeof Uint16Array?Uint16Array:void 0,ar=function(){throw new Error("not implemented")},cr={uint16:ir()?or:ar,uint8:$};(fr=new cr.uint16(1))[0]=4660;var yr,vr,lr=52===new cr.uint8(fr.buffer)[0];!0===lr?(yr=1,vr=0):(yr=0,vr=1);var pr=M,Ar={HIGH:yr,LOW:vr},wr=new B(1),br=new pr(wr.buffer),sr=Ar.HIGH,Ur=Ar.LOW;var dr=function(r,n){return wr[0]=n,r[0]=br[sr],r[1]=br[Ur],r};var mr=function(r,n){return 1===arguments.length?dr([0,0],r):dr(r,n)},hr=mr,Nr=M,Ir=!0===lr?0:1,gr=new B(1),Fr=new Nr(gr.buffer);var Sr=function(r,n){return gr[0]=r,Fr[Ir]=n>>>0,gr[0]},Hr=Sr;var Or=function(r){return 0|r},Tr=M,jr=!0===lr?1:0,Er=new B(1),Gr=new Tr(Er.buffer);var Lr,Wr,Mr=function(r){return Er[0]=r,Gr[jr]};!0===lr?(Lr=1,Wr=0):(Lr=0,Wr=1);var xr=M,Pr={HIGH:Lr,LOW:Wr},Vr=new B(1),Yr=new xr(Vr.buffer),_r=Pr.HIGH,kr=Pr.LOW;var qr=function(r,n){return Yr[_r]=r,Yr[kr]=n,Vr[0]},zr=qr,Br=hr,Cr=Mr,Dr=zr,Jr=[0,0];var Kr=function(r,n){var t,e;return Br(Jr,r),t=Jr[0],t&=2147483647,e=Cr(n),Dr(t|=e&=2147483648,Jr[1])},Qr=f,Rr=Kr,Xr=a,Zr=o;var $r=function(r,n){return n===Xr?Zr:n===Zr?0:n>0?Qr(n)?r:0:Qr(n)?Rr(Zr,r):Zr},rn=Mr;var nn=function(r,n){return(2147483647&rn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},tn=l,en=o;var un=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:tn(r)<1==(n===en)?0:en},fn=M,on=!0===lr?1:0,an=new B(1),cn=new fn(an.buffer);var yn=function(r,n){return an[0]=r,cn[on]=n>>>0,an[0]};var vn=Mr,ln=Hr,pn=yn,An=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},wn=1048576,bn=[1,1.5],sn=[0,.5849624872207642],Un=[0,1.350039202129749e-8];var dn=Hr,mn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var hn=v,Nn=r,In=l;var gn=function(r,n){return Nn(n)||hn(n)?(r[0]=n,r[1]=0,r):0!==n&&In(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Fn=function(r,n){return 1===arguments.length?gn([0,0],r):gn(r,n)},Sn=Mr;var Hn=function(r){var n=Sn(r);return(n=(2146435072&n)>>>20)-1023|0},On=o,Tn=a,jn=r,En=v,Gn=Kr,Ln=Fn,Wn=Hn,Mn=hr,xn=zr,Pn=[0,0],Vn=[0,0];var Yn=function(r,n){var t,e;return 0===n||0===r||jn(r)||En(r)?r:(Ln(Pn,r),n+=Pn[1],(n+=Wn(r=Pn[0]))<-1074?Gn(0,r):n>1023?r<0?Tn:On:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Mn(Vn,r),t=Vn[0],t&=2148532223,e*xn(t|=n+1023<<20,Vn[1])))};var _n=Mr,kn=yn,qn=Hr,zn=Or,Bn=Yn,Cn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Dn=2147483647,Jn=1048575,Kn=1048576;var Qn=r,Rn=f,Xn=v,Zn=e,$n=n,rt=l,nt=hr,tt=Hr,et=Or,ut=a,it=o,ft=$r,ot=nn,at=un,ct=function(r,n,t){var e,u,i,f,o,a,c,y,v,l,p,A,w,b,s,U,d,m,h,N;return m=0,t<wn&&(m-=53,t=vn(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=wn),e=524288+(t>>1|536870912),o=(d=1/((n=pn(n,t))+(c=bn[N])))*((U=n-c)-(f=ln(u=U*d,0))*(a=pn(0,e+=N<<18))-f*(n-(a-c))),s=(i=u*u)*i*An(i),a=ln(a=3+(i=f*f)+(s+=o*(f+u)),0),w=(p=-7.028461650952758e-9*(v=ln(v=(U=f*a)+(d=o*a+(s-(a-3-i))*u),0))+.9617966939259756*(d-(v-U))+Un[N])-((A=ln(A=(l=.9617967009544373*v)+p+(y=sn[N])+(b=m),0))-b-y-l),r[0]=A,r[1]=w,r},yt=function(r,n){var t,e,u,i,f;return t=(f=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*mn(u)))-((e=dn(e=(i=1.4426950216293335*u)+f,0))-i),r[0]=e,r[1]=t,r},vt=function(r,n,t){var e,u,i,f,o,a,c,y,v;return v=((y=r&Dn|0)>>20)-1023|0,c=0,y>1071644672&&(u=kn(0,((c=r+(Kn>>v+1)>>>0)&~(Jn>>(v=((c&Dn)>>20)-1023|0)))>>>0),c=(c&Jn|Kn)>>20-v>>>0,r<0&&(c=-c),n-=u),o=(f=.6931471805599453*(t-((u=qn(u=t+n,0))-n))+-1.904654299957768e-9*u)-((a=(i=.6931471824645996*u)+f)-i),e=a-(u=a*a)*Cn(u),r=_n(a=1-(a*e/(e-2)-(o+a*o)-a)),r=zn(r),a=(r+=c<<20>>>0)>>20<=0?Bn(a,c):kn(a,r)},lt=2147483647,pt=1083179008,At=1e300,wt=1e-300,bt=[0,0],st=[0,0];var Ut=function r(n,t){var e,u,i,f,o,a,c,y,v,l,p,A,w,b;if(Qn(n)||Qn(t))return NaN;if(nt(bt,t),o=bt[0],0===bt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return $n(n);if(-.5===t)return 1/$n(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Xn(t))return at(n,t)}if(nt(bt,n),f=bt[0],0===bt[1]){if(0===f)return ft(n,t);if(1===n)return 1;if(-1===n&&Rn(t))return-1;if(Xn(n))return n===ut?r(-0,-t):t<0?0:it}if(n<0&&!1===Zn(t))return(n-n)/(n-n);if(i=rt(n),e=f&lt|0,u=o&lt|0,c=o>>>31|0,a=(a=f>>>31|0)&&Rn(t)?-1:1,u>1105199104){if(u>1139802112)return ot(n,t);if(e<1072693247)return 1===c?a*At*At:a*wt*wt;if(e>1072693248)return 0===c?a*At*At:a*wt*wt;p=yt(st,i)}else p=ct(st,i,e);if(l=(t-(y=tt(t,0)))*p[0]+t*p[1],v=y*p[0],nt(bt,A=l+v),w=et(bt[0]),b=et(bt[1]),w>=pt){if(0!=(w-pt|b))return a*At*At;if(l+8008566259537294e-32>A-v)return a*At*At}else if((w&lt)>=1083231232){if(0!=(w-3230714880|b))return a*wt*wt;if(l<=A-v)return a*wt*wt}return a*(A=vt(w,v,l))},dt=r,mt=n,ht=Ut;var Nt=function(){var r,n,t,e,u,i,f,o,a;return r=0,n=0,t=0,e=0,f=0,o=0,a=0,function(c){if(0===arguments.length)return a<3?dt(o)?NaN:null:(i=mt(a)*o/ht(f,1.5),mt(a*(a-1))*i/(a-2));if(u=(t=(n=c-e)*(r=n/(a+=1))*(a-1))*r*(a-2),o+=u-=3*r*f,f+=t,e+=r,a<3)return dt(o)?NaN:null;return i=mt(a)*o/ht(f,1.5),mt(a*(a-1))*i/(a-2)}};return Nt}));
//# sourceMappingURL=bundle.js.map
