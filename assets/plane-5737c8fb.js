import{cR as X,cN as P,cs as b,cp as l,aE as E}from"./index-cb8c10d0.js";import"./sphere-cc89639f.js";function x(I=q){return[I[0],I[1],I[2],I[3]]}function C(I,N,M,r=x()){const s=M[0]-N[0],u=M[1]-N[1],a=M[2]-N[2],c=I[0]-N[0],m=I[1]-N[1],p=I[2]-N[2],F=u*p-a*m,h=a*c-s*p,T=s*m-u*c,_=F*F+h*h+T*T,A=Math.abs(_-1)>1e-5&&_>1e-12?1/Math.sqrt(_):1;return r[0]=F*A,r[1]=h*A,r[2]=T*A,r[3]=-(r[0]*I[0]+r[1]*I[1]+r[2]*I[2]),r}function L(I,N,M,r=0,s=Math.floor(M*(1/3)),u=Math.floor(M*(2/3))){if(M<3)return!1;N(f,r);let a=s,c=!1;for(;a<M-1&&!c;)N(o,a),a++,c=!X(f,o);if(!c)return!1;for(a=Math.max(a,u),c=!1;a<M&&!c;)N(n,a),a++,P(i,f,o),b(i,i),P(e,o,n),b(e,e),c=!X(f,n)&&!X(o,n)&&Math.abs(l(i,e))<O;return c?(C(f,o,n,I),!0):(r!==0||s!==1||u!==2)&&L(I,N,M,0,1,2)}const O=.99619469809,f=E(),o=E(),n=E(),i=E(),e=E();function z(I){return I}const q=[0,0,1,0];var t;(function(I){I[I.NONE=0]="NONE",I[I.CLAMP=1]="CLAMP",I[I.INFINITE_MIN=4]="INFINITE_MIN",I[I.INFINITE_MAX=8]="INFINITE_MAX"})(t||(t={}));t.INFINITE_MIN|t.INFINITE_MAX;t.INFINITE_MAX;export{L as X,x as b,z as o};
