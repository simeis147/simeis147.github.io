import{w as ln,c as S}from"./path-53f90ab3.js";import{ar as an,as as H,at as q,au as rn,av as y,ap as tn,aw as L,ax as _,ay as un,az as o,aA as sn,aB as on,aC as fn}from"./mermaid.core-c679d893.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function xn(l,h,C,z,v,A,j,a){var D=C-l,i=z-h,n=j-v,m=a-A,r=m*D-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*D,h+r*i]}function W(l,h,C,z,v,A,j){var a=l-C,D=h-z,i=(j?A:-A)/L(a*a+D*D),n=i*D,m=-i*a,r=l+n,s=h+m,f=C+n,c=z+m,F=(r+f)/2,t=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,w=r*c-f*s,E=(g<0?-1:1)*L(fn(0,T*T*R-w*w)),I=(w*g-p*E)/R,O=(-w*p-g*E)/R,P=(w*g+p*E)/R,x=(-w*p+g*E)/R,d=I-F,e=O-t,u=P-F,G=x-t;return d*d+e*e>u*u+G*G&&(I=P,O=x),{cx:I,cy:O,x01:-n,y01:-m,x11:I*(v/T-1),y11:O*(v/T-1)}}function vn(){var l=cn,h=yn,C=S(0),z=null,v=gn,A=mn,j=pn,a=null,D=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,F=un(c-f),t=c>f;if(a||(a=n=D()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(F>tn-y)a.moveTo(s*H(f),s*q(f)),a.arc(0,0,s,f,c,!t),r>y&&(a.moveTo(r*H(c),r*q(c)),a.arc(0,0,r,c,f,t));else{var p=f,g=c,R=f,T=c,w=F,E=F,I=j.apply(this,arguments)/2,O=I>y&&(z?+z.apply(this,arguments):L(r*r+s*s)),P=_(un(s-r)/2,+C.apply(this,arguments)),x=P,d=P,e,u;if(O>y){var G=sn(O/r*q(I)),M=sn(O/s*q(I));(w-=G*2)>y?(G*=t?1:-1,R+=G,T-=G):(w=0,R=T=(f+c)/2),(E-=M*2)>y?(M*=t?1:-1,p+=M,g-=M):(E=0,p=g=(f+c)/2)}var J=s*H(p),K=s*q(p),N=r*H(T),Q=r*q(T);if(P>y){var U=s*H(g),V=s*q(g),X=r*H(R),Y=r*q(R),B;if(F<an)if(B=xn(J,K,X,Y,U,V,N,Q)){var Z=J-B[0],$=K-B[1],k=U-B[0],b=V-B[1],nn=1/q(on((Z*k+$*b)/(L(Z*Z+$*$)*L(k*k+b*b)))/2),en=L(B[0]*B[0]+B[1]*B[1]);x=_(P,(r-en)/(nn-1)),d=_(P,(s-en)/(nn+1))}else x=d=0}E>y?d>y?(e=W(X,Y,J,K,s,d,t),u=W(U,V,N,Q,s,d,t),a.moveTo(e.cx+e.x01,e.cy+e.y01),d<P?a.arc(e.cx,e.cy,d,o(e.y01,e.x01),o(u.y01,u.x01),!t):(a.arc(e.cx,e.cy,d,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,s,o(e.cy+e.y11,e.cx+e.x11),o(u.cy+u.y11,u.cx+u.x11),!t),a.arc(u.cx,u.cy,d,o(u.y11,u.x11),o(u.y01,u.x01),!t))):(a.moveTo(J,K),a.arc(0,0,s,p,g,!t)):a.moveTo(J,K),!(r>y)||!(w>y)?a.lineTo(N,Q):x>y?(e=W(N,Q,U,V,r,-x,t),u=W(J,K,X,Y,r,-x,t),a.lineTo(e.cx+e.x01,e.cy+e.y01),x<P?a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(u.y01,u.x01),!t):(a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,r,o(e.cy+e.y11,e.cx+e.x11),o(u.cy+u.y11,u.cx+u.x11),t),a.arc(u.cx,u.cy,x,o(u.y11,u.x11),o(u.y01,u.x01),!t))):a.arc(0,0,r,T,R,t)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[H(m)*n,q(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:S(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:S(+n),i):h},i.cornerRadius=function(n){return arguments.length?(C=typeof n=="function"?n:S(+n),i):C},i.padRadius=function(n){return arguments.length?(z=n==null?null:typeof n=="function"?n:S(+n),i):z},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:S(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:S(+n),i):A},i.padAngle=function(n){return arguments.length?(j=typeof n=="function"?n:S(+n),i):j},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
