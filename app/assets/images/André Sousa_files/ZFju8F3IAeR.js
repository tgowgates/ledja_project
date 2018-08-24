if (self.CavalryLogger) { CavalryLogger.start_js(["0qJn4"]); }

__d("VideoSettingsMenu.react",["ix","cx","fbt","AsyncRequest","BUISwitch.react","ClickableAreaButton.react","Image.react","Layout.react","Link.react","MessengerEnvironment","React","Selector.react","URI","VideoPlaybackExperienceIssueType","XUIButton.react","XVideoPlaybackExperienceReportController","asset","gkx","isFacebookURI","shallowCompare"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j,k=b("Layout.react").Column,l=b("Layout.react").FillColumn,m=b("Selector.react").Option;c=b("React").PropTypes;var n=/(instagram)/g;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.shouldComponentUpdate=function(a,c){"use strict";return b("shallowCompare")(this,a,c)};a.prototype.UNSAFE_componentWillMount=function(){"use strict";this.setState({autoSelectVideoQuality:!this.props.preferredQuality&&this.props.canAutoSelectVideoQuality,currentMenuContext:"main",feedbackSubmitted:!1})};a.prototype.createMenuItem=function(a,c,d,e,f,g){__p&&__p();g===void 0&&(g=!1);var h=function(){};c&&(h=function(a){e(),a.preventDefault()});var i="_2iw4"+(c?"":" _4t7o"),j;if(f==="checkBox"){var k=null;c&&d&&(k=b("React").createElement("div",{className:"_2iw1"}));j=b("React").createElement("div",{className:"_2iw3"},k)}else if(f==="radioButton"){k=null;c&&d&&(k=b("React").createElement("div",{className:"_4t7r"}));j=b("React").createElement("div",{className:"_4t7u"},k)}k=a;g&&(k=b("React").createElement("div",null,a.slice(0,-1),b("React").createElement("div",{className:"_4t7w"})));return b("React").createElement("a",{href:"#",key:a,className:i,onClick:h,tabIndex:this.props.tabIndex,"aria-checked":d?"true":"false",role:f==="radioButton"?"radio":"checkbox","aria-disabled":!c},j,b("React").createElement("div",{className:"_2iw5"+(d?"":" _4t8e")},k))};a.prototype.$1=function(){"use strict";var a=this.props,c=a.hasSubtitles,d=a.areSubtitlesActive;a=a.areSubtitlesAutogenerated;if(!c)return null;c=i._("Legendas");var e="_1x4f";a&&b("gkx")("AT6M-7lzy11KT99dGqk7Ifvqtjx_0CnVi0733x-QUao1aGndZx-S25rMmKMAP-ifkAvdJIPZBpUs2mj7aJJuUGDMlErR0iX3c-G12J46jcD5hA")&&(c=i._("Legendas [Autom\u00e1tico]"),e="_1x4f _6m2q");return b("React").createElement(b("Layout.react"),{"aria-checked":d,className:"_2iw4 _1x4e"},b("React").createElement(l,null,c),b("React").createElement(k,null,b("React").createElement("div",{className:e},b("React").createElement(b("BUISwitch.react"),{animate:!0,showLabel:!0,value:d,onToggle:this.props.onToggleSubtitles,tabIndex:this.props.tabIndex}))))};a.prototype.showQualitySelector=function(){"use strict";return this.props.showQualitySelector&&this.props.streamingFormat==="dash"&&!!this.props.availableQualities&&this.props.availableQualities.length>=this.props.qualitySelectorMinStreams&&this.props.availableQualities.every(function(a){return!!a})};a.prototype.$2=function(){"use strict";return b("React").createElement(b("Link.react"),{"aria-label":"Back",role:"button",onClick:function(){return this.setState({currentMenuContext:"main",currentFeedbackSelected:null,feedbackSubmitted:!1})}.bind(this)},b("React").createElement(b("Image.react"),{className:"_4t8f",src:g("480579")}))};a.prototype.$3=function(){"use strict";var a=i._("Mais Defini\u00e7\u00f5es de V\u00eddeo"),c=new(b("URI"))("/settings/?tab=videos"),d=c.getQualifiedURI().getSubdomain();(d==="business"||d==="partners")&&c.setSubdomain("www");b("isFacebookURI")(c)||c.setDomain(c.getDomain().replace(n,"facebook"));b("MessengerEnvironment").messengerui&&c.setDomain("facebook.com").setSubdomain(d).setProtocol("https");return b("React").createElement("a",{href:c,target:"_blank",className:"_4t9q _2iw4",tabIndex:this.props.tabIndex},a)};a.prototype.$4=function(){"use strict";return b("React").createElement(b("Selector.react"),{name:"feedback_selector",onChange:function(a){this.setState({currentFeedbackSelected:a.value?a.value:null})}.bind(this),defaultValue:0},b("React").createElement(m,{value:0},i._("O que h\u00e1 de errado com este v\u00eddeo?")),b("React").createElement(m,{value:b("VideoPlaybackExperienceIssueType").AUDIO_VIDEO_SYNC},i._("O v\u00eddeo e o \u00e1udio n\u00e3o est\u00e3o sincronizados")),b("React").createElement(m,{value:b("VideoPlaybackExperienceIssueType").VIDEO_ONLY_STUTTER},i._("A reprodu\u00e7\u00e3o do v\u00eddeo tem interrup\u00e7\u00f5es")),b("React").createElement(m,{value:b("VideoPlaybackExperienceIssueType").AUDIO_VIDEO_STUTTER},i._("A reprodu\u00e7\u00e3o do v\u00eddeo e do \u00e1udio tem interrup\u00e7\u00f5es")),b("React").createElement(m,{value:b("VideoPlaybackExperienceIssueType").BLACK_SCREEN},i._("O ecr\u00e3 est\u00e1 preto")),b("React").createElement(m,{value:b("VideoPlaybackExperienceIssueType").VIDEO_WONT_PLAY},i._("Imposs\u00edvel reproduzir v\u00eddeo")))};a.prototype.$5=function(){"use strict";if(this.state.currentFeedbackSelected){var a=b("XVideoPlaybackExperienceReportController").getURIBuilder().setString("issue_type",this.state.currentFeedbackSelected).setFBID("video_id",this.props.videoID).setInt("is_live",this.props.isLive?1:0).getURI();new(b("AsyncRequest"))(a).send();this.setState({feedbackSubmitted:!0})}};a.prototype.render=function(){"use strict";__p&&__p();var a=null,c=null,d=null,e=null;this.showQualitySelector()&&this.props.availableQualities?(a=this.props.availableQualities.map(function(a){return this.createMenuItem(a,!0,a===this.props.selectedQuality&&!this.state.autoSelectVideoQuality,function(){this.setState({autoSelectVideoQuality:!1}),this.props.onSelectQuality(a)}.bind(this),"radioButton",this.props.isSphericalVideo)}.bind(this)),a.push(this.createMenuItem(i._("Autom\u00e1tico"),this.props.canAutoSelectVideoQuality,this.state.autoSelectVideoQuality,function(){this.setState({autoSelectVideoQuality:!0}),this.props.onSelectQuality(null)}.bind(this),"radioButton")),a.reverse(),c=b("React").createElement(b("ClickableAreaButton.react"),{onClick:function(){return this.setState({currentMenuContext:"quality"})}.bind(this),label:"Change Quality"},b("React").createElement("div",{className:"_2iw4 _4t9t"},b("React").createElement(b("Layout.react"),null,b("React").createElement(l,null,i._("Qualidade")),b("React").createElement(k,{className:"_4t9u"},this.state.autoSelectVideoQuality?i._("Autom\u00e1tico"):null," ",b("React").createElement("span",null,this.props.selectedQuality),b("React").createElement(b("Image.react"),{className:"_4t9v",src:g("480587")})))))):e=this.createMenuItem(i._("HD"),this.props.hasHD,this.props.isHD,this.props.onToggleHD,"checkBox");(this.props.isLive||b("gkx")("AT6Ojy_YCjByjq9vrtoSKTvIKp189_jm10t5zV59ioYDTF27DaifGv3B6hHZNK9jB-jGWxs4JSzEFsQLnzOs4_kG49XIrq-4dk3XY_uB2zFH5w"))&&(d=b("React").createElement(b("Link.react"),{onClick:function(){return this.setState({currentMenuContext:"feedback"})}.bind(this),className:"_2iw4 _4t9w"},b("React").createElement(b("Layout.react"),null,b("React").createElement(l,null,i._("Denunciar problema com o v\u00eddeo")),b("React").createElement(k,{className:"_4t9u"},b("React").createElement(b("Image.react"),{className:"_4t9v",src:g("480587")})))));var f=null;switch(this.state.currentMenuContext){case"main":f=b("React").createElement("div",{className:"_2i_x"},e,this.$1(),c,this.$3(),d);break;case"quality":f=b("React").createElement("div",{className:"_2i_x"},b("React").createElement("div",{className:"_4t9q"},this.$2(),i._("Qualidade")),b("React").createElement("div",{className:"_4t9z",role:"radiogroup"},a));break;case"feedback":f=b("React").createElement("div",{className:"_2i_x"},b("React").createElement("div",{className:"_4t9q"},this.$2(),i._("Denunciar problema com o v\u00eddeo")),b("React").createElement("div",{className:"_4t9z"},this.state.feedbackSubmitted?null:this.$4(),this.state.feedbackSubmitted?b("React").createElement("div",{className:"_4t9-"},i._("Obrigado pela tua opini\u00e3o!")):b("React").createElement("div",{className:"_4ta3"},b("React").createElement(b("XUIButton.react"),{disabled:!this.state.currentFeedbackSelected,label:i._("Enviar"),use:"confirm",onClick:this.$5.bind(this)}))));break}return b("React").createElement("div",{className:"_2i_w"},f,b("React").createElement("div",{className:"_2j03"}))};function a(){"use strict";j.apply(this,arguments)}a.propTypes={areSubtitlesActive:c.bool,areSubtitlesAutogenerated:c.bool,hasHD:c.bool,hasSubtitles:c.bool,isHD:c.bool,isLive:c.bool,isSphericalVideo:c.bool,onToggleHD:c.func,onToggleSubtitles:c.func,tabIndex:c.string,availableQualities:c.array,selectedQuality:c.string,preferredQuality:c.string,canAutoSelectVideoQuality:c.bool,onSelectQuality:c.func,showQualitySelector:c.bool,qualitySelectorMinStreams:c.number,streamingFormat:c.string};a.defaultProps={tabIndex:"-1",availableQualities:null,selectedQuality:null,preferredQuality:null,canAutoSelectVideoQuality:!1,showQualitySelector:!1,qualitySelectorMinStreams:2,streamingFormat:null,onSelectQuality:function(){}};e.exports=a}),null);