var aP="3",bP="Any",cP="Aromatic",dP="Nonring",eP="Reset",fP="Ring";function gP(){gP=r;hP=new Wo(Vc,new iP)}function iP(){}q(210,207,{},iP);_.Pc=function(a){mx();GL(this,a.b,jP(a.a.a,a.a.a.ob.selectedIndex))};_.Sc=function(){return hP};var hP;function kP(a,b){if(0>b||b>=a.ob.options.length)throw new ou;}function jP(a,b){kP(a,b);return a.ob.options[b].value}function lP(){this.ob=$doc.createElement("select");this.ob[dd]="gwt-ListBox"}q(356,334,rh,lP);function mP(){mP=r}
function nP(a,b){if(null==b)throw new Nq("Missing message: awt.103");var c=-1,d,e,f;f=a.mc.a.ob;e=$doc.createElement(nf);e.text=b;e.removeAttribute("bidiwrapped");e.value=b;d=f.options.length;(0>c||c>d)&&(c=d);c==d?f.add(e,null):(c=f.options[c],f.add(e,c))}function oP(){mP();lx.call(this);new xi;this.mc=new pP((mx(),this))}q(421,408,{90:1,92:1,99:1,111:1,117:1},oP);_.ae=function(){return qx(this.mc,this)};
_.pe=function(){return(null==this.jc&&(this.jc=Yw(this)),this.jc)+xa+this.uc+xa+this.vc+xa+this.rc+Kg+this.hc+(this.qc?l:",hidden")+",current="+jP(this.mc.a,this.mc.a.ob.selectedIndex)};function qP(){eL.call(this,7)}q(434,1,Xh,qP);function tP(a){gL.call(this,a,0)}q(439,408,xh,tP);function uP(a){var b=a.j;FL(a.mc.c,b.a,b.b);!$w(a)&&zK(a);uK(a)}
function vP(a,b,c){CL.call(this);this.mc&&$K(this.mc.c,!1);XK(this,!1);zx(this,new eL(0));a=new gL(a,1);$(this,a,null);a=new Ex;$(a,this.i,null);$(this,a,null);b&&(this.j=ax(b),WK(this),BL(this.j,~~(G(b.$b.ob,kf)/2)-~~(this.rc/2),~~(G(b.$b.ob,jf)/2)-~~(this.hc/2)));c&&Z(this,c)}q(567,568,pH,vP);_.jg=function(){return"OK"};q(573,574,yh);_.Lc=function(){uP(new vP(this.b,this.a,(uA(),wA)))};q(576,574,yh);_.Lc=function(){!this.a.Ib?this.a.Ib=new wP(this.a):this.a.Ib.mc.c.gb?tM(this.a.Ib.mc.c):uP(this.a.Ib)};
function xP(a,b){qK(b)==a.a?Z(b,(Xx(),fy)):Z(b,a.a)}
function yP(a){var b,c,d,e;e=l;d=!1;qK(zP)!=a.a?(e=va,d=!0):qK(AP)!=a.a?(e="!#6",d=!0):qK(BP)!=a.a?(Z(CP,(Xx(),fy)),Z(DP,fy),Z(EP,fy),Z(FP,fy),e="F,Cl,Br,I"):(b=qK(GP)!=a.a,c=qK(HP)!=a.a,qK(IP)!=a.a&&(b?e+="c,":c?e+="C,":e+="#6,"),qK(JP)!=a.a&&(b?e+="n,":c?e+="N,":e+="#7,"),qK(KP)!=a.a&&(b?e+="o,":c?e+="O,":e+="#8,"),qK(LP)!=a.a&&(b?e+="s,":c?e+="S,":e+="#16,"),qK(MP)!=a.a&&(b?e+="p,":c?e+="P,":e+="#15,"),qK(CP)!=a.a&&(e+="F,"),qK(DP)!=a.a&&(e+="Cl,"),qK(EP)!=a.a&&(e+="Br,"),qK(FP)!=a.a&&(e+="I,"),
pE(e,xa)&&(e=e.substr(0,e.length-1-0)),1>e.length&&!a.b&&(b?e=pc:c?e=qb:(Z(zP,(Xx(),fy)),e=va)));b=l;d&&qK(GP)!=a.a&&(b+=";a");d&&qK(HP)!=a.a&&(b+=";A");qK(NP)!=a.a&&(b+=";R");qK(OP)!=a.a&&(b+=";!R");qK(zP)!=a.a&&0<b.length?e=b.substr(1,b.length-1):e+=b;d=PP.mc.a.ob.selectedIndex;0<d&&(--d,e+=";H"+d);d=QP.mc.a.ob.selectedIndex;0<d&&(--d,e+=";D"+d);qK(RP)!=a.a&&(e="~");qK(SP)!=a.a&&(e=gb);qK(TP)!=a.a&&(e=pb);qK(UP)!=a.a&&(e="!@");jL(a.e,e)}
function VP(a){WP(a);XP(a);var b=PP.mc.a;kP(b,0);b.ob.options[0].selected=!0;b=QP.mc.a;kP(b,0);b.ob.options[0].selected=!0;Z(GP,a.a);Z(HP,a.a);Z(NP,a.a);Z(OP,a.a);Z(PP,a.a);Z(QP,a.a);YP(a)}function WP(a){Z(IP,a.a);Z(JP,a.a);Z(KP,a.a);Z(LP,a.a);Z(MP,a.a);Z(CP,a.a);Z(DP,a.a);Z(EP,a.a);Z(FP,a.a)}function XP(a){Z(zP,a.a);Z(AP,a.a);Z(BP,a.a)}function YP(a){Z(RP,a.a);Z(SP,a.a);Z(TP,a.a);Z(UP,a.a);a.b=!1}
function wP(a){YK.call(this,"Atom/Bond Query");this.i=new RK(this.jg());Qx(this.q,new DL(this));this.a=(uA(),wA);this.c=a;this.d||(a=ax(a),this.d=new iL(a),BL(this.d,-150,10));this.j=this.d;zx(this,new qP);Z(this,this.a);a=new Ex;zx(a,new wy(0,3,1));$(a,new tP("Atom type :"),null);zP=new RK(bP);AP=new RK("Any except C");BP=new RK("Halogen");$(a,zP,null);$(a,AP,null);$(a,BP,null);$(this,a,null);a=new Ex;zx(a,new wy(0,3,1));$(a,new gL("Or select one or more from the list :",0),null);$(this,a,null);
a=new Ex;zx(a,new wy(0,3,1));IP=new RK(tb);JP=new RK(Pb);KP=new RK(Tb);LP=new RK(ac);MP=new RK(Ub);CP=new RK(Cb);DP=new RK(yb);EP=new RK(sb);FP=new RK(Ib);$(a,IP,null);$(a,JP,null);$(a,KP,null);$(a,LP,null);$(a,MP,null);$(a,CP,null);$(a,DP,null);$(a,EP,null);$(a,FP,null);$(this,a,null);a=new Ex;zx(a,new wy(0,3,1));PP=new oP;nP(PP,bP);nP(PP,$a);nP(PP,db);nP(PP,fb);nP(PP,aP);$(a,new tP("Number of hydrogens :  "),null);$(a,PP,null);$(this,a,null);a=new Ex;zx(a,new wy(0,3,1));QP=new oP;nP(QP,bP);nP(QP,
$a);nP(QP,db);nP(QP,fb);nP(QP,aP);nP(QP,"4");nP(QP,"5");nP(QP,"6");$(a,new gL("Number of connections :",0),null);$(a,QP,null);$(a,new gL(" (H's don't count.)",0),null);$(this,a,null);a=new Ex;zx(a,new wy(0,3,1));$(a,new tP("Atom is :"),null);GP=new RK(cP);$(a,GP,null);HP=new RK("Nonaromatic");$(a,HP,null);NP=new RK(fP);$(a,NP,null);OP=new RK(dP);$(a,OP,null);$(this,a,null);a=new Ex;Z(a,my(qK(this)));zx(a,new wy(0,3,1));$(a,new tP("Bond is :"),null);RP=new RK(bP);$(a,RP,null);SP=new RK(cP);$(a,SP,
null);TP=new RK(fP);$(a,TP,null);UP=new RK(dP);$(a,UP,null);$(this,a,null);a=new Ex;zx(a,new wy(1,3,1));this.e=new bz(va,20);$(a,this.e,null);$(a,new RK(eP),null);$(a,this.i,null);$(this,a,null);this.mc&&$K(this.mc.c,!1);XK(this,!1);WP(this);XP(this);YP(this);Z(GP,this.a);Z(HP,this.a);Z(NP,this.a);Z(OP,this.a);Z(PP,this.a);Z(QP,this.a);xP(this,zP);WK(this);a=this.j;FL(this.mc.c,a.a,a.b);!$w(this)&&zK(this);uK(this)}q(586,568,pH,wP);
_.kg=function(a,b){var c;H(b,eP)?(VP(this),xP(this,zP),yP(this)):D(a.f,89)?(YP(this),ur(a.f)===ur(zP)?(WP(this),XP(this)):ur(a.f)===ur(AP)?(WP(this),XP(this)):ur(a.f)===ur(BP)?(WP(this),XP(this)):ur(a.f)===ur(NP)?Z(OP,this.a):ur(a.f)===ur(OP)?(Z(NP,this.a),Z(GP,this.a)):ur(a.f)===ur(GP)?(Z(HP,this.a),Z(OP,this.a)):ur(a.f)===ur(HP)?Z(GP,this.a):ur(a.f)===ur(RP)||ur(a.f)===ur(SP)||ur(a.f)===ur(TP)||ur(a.f)===ur(UP)?(VP(this),this.b=!0):XP(this),xP(this,a.f),yP(this)):D(a.f,90)&&(YP(this),c=a.f,0==c.mc.a.ob.selectedIndex?
Z(c,this.a):Z(c,(Xx(),fy)),yP(this));107!=this.c.e&&(this.c.e=107,Jx(this.c));return!0};_.lg=function(){return Fm(this.e.mc.a.ob,Eg)};_.mg=function(){return this.b};_.b=!1;_.c=null;_.d=null;var zP=_.e=null,RP=null,AP=null,GP=null,SP=null,EP=null,IP=null,QP=null,PP=null,DP=null,CP=null,BP=null,FP=null,JP=null,HP=null,OP=null,UP=null,KP=null,MP=null,NP=null,TP=null,LP=null;function pP(a){xG();zG.call(this);this.a=new lP;Wt(this.a,new ZP(this,a),(gP(),gP(),hP))}q(632,630,{},pP);_.Je=function(){return this.a};
_.a=null;function ZP(a,b){this.a=a;this.b=b}q(633,1,{},ZP);_.a=null;_.b=null;X(567);X(586);X(421);X(632);X(633);X(356);X(210);x(oH)(1);