if (self.CavalryLogger) { CavalryLogger.start_js(["GxGud"]); }

__d("PagesHomeTabWebDriverTestID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PAGELET_TIMELINE_MAIN_COLUMN:"pagelet_timeline_main_column",STATUS_ATTACHMENT_MENTIONS_INPUT:"status-attachment-mentions-input",PAGES_COMPOSER_DESTINATION_PICKER:"pages_composer_destination_picker"})}),null);
__d("ReactPagesComposerSharingSpacesSelectorAdsPeSection.react",["cx","fbt","ProfileTile.react","React","ReactComposerContextTypes","ShimButton.react","XUIText.react"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,c){window.devicePixelRatio||1;return b("React").createElement("li",{className:"_1pek _6ffj"+(a.isDisabled?" _3560":"")+(a.isDisabled?" _6ffk":"")},b("React").createElement(b("ShimButton.react"),{onClick:a.isDisabled?function(){}:a.onAdsPostClicked},b("React").createElement("ol",{className:"_159h"},b("React").createElement("li",{className:"_1sex"+(a.adsPostSelected&&!a.isDisabled?" _1sfg":""),key:"adsPostList"},b("React").createElement("div",{className:"_1sez",key:"adsPostListItem"},b("React").createElement("div",{className:"_1se-"},b("React").createElement("div",{className:"_1se_"})),b("React").createElement("div",{className:"_3-w4 _6fhc"}),b("React").createElement("div",null,b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),{className:"_3qpq _3qps",size:"header3"},h._("Gestor de An\u00fancios"))),b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),{className:"_3-wf"},a.subtitle))))))))}a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);
__d("ReactPagesComposerSharingSpacesSelectorAdsPeContainer.react",["fbt","ComposerDestinationsLoggingUtils","FluxContainer","React","ReactComposerAudienceActions","ReactComposerContextTypes","ReactComposerTaggerStore","ReactComposerTaggerType","ReactPagesComposerSharingSpacesSelectorAdsPeSection.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={isDisabled:!1},this.$1=function(){if(this.state.isDisabled)return;b("ReactComposerAudienceActions").toggleAdsPostSelected(this.context.composerID);b("ComposerDestinationsLoggingUtils").logComposerDestinationsAdsPePostToggled(this.context.composerID)}.bind(this),c}a.getStores=function(){return[b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){a=b("ReactComposerTaggerStore").isDisabled(d.composerID,b("ReactComposerTaggerType").ADS_PE_POST);return{isDisabled:a}};a.prototype.componentDidMount=function(){b("ReactComposerAudienceActions").setAdsPostSelected(this.context.composerID,!0)};a.prototype.$2=function(){return g._("Save as dark post to create Ads later")};a.prototype.render=function(){return b("React").createElement(b("ReactPagesComposerSharingSpacesSelectorAdsPeSection.react"),{adsPostSelected:this.props.adsPostSelected,isDisabled:this.state.isDisabled,onAdsPostClicked:this.$1,subtitle:this.$2()})};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withProps:!0,withContext:!0})}),null);
__d("PagesSharingSpacesStrings",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a={PAGES_SHARING_SPACES_SELECTOR_DESTINATION_INSTAGRAM:g._("Instagram"),PAGES_SHARING_SPACES_SELECTOR_DESTINATION_STORIES:g._("A hist\u00f3ria da tua P\u00e1gina")};e.exports=a}),null);
__d("ReactPagesComposerSharingSpacesSelectorSection.react",["cx","React","ReactComposerContextTypes","ShimButton.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";function a(a,c){return b("React").createElement("li",{className:"_1pek _vli"+(a.isDisabled?" _3560":"")+(a.isDisabled?" _vlk":"")},b("React").createElement(b("ShimButton.react"),{onClick:a.onClick},b("React").createElement("ol",{className:"_159h"},b("React").createElement("li",{className:"_1sex"+(a.isSelected&&!a.isDisabled?" _1sfg":""),key:"storiesList"},b("React").createElement("div",{className:"_1sez",key:"storiesListItem"},b("React").createElement("div",{className:"_1se-"},b("React").createElement("div",{className:"_1se_"})),a.avatar,b("React").createElement("div",null,b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),{className:"_3qpq _3qps",size:"header3"},a.title)),b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),{className:"_3-wf"},a.subtitle)),a.additionalOption))))))}a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);
__d("ReactPagesComposerSharingSpacesSelectorInstagramContainer.react",["cx","fbt","ComposerDestinationsLoggingUtils","FluxContainer","InstagramSharingEligibilityType","PagePostActionButtonActionTypes","PagesComposerUnpublishedPostsStore","PagesSharingSpacesStrings","React","ReactComposerAudienceActions","ReactComposerAudienceStore","ReactComposerContextTypes","ReactComposerTaggerStore","ReactComposerTaggerType","ReactPagesComposerSharingSpacesSelectorSection.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("React").createElement("div",{className:"_3-w4 _1-ka"});c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={eligibilityType:b("InstagramSharingEligibilityType").UNSUPPORTED_MEDIA_TYPE,isDisabled:!1,postActionType:b("PagePostActionButtonActionTypes").PUBLISH},this.$1=function(){if(this.state.isDisabled||!this.props.instagramConfig.businessAccountID)return;b("ReactComposerAudienceActions").toggleInstagramSelected(this.context.composerID,this.props.instagramConfig.businessAccountID);b("ComposerDestinationsLoggingUtils").logComposerDestinationsInstagramToggled(this.context.composerID)}.bind(this),c}a.getStores=function(){return[b("ReactComposerTaggerStore"),b("ReactComposerAudienceStore"),b("PagesComposerUnpublishedPostsStore")]};a.calculateState=function(a,c,d){a=d.composerID;c=b("ReactComposerTaggerStore").isDisabled(a,b("ReactComposerTaggerType").INSTAGRAM);d=b("PagesComposerUnpublishedPostsStore").getPostActionType(a);var e=b("ReactComposerTaggerStore").getInstagramSharingEligibility(a),f=b("ReactComposerAudienceStore").getInstagramSelected(a);c=c||d!==b("PagePostActionButtonActionTypes").PUBLISH;c&&f&&b("ReactComposerAudienceActions").setInstagramSelected(a,!1);return{eligibilityType:e,isDisabled:c,postActionType:d}};a.prototype.$2=function(){switch(this.state.postActionType){case b("PagePostActionButtonActionTypes").SAVE_DRAFT:return h._("As publica\u00e7\u00f5es do Instagram n\u00e3o podem ser guardadas como rascunhos.");case b("PagePostActionButtonActionTypes").BACKDATE:return h._("As publica\u00e7\u00f5es do Instagram n\u00e3o podem ser antecipadas para aparecer no passado.");case b("PagePostActionButtonActionTypes").SCHEDULE:return h._("As publica\u00e7\u00f5es agendadas n\u00e3o podem ser partilhadas no Instagram.")}switch(this.state.eligibilityType){case b("InstagramSharingEligibilityType").ELIGIBLE:return h._("As publica\u00e7\u00f5es est\u00e3o vis\u00edveis no Instagram");case b("InstagramSharingEligibilityType").MULTI_PHOTO_UNSUPPORTED:case b("InstagramSharingEligibilityType").TIMELINE_UNSELECTED:case b("InstagramSharingEligibilityType").UNSUPPORTED_MEDIA_TYPE:case b("InstagramSharingEligibilityType").VIDEO_UNSUPPORTED:return h._("As publica\u00e7\u00f5es com uma foto podem ser partilhadas no Instagram.");case b("InstagramSharingEligibilityType").FILE_TOO_BIG:case b("InstagramSharingEligibilityType").INVALID_PHOTO_RATIO:case b("InstagramSharingEligibilityType").UNSUPPORTED_PHOTO_FORMAT:return h._("N\u00e3o foi poss\u00edvel partilhar a tua foto no Instagram. As fotos devem ter menos de 8 MB e ser guardadas em formato JPEG, PNG, BMP ou GIF.")}return h._("As publica\u00e7\u00f5es com uma foto podem ser partilhadas no Instagram.")};a.prototype.render=function(){return b("React").createElement(b("ReactPagesComposerSharingSpacesSelectorSection.react"),{avatar:j,isDisabled:this.state.isDisabled,isSelected:this.props.instagramSelected,onClick:this.$1,subtitle:this.$2(),title:b("PagesSharingSpacesStrings").PAGES_SHARING_SPACES_SELECTOR_DESTINATION_INSTAGRAM})};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withProps:!0,withContext:!0})}),null);
__d("PagesComposerEligibilityUtils",["PagePostActionButtonActionTypes","PagesComposerUnpublishedPostsStore","ReactComposerScrapedAttachmentStore","ReactComposerTaggerEligibilityUtils"],(function(a,b,c,d,e,f){"use strict";function a(a,c){var d=b("ReactComposerTaggerEligibilityUtils").isStoryCreateEligible(a),e=b("ReactComposerScrapedAttachmentStore").hasAttachment(a);c=!e||!!((e=c)!=null?(e=e.gks)!=null?e.enablePageLinkStoryCreation:e:e);e=b("PagesComposerUnpublishedPostsStore").getPostActionType(a);return d&&c&&e===b("PagePostActionButtonActionTypes").PUBLISH}e.exports={isPageStoryCreateEligible:a}}),null);
__d("ReactPagesComposerSharingSpacesSelectorStoriesContainer.react",["cx","fbt","ComposerDestinationsLoggingUtils","FluxContainer","PagePostActionButtonActionTypes","PagesComposerEligibilityUtils","PagesComposerUnpublishedPostsStore","PagesSharingSpacesStrings","ProfileTile.react","React","ReactComposerAudienceActions","ReactComposerAudienceStore","ReactComposerContextTypes","ReactComposerMediaUploadStore","ReactComposerScrapedAttachmentStore","ReactComposerStatusStore","ReactComposerTaggerStore","ReactPagesComposerSharingSpacesSelectorSection.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("PagesComposerEligibilityUtils").isPageStoryCreateEligible;c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={isDisabled:!1,postActionType:b("PagePostActionButtonActionTypes").PUBLISH},this.$1=function(){if(this.state.isDisabled)return;b("ReactComposerAudienceActions").toggleStoriesSelected(this.context.composerID);b("ComposerDestinationsLoggingUtils").logComposerDestinationsMyStoryToggled(this.context.composerID)}.bind(this),c}a.getStores=function(){return[b("ReactComposerTaggerStore"),b("ReactComposerStatusStore"),b("ReactComposerMediaUploadStore"),b("ReactComposerScrapedAttachmentStore"),b("ReactComposerAudienceStore"),b("PagesComposerUnpublishedPostsStore")]};a.calculateState=function(a,c,d){a=d.composerID;c=b("ReactComposerAudienceStore").getStoriesSelected(a);var e=b("PagesComposerUnpublishedPostsStore").getPostActionType(a);d=!j(a,d);d&&c?(b("ReactComposerAudienceActions").setStoriesSelectedSavedState(a,!0),b("ReactComposerAudienceActions").setStoriesSelected(a,!1)):!d&&b("ReactComposerAudienceStore").getStoriesSelectedSavedState(a)&&!c&&(b("ReactComposerAudienceActions").setStoriesSelected(a,!0),b("ReactComposerAudienceActions").setStoriesSelectedSavedState(a,null));return{isDisabled:d,postActionType:e}};a.prototype.$2=function(){var a=window.devicePixelRatio||1;return b("React").createElement("div",{className:"_67io"},b("React").createElement(b("ProfileTile.react"),{id:this.context.actorID,imageProps:{className:"_3-w4"},size:38*a*1.5}))};a.prototype.$3=function(){switch(this.state.postActionType){case b("PagePostActionButtonActionTypes").SCHEDULE:return h._("As publica\u00e7\u00f5es agendadas n\u00e3o podem ser partilhadas na tua hist\u00f3ria.");case b("PagePostActionButtonActionTypes").BACKDATE:return h._("As hist\u00f3rias n\u00e3o podem ser antecipadas.");case b("PagePostActionButtonActionTypes").SAVE_DRAFT:return h._("As hist\u00f3rias n\u00e3o podem ser guardadas como rascunho.")}return this.state.isDisabled?h._("Este tipo de publica\u00e7\u00e3o n\u00e3o pode ser partilhado nas hist\u00f3rias"):h._("Vis\u00edvel ao p\u00fablico durante 24 horas")};a.prototype.render=function(){return b("React").createElement(b("ReactPagesComposerSharingSpacesSelectorSection.react"),{avatar:this.$2(),isDisabled:this.state.isDisabled,isSelected:this.props.storiesSelected,onClick:this.$1,subtitle:this.$3(),title:b("PagesSharingSpacesStrings").PAGES_SHARING_SPACES_SELECTOR_DESTINATION_STORIES})};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withProps:!0,withContext:!0})}),null);
__d("ReactPagesComposerScheduleMenu.react",["ix","cx","fbt","ContextualDialogArrow","FDSDropdownButton.react","FluxContainer","Image.react","PagesComposerSettingsUtils","PopoverMenu.react","React","ReactComposerContextTypes","ReactXUIMenu","Tooltip.react","XUIText.react","PagePostActionButtonActionTypes","PagePublishingFunnelClickTarget","ReactComposerTaggerStore","PagesComposerActions","LayerFadeOnHide","LayerFadeOnShow","ReactComposerTaggerType","ReactDOM","PagesPublishingLoggingActions","XUIDialog.react","XUIDialogBody.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react","PagesComposerUnpublishedPostsStore","PagesComposerBoostedPostsStore","DOM","dotAccess","formatDate","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("ReactXUIMenu").SelectableMenu,l=b("ReactXUIMenu").SelectableItem,m="M j, Y g:i A",n="M d, Y";c=babelHelpers.inherits(a,b("React").PureComponent);j=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.$6=function(){b("PagesComposerSettingsUtils").showScheduledPostDialog(this.props.config,this.context,this.$9),this.setState({selectedMenuItem:b("PagePostActionButtonActionTypes").SCHEDULE})}.bind(this),this.$7=function(){b("PagesComposerSettingsUtils").renderBackDateDialog(this.props.config,this.context,this.$10),this.setState({selectedMenuItem:b("PagePostActionButtonActionTypes").BACKDATE})}.bind(this),this.$9=function(a,c){b("PagesPublishingLoggingActions").click(b("PagePublishingFunnelClickTarget").SCHEDULE_POST_SUBMIT_BUTTON),b("PagesComposerActions").schedule(this.context.composerID,a,c)}.bind(this),this.$10=function(a,c,d,e){b("PagesPublishingLoggingActions").click(b("PagePublishingFunnelClickTarget").BACKDATE_SUBMIT_BUTTON),b("PagesComposerActions").backdate(this.context.composerID,a,c,d,e)}.bind(this),this.$5=function(){b("PagesComposerActions").setPublishNow(this.context.composerID),this.setState({selectedMenuItem:b("PagePostActionButtonActionTypes").PUBLISH})}.bind(this),this.$8=function(){b("PagesPublishingLoggingActions").click(b("PagePublishingFunnelClickTarget").SAVE_DRAFT_BUTTON),this.setState({selectedMenuItem:b("PagePostActionButtonActionTypes").SAVE_DRAFT}),b("ReactComposerTaggerStore").hasData(this.context.composerID,b("ReactComposerTaggerType").BREAKING_NEWS)?b("ReactDOM").render(b("React").createElement(b("XUIDialog.react"),{behaviors:{LayerFadeOnHide:b("LayerFadeOnHide"),LayerFadeOnShow:b("LayerFadeOnShow")},shown:!0,width:445},b("React").createElement(b("XUIDialogTitle.react"),null,"Error"),b("React").createElement(b("XUIDialogBody.react"),null,b("React").createElement("div",null,i._("N\u00e3o \u00e9 poss\u00edvel guardar publica\u00e7\u00f5es em que foi aplicado o indicador de not\u00edcias de \u00faltima hora. Podes adicionar o indicador depois de publicares a tua primeira publica\u00e7\u00e3o."))),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIDialogOkayButton.react"),{action:"cancel",use:"confirm"}))),b("DOM").create("div")):b("PagesComposerActions").setDraft(this.context.composerID)}.bind(this),c}a.getStores=function(){return[b("PagesComposerUnpublishedPostsStore"),b("PagesComposerBoostedPostsStore")]};a.calculateState=function(a,c,d){__p&&__p();a=d.composerID;c=b("PagesComposerBoostedPostsStore").isBoostedPostSet(a);d=b("PagesComposerUnpublishedPostsStore").getBackdateConfig(a);var e=b("PagesComposerUnpublishedPostsStore").getIsDraft(a),f=d!==null,g=b("PagesComposerUnpublishedPostsStore").getScheduledPublishTime(a)!==null||b("PagesComposerUnpublishedPostsStore").getStopFeedDistributionTime(a)!==null,h=null;if(d){var j=d.year,k=d.month;d=d.day;j=new Date(j,k,d);h=b("React").createElement("div",null,i._("{backdate}",[i._param("backdate",b("formatDate")(j,n))]))}else if(g){k=b("PagesComposerUnpublishedPostsStore").getScheduledPublishTime(a);d=b("PagesComposerUnpublishedPostsStore").getStopFeedDistributionTime(a);j=b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),null,i._("In\u00edcio: {start time}",[i._param("start time",b("formatDate")(k,m))])));a=d?b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),null,i._("Fim: {end time}",[i._param("end time",b("formatDate")(d,m))]))):null;h=b("React").createElement("div",null,j,a)}k=b("PagePostActionButtonActionTypes").PUBLISH;f?k=b("PagePostActionButtonActionTypes").BACKDATE:e?k=b("PagePostActionButtonActionTypes").SAVE_DRAFT:g&&(k=b("PagePostActionButtonActionTypes").SCHEDULE);return{isBoostedPostSet:c,isDraft:e,isBackdated:f,isScheduled:g,tooltipMessage:h,selectedMenuItem:k}};a.prototype.$1=function(a){if(a===b("PagePostActionButtonActionTypes").PUBLISH)return!this.state.isScheduled&&!this.state.isBackdated&&!this.state.isDraft;if(a===b("PagePostActionButtonActionTypes").BACKDATE&&this.state.isBackdated)return!0;if(a===b("PagePostActionButtonActionTypes").SCHEDULE&&this.state.isScheduled)return!0;return a===b("PagePostActionButtonActionTypes").SAVE_DRAFT&&this.state.isDraft?!0:!1};a.prototype.$2=function(){var a=b("dotAccess")(this.props.config,"postButtonConfig.postActionsConfig.defaultAction");return b("React").createElement(k,{value:this.state.selectedMenuItem},b("React").createElement(l,{key:a,onclick:this.$3(a),selected:this.$1(a),value:a},this.$4(a)),this.props.config.postButtonConfig.postActionsConfig.otherActions.map(function(a){return b("React").createElement(l,{disabled:a===b("PagePostActionButtonActionTypes").SAVE_DRAFT&&this.state.isBoostedPostSet,key:a,onclick:this.$3(a),selected:this.$1(a),value:a},this.$4(a))}.bind(this)))};a.prototype.$4=function(a){if(this.context.actorID!==this.context.targetID)return i._("Publicar");switch(a){case b("PagePostActionButtonActionTypes").PUBLISH:return i._("Agora");case b("PagePostActionButtonActionTypes").SCHEDULE:return i._("Agendar");case b("PagePostActionButtonActionTypes").BACKDATE:return i._("Antecipar");case b("PagePostActionButtonActionTypes").SAVE_DRAFT:return i._("Guardar rascunho");case b("PagePostActionButtonActionTypes").ADS_POST:return i._("Guardar publica\u00e7\u00e3o n\u00e3o publicada");default:return null}};a.prototype.$3=function(a){switch(a){case b("PagePostActionButtonActionTypes").PUBLISH:return this.$5;case b("PagePostActionButtonActionTypes").SCHEDULE:return this.$6;case b("PagePostActionButtonActionTypes").BACKDATE:return this.$7;case b("PagePostActionButtonActionTypes").SAVE_DRAFT:return this.$8;default:return null}};a.prototype.$11=function(a){b("PagesPublishingLoggingActions").click(b("PagePublishingFunnelClickTarget").PUBLISH_CHVERON),a.stopPropagation()};a.prototype.$12=function(){if(this.state.isScheduled)return i._("Mais tarde");else if(this.state.isBackdated)return i._("Antecipar");else if(this.state.isDraft)return i._("Rascunho");return i._("Share Now")};a.prototype.render=function(){var a=this.$12();return b("React").createElement("div",{className:"_4vla"},b("React").createElement(b("Tooltip.react"),{tooltip:this.state.tooltipMessage},b("React").createElement(b("PopoverMenu.react"),{alignh:"right",alignv:"middle",layerBehaviors:[b("ContextualDialogArrow")],menu:this.$2(),onClick:this.$11,position:"below"},b("React").createElement(b("FDSDropdownButton.react"),{icon:b("React").createElement(b("Image.react"),{src:g("504848")}),label:a,size:"small"}))))};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withProps:!0,withContext:!0})}),null);
__d("ReactPagesComposerTimelineOptionContainer.react",["ix","cx","fbt","AdsCurrencyFormatter","FluxContainer","FluxStore","Image.react","PagesComposerBoostedPostsStore","PagesComposerSettingsUtils","React","ReactComposerContextTypes","ReactPagesComposerScheduleMenu.react","XUIButton.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=babelHelpers.inherits(a,b("React").PureComponent);j=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=j.constructor).call.apply(a,[this].concat(d)),this.state={boostedPostConfig:null},b}a.getStores=function(){return[b("PagesComposerBoostedPostsStore")]};a.calculateState=function(a,c,d){c=b("PagesComposerBoostedPostsStore").getConfig(d.composerID);return babelHelpers["extends"]({},a,{boostedPostConfig:c})};a.prototype.$1=function(){var a=i._("Promover Publica\u00e7\u00e3o");if(this.state.boostedPostConfig){var c=JSON.parse(this.state.boostedPostConfig),d=c.currency;c=c.lifetime_budget;d=b("AdsCurrencyFormatter").formatCurrencyWithOptionalDecimals(d,c);a=i._("Promover conjunto por {budget}",[i._param("budget",d)])}return b("React").createElement(b("XUIButton.react"),{className:"_6m3-",image:b("React").createElement(b("Image.react"),{className:"_6m4l",src:g("535131")}),label:a,size:"medium"})};a.prototype.$2=function(){b("PagesComposerSettingsUtils").showScheduledPostDialog(this.props.config,this.context,function(){})};a.prototype.render=function(){var a=b("PagesComposerSettingsUtils").getTargetingConfigButton(this.props.config,this.context);a=a?b("React").createElement("div",{className:"_4vla"},a):null;return b("React").createElement("div",{className:"_4vl9"},b("React").createElement(b("ReactPagesComposerScheduleMenu.react"),{config:this.props.config}),a,b("React").createElement("div",{className:"_4vla"},b("PagesComposerSettingsUtils").getBoostPostConfigButton(this.props.config,this.context.composerID,this.$1())))};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withProps:!0,withContext:!0})}),null);
__d("ReactPagesComposerSharingSpacesSelectorTimelineContainer.react",["cx","fbt","ComposerDestinationsLoggingUtils","FluxContainer","React","ReactComposerAudienceActions","ReactComposerContextTypes","ReactComposerTaggerStore","ReactComposerTaggerType","ReactPagesComposerSharingSpacesSelectorSection.react","ReactPagesComposerTimelineOptionContainer.react","SharingSpacesStrings"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("React").createElement("div",{className:"_3-w4 _3-w6"});c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=function(){b("ReactComposerAudienceActions").toggleTimelineSelected(this.context.composerID),b("ComposerDestinationsLoggingUtils").logComposerDestinationsNewsFeedToggled(this.context.composerID)}.bind(this),c}a.getStores=function(){return[b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){return{hasTargeting:b("ReactComposerTaggerStore").hasData(d.composerID,b("ReactComposerTaggerType").TARGETING)}};a.prototype.$2=function(){return this.state.hasTargeting?h._("As publica\u00e7\u00f5es tamb\u00e9m aparecem na tua P\u00e1gina e nos resultados de pesquisas."):h._("As publica\u00e7\u00f5es s\u00e3o p\u00fablicas e s\u00e3o apresentadas na tua P\u00e1gina e nos resultados de pesquisa.")};a.prototype.render=function(){return b("React").createElement(b("ReactPagesComposerSharingSpacesSelectorSection.react"),{additionalOption:b("React").createElement(b("ReactPagesComposerTimelineOptionContainer.react"),{config:this.props.config}),avatar:j,isDisabled:!1,isSelected:this.props.timelineSelected,onClick:this.$1,subtitle:this.$2(),title:b("SharingSpacesStrings").SHARING_SPACES_SELECTOR_DESTINATION_NEWS_FEED})};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withProps:!0,withContext:!0})}),null);
__d("ReactPagesComposerFooterWithDestinationPicker.react",["cx","fbt","ComposerDestinationsLoggingUtils","PagesHomeTabWebDriverTestID","React","ReactComposerContextTypes","ReactPagesComposerSharingSpacesSelectorAdsPeContainer.react","ReactPagesComposerSharingSpacesSelectorInstagramContainer.react","ReactPagesComposerSharingSpacesSelectorStoriesContainer.react","ReactPagesComposerSharingSpacesSelectorTimelineContainer.react","SharesheetDestination","SimpleNUXMessage","SimpleNUXMessageTypes","XUIAmbientNUX.react","XUICardSection.react","XUIText.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={hasSeenStoriesNux:b("SimpleNUXMessage").hasUserSeenMessage(b("SimpleNUXMessageTypes").PAGES_PUBLISHING_STORIES_SHARE_NUX)},this.storiesSectionRef=b("React").createRef(),this.$5=function(){b("SimpleNUXMessage").markMessageSeenByUser(b("SimpleNUXMessageTypes").PAGES_PUBLISHING_STORIES_SHARE_NUX),this.setState({hasSeenStoriesNux:!0})}.bind(this),this.$6=function(){return this.storiesSectionRef.current}.bind(this),c}a.prototype.componentDidMount=function(){b("ComposerDestinationsLoggingUtils").logComposerDestinationsBottomSheetOpened(this.context.composerID)};a.prototype.$1=function(){return b("React").createElement(b("ReactPagesComposerSharingSpacesSelectorTimelineContainer.react"),{config:this.props.config,key:"timelineSection",timelineSelected:this.props.timelineSelected})};a.prototype.$2=function(){return b("React").createElement(b("ReactPagesComposerSharingSpacesSelectorStoriesContainer.react"),{key:"storiesSection",ref:this.storiesSectionRef,storiesSelected:this.props.storiesSelected})};a.prototype.$3=function(){return this.props.config.instagramConfig?b("React").createElement(b("ReactPagesComposerSharingSpacesSelectorInstagramContainer.react"),{instagramConfig:this.props.config.instagramConfig,instagramSelected:this.props.instagramSelected,key:"instagramSection"}):null};a.prototype.$4=function(){return b("React").createElement(b("ReactPagesComposerSharingSpacesSelectorAdsPeContainer.react"),{adsPostSelected:this.props.adsPostSelected,key:"adsPostSection"})};a.prototype.$7=function(){var a=this.$6();a=a&&a.state.isDisabled;return!this.state.hasSeenStoriesNux&&!a};a.prototype.render=function(){__p&&__p();if(!this.props.isComposerFocused)return null;var a=[];switch(this.context.gks.defaultDestination){case b("SharesheetDestination").STORIES:a=[this.$2(),this.$1()];this.context.gks.showInstagramPostSection&&a.push(this.$3());break;case b("SharesheetDestination").ADSPEPOST:a=[this.$4()];break;default:a=[this.$1(),this.$2()],this.context.gks.showInstagramPostSection&&a.push(this.$3())}var c=b("React").createElement(b("XUIAmbientNUX.react"),{contextRef:this.$6,key:"storiesNux",onCloseButtonClick:this.$5,position:"left",shown:this.$7()},b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),{weight:"bold"},h._("Novo! Partilha na tua hist\u00f3ria da P\u00e1gina"))),b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),null,h._("Tudo o que adicionares \u00e0 hist\u00f3ria da tua P\u00e1gina vai ficar vis\u00edvel durante 24 horas. Podes controlar sempre a forma como partilhas."))));return b("React").createElement("div",{className:"_1ked"},b("React").createElement(b("XUICardSection.react"),{className:"_2dck","data-testid":b("PagesHomeTabWebDriverTestID").PAGES_COMPOSER_DESTINATION_PICKER},b("React").createElement("div",{className:"uiContextualLayerParent"},b("React").createElement("div",{className:"_26c-"},b("React").createElement("ol",{className:"_26bz"},a),c)),this.props.children))};a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);
__d("XNotesComposerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notes/composer/",{page_id:{type:"Int"},composer_id:{type:"String"}})}),null);
__d("ReactComposerCreateNoteController.react",["ActorURI","AsyncRequest","Bootloader","ExtensibleSproutsItemType","React","ReactComposerAttachmentActions","ReactComposerContextTypes","ReactComposerLoggingName","ReactComposerStore","XNotesComposerController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"ReactComposerCreateNoteController",contextTypes:b("ReactComposerContextTypes"),propTypes:{onClick:a.func,isEntryPointComposer:a.bool},getDefaultProps:function(){return{isEntryPointComposer:!1}},render:function(){return b("React").createElement("span",{onClick:this._onClick,role:"presentation"},this.props.children)},_onClick:function(event){this.props.isEntryPointComposer&&b("ReactComposerAttachmentActions").selectAttachmentLoggingOnlyDoNotUse(this.context.composerID,b("ExtensibleSproutsItemType").NOTE,b("ReactComposerLoggingName").NOTES_SPROUT,b("ReactComposerStore").getSproutSurface(this.context.composerID)),b("Bootloader").loadModules(["AsyncDialog"],function(a){var c=b("XNotesComposerController").getURIBuilder().setString("composer_id",this.context.composerID).getURI();c=new(b("AsyncRequest"))(b("ActorURI").create(c,this.context.actorID)).setMethod("POST").setStatusElement(this.context.composerID);a.send(c)}.bind(this),"ReactComposerCreateNoteController.react"),this.props.onClick&&this.props.onClick(event)}});e.exports=c}),null);
__d("ReactComposerTaggerToggleController.react",["React","ReactComponentWithPureRenderMixin","ReactComposerContextTypes","ReactComposerLoggingName","ReactComposerTaggerActions"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c=b("React").createClass({displayName:"ReactComposerTaggerToggleController",contextTypes:b("ReactComposerContextTypes"),mixins:[b("ReactComponentWithPureRenderMixin")],propTypes:{taggerID:a.string.isRequired,loggingName:a.oneOf(Object.values(b("ReactComposerLoggingName"))).isRequired,onSelect:a.func},render:function(){return b("React").createElement("span",{onClick:this.props.onSelect||this._onSelect,role:"presentation"},this.props.children)},_onSelect:function(){b("ReactComposerTaggerActions").selectTagger(this.context.composerID,this.props.loggingName,this.props.taggerID,!1)}});e.exports=c}),null);
__d("ReactComposerTaggerSproutContainer.react",["FluxContainer","React","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerSproutItem.react","ReactComposerTaggerStore","ReactComposerTaggerToggleController.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.getStores=function(){return[b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){return{highlighted:b("ReactComposerTaggerStore").hasData(d.composerID,c.taggerID),isDisabled:b("ReactComposerTaggerStore").isDisabled(d.composerID,c.taggerID),selectedTagger:b("ReactComposerTaggerStore").getSelectedTagger(d.composerID)}};a.prototype.componentDidUpdate=function(a,b){b.selectedTagger===this.props.taggerID&&this.state.selectedTagger===null&&this.refs.sproutItem&&this.refs.sproutItem.focus()};a.prototype.render=function(){return this.state.isDisabled?b("React").createElement(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").createElement(b("ReactComposerTaggerToggleController.react"),babelHelpers["extends"]({},this.props,{loggingName:this.props.uiConfig.loggingName}),b("React").createElement(b("ReactComposerSproutItem.react"),{highlighted:this.state.highlighted,ref:"sproutItem",uiConfig:this.props.uiConfig}))};function a(){g.apply(this,arguments)}a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("ReactComposerActivitySproutContainer.react",["ExtensibleSproutsItemType","FluxContainer","React","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerSproutsDefaultUIConfig","ReactComposerTaggerSproutContainer.react","ReactComposerTaggerStore","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.getStores=function(){return[b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){a=d.composerID;return{isDisabled:b("ReactComposerTaggerStore").isDisabled(a,b("ReactComposerTaggerType").ACTIVITY)}};a.prototype.render=function(){return this.state.isDisabled?b("React").createElement(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").createElement(b("ReactComposerTaggerSproutContainer.react"),{uiConfig:this.props.uiConfig,taggerID:b("ReactComposerTaggerType").ACTIVITY})};function a(){g.apply(this,arguments)}a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").MINUTIAE]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("ReactComposerNoteSproutContainer.react",["ExtensibleSproutsItemType","React","ReactComposerCreateNoteController.react","ReactComposerSproutItem.react","ReactComposerSproutsDefaultUIConfig"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.render=function(){return b("React").createElement(b("ReactComposerCreateNoteController.react"),{onClick:this.$1,isEntryPointComposer:!0},b("React").createElement(b("ReactComposerSproutItem.react"),{uiConfig:this.props.uiConfig}))};a.prototype.$1=function(event){event.stopPropagation()};function a(){g.apply(this,arguments)}a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").NOTE]};e.exports=a}),null);
__d("ReactComposerSponsorSproutContainer.react",["fbt","ExtensibleSproutsItemType","FluxContainer","React","ReactComposerContextTypes","ReactComposerSproutsDefaultUIConfig","ReactComposerTaggerActions","ReactComposerTaggerSproutContainer.react","ReactComposerTaggerType","SimpleXUIDialog","SponsorTagsOptInActionTypes","SponsorTagsOptInDialogContainer.react","SponsorTagsOptInDispatcher","SponsorTagsOptInStore"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;a.getStores=function(){return[b("SponsorTagsOptInStore")]};a.calculateState=function(){return{isOptedIn:b("SponsorTagsOptInStore").getState().isOptedIn}};function a(){h.constructor.call(this),this.state={isOptedIn:null}}a.prototype.UNSAFE_componentWillMount=function(){b("SponsorTagsOptInDispatcher").explicitlyRegisterStores([b("SponsorTagsOptInStore")]),b("SponsorTagsOptInDispatcher").dispatch({type:b("SponsorTagsOptInActionTypes").QUERY_STATUS,profileID:this.context.targetID})};a.prototype.componentDidUpdate=function(a,c){c.isOptedIn===!1&&this.state.isOptedIn===!0&&b("ReactComposerTaggerActions").selectTagger(this.context.composerID,this.props.uiConfig.loggingName,b("ReactComposerTaggerType").SPONSOR,!1)};a.prototype.render=function(){var a=this.state.isOptedIn===!1?b("React").createElement(b("SponsorTagsOptInDialogContainer.react"),null):null;return b("React").createElement("div",null,b("React").createElement(b("ReactComposerTaggerSproutContainer.react"),{uiConfig:this.props.uiConfig,taggerID:b("ReactComposerTaggerType").SPONSOR,onSelect:this.$1.bind(this)}),a)};a.prototype.$1=function(){this.state.isOptedIn===!0?b("ReactComposerTaggerActions").selectTagger(this.context.composerID,this.props.uiConfig.loggingName,b("ReactComposerTaggerType").SPONSOR,!1):this.state.isOptedIn===!1?b("SponsorTagsOptInDispatcher").dispatch({type:b("SponsorTagsOptInActionTypes").SHOW}):b("SimpleXUIDialog").show(g._("Sponsor Tags are currently unavailable. We appreciate your patience as we resolve the issue. Please try again later."),g._("Sorry, an Error has Occurred..."))};a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").SPONSOR_TAG]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a)}),null);