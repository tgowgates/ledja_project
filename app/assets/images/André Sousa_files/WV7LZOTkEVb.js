if (self.CavalryLogger) { CavalryLogger.start_js(["RQawI"]); }

__d("UFICommentingAsConstituentHeader.react",["cx","fbt","AsyncRequest","BootloadedComponent.react","Layout.react","Image.react","JSResource","React","UFIConfig","XFeedNUXSaveSeenStateController"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("Layout.react").Column,k=b("Layout.react").FillColumn;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={hasSeenCommentingAsConstituentNUX:!1,commentingAsConstituentNUXVisible:!0},this.$2=function(){this.setState({commentingAsConstituentNUXVisible:!1,hasSeenCommentingAsConstituentNUX:!0});var a=b("XFeedNUXSaveSeenStateController").getURIBuilder().setString("key","commenting_as_constituent").setBool("seen",!0).getURI();new(b("AsyncRequest"))(a).send()}.bind(this),c}a.prototype.render=function(){if(!this.props.uri)return null;var a=null;b("UFIConfig").shouldShowCommentingAsConstituentNUX&&(this.state.hasSeenCommentingAsConstituentNUX||(a=this.$1(),b("UFIConfig").shouldShowCommentingAsConstituentNUX=!1));return b("React").createElement("div",{className:"_2ys2 uiContextualLayerParent"},b("React").createElement(b("Layout.react"),null,b("React").createElement(k,null,b("React").createElement(b("Image.react"),{src:"/images/civic_engagement/constituent_badges/constituent-badge_12_2x.png",className:"_2ys1"}),h._("Est\u00e1s a comentar como eleitor")),b("React").createElement(j,null,b("React").createElement("a",{className:"_2ys3",href:this.props.uri,ref:"constituent_header_manage_button"},h._("Gerir")))),a)};a.prototype.$1=function(){return b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("XUIAmbientNUX.react").__setRef("UFICommentingAsConstituentHeader.react"),bootloadPlaceholder:b("React").createElement("div",null),contextRef:function(){return this.refs.constituent_header_manage_button}.bind(this),shown:this.state.commentingAsConstituentNUXVisible,position:"above",alignment:"right",width:"custom",customwidth:280,onCloseButtonClick:this.$2},b("React").createElement("div",{className:"_3w4h"},h._("O teu distintivo de eleitor est\u00e1 ativado")),b("React").createElement("div",{className:"_2e59"},h._("Podes ativar ou desativar o teu distintivo a qualquer momento nas Defini\u00e7\u00f5es da Autarquia.")))};e.exports=a}),null);