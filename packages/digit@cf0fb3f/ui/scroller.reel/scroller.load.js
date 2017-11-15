montageDefine("cf0fb3f","ui/scroller.reel/scroller",{dependencies:["montage/ui/component"],factory:function(s,t,l){var r=s("montage/ui/component").Component,a=t.Scroller=r.specialize({constructor:{value:function(){this["super"]()}},enterDocument:{value:function(s){if(s&&!a.transformCssProperty){var t=this.element.style;"undefined"!=typeof t.webkitTransform?a.transformCssProperty="webkitTransform":"undefined"!=typeof t.MozTransform?a.transformCssProperty="MozTransform":"undefined"!=typeof t.msTransform?a.transformCssProperty="msTransform":a.transformCssProperty="transform"}}},_scrollX:{value:0},scrollX:{get:function(){return this._scrollX},set:function(s){this._scrollX!==s&&(this._scrollX=s,this.needsDraw=!0)}},_scrollY:{value:0},scrollY:{get:function(){return this._scrollY},set:function(s){this._scrollY!==s&&(this._scrollY=s,this.needsDraw=!0)}},_maxTranslateX:{value:0},_maxTranslateY:{value:0},_axis:{value:"auto"},axis:{get:function(){return this._axis},set:function(s){this._axis=s,this.needsDraw=!0}},_displayScrollbars:{value:"auto"},displayScrollbars:{get:function(){return this._displayScrollbars},set:function(s){switch(s){case"vertical":case"horizontal":case"both":case"auto":this._displayScrollbars=s;break;default:this._displayScrollbars="none"}this.needsDraw=!0}},_hasMomentum:{value:!0},hasMomentum:{get:function(){return this._hasMomentum},set:function(s){this._hasMomentum=s}},_content:{value:null},_scrollBars:{value:null},_translateComposerAxis:{value:null},handleTranslateStart:{value:function(s){this._scrollBars.opacity=.5}},handleTranslateEnd:{value:function(s){this._scrollBars.opacity=0}},canDraw:{value:function(){return this.needsDraw=!0,r.prototype.canDraw.apply(this,arguments)}},willDraw:{value:function(){this._left=this._element.offsetLeft,this._top=this._element.offsetTop,this._width=this._element.offsetWidth,this._height=this._element.offsetHeight;var s=this._content.scrollWidth-this._width;s<0?this._maxTranslateX=0:this._maxTranslateX=s;var t=this._content.offsetHeight-this._height;t<0?this._maxTranslateY=0:this._maxTranslateY=t;var l=this.callDelegateMethod("didSetMaxScroll",{x:this._maxTranslateX,y:this._maxTranslateY});switch(l&&(this._maxTranslateX=l.x,this._maxTranslateY=l.y),this.scrollX=Math.min(this._scrollX,this._maxTranslateX),this.scrollY=Math.min(this._scrollY,this._maxTranslateY),this._displayScrollbars){case"horizontal":this._scrollBars.displayHorizontal=!0,this._scrollBars.displayVertical=!1,this._translateComposerAxis="horizontal";break;case"vertical":this._scrollBars.displayHorizontal=!1,this._scrollBars.displayVertical=!0,this._translateComposerAxis="vertical";break;case"both":this._scrollBars.displayHorizontal=!0,this._scrollBars.displayVertical=!0,this._translateComposerAxis="both";break;case"auto":this._scrollBars.displayHorizontal=!!this._maxTranslateX,this._scrollBars.displayVertical=!!this._maxTranslateY,this._scrollBars.displayVertical&&this._scrollBars.displayHorizontal?this._translateComposerAxis="both":this._scrollBars.displayVertical?this._translateComposerAxis="vertical":this._scrollBars.displayHorizontal?this._translateComposerAxis="horizontal":this._translateComposerAxis="both";break;case"none":this._scrollBars.displayHorizontal=!1,this._scrollBars.displayVertical=!1,this._translateComposerAxis="both"}this._scrollBars.displayHorizontal&&(this._content.scrollWidth?(this._scrollBars.horizontalLength=this._width/this._content.scrollWidth,this._scrollBars.horizontalScroll=this._scrollX/this._content.scrollWidth):(this._scrollBars.horizontalLength=1,this._scrollBars.horizontalScroll=0)),this._scrollBars.displayVertical&&(this._content.offsetHeight?(this._scrollBars.verticalLength=this._height/this._content.offsetHeight,this._scrollBars.verticalScroll=this._scrollY/this._content.offsetHeight):(this._scrollBars.verticalLength=1,this._scrollBars.verticalScroll=0))}},draw:{value:function(){var s=-this._scrollX+"px, "+-this._scrollY+"px";this._content.style[a.transformCssProperty]="translate3d("+s+", 0)"}}},{transformCssProperty:{value:null}})}});