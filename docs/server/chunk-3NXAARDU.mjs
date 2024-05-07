import './polyfills.server.mjs';
import{A as pe,B as P,C as Z,D as X,E as K,F as A,G as ge,I as me,N as ye,P as J,Q as ve,R as Q,T as _e,U as Ce,X as Ve,a as ue,b as de,ba as De,c as ce,d as N,e as D,f as H,g as y,h as b,i as he,j as L,k as c,l as W,m as $,n as q,o as M,p as g,q as s,r as z,s as p,t as fe,u as Y,v as l,w as u,x as v,y as _,z as h}from"./chunk-BRD35XQJ.mjs";import{a as f,b as m}from"./chunk-VVCT4QZE.mjs";var E=class{constructor(e){this.dice_value=0,this.name=e}},F;(function(t){function e(i){i.dice_value=Math.ceil(Math.random()*6)}t.roll_dice=e})(F||(F={}));var Oe=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(s(z),s(q))},e.\u0275dir=c({type:e});let t=e;return t})(),et=(()=>{let e=class e extends Oe{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=$(e)))(o||e)}})(),e.\u0275dir=c({type:e,features:[p]});let t=e;return t})(),Ne=new y("");var tt={provide:Ne,useExisting:D(()=>U),multi:!0};function nt(){let t=Q()?Q().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var it=new y(""),U=(()=>{let e=class e extends Oe{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!nt())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(s(z),s(q),s(it,8))},e.\u0275dir=c({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&_("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[A([tt]),p]});let t=e;return t})();function rt(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}var te=new y(""),Pe=new y("");function ot(t){return rt(t.value)?{required:!0}:null}function be(t){return null}function xe(t){return t!=null}function ke(t){return me(t)?ue(t):t}function Ge(t){let e={};return t.forEach(i=>{e=i!=null?f(f({},e),i):e}),Object.keys(e).length===0?null:e}function Te(t,e){return e.map(i=>i(t))}function st(t){return!t.validate}function je(t){return t.map(e=>st(e)?e:i=>e.validate(i))}function at(t){if(!t)return null;let e=t.filter(xe);return e.length==0?null:function(i){return Ge(Te(i,e))}}function ne(t){return t!=null?at(je(t)):null}function lt(t){if(!t)return null;let e=t.filter(xe);return e.length==0?null:function(i){let n=Te(i,e).map(ke);return ce(n).pipe(de(Ge))}}function ie(t){return t!=null?lt(je(t)):null}function Me(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function ut(t){return t._rawValidators}function dt(t){return t._rawAsyncValidators}function ee(t){return t?Array.isArray(t)?t:[t]:[]}function k(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ae(t,e){let i=ee(e);return ee(t).forEach(r=>{k(i,r)||i.push(r)}),i}function Ee(t,e){return ee(e).filter(i=>!k(t,i))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ne(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ie(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},V=class extends G{get formDirective(){return null}get path(){return null}},O=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},T=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},tn=m(f({},ct),{"[class.ng-submitted]":"isSubmitted"}),Be=(()=>{let e=class e extends T{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(s(O,2))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Y("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[p]});let t=e;return t})(),Ue=(()=>{let e=class e extends T{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(s(V,10))},e.\u0275dir=c({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&Y("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[p]});let t=e;return t})();var w="VALID",x="INVALID",C="PENDING",I="DISABLED";function Re(t){return(R(t)?t.validators:t)||null}function ht(t){return Array.isArray(t)?ne(t):t||null}function He(t,e){return(R(e)?e.asyncValidators:t)||null}function ft(t){return Array.isArray(t)?ie(t):t||null}function R(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function pt(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new N(1e3,"");if(!n[i])throw new N(1001,"")}function gt(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new N(1002,"")})}var j=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===x}get pending(){return this.status==C}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ae(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ee(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(n=>{n.disable(m(f({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(f({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(n=>{n.enable(m(f({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(m(f({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===C)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;let i=ke(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(x)?x:w}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){R(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ht(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ft(this._rawAsyncValidators)}},B=class extends j{constructor(e,i,n){super(Re(i),He(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){gt(this,!0,e),Object.keys(e).forEach(n=>{pt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,o)=>{n=i(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var re=new y("CallSetDisabledState",{providedIn:"root",factory:()=>oe}),oe="always";function mt(t,e){return[...e.path,t]}function Le(t,e,i=oe){We(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),vt(t,e),Ct(t,e),_t(t,e),yt(t,e)}function Fe(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function yt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function We(t,e){let i=ut(t);e.validator!==null?t.setValidators(Me(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=dt(t);e.asyncValidator!==null?t.setAsyncValidators(Me(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Fe(e._rawValidators,r),Fe(e._rawAsyncValidators,r)}function vt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&$e(t,e)})}function _t(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&$e(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function $e(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ct(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Vt(t,e){t==null,We(t,e)}function Dt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function bt(t){return Object.getPrototypeOf(t.constructor)===et}function Mt(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function At(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===U?i=o:bt(o)?n=o:r=o}),r||n||i||null}var Et={provide:V,useExisting:D(()=>se)},S=Promise.resolve(),se=(()=>{let e=class e extends V{constructor(n,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new M,this.form=new B({},ne(n),ie(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(n){S.then(()=>{let r=this._findContainer(n.path);n.control=r.registerControl(n.name,n.control),Le(n.control,n,this.callSetDisabledState),n.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(n)})}getControl(n){return this.form.get(n.path)}removeControl(n){S.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name),this._directives.delete(n)})}addFormGroup(n){S.then(()=>{let r=this._findContainer(n.path),o=new B({});Vt(o,n),r.registerControl(n.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(n){S.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name)})}getFormGroup(n){return this.form.get(n.path)}updateModel(n,r){S.then(()=>{this.form.get(n.path).setValue(r)})}setValue(n){this.control.setValue(n)}onSubmit(n){return this.submitted=!0,Mt(this.form,this._directives),this.ngSubmit.emit(n),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(n){return n.pop(),n.length?this.form.get(n):this.form}};e.\u0275fac=function(r){return new(r||e)(s(te,10),s(Pe,10),s(re,8))},e.\u0275dir=c({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&_("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[b.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[A([Et]),p]});let t=e;return t})();function we(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Ie(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ft=class extends j{constructor(e=null,i,n){super(Re(i),He(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){we(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){we(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var wt={provide:O,useExisting:D(()=>ae)},Se=Promise.resolve(),ae=(()=>{let e=class e extends O{constructor(n,r,o,d,a,Je){super(),this._changeDetectorRef=a,this.callSetDisabledState=Je,this.control=new Ft,this._registered=!1,this.name="",this.update=new M,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=At(this,d)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Dt(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Le(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Se.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&J(r);Se.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?mt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(s(V,9),s(te,10),s(Pe,10),s(Ne,10),s(ye,8),s(re,8))},e.\u0275dir=c({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[b.None,"disabled","isDisabled"],model:[b.None,"ngModel","model"],options:[b.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[A([wt]),p,W]});let t=e;return t})(),qe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=c({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var It=(()=>{let e=class e{constructor(){this._validator=be}ngOnChanges(n){if(this.inputName in n){let r=this.normalizeInput(n[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):be,this._onChange&&this._onChange()}}validate(n){return this._validator(n)}registerOnValidatorChange(n){this._onChange=n}enabled(n){return n!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=c({type:e,features:[W]});let t=e;return t})();var St={provide:te,useExisting:D(()=>le),multi:!0};var le=(()=>{let e=class e extends It{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=J,this.createValidator=n=>ot}enabled(n){return n}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=$(e)))(o||e)}})(),e.\u0275dir=c({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,o){r&2&&fe("required",o._enabled?"":null)},inputs:{required:"required"},features:[A([St]),p]});let t=e;return t})();var Ot=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=L({type:e}),e.\u0275inj=H({});let t=e;return t})();var ze=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:re,useValue:n.callSetDisabledState??oe}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=L({type:e}),e.\u0275inj=H({imports:[Ot]});let t=e;return t})();var Ye=(()=>{let e=class e{constructor(){this.winner="",this.player1=new E("Pillu"),this.player2=new E("Hanu")}begin(){console.log(this.player1.name),console.log(this.player2.name)}startGame(){F.roll_dice(this.player1),F.roll_dice(this.player2),this.winner=this.getWinner(this.player1,this.player2)}getWinner(n,r){return n.dice_value>r.dice_value?"Congratulations "+n.name+`!!!
You Won!`:r.dice_value>n.dice_value?"Congratulations "+r.name+`!!!
You Won!`:"Tough Competition...Draw Match!"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=he({type:e,selectors:[["app-root"]],standalone:!0,features:[ge],decls:27,vars:9,consts:[[1,"center"],[1,"game-form",3,"ngSubmit"],["for","p1"],["type","text","id","p1name","name","p1name","required","",3,"ngModelChange","ngModel"],["for","p2"],["type","text","id","p2name","name","p2name","required","",3,"ngModelChange","ngModel"],[3,"click"],["id","result"]],template:function(r,o){r&1&&(l(0,"h1",0),h(1,"Welcome to the Game of Dice"),u(),v(2,"br")(3,"br"),l(4,"form",1),_("ngSubmit",function(){return o.begin()}),l(5,"label",2),h(6,"Enter Name of Player 1: "),u(),l(7,"input",3),K("ngModelChange",function(a){return X(o.player1.name,a)||(o.player1.name=a),a}),u(),v(8,"br"),l(9,"label",4),h(10,"Enter Name of Player 2: "),u(),l(11,"input",5),K("ngModelChange",function(a){return X(o.player2.name,a)||(o.player2.name=a),a}),u(),v(12,"br"),u(),v(13,"br")(14,"br"),l(15,"p"),h(16),u(),v(17,"br"),l(18,"div",0)(19,"button",6),_("click",function(){return o.startGame()}),h(20,"PLAY"),u()(),l(21,"p"),h(22),u(),l(23,"p"),h(24),u(),l(25,"p",7),h(26),u()),r&2&&(g(7),Z("ngModel",o.player1.name),g(4),Z("ngModel",o.player2.name),g(5),P("Match Between ",o.player1.name," and ",o.player2.name,""),g(6),P("",o.player1.name,":",o.player1.dice_value,""),g(2),P("",o.player2.name,":",o.player2.dice_value,""),g(2),pe(o.winner))},dependencies:[ze,qe,U,Be,Ue,le,ae,se],styles:["p[_ngcontent-%COMP%]{text-align:center}p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], div[_ngcontent-%COMP%], form[_ngcontent-%COMP%]{font-family:Courier New;font-weight:550;font-size:larger}.center[_ngcontent-%COMP%]{text-align:center}.game-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:0 auto;width:300px;padding:1rem;border:1px solid #ccc;border-radius:5px}.game-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:.5rem}.game-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:.75rem 1rem;border:1px solid #ccc;border-radius:5px}.game-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border-color:#4caf50}h1[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1rem}p[_ngcontent-%COMP%]{margin-bottom:.5rem}button[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:.75rem 1.5rem;border:none;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#3e8e41}#result[_ngcontent-%COMP%]{color:#333;animation:_ngcontent-%COMP%_changeColor 2s infinite alternate}@keyframes _ngcontent-%COMP%_changeColor{0%{color:#333}to{color:#0f0}}"]});let t=e;return t})();var Ze=[];var Xe={providers:[De(Ze),Ce()]};var Pt={providers:[Ve()]},Ke=ve(Xe,Pt);var xt=()=>_e(Ye,Ke),Vn=xt;export{Vn as a};