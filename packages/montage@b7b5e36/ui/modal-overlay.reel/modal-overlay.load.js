montageDefine("b7b5e36","ui/modal-overlay.reel/modal-overlay",{dependencies:["../overlay.reel","../../core/promise"],factory:function(e,s,o){var i=e("../overlay.reel").Overlay,t=e("../../core/promise").Promise,l="montage-ModalOverlay",a=s.ModalOverlay=i.specialize({enterDocument:{value:function(e){var s;this["super"](e),e&&(s=this.element.ownerDocument.body,s.appendChild(this.modalMaskElement))}},_queue:{value:[]},_showPromise:{value:null},_dismissOnExternalInteraction:{value:!1},hasModalMask:{value:!0},_slotComponent:{value:null},show:{value:function(e){var s,o=this._queue,i=o.indexOf(this);return i===-1?(0===o.length?(this["super"](),s=t.resolve()):(s=this._showPromise={},this._showPromise.promise=new t(function(e,o){s.resolve=e,s.reject=o}),s=this._showPromise.promise),e&&(this._slotComponent.content=e),o.push(this)):(0===i&&(s=this._showPromise={},this._showPromise.promise=new t(function(e,o){s.resolve=e,s.reject=o}),o.push(this)),s=this._showPromise.promise),s}},hide:{value:function(){var e,s=this._queue,o=s.indexOf(this);0===o?(s.shift(),this["super"](),s.length>0&&(e=s[0],e._showPromise.resolve(),i.prototype.show.call(e))):o>0&&(s.splice(o,1),this._showPromise.reject(new Error("Modal Overlay position in the queue is not 0")))}},draw:{value:function(){this["super"](),this._isShown&&this.hasModalMask?this.modalMaskElement.classList.add(l+"-modalMask--visible"):this.modalMaskElement.classList.remove(l+"-modalMask--visible")}}});window.MontageElement&&MontageElement.define("montage-modal-overlay",a)}});