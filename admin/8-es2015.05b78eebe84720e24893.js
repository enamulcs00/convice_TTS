(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{OpKh:function(c,o,r){"use strict";r.r(o),r.d(o,"AuthenticationModule",(function(){return Y}));var e=r("tyNb"),t=r("ofXK"),n=(r("8LU1"),r("fXoL")),i=r("3Pt+"),a=r("FKr1"),s=(r("R1ws"),r("GU7r"));r("u47x");let l=(()=>{class c{}return c.\u0275mod=n.Ub({type:c}),c.\u0275inj=n.Tb({factory:function(o){return new(o||c)}}),c})(),d=(()=>{class c{}return c.\u0275mod=n.Ub({type:c}),c.\u0275inj=n.Tb({factory:function(o){return new(o||c)},imports:[[a.i,a.e,s.c,l],a.e,l]}),c})();var b=r("1kSV");let m=(()=>{class c{ngAfterViewInit(){}}return c.\u0275fac=function(o){return new(o||c)},c.\u0275cmp=n.Qb({type:c,selectors:[["app-not-found"]],decls:10,vars:0,consts:[[1,"error-box"],[1,"error-body","text-center"],[1,"error-title","text-danger"],[1,"text-uppercase","error-subtitle"],[1,"text-muted","m-t-30","m-b-30"],["href","#/dashboard/classic",1,"btn","btn-danger","btn-rounded","waves-effect","waves-light","m-b-40"]],template:function(c,o){1&c&&(n.cc(0,"div",0),n.cc(1,"div",1),n.cc(2,"h1",2),n.ad(3,"404"),n.bc(),n.cc(4,"h3",3),n.ad(5,"PAGE NOT FOUND !"),n.bc(),n.cc(6,"p",4),n.ad(7,"YOU SEEM TO BE TRYING TO FIND HIS WAY HOME"),n.bc(),n.cc(8,"a",5),n.ad(9,"Back to home"),n.bc(),n.bc(),n.bc())},encapsulation:2}),c})();var u=r("IkUS"),f=r("PSD3"),p=r.n(f);function g(c,o){1&c&&(n.cc(0,"div",20),n.ad(1," Current password is required "),n.bc())}function v(c,o){if(1&c&&(n.cc(0,"mat-error"),n.Yc(1,g,2,0,"div",18),n.bc()),2&c){n.rc();const c=n.Lc(16);n.Ib(1),n.yc("ngIf",null==c||null==c.errors?null:c.errors.required)}}function h(c,o){1&c&&(n.cc(0,"div",20),n.ad(1," New password is required!"),n.bc())}function w(c,o){1&c&&(n.cc(0,"div",20),n.ad(1," Password should be of atleast 8 characters!"),n.bc())}function y(c,o){if(1&c&&(n.cc(0,"mat-error"),n.Yc(1,h,2,0,"div",18),n.Yc(2,w,2,0,"div",18),n.bc()),2&c){n.rc();const c=n.Lc(24);n.Ib(1),n.yc("ngIf",null==c||null==c.errors?null:c.errors.required),n.Ib(1),n.yc("ngIf",null==c.errors?null:c.errors.minlength)}}function I(c,o){1&c&&(n.cc(0,"mat-error",20),n.ad(1," Please enter Confirm Password "),n.bc())}function x(c,o){1&c&&(n.cc(0,"div"),n.ad(1," New Password and Confirm password doesn't match "),n.bc())}function k(c,o){if(1&c&&(n.cc(0,"mat-error",20),n.Yc(1,x,2,0,"div",13),n.bc()),2&c){const c=n.rc();n.Ib(1),n.yc("ngIf",c.confirmErrorr)}}let C=(()=>{class c{constructor(c,o,r,e){this.route=c,this._rout=o,this.formBuilder=r,this.Srvc=e,this.pass={},this.submitted=!1,this.changePswdform=this.formBuilder.group({password:["",i.E.required],newpassword:["",i.E.required],confirmpassword:["",i.E.required]})}onPasswordSubmit(c){if(this.submitted=!0,this.pass.newPassword!=this.pass.cpassword)this.confirmErrorr=!0;else{this.confirmErrorr=!1;let c={oldPassword:this.pass.oldPassword,newPassword:this.pass.newPassword};console.log("res",c),this.Srvc.changePass(c).subscribe(c=>{200==c.statusCode&&(p.a.fire("Done","Updated succesfully","success"),this.route.navigate(["/dashboard"]))})}}}return c.\u0275fac=function(o){return new(o||c)(n.Wb(e.f),n.Wb(e.a),n.Wb(i.g),n.Wb(u.a))},c.\u0275cmp=n.Qb({type:c,selectors:[["app-changepassword"]],decls:37,vars:10,consts:[[1,"auth-wrapper","d-flex","no-block","justify-content-center","align-items-center",2,"background","url(assets/images/big/auth-bg.jpg) no-repeat center center"],[1,"auth-box"],[1,"logo"],[1,"db"],["alt","thumbnail","width","100","src","assets/images/logo.svg",1,""],[1,"row"],[1,"col-12"],["name","formm","novalidate","",1,"form-horizontal","m-t-20",3,"ngSubmit"],["f","ngForm"],[1,"form-group","row"],[3,"floatLabel"],["placeholder","Old Password","matInput","","type","password","required","","name","oldPassword","minlength","8","maxlength","25",1,"form-control","form-control-lg",3,"ngModel","ngModelChange"],["password","ngModel"],[4,"ngIf"],["placeholder","New Password","matInput","","type","password","name","mail","placeholder","xxxx","minlength","8","maxlength","25","required","","name","new Password","placeholder","New password",1,"form-control","form-control-lg",3,"ngModel","ngModelChange"],["newPassword","ngModel"],["placeholder","Retype Password","matInput","","type","password","name","mail","placeholder","xxxx","required","","name","cpassword","minlength","8","maxlength","25","placeholder","Confirm password",1,"form-control","form-control-lg",3,"ngModel","input","ngModelChange"],["cpassword","ngModel"],["class","error",4,"ngIf"],["type","submit",1,"btn","btn-block","btn-lg","btn-info"],[1,"error"]],template:function(c,o){if(1&c){const c=n.dc();n.cc(0,"div",0),n.cc(1,"div",1),n.cc(2,"div"),n.cc(3,"div",2),n.cc(4,"span",3),n.Xb(5,"img",4),n.bc(),n.bc(),n.cc(6,"div",5),n.cc(7,"div",6),n.cc(8,"form",7,8),n.nc("ngSubmit",(function(){n.Pc(c);const r=n.Lc(9);return r.valid&&o.onPasswordSubmit(r)})),n.cc(10,"label"),n.ad(11,"Current Password"),n.bc(),n.cc(12,"div",9),n.cc(13,"div",6),n.cc(14,"mat-form-field",10),n.cc(15,"input",11,12),n.nc("ngModelChange",(function(c){return o.pass.oldPassword=c})),n.bc(),n.bc(),n.bc(),n.Yc(17,v,2,1,"mat-error",13),n.bc(),n.cc(18,"label"),n.ad(19,"New Password"),n.bc(),n.cc(20,"div",9),n.cc(21,"div",6),n.cc(22,"mat-form-field",10),n.cc(23,"input",14,15),n.nc("ngModelChange",(function(c){return o.pass.newPassword=c})),n.bc(),n.bc(),n.bc(),n.Yc(25,y,3,2,"mat-error",13),n.bc(),n.cc(26,"label"),n.ad(27,"Confirm password"),n.bc(),n.cc(28,"div",9),n.cc(29,"div",6),n.cc(30,"mat-form-field",10),n.cc(31,"input",16,17),n.nc("input",(function(){return o.confirmErrorr=!1}))("ngModelChange",(function(c){return o.pass.cpassword=c})),n.bc(),n.bc(),n.bc(),n.Yc(33,I,2,0,"mat-error",18),n.Yc(34,k,2,1,"mat-error",18),n.bc(),n.cc(35,"button",19),n.ad(36,"Submit"),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc()}if(2&c){const c=n.Lc(9),r=n.Lc(16),e=n.Lc(24),t=n.Lc(32);n.Ib(14),n.yc("floatLabel","never"),n.Ib(1),n.yc("ngModel",o.pass.oldPassword),n.Ib(2),n.yc("ngIf",c.submitted&&r.invalid),n.Ib(5),n.yc("floatLabel","never"),n.Ib(1),n.yc("ngModel",o.pass.newPassword),n.Ib(2),n.yc("ngIf",c.submitted&&e.invalid),n.Ib(5),n.yc("floatLabel","never"),n.Ib(1),n.yc("ngModel",o.pass.cpassword),n.Ib(2),n.yc("ngIf",c.submitted&&t.invalid),n.Ib(1),n.yc("ngIf",c.submitted&&t.valid)}},directives:[i.G,i.u,i.v,i.c,i.C,i.p,i.o,i.t,i.w,t.p],encapsulation:2}),c})();function P(c,o){1&c&&(n.cc(0,"mat-error",43),n.ad(1," First name is required "),n.bc())}const q=function(c){return{"d-none":c}},E=function(c){return{"d-block":c}};let X=(()=>{class c{constructor(c){this.formBuilder=c,this.submitted=!1,this.loginform=!0,this.recoverform=!1,this.errorHandling=(c,o)=>this.Uloginform.controls[c].hasError(o),this.Uloginform=this.formBuilder.group({username:["",i.E.required],password:["",i.E.required]})}showRecoverForm(){this.loginform=!this.loginform,this.recoverform=!this.recoverform}}return c.\u0275fac=function(o){return new(o||c)(n.Wb(i.g))},c.\u0275cmp=n.Qb({type:c,selectors:[["app-login"]],decls:67,vars:10,consts:[[1,"auth-wrapper","d-flex","no-block","justify-content-center","align-items-center",2,"background","url(assets/images/big/auth-bg.jpg) no-repeat center center"],[1,"auth-box"],["id","loginform",3,"ngClass"],[1,"logo"],[1,"db"],["src","assets/images/logo-icon.png","alt","logo"],[1,"font-medium","m-b-20"],[1,"row"],[1,"col-12"],["id","loginform",1,"form-horizontal","m-t-20",3,"formGroup"],[1,"input-group","mb-3"],[1,"input-group-prepend"],["id","basic-addon1",1,"input-group-text"],[1,"ti-user"],[3,"floatLabel"],["matInput","","type","text","formControlName","username","placeholder","Username","aria-label","Username","aria-describedby","basic-addon1",1,"form-control","form-control-lg"],["class","error",4,"ngIf"],["id","basic-addon2",1,"input-group-text"],[1,"ti-pencil"],["type","text","formControlName","password","placeholder","Password","aria-label","Password","aria-describedby","basic-addon1",1,"form-control","form-control-lg"],[1,"form-group","row"],[1,"col-md-12"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customCheck1",1,"custom-control-input"],["for","customCheck1",1,"custom-control-label"],["href","javascript:void(0)","id","to-recover",1,"text-dark","float-right",3,"click"],[1,"fa","fa-lock","m-r-5"],[1,"form-group","text-center"],[1,"col-xs-12","p-b-20"],["type","submit","()","",1,"btn","btn-block","btn-lg","btn-info"],[1,"col-xs-12","col-sm-12","col-md-12","m-t-10","text-center"],[1,"social"],["href","javascript:void(0)","data-toggle","tooltip","title","","data-original-title","Login with Facebook",1,"btn","btn-facebook","m-r-5"],["aria-hidden","true",1,"fab","fa-facebook"],["href","javascript:void(0)","data-toggle","tooltip","title","","data-original-title","Login with Google",1,"btn","btn-googleplus"],["aria-hidden","true",1,"fab","fa-google-plus"],[1,"form-group","m-b-0","m-t-10"],[1,"col-sm-12","text-center"],["href","#/authentication/signup",1,"text-info","m-l-5"],["id","recoverform",3,"ngClass"],[1,"row","m-t-20"],["type","email","required","","placeholder","Username",1,"form-control","form-control-lg"],["type","submit","name","action",1,"btn","btn-block","btn-lg","btn-danger"],[1,"error"]],template:function(c,o){1&c&&(n.cc(0,"div",0),n.cc(1,"div",1),n.cc(2,"div",2),n.cc(3,"div",3),n.cc(4,"span",4),n.Xb(5,"img",5),n.bc(),n.cc(6,"h5",6),n.ad(7,"Sign In to Admin"),n.bc(),n.bc(),n.cc(8,"div",7),n.cc(9,"div",8),n.cc(10,"form",9),n.cc(11,"div",10),n.cc(12,"div",11),n.cc(13,"span",12),n.Xb(14,"i",13),n.bc(),n.bc(),n.cc(15,"mat-form-field",14),n.Xb(16,"input",15),n.bc(),n.Yc(17,P,2,0,"mat-error",16),n.bc(),n.cc(18,"div",10),n.cc(19,"div",11),n.cc(20,"span",17),n.Xb(21,"i",18),n.bc(),n.bc(),n.cc(22,"mat-form-field",14),n.Xb(23,"input",19),n.bc(),n.bc(),n.cc(24,"div",20),n.cc(25,"div",21),n.cc(26,"div",22),n.Xb(27,"input",23),n.cc(28,"label",24),n.ad(29,"Remember me"),n.bc(),n.cc(30,"a",25),n.nc("click",(function(){return o.showRecoverForm()})),n.Xb(31,"i",26),n.ad(32," Forgot pwd?"),n.bc(),n.bc(),n.bc(),n.bc(),n.cc(33,"div",27),n.cc(34,"div",28),n.cc(35,"button",29),n.ad(36,"Log In"),n.bc(),n.bc(),n.bc(),n.cc(37,"div",7),n.cc(38,"div",30),n.cc(39,"div",31),n.cc(40,"a",32),n.Xb(41,"i",33),n.bc(),n.cc(42,"a",34),n.Xb(43,"i",35),n.bc(),n.bc(),n.bc(),n.bc(),n.cc(44,"div",36),n.cc(45,"div",37),n.ad(46," Don't have an account? "),n.cc(47,"a",38),n.cc(48,"b"),n.ad(49,"Sign Up"),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.cc(50,"div",39),n.cc(51,"div",3),n.cc(52,"span",4),n.Xb(53,"img",5),n.bc(),n.cc(54,"h5",6),n.ad(55,"Recover Password"),n.bc(),n.cc(56,"span"),n.ad(57,"Enter your Email and instructions will be sent to you!"),n.bc(),n.bc(),n.cc(58,"div",40),n.cc(59,"form",8),n.cc(60,"div",20),n.cc(61,"div",8),n.Xb(62,"input",41),n.bc(),n.bc(),n.cc(63,"div",40),n.cc(64,"div",8),n.cc(65,"button",42),n.ad(66,"Reset"),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc()),2&c&&(n.Ib(2),n.yc("ngClass",n.Cc(6,q,o.recoverform)),n.Ib(8),n.yc("formGroup",o.Uloginform),n.Ib(5),n.yc("floatLabel","never"),n.Ib(2),n.yc("ngIf",o.submitted&&o.errorHandling("username","required")),n.Ib(5),n.yc("floatLabel","never"),n.Ib(28),n.yc("ngClass",n.Cc(8,E,o.recoverform)))},directives:[t.n,i.G,i.u,i.l,i.c,i.t,i.j,t.p,i.v],encapsulation:2}),c})();function S(c,o){1&c&&(n.cc(0,"mat-error",35),n.ad(1," Email required. "),n.bc())}function U(c,o){1&c&&(n.cc(0,"mat-error",35),n.ad(1," Password required. "),n.bc())}function M(c,o){1&c&&(n.cc(0,"mat-error",35),n.ad(1," Email required. "),n.bc())}function L(c,o){1&c&&(n.cc(0,"mat-error",35),n.ad(1," Email Invalid. "),n.bc())}const j=function(c){return{"d-none":c}},N=function(c){return{"d-block":c}};let G=(()=>{class c{constructor(c,o,r,e){if(this.route=c,this._rout=o,this.formBuilder=r,this.Srvc=e,this.submitted=!1,this.loginform=!0,this.recoverform=!1,this.errorHandling=(c,o)=>this.Uloginform.controls[c].hasError(o),this.errorHandlingfog=(c,o)=>this.forgotPass.controls[c].hasError(o),this.Uloginform=this.formBuilder.group({username:["",i.E.required],password:["",i.E.required],rememberMe:[""]}),this.forgotPass=this.formBuilder.group({forgotname:["",[i.E.required,i.E.email]]}),localStorage.getItem("remember")){let c=JSON.parse(localStorage.getItem("remember"));this.Uloginform.patchValue({username:c.username,password:c.password,rememberMe:c.rememberMe})}}showRecoverForm(){this.loginform=!this.loginform,this.recoverform=!this.recoverform}loginAdmin(){this.submitted=!0,this.Srvc.login({email:this.Uloginform.controls.username.value,password:this.Uloginform.controls.password.value}).subscribe(c=>{200==c.statusCode&&(localStorage.setItem("token",c.data.accessToken),this.Uloginform.value.rememberMe?localStorage.setItem("remember",JSON.stringify(this.Uloginform.value)):localStorage.removeItem("remember"),this.route.navigate(["/dashboard"])),400==c.statusCode&&p.a.fire("Oops.",c.message,"error")})}showOptions(c){console.log("event",c)}submitEm(){this.submitted=!0,this.forgotPass.valid&&this.Srvc.Forgotpassword({email:this.forgotPass.controls.forgotname.value}).subscribe(c=>{400==c.statusCode&&p.a.fire("Oops",c.message,"error"),200==c.statusCode&&p.a.fire(this.forgotPass.controls.forgotname.value,c.message,"success")})}}return c.\u0275fac=function(o){return new(o||c)(n.Wb(e.f),n.Wb(e.a),n.Wb(i.g),n.Wb(u.a))},c.\u0275cmp=n.Qb({type:c,selectors:[["app-login"]],decls:56,vars:15,consts:[[1,"auth-wrapper","d-flex","no-block","justify-content-center","align-items-center",2,"background","url(assets/images/background/login-register.jpg) no-repeat center center","background-size","cover"],[1,"auth-box","on-sidebar"],["id","loginform",3,"ngClass"],[1,"logo"],[1,"db"],["src","assets/images/logo.svg","alt","logo"],[1,"row"],[1,"col-12"],["id","loginform","action","index.html",1,"form-horizontal","m-t-20",3,"formGroup"],[1,"input-group","mb-3"],[1,"input-group-prepend"],["id","basic-addon1",1,"input-group-text"],[1,"ti-user"],[3,"floatLabel"],["matInput","","type","text","formControlName","username","placeholder","Email","aria-label","Username","aria-describedby","basic-addon1","required","",1,"form-control","form-control-lg"],["class","error",4,"ngIf"],["id","basic-addon2",1,"input-group-text"],[1,"ti-pencil"],["matInput","","type","password","formControlName","password","placeholder","Password","aria-label","Password","aria-describedby","basic-addon1","required","",1,"form-control","form-control-lg"],[1,"form-group","row"],[1,"col-md-12"],[1,"custom-control","custom-checkbox"],["type","checkbox","formControlName","rememberMe","id","customCheck1",1,"custom-control-input"],["for","customCheck1",1,"custom-control-label"],["href","javascript:void(0)","id","to-recover",1,"text-dark","float-right",3,"click"],[1,"fa","fa-lock","m-r-5"],[1,"form-group","text-center"],[1,"col-xs-12","p-b-20"],["type","submit",1,"btn","btn-block","btn-lg","btn-info","text-white",3,"click"],["id","recoverform",3,"ngClass"],[1,"font-medium","m-b-20"],[1,"row","m-t-20"],["action","index.html",1,"col-12",3,"formGroup"],["matInput","","formControlName","forgotname","type","email","required","","placeholder","Email",1,"form-control","form-control-lg"],["type","submit","name","action",1,"btn","btn-block","btn-lg","btn-info","text-white",3,"click"],[1,"error"]],template:function(c,o){1&c&&(n.cc(0,"div",0),n.cc(1,"div",1),n.cc(2,"div",2),n.cc(3,"div",3),n.cc(4,"span",4),n.Xb(5,"img",5),n.bc(),n.bc(),n.cc(6,"div",6),n.cc(7,"div",7),n.cc(8,"form",8),n.cc(9,"div",9),n.cc(10,"div",10),n.cc(11,"span",11),n.Xb(12,"i",12),n.bc(),n.bc(),n.cc(13,"mat-form-field",13),n.Xb(14,"input",14),n.bc(),n.Yc(15,S,2,0,"mat-error",15),n.bc(),n.cc(16,"div",9),n.cc(17,"div",10),n.cc(18,"span",16),n.Xb(19,"i",17),n.bc(),n.bc(),n.cc(20,"mat-form-field",13),n.Xb(21,"input",18),n.bc(),n.Yc(22,U,2,0,"mat-error",15),n.bc(),n.cc(23,"div",19),n.cc(24,"div",20),n.cc(25,"div",21),n.Xb(26,"input",22),n.cc(27,"label",23),n.ad(28,"Remember me"),n.bc(),n.cc(29,"a",24),n.nc("click",(function(){return o.showRecoverForm()})),n.Xb(30,"i",25),n.ad(31," Forgot password"),n.bc(),n.bc(),n.bc(),n.bc(),n.cc(32,"div",26),n.cc(33,"div",27),n.cc(34,"button",28),n.nc("click",(function(){return o.loginAdmin()})),n.ad(35,"Log In"),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.cc(36,"div",29),n.cc(37,"div",3),n.cc(38,"span",4),n.Xb(39,"img",5),n.bc(),n.cc(40,"h5",30),n.ad(41,"Recover Password"),n.bc(),n.cc(42,"span"),n.ad(43,"Enter your Email and instructions will be sent to you!"),n.bc(),n.bc(),n.cc(44,"div",31),n.cc(45,"form",32),n.cc(46,"div",19),n.cc(47,"div",7),n.cc(48,"mat-form-field",13),n.Xb(49,"input",33),n.bc(),n.Yc(50,M,2,0,"mat-error",15),n.Yc(51,L,2,0,"mat-error",15),n.bc(),n.bc(),n.cc(52,"div",31),n.cc(53,"div",7),n.cc(54,"button",34),n.nc("click",(function(){return o.submitEm()})),n.ad(55,"Reset"),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc()),2&c&&(n.Ib(2),n.yc("ngClass",n.Cc(11,j,o.recoverform)),n.Ib(6),n.yc("formGroup",o.Uloginform),n.Ib(5),n.yc("floatLabel","never"),n.Ib(2),n.yc("ngIf",o.submitted&&o.errorHandling("username","required")),n.Ib(5),n.yc("floatLabel","never"),n.Ib(2),n.yc("ngIf",o.submitted&&o.errorHandling("password","required")),n.Ib(14),n.yc("ngClass",n.Cc(13,N,o.recoverform)),n.Ib(9),n.yc("formGroup",o.forgotPass),n.Ib(3),n.yc("floatLabel","never"),n.Ib(2),n.yc("ngIf",o.submitted&&o.errorHandlingfog("forgotname","required")),n.Ib(1),n.yc("ngIf",o.submitted&&o.errorHandlingfog("forgotname","email")))},directives:[t.n,i.G,i.u,i.l,i.c,i.t,i.j,i.C,t.p,i.a],styles:[".logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90px}.error[_ngcontent-%COMP%]{color:red}"]}),c})();const O=[{path:"",children:[{path:"",component:G},{path:"404",component:m},{path:"changepassword",component:C},{path:"login2",component:X},{path:"login",component:G},{path:"signup",component:(()=>{class c{constructor(){}}return c.\u0275fac=function(o){return new(o||c)},c.\u0275cmp=n.Qb({type:c,selectors:[["app-signup"]],decls:39,vars:0,consts:[[1,"auth-wrapper","d-flex","no-block","justify-content-center","align-items-center",2,"background","url(assets/images/big/auth-bg.jpg) no-repeat center center"],[1,"auth-box"],[1,"logo"],[1,"font-medium","m-b-20"],[1,"row"],[1,"col-12"],["action","index.html",1,"form-horizontal","m-t-20"],[1,"form-group","row"],["type","text","required"," ","placeholder","Name",1,"form-control","form-control-lg"],["type","text","required"," ","placeholder","Email",1,"form-control","form-control-lg"],["type","password","required"," ","placeholder","Password",1,"form-control","form-control-lg"],["type","password","required"," ","placeholder","Confirm Password",1,"form-control","form-control-lg"],[1,"col-md-12"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customCheck1",1,"custom-control-input"],["for","customCheck1",1,"custom-control-label"],["href","javascript:void(0)"],[1,"form-group","text-center"],[1,"col-xs-12","p-b-20"],["type","submit ",1,"btn","btn-block","btn-lg","btn-info"],[1,"form-group","m-b-0","m-t-10"],[1,"col-sm-12","text-center"],["href","#/authentication/login ",1,"text-info","m-l-5"]],template:function(c,o){1&c&&(n.cc(0,"div",0),n.cc(1,"div",1),n.cc(2,"div"),n.cc(3,"div",2),n.cc(4,"h5",3),n.ad(5,"Sign Up to Admin"),n.bc(),n.bc(),n.cc(6,"div",4),n.cc(7,"div",5),n.cc(8,"form",6),n.cc(9,"div",7),n.cc(10,"div",5),n.Xb(11,"input",8),n.bc(),n.bc(),n.cc(12,"div",7),n.cc(13,"div",5),n.Xb(14,"input",9),n.bc(),n.bc(),n.cc(15,"div",7),n.cc(16,"div",5),n.Xb(17,"input",10),n.bc(),n.bc(),n.cc(18,"div",7),n.cc(19,"div",5),n.Xb(20,"input",11),n.bc(),n.bc(),n.cc(21,"div",7),n.cc(22,"div",12),n.cc(23,"div",13),n.Xb(24,"input",14),n.cc(25,"label",15),n.ad(26,"I agree to all "),n.cc(27,"a",16),n.ad(28,"Terms"),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.cc(29,"div",17),n.cc(30,"div",18),n.cc(31,"button",19),n.ad(32,"SIGN UP"),n.bc(),n.bc(),n.bc(),n.cc(33,"div",20),n.cc(34,"div",21),n.ad(35," Already have an account? "),n.cc(36,"a",22),n.cc(37,"b"),n.ad(38,"Sign In"),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc())},directives:[i.G,i.u,i.v],encapsulation:2}),c})()},{path:"signup2",component:(()=>{class c{constructor(){}}return c.\u0275fac=function(o){return new(o||c)},c.\u0275cmp=n.Qb({type:c,selectors:[["app-signup"]],decls:41,vars:0,consts:[[1,"auth-wrapper","d-flex","no-block","justify-content-center","align-items-center",2,"background","url(assets/images/background/login-register.jpg) no-repeat center center"],[1,"auth-box","on-sidebar"],[1,"logo"],[1,"db"],["src","assets/images/logo-icon.png","alt","logo"],[1,"font-medium","m-b-20"],[1,"row"],[1,"col-12"],["action","index.html",1,"form-horizontal","m-t-20"],[1,"form-group","row"],["type","text","required"," ","placeholder","Name",1,"form-control","form-control-lg"],["type","text","required"," ","placeholder","Email",1,"form-control","form-control-lg"],["type","password","required"," ","placeholder","Password",1,"form-control","form-control-lg"],["type","password","required"," ","placeholder","Confirm Password",1,"form-control","form-control-lg"],[1,"col-md-12"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customCheck1",1,"custom-control-input"],["for","customCheck1",1,"custom-control-label"],["href","javascript:void(0)"],[1,"form-group","text-center"],[1,"col-xs-12","p-b-20"],["type","submit ",1,"btn","btn-block","btn-lg","btn-info"],[1,"form-group","m-b-0","m-t-10"],[1,"col-sm-12","text-center"],["href","#/authentication/login2 ",1,"text-info","m-l-5"]],template:function(c,o){1&c&&(n.cc(0,"div",0),n.cc(1,"div",1),n.cc(2,"div"),n.cc(3,"div",2),n.cc(4,"span",3),n.Xb(5,"img",4),n.bc(),n.cc(6,"h5",5),n.ad(7,"Sign Up to Admin"),n.bc(),n.bc(),n.cc(8,"div",6),n.cc(9,"div",7),n.cc(10,"form",8),n.cc(11,"div",9),n.cc(12,"div",7),n.Xb(13,"input",10),n.bc(),n.bc(),n.cc(14,"div",9),n.cc(15,"div",7),n.Xb(16,"input",11),n.bc(),n.bc(),n.cc(17,"div",9),n.cc(18,"div",7),n.Xb(19,"input",12),n.bc(),n.bc(),n.cc(20,"div",9),n.cc(21,"div",7),n.Xb(22,"input",13),n.bc(),n.bc(),n.cc(23,"div",9),n.cc(24,"div",14),n.cc(25,"div",15),n.Xb(26,"input",16),n.cc(27,"label",17),n.ad(28,"I agree to all "),n.cc(29,"a",18),n.ad(30,"Terms"),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.cc(31,"div",19),n.cc(32,"div",20),n.cc(33,"button",21),n.ad(34,"SIGN UP"),n.bc(),n.bc(),n.bc(),n.cc(35,"div",22),n.cc(36,"div",23),n.ad(37," Already have an account? "),n.cc(38,"a",24),n.cc(39,"b"),n.ad(40,"Sign In"),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc())},directives:[i.G,i.u,i.v],encapsulation:2}),c})()}]}];let Y=(()=>{class c{}return c.\u0275mod=n.Ub({type:c}),c.\u0275inj=n.Tb({factory:function(o){return new(o||c)},imports:[[t.c,e.j.forChild(O),b.u,d,i.n,i.B]]}),c})()}}]);