if (self.CavalryLogger) { CavalryLogger.start_js(["clvrq"]); }

__d("AdBreaksRunWhiteopsReportTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:AdBreaksRunWhiteopsReportLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:AdBreaksRunWhiteopsReportLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:AdBreaksRunWhiteopsReportLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setInstanceID=function(a){this.$1.instance_id=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={instance_id:!0,vc:!0};e.exports=a}),null);
__d("ShowVideoEndScreenWithActions.react",["ix","cx","fbt","Arbiter","AsyncRequest","CenteredContainer.react","Image.react","LineClamp.react","Link.react","List.react","React","SubscriptionsHandler","URI","VideoHomeClickTargets","VideoHomeEvents","VideoHomeTypedLogger","VideoPlayerStates","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k="FollowingUser",l="UnfollowingUser";c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.state={following:this.props.following,playerState:""},this.$4=function(){var a=this.props.vpc.getVideoID(),c=this.props.pageID,d=new(b("URI"))(this.state.following?this.props.unfollowUri:this.props.followUri).setQueryData({profile_id:c,location:this.props.location});new(b("AsyncRequest"))(d).setMethod("POST").send();var event=this.state.following?l:k;b("Arbiter").inform(event,{contextID:a,focusOnClick:!1,profile_id:c,suppress:!0});this.setState({following:!this.state.following})}.bind(this),c}a.prototype.componentDidMount=function(){this.$1=new(b("SubscriptionsHandler"))(),this.$1.addSubscriptions(this.props.vpc.addListener("stateChange",function(){return this.setState({playerState:this.props.vpc.getState()})}.bind(this)),this.props.vpc.addListener("TahoeController/exitTahoe",function(){this.forceUpdate()}.bind(this)),b("Arbiter").subscribe(k,function(a,b){this.props.pageID==b.profile_id&&this.setState({following:!0})}.bind(this)),b("Arbiter").subscribe(l,function(a,b){this.props.pageID==b.profile_id&&this.setState({following:!1})}.bind(this)))};a.prototype.componentWillUnmount=function(){this.$1.release()};a.prototype.render=function(){var a=this.props.vpc;if(!a||!a.isInline())return null;if(this.state.playerState!==b("VideoPlayerStates").FINISHED)return null;a=this.$2();new(b("VideoHomeTypedLogger"))().setEvent(b("VideoHomeEvents").SHOW_VIDEO_END_SCREEN_IMPRESSION).log();return b("React").createElement(b("CenteredContainer.react"),{className:"_2a_1",fullHeight:!0,vertical:!0},a)};a.prototype.$3=function(){return b("React").createElement("li",{className:"_2a_2 _2la4"},b("React").createElement(b("Link.react"),{className:"_2pi9",onClick:this.$4},b("React").createElement("div",{className:"_2a_3"},b("React").createElement("div",{className:"_2a_5"}),b("React").createElement("div",{className:"_2a_c _2a_f"},b("React").createElement(b("Image.react"),{src:g("114930"),size:"24"}))),b("React").createElement("div",{className:"_2a_e _2la8"},b("React").createElement(b("CenteredContainer.react"),{horizontal:!1,fullHeight:!0,vertical:!0},i._("{=Follow this show} {=to get new episodes in your watchlist}",[i._param("=Follow this show",b("React").createElement("span",null,i._("Segue esta s\u00e9rie"))),i._param("=to get new episodes in your watchlist",b("React").createElement("span",{className:"_2laa"},i._("para obteres epis\u00f3dios novos na tua lista de interesses")))])))))};a.prototype.$5=function(){var a=this.props.moreEpisodesUri;return b("React").createElement("li",{className:"_2a_2 _2la4"},b("React").createElement(b("Link.react"),{className:"_2pi9",href:a,onClick:function(){this.$6(b("VideoHomeClickTargets").SHOW_VIDEO_END_SCREEN_MORE_EPISODES_BUTTON)}.bind(this)},b("React").createElement("div",{className:"_2a_3"},b("React").createElement("div",{className:"_2a_5"}),b("React").createElement("div",{className:"_2a_c _2la9"},b("React").createElement(b("Image.react"),{src:g("115397"),size:"24"}))),b("React").createElement("div",{className:"_2a_e _2la5"},b("React").createElement(b("CenteredContainer.react"),{horizontal:!1,fullHeight:!0,vertical:!0},b("React").createElement(b("LineClamp.react"),{lines:2},i._("{=More Episodes} {=from} {=[show_name]}",[i._param("=More Episodes",b("React").createElement("span",null,i._("Mais epis\u00f3dios"))),i._param("=from",b("React").createElement("span",{className:"_2laa"},i._("de"))),i._param("=[show_name]",b("React").createElement("span",{className:"_2laa"},i._("{show_name}",[i._param("show_name",this.props.pageTitle)])))]))))))};a.prototype.$2=function(){var a=this.state.following?this.$5():this.$3();return b("React").createElement(b("List.react"),{border:"none",className:this.state.playerState!=="finished"?"hidden_elem":""},a)};a.prototype.$6=function(a){new(b("VideoHomeTypedLogger"))().setEvent(b("VideoHomeEvents").CLICK).setClickTarget(a).log()};e.exports=a}),null);
__d("CommercialBreakExposureLogger",["CommercialBreakMobileEvent","CommercialBreakNoAdReason","DateConsts","InstreamVideoAdType","MarauderLogger","QE","SubscriptionsHandler"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c,d,e,f,g){"use strict";this.$1=a,this.$2=c,this.$3=d,this.$4=e,this.$5=f,this.$6=g,this.$7=new(b("SubscriptionsHandler"))(),d&&e&&this.$7.addSubscriptions(this.$1.addListener("updateStatus",this.$8.bind(this)))}a.prototype.$8=function(){"use strict";__p&&__p();var a=this.$1.getCurrentTimePosition()*b("DateConsts").MS_PER_SEC;for(var c=0;c<this.$3.length;c++){var d=this.$3[c].getTimeOffsetInMs()||0;if(a<=d&&a+this.$6>d){this.$7.release();b("QE").logExposure(this.$4);if(!this.$5){d={ad_break_index:this.$3[c].getIndex(),commercial_break_no_ad_reason:b("CommercialBreakNoAdReason").CONTROL_GROUP,host_video_id:this.$1.getVideoID(),instream_video_ad_type:this.$2?b("InstreamVideoAdType").VOD:b("InstreamVideoAdType").NONLIVE};b("MarauderLogger").log(b("CommercialBreakMobileEvent").COMMERCIAL_BREAK_START_SHOW_NOTHING,"commercial_break",d)}return}}};e.exports=a}),null);
__d("CommercialBreakFraudDetectorWhiteOps",["AdBreaksRunWhiteopsReportTypedLogger","FBSiteWhiteOps"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=a,this.$2=this.$1.addListener("optionsChange",function(){return this.$3()}.bind(this)),this.$3()}a.prototype.$3=function(){"use strict";var a=this.$1.getOption("VideoWithCommercialBreak","controller");if(!a)return;this.$2.remove();a.addListener("commercialBreak/runFraudDetector",function(a){b("FBSiteWhiteOps").appendToWindow(a,"AD_BREAKS","IMPRESSION"),new(b("AdBreaksRunWhiteopsReportTypedLogger"))().setInstanceID(a).log()})};e.exports=a}),null);
__d("CommercialBreakHostStoryController",["csx","cx","Arbiter","CommercialBreakState","CommercialBreakUtil","CSS","DOM","DOMQuery","StoryComponentVideoPlayerControllerRegistry","VideoPlayerLoggerSource","ge"],(function(a,b,c,d,e,f,g,h){__p&&__p();function a(a,c,d,e,f){"use strict";__p&&__p();this.$1=null;this.$6=null;this.$7=null;this.$8=null;this.$9=null;this.$2=d;this.$18=f;this.$4=a;this.$3=c;this.$12=null;e&&(this.$17=e.toString());d=b("DOMQuery").scry(c,".uiLikePageButton");d.length!==0&&(this.$1=d[0]);f=b("DOMQuery").scry(c,"._5pbx");f.length!==0&&(this.$6=f[0]);a=b("DOMQuery").scry(c,"._2ezg");a.length!=0&&(this.$7=a[0]);e=b("DOMQuery").scry(c,"._5pcm");e.length!=0&&(this.$8=e[0]);d=b("DOMQuery").scry(c,"._5pbz");if(d.length!=0){f=d[0];this.$9=b("DOMQuery").scry(f,"._1dwg")}a=b("DOMQuery").scry(c,"._nqx");a.length>0&&(this.$10=a[0]);b("StoryComponentVideoPlayerControllerRegistry").registerHostStoryController(this,this.$17,this.$19.bind(this))}a.prototype.getContainerElement=function(){"use strict";return this.$3};a.prototype.getInstanceID=function(){"use strict";return this.$2};a.prototype.$19=function(a){"use strict";this.$13=a,this.$5=this.$13.getRootNode(),b("Arbiter").subscribe("VideoChannelView/closed",this.$20.bind(this)),this.$13.addListener("commercialBreak/hideUFI",this.$21.bind(this)),this.$13.addListener("commercialBreak/showUFI",function(){this.$11&&b("CommercialBreakUtil").removeContextCard(this.$11)}.bind(this)),this.$13.addListener("TahoeController/exitTahoe",this.$22.bind(this)),this.$16=a.addListener("optionsChange",function(){return this.$23()}.bind(this)),this.$23()};a.prototype.$23=function(){"use strict";this.$15=this.$13.getOption("VideoWithCommercialBreak","controller"),this.$14=this.$13.getOption("VideoWithInstreamVideo","controller"),this.$15&&(this.$16.remove(),this.$15.setStoryIdentifier(this.$18),this.$15.addListener("commercialBreak/stateChange",function(a){return this.$24(a.state)}.bind(this)))};a.prototype.$24=function(a){"use strict";a===b("CommercialBreakState").PLAY_AD?this.$25():this.$26()};a.prototype.$20=function(){"use strict";this.$27()};a.prototype.$22=function(){"use strict";this.$27()};a.prototype.$27=function(){"use strict";this.$15&&(this.$15.getIsCommercialBreakOngoing()&&this.$21())};a.prototype.$21=function(){"use strict";__p&&__p();if(!this.$28())return;var a=this.$5&&this.$5.parentNode;if(a){a=b("DOM").scry(a,"._16bp");if(a.length!=0)return}this.$11=b("DOM").create("div",{className:"_16bp"});b("DOM").insertAfter(this.$5,this.$11);b("CommercialBreakUtil").renderContextCard(this.$13,this.$11)};a.prototype.$28=function(){"use strict";return this.$29()||this.$30()};a.prototype.$30=function(){"use strict";return this.$13?this.$13.getSource()===b("VideoPlayerLoggerSource").PERMALINK:!1};a.prototype.$29=function(){"use strict";return this.$13?this.$13.getSource()===b("VideoPlayerLoggerSource").INLINE:!1};a.prototype.$25=function(){"use strict";__p&&__p();this.$1&&b("CSS").addClass(this.$1,"_3fcl");this.$4&&b("CSS").addClass(this.$4,"_3fcl");this.$6&&b("CSS").addClass(this.$6,"_3fcl");this.$7&&b("CSS").addClass(this.$7,"_3fcl");this.$8&&b("CSS").addClass(this.$8,"_3fcl");this.$9&&this.$9.map(function(a){b("CSS").addClass(a,"_3fcl")});this.$10&&b("CSS").addClass(this.$10,"_gtd");var a=b("StoryComponentVideoPlayerControllerRegistry").findPopoverAsyncMenuForVideoPlayerController(this.$13);if(a){a=a.getOptionsButtonID();this.$12=b("ge")(a)}this.$12&&b("CSS").addClass(this.$12,"_3fcl")};a.prototype.$26=function(){"use strict";this.$1&&b("CSS").removeClass(this.$1,"_3fcl"),this.$4&&b("CSS").removeClass(this.$4,"_3fcl"),this.$6&&b("CSS").removeClass(this.$6,"_3fcl"),this.$7&&b("CSS").removeClass(this.$7,"_3fcl"),this.$8&&b("CSS").removeClass(this.$8,"_3fcl"),this.$9&&this.$9.map(function(a){b("CSS").removeClass(a,"_3fcl")}),this.$10&&b("CSS").removeClass(this.$10,"_gtd"),this.$12&&b("CSS").removeClass(this.$12,"_3fcl"),this.$12=null};e.exports=a}),null);
__d("FollowButtonEpisodesNux",["AsyncRequest","Event","XBasicFBNuxGenShouldShowController"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c,d,e,f,g){"use strict";this.$1=a.getVideoPlayerController(),this.$2=c,this.$3=d,this.$4=!0,this.$5=e,this.$6=f,this.$7=g/100,this.$1.addListener("updateStatus",this.$8.bind(this)),b("Event").listen(this.$2,"click",function(){return this.$9()}.bind(this))}a.prototype.$8=function(event){"use strict";var a=event.position/this.$1.getPlaybackDuration();a>this.$7&&this.$4&&(this.$4=!1,this.$6&&this.$10(),this.$1.removeCurrentListener())};a.prototype.$9=function(){"use strict";this.$4==!0&&this.$3.hide(),this.$4=!1};a.prototype.$10=function(){"use strict";var a=b("XBasicFBNuxGenShouldShowController").getURIBuilder().setInt("nux_id",this.$5).getURI();new(b("AsyncRequest"))().setURI(a).setMethod("GET").setReadOnly(!0).setHandler(function(b){a=b.getPayload(),a.should_show_nux&&this.$3.show()}.bind(this)).send()};e.exports=a}),null);
__d("VideoPlayerControllerForFeedVideo",[],(function(a,b,c,d,e,f){function a(a){"use strict";this.$1=a}a.prototype.getVideoPlayerController=function(){"use strict";return this.$1};e.exports=a}),null);
__d("VideoShowsShowmarkOverlay",["cx","CSS","VideoPlayerReason"],(function(a,b,c,d,e,f,g){__p&&__p();var h=4e3;i.init=function(a,b){"use strict";return new i(a,b)};function i(a,c){"use strict";this.handleBeginPlayback=function(){this.$4||(this.$5&&(clearTimeout(this.$5),this.$5=null),this.$4=!0,b("CSS").removeClass(this.$2,"_3nj3")),this.$5=setTimeout(function(){b("CSS").addClass(this.$2,"_3nj3")}.bind(this),h)}.bind(this),this.handlePausePlayback=function(a){a===b("VideoPlayerReason").AUTOPLAY&&(this.$4=!1)}.bind(this),this.$1=a,this.$2=c,this.$4=!0,this.$5=null,a.addListener("beginPlayback",this.handleBeginPlayback),a.addListener("pauseRequested",this.handlePausePlayback)}e.exports=i}),null);