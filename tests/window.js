/** @constructor */
var __IDRRT__Type = function(type) {
  this.type = type;
};

var __IDRRT__Int = new __IDRRT__Type('Int');
var __IDRRT__Char = new __IDRRT__Type('Char');
var __IDRRT__String = new __IDRRT__Type('String');
var __IDRRT__Integer = new __IDRRT__Type('Integer');
var __IDRRT__Float = new __IDRRT__Type('Float');
var __IDRRT__Ptr = new __IDRRT__Type('Pointer');
var __IDRRT__Forgot = new __IDRRT__Type('Forgot');

var __IDRRT__ffiWrap = function(fid) {
  return function(){
    var res = fid;
    var i = 0;
    var arg;
    while (res instanceof __IDRRT__Con){
      arg = arguments[i];
      res = __IDRRT__tailcall(function(){
        return __IDR__mAPPLY0(res, arg);
      });
      ++i;
    }
    return res;
  }
};

var __IDRRT__tailcall = function(k) {
  var ret = k();
  while (ret instanceof __IDRRT__Cont)
    ret = ret.k();

  return ret;
};

var __IDRRT__charCode = function(str) {
  var type = typeof str;
  if (type == "string")
    return str.charCodeAt(0);
  else
    return str;
}

var __IDRRT__fromCharCode = function(chr) {
  var type = typeof chr;
  if (type == "string")
    return chr;
  else
    return String.fromCharCode(chr);
}

var __IDRRT__print = function(s) {
  console.log(s);
};


var __IDRRT__systemInfo = function(index) {
    switch(index) {
        case 0:
            return "javascript";
        case 1:
            return navigator.platform;
    }
    return "";
}

var __IDRLT__APPLY65620 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return alert(mfn0.vars[0])
})
}
var __IDRLT__APPLY65621 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return atob(mfn0.vars[0])
})
}
var __IDRLT__APPLY65622 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return blur()
})
}
var __IDRLT__APPLY65623 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return btoa(mfn0.vars[0])
})
}
var __IDRLT__APPLY65624 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return close()
})
}
var __IDRLT__APPLY65625 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return focus()
})
}
var __IDRLT__APPLY65626 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return moveBy(mfn0.vars[0],mfn0.vars[1])
})
}
var __IDRLT__APPLY65627 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return moveTo(mfn0.vars[0],mfn0.vars[1])
})
}
var __IDRLT__APPLY65628 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return open(mfn0.vars[0],mfn0.vars[1],mfn0.vars[2],__IDRRT__tailcall(function(){
return (0 == mfn0.vars[3].tag)?(0):(1)
}))
})
}
var __IDRLT__APPLY65629 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return print()
})
}
var __IDRLT__APPLY65630 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return resizeBy(mfn0.vars[0],mfn0.vars[1])
})
}
var __IDRLT__APPLY65631 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return resizeTo(mfn0.vars[0],mfn0.vars[1])
})
}
var __IDRLT__APPLY65632 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return scrollBy(mfn0.vars[0],mfn0.vars[1])
})
}
var __IDRLT__APPLY65633 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return scrollTo(mfn0.vars[0],mfn0.vars[1])
})
}
var __IDRLT__APPLY65634 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return stop()
})
}
var __IDRLT__APPLY65635 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return confirm(mfn0.vars[0])
})
}
var __IDRLT__APPLY65636 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65686,null,__IDRLT__APPLY65686,[null,__IDRRT__tailcall(function(){
return (marg0 == 0)?(__IDRCTR__0):(__IDRCTR__1)
})])
})
}
var __IDRLT__APPLY65637 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return confirm()
})
}
var __IDRLT__APPLY65638 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65686,null,__IDRLT__APPLY65686,[null,__IDRRT__tailcall(function(){
return (marg0 == 0)?(__IDRCTR__0):(__IDRCTR__1)
})])
})
}
var __IDRLT__APPLY65639 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return prompt(mfn0.vars[0],mfn0.vars[1])
})
}
var __IDRLT__APPLY65640 = function(mfn0,marg0){
return __IDR__Mainnmcase_block_in_closeLoop0
}
var __IDRLT__APPLY65641 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__MainnutestPrompt(mfn0.vars[0])
})
}
var __IDRLT__APPLY65642 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__MainnutestPrompt(mfn0.vars[0])
})
}
var __IDRLT__APPLY65643 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__MainnscucloseLoop(null,marg0,null)
})
}
var __IDRLT__APPLY65644 = function(mfn0,marg0){
return __IDR__Mainnmmain0
}
var __IDRLT__APPLY65645 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRRT__tailcall(function(){
return __IDR__TimeoutnusetTimeout(new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRCTR__65625,__IDRCTR__65670]),2000.0)
}),__IDRCTR__65671])
})
}
var __IDRLT__APPLY65646 = function(mfn0,marg0){
return __IDR__Mainnmmain11
}
var __IDRLT__APPLY65647 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65620,null,__IDRLT__APPLY65620,["blur ... 2s .. focus"]),__IDRCTR__65646])
})
}
var __IDRLT__APPLY65648 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65628,null,__IDRLT__APPLY65628,["http://google.it","_blank","",__IDRCTR__0]),__IDRCTR__65647])
})
}
var __IDRLT__APPLY65649 = function(mfn0,marg0){
return __IDR__Mainnmmain14
}
var __IDRLT__APPLY65650 = function(mfn0,marg0){
return __IDR__Mainnmmain15
}
var __IDRLT__APPLY65651 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRRT__tailcall(function(){
return __IDR__MainnutestPrompt("abcdefg")
}),__IDRCTR__65650])
})
}
var __IDRLT__APPLY65652 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65678,null,__IDRLT__APPLY65678,[mfn0.vars[0]]),__IDRCTR__65651])
})
}
var __IDRLT__APPLY65653 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65678,null,__IDRLT__APPLY65678,[mfn0.vars[0]]),new __IDRRT__Con(65652,null,__IDRLT__APPLY65652,[mfn0.vars[1]])])
})
}
var __IDRLT__APPLY65654 = function(mfn0,marg0){
return __IDR__Mainnmmain19
}
var __IDRLT__APPLY65655 = function(mfn0,marg0){
return __IDR__Mainnmmain1
}
var __IDRLT__APPLY65656 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRRT__tailcall(function(){
return __IDR__TimeoutnusetTimeout(new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65679,null,__IDRLT__APPLY65679,[mfn0.vars[0]]),new __IDRRT__Con(65653,null,__IDRLT__APPLY65653,[mfn0.vars[1],marg0])]),7000.0)
}),__IDRCTR__65654])
})
}
var __IDRLT__APPLY65657 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRRT__tailcall(function(){
return __IDR__TimeoutnusetInterval(new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65631,null,__IDRLT__APPLY65631,[800,800]),__IDRCTR__65655]),1800.0)
}),new __IDRRT__Con(65656,null,__IDRLT__APPLY65656,[mfn0.vars[0],marg0])])
})
}
var __IDRLT__APPLY65658 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRRT__tailcall(function(){
return __IDR__TimeoutnusetInterval(new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65630,null,__IDRLT__APPLY65630,[-100,-100]),__IDRCTR__65644]),700.0)
}),new __IDRRT__Con(65657,null,__IDRLT__APPLY65657,[marg0])])
})
}
var __IDRLT__APPLY65659 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRRT__tailcall(function(){
return __IDR__TimeoutnusetTimeout(new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65620,null,__IDRLT__APPLY65620,["X"]),new __IDRRT__Con(65677,null,__IDRLT__APPLY65677,[null,null,__IDRCTR__65624])]),10000.0)
}),__IDRCTR__65658])
})
}
var __IDRLT__APPLY65660 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65620,null,__IDRLT__APPLY65620,["btoa ".concat(mfn0.vars[0].concat(" = ".concat(mfn0.vars[1])))]),__IDRCTR__65659])
})
}
var __IDRLT__APPLY65661 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__Mainnmmain25(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65662 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__Mainnmmain26(marg0)
})
}
var __IDRLT__APPLY65663 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65621,null,__IDRLT__APPLY65621,["test"]),__IDRCTR__65662])
})
}
var __IDRLT__APPLY65664 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRRT__tailcall(function(){
return __IDR__IQuerynuconfirm(__IDRCTR__0)
}),__IDRCTR__65663])
})
}
var __IDRLT__APPLY65665 = function(mfn0,marg0){
return new __IDRRT__Con(65686,null,__IDRLT__APPLY65686,[null,marg0])
}
var __IDRLT__APPLY65666 = function(mfn0,marg0){
return __IDRCTR__65665
}
var __IDRLT__APPLY65667 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65686,null,__IDRLT__APPLY65686,[null,__IDRRT__tailcall(function(){
return __IDR__ApplicativePreludenuwhen(null,__IDRCTR__65666,marg0,__IDRCTR__65619)
})])
})
}
var __IDRLT__APPLY65668 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__MainnucloseLoop()
})
}
var __IDRLT__APPLY65669 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRRT__tailcall(function(){
return __IDR__IQuerynuconfirm(new __IDRRT__Con(1,null,null,["Print?"]))
}),__IDRCTR__65667]),__IDRCTR__65668])
})
}
var __IDRLT__APPLY65670 = function(mfn0,marg0){
return __IDR__Mainnmmain8
}
var __IDRLT__APPLY65671 = function(mfn0,marg0){
return __IDR__Mainnmmain9
}
var __IDRLT__APPLY65672 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,mfn0.vars[0],marg0])
})
}
var __IDRLT__APPLY65673 = function(mfn0,marg0){
return new __IDRRT__Con(65672,null,__IDRLT__APPLY65672,[marg0])
}
var __IDRLT__APPLY65674 = function(mfn0,marg0){
return __IDRCTR__65673
}
var __IDRLT__APPLY65675 = function(mfn0,marg0){
return __IDRCTR__65674
}
var __IDRLT__APPLY65676 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__MainnscutestPrompt(mfn0.vars[0],__IDRCTR__65675,marg0,null)
})
}
var __IDRLT__APPLY65677 = function(mfn0,marg0){
return mfn0.vars[2]
}
var __IDRLT__APPLY65678 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return clearInterval(mfn0.vars[0])
})
}
var __IDRLT__APPLY65679 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return clearTimeout(mfn0.vars[0])
})
}
var __IDRLT__APPLY65680 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return setInterval(__IDRRT__ffiWrap(new __IDRRT__Con(65677,null,__IDRLT__APPLY65677,[null,null,mfn0.vars[0]])),mfn0.vars[1])
})
}
var __IDRLT__APPLY65681 = function(mfn0,marg0){
return new __IDRRT__Con(65686,null,__IDRLT__APPLY65686,[null,marg0])
}
var __IDRLT__APPLY65682 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return setTimeout(__IDRRT__ffiWrap(new __IDRRT__Con(65677,null,__IDRLT__APPLY65677,[null,null,mfn0.vars[0]])),mfn0.vars[1])
})
}
var __IDRLT__APPLY65683 = function(mfn0,marg0){
return new __IDRRT__Con(65686,null,__IDRLT__APPLY65686,[null,marg0])
}
var __IDRLT__APPLY65684 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__UtilsnunullCheck(mfn0.vars[0],mfn0.vars[1],marg0)
})
}
var __IDRLT__APPLY65685 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__uio__bind(mfn0.vars[0],mfn0.vars[1],mfn0.vars[2],mfn0.vars[3],marg0)
})
}
var __IDRLT__APPLY65686 = function(mfn0,marg0){
return mfn0.vars[1]
}
var __IDRLT__APPLY65687 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(__IDRRT__APPLYTC(mfn0.vars[1],marg0),mfn0.vars[0])
})
}
var __IDRLT__APPLY65688 = function(mfn0,marg0){
return new __IDRRT__Con(65684,null,__IDRLT__APPLY65684,[mfn0.vars[0],marg0])
}
var __IDRLT__EVAL65619 = function(marg0){
return marg0=__IDRCTR__65629
}
var __IDRRT__APPLYTC = function(mfn0,marg0){
var ret = (mfn0 instanceof __IDRRT__Con && mfn0.app)?(mfn0.app(mfn0,marg0)):(null);
while (ret instanceof __IDRRT__Cont) {
ret=ret.k()
};
return ret
}
/** @constructor */
var __IDRRT__Con = function(tag,eval,app,vars){
this.tag=tag;
this.eval=eval;
this.app=app;
this.vars=vars
}
var __IDRCTR__0 = new __IDRRT__Con(0,null,null,[])
var __IDRCTR__1 = new __IDRRT__Con(1,null,null,[])
var __IDRCTR__65619 = new __IDRRT__Con(65619,__IDRLT__EVAL65619,null,[])
var __IDRCTR__65622 = new __IDRRT__Con(65622,null,__IDRLT__APPLY65622,[])
var __IDRCTR__65624 = new __IDRRT__Con(65624,null,__IDRLT__APPLY65624,[])
var __IDRCTR__65625 = new __IDRRT__Con(65625,null,__IDRLT__APPLY65625,[])
var __IDRCTR__65629 = new __IDRRT__Con(65629,null,__IDRLT__APPLY65629,[])
var __IDRCTR__65634 = new __IDRRT__Con(65634,null,__IDRLT__APPLY65634,[])
var __IDRCTR__65636 = new __IDRRT__Con(65636,null,__IDRLT__APPLY65636,[])
var __IDRCTR__65637 = new __IDRRT__Con(65637,null,__IDRLT__APPLY65637,[])
var __IDRCTR__65638 = new __IDRRT__Con(65638,null,__IDRLT__APPLY65638,[])
var __IDRCTR__65640 = new __IDRRT__Con(65640,null,__IDRLT__APPLY65640,[])
var __IDRCTR__65643 = new __IDRRT__Con(65643,null,__IDRLT__APPLY65643,[])
var __IDRCTR__65644 = new __IDRRT__Con(65644,null,__IDRLT__APPLY65644,[])
var __IDRCTR__65645 = new __IDRRT__Con(65645,null,__IDRLT__APPLY65645,[])
var __IDRCTR__65646 = new __IDRRT__Con(65646,null,__IDRLT__APPLY65646,[])
var __IDRCTR__65647 = new __IDRRT__Con(65647,null,__IDRLT__APPLY65647,[])
var __IDRCTR__65648 = new __IDRRT__Con(65648,null,__IDRLT__APPLY65648,[])
var __IDRCTR__65649 = new __IDRRT__Con(65649,null,__IDRLT__APPLY65649,[])
var __IDRCTR__65650 = new __IDRRT__Con(65650,null,__IDRLT__APPLY65650,[])
var __IDRCTR__65651 = new __IDRRT__Con(65651,null,__IDRLT__APPLY65651,[])
var __IDRCTR__65654 = new __IDRRT__Con(65654,null,__IDRLT__APPLY65654,[])
var __IDRCTR__65655 = new __IDRRT__Con(65655,null,__IDRLT__APPLY65655,[])
var __IDRCTR__65658 = new __IDRRT__Con(65658,null,__IDRLT__APPLY65658,[])
var __IDRCTR__65659 = new __IDRRT__Con(65659,null,__IDRLT__APPLY65659,[])
var __IDRCTR__65662 = new __IDRRT__Con(65662,null,__IDRLT__APPLY65662,[])
var __IDRCTR__65663 = new __IDRRT__Con(65663,null,__IDRLT__APPLY65663,[])
var __IDRCTR__65664 = new __IDRRT__Con(65664,null,__IDRLT__APPLY65664,[])
var __IDRCTR__65665 = new __IDRRT__Con(65665,null,__IDRLT__APPLY65665,[])
var __IDRCTR__65666 = new __IDRRT__Con(65666,null,__IDRLT__APPLY65666,[])
var __IDRCTR__65667 = new __IDRRT__Con(65667,null,__IDRLT__APPLY65667,[])
var __IDRCTR__65668 = new __IDRRT__Con(65668,null,__IDRLT__APPLY65668,[])
var __IDRCTR__65669 = new __IDRRT__Con(65669,null,__IDRLT__APPLY65669,[])
var __IDRCTR__65670 = new __IDRRT__Con(65670,null,__IDRLT__APPLY65670,[])
var __IDRCTR__65671 = new __IDRRT__Con(65671,null,__IDRLT__APPLY65671,[])
var __IDRCTR__65673 = new __IDRRT__Con(65673,null,__IDRLT__APPLY65673,[])
var __IDRCTR__65674 = new __IDRRT__Con(65674,null,__IDRLT__APPLY65674,[])
var __IDRCTR__65675 = new __IDRRT__Con(65675,null,__IDRLT__APPLY65675,[])
var __IDRCTR__65681 = new __IDRRT__Con(65681,null,__IDRLT__APPLY65681,[])
var __IDRCTR__65683 = new __IDRRT__Con(65683,null,__IDRLT__APPLY65683,[])
var __IDR__Mainnmcase_block_in_closeLoop0 = new __IDRRT__Con(65686,null,__IDRLT__APPLY65686,[null,__IDRCTR__0])
var __IDR__Mainnmmain0 = new __IDRRT__Con(65626,null,__IDRLT__APPLY65626,[100,50])
var __IDR__Mainnmmain1 = new __IDRRT__Con(65627,null,__IDRLT__APPLY65627,[0,0])
var __IDR__Mainnmmain8 = new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65632,null,__IDRLT__APPLY65632,[-500,300]),__IDRCTR__65669])
var __IDR__Mainnmmain9 = new __IDRRT__Con(65686,null,__IDRLT__APPLY65686,[null,__IDRCTR__0])
var __IDR__Mainnmmain11 = new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRCTR__65622,__IDRCTR__65645])
var __IDR__Mainnmmain14 = new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRCTR__65634,__IDRCTR__65648])
var __IDR__Mainnmmain15 = new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65633,null,__IDRLT__APPLY65633,[1000,200]),__IDRCTR__65649])
var __IDR__Mainnmmain19 = new __IDRRT__Con(65686,null,__IDRLT__APPLY65686,[null,__IDRCTR__0])
/** @constructor */
var __IDRRT__Cont = function(k){
this.k=k
}
var __IDR__MonadPreludenu_62_62_61 = function(me0,me1,me2,me3){
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(__IDRRT__APPLYTC(me3,me1),me2)
})
}
var __IDRCTR____IDR__MainnucloseLoop_1 = new __IDRRT__Con(1,null,null,["Close?"])
var __IDR__MainnucloseLoop = function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRRT__tailcall(function(){
return __IDR__IQuerynuconfirm(__IDRCTR____IDR__MainnucloseLoop_1)
}),__IDRCTR__65643])
}
var __IDRCTR____IDR__IQuerynuconfirm_1 = new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRCTR__65637,__IDRCTR__65638])
var __IDR__IQuerynuconfirm = function(me0){
if (1 == me0.tag) {
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65635,null,__IDRLT__APPLY65635,[me0.vars[0]]),__IDRCTR__65636]);
} else {
return __IDRCTR____IDR__IQuerynuconfirm_1;
}
}
var __IDR__uio__bind = function(me0,me1,me2,me3,uw){
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(new __IDRRT__Con(65687,null,__IDRLT__APPLY65687,[uw,me3]),__IDRRT__APPLYTC(me2,uw))
})
}
var __IDR__UtilsnunullCheck = function(me0,me1,mw0){
return me1!=null?new __IDRRT__Con(1,null,null,[me1]):__IDRCTR__0
}
var __IDR__TimeoutnusetInterval = function(me0,me1){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65680,null,__IDRLT__APPLY65680,[me0,me1]),__IDRCTR__65681])
}
var __IDR__TimeoutnusetTimeout = function(me0,me1){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65682,null,__IDRLT__APPLY65682,[me0,me1]),__IDRCTR__65683])
}
var __IDRCTR____IDR__MainnutestPrompt_1 = new __IDRRT__Con(65688,null,__IDRLT__APPLY65688,[null])
var __IDR__MainnutestPrompt = function(me0){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRRT__tailcall(function(){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65639,null,__IDRLT__APPLY65639,["Type \"stop\"",me0]),__IDRCTR____IDR__MainnutestPrompt_1])
}),new __IDRRT__Con(65676,null,__IDRLT__APPLY65676,[me0])])
}
var __IDR__ApplicativePreludenuwhen = function(me0,me1,me2,me3){
if (0 == me2.tag) {
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(__IDRRT__tailcall(function(){
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(me1,null)
})
}),__IDRCTR__0)
});
} else {
return new __IDRRT__Cont(function(){
return __IDR__mEVAL0(me3)
});
}
}
var __IDR__mAPPLY0 = function(mfn0,marg0){
return (mfn0 instanceof __IDRRT__Con && mfn0.app)?(mfn0.app(mfn0,marg0)):(null)
}
var __IDR__mEVAL0 = function(marg0){
return (marg0 instanceof __IDRRT__Con && marg0.eval)?(marg0.eval(marg0)):(marg0)
}
var __IDRCTR____IDR__mrunMain0_1 = new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65620,null,__IDRLT__APPLY65620,["test"]),__IDRCTR__65664])
var __IDR__mrunMain0 = function(){
return new __IDRRT__Cont(function(){
return __IDR__mEVAL0(__IDRRT__tailcall(function(){
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(__IDRCTR____IDR__mrunMain0_1,__IDRCTR__0)
})
}))
})
}
var __IDR__Mainnmmain25 = function(ub,ua){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65620,null,__IDRLT__APPLY65620,["atob test = ".concat(ub)]),new __IDRRT__Con(65660,null,__IDRLT__APPLY65660,[ub,ua])])
}
var __IDR__Mainnmmain26 = function(ub){
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,new __IDRRT__Con(65623,null,__IDRLT__APPLY65623,[ub]),new __IDRRT__Con(65661,null,__IDRLT__APPLY65661,[ub])])
}
var __IDR__MainnscucloseLoop = function(me0,me1,me2){
if (0 == me1.tag) {
return new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[null,null,__IDRRT__tailcall(function(){
return __IDR__TimeoutnusetTimeout(__IDRRT__tailcall(function(){
return __IDR__MainnucloseLoop()
}),3000.0)
}),__IDRCTR__65640]);
} else {
return __IDRCTR__65624;
}
}
var __IDRCTR____IDR__MainnscutestPrompt_4 = new __IDRRT__Con(65620,null,__IDRLT__APPLY65620,["Cancel."])
var __IDRCTR____IDR__MainnscutestPrompt_3 = new __IDRRT__Con(65620,null,__IDRLT__APPLY65620,["No."])
var __IDRCTR____IDR__MainnscutestPrompt_2 = new __IDRRT__Con(65686,null,__IDRLT__APPLY65686,[null,__IDRCTR__0])
var __IDRCTR____IDR__MainnscutestPrompt_1 = new __IDRRT__Con(65620,null,__IDRLT__APPLY65620,["Empty?"])
var __IDR__MainnscutestPrompt = function(me0,me1,me2,me3){
if (1 == me2.tag) {
if (me2.vars[0] == "") {
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(__IDRRT__APPLYTC(__IDRRT__tailcall(function(){
return __IDR__MonadPreludenu_62_62_61(null,null,null,me1)
}),__IDRCTR____IDR__MainnscutestPrompt_1),new __IDRRT__Con(65641,null,__IDRLT__APPLY65641,[me0]))
});
} else if (me2.vars[0] == "stop") {
return __IDRCTR____IDR__MainnscutestPrompt_2;
} else {
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(__IDRRT__APPLYTC(__IDRRT__tailcall(function(){
return __IDR__MonadPreludenu_62_62_61(null,null,null,me1)
}),__IDRCTR____IDR__MainnscutestPrompt_3),new __IDRRT__Con(65642,null,__IDRLT__APPLY65642,[me2.vars[0]]))
});
};
} else {
return __IDRCTR____IDR__MainnscutestPrompt_4;
}
}
var main = function(){
if (typeof document != "undefined" && (document.readyState == "complete" || document.readyState == "loaded")) {
__IDRRT__tailcall(function(){
return __IDR__mrunMain0()
});
} else if (typeof window != "undefined") {
window.addEventListener("DOMContentLoaded",function(){
__IDRRT__tailcall(function(){
return __IDR__mrunMain0()
})
},false);
} else {
__IDRRT__tailcall(function(){
return __IDR__mrunMain0()
});
}
}
main()