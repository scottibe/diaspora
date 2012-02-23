app.views.PostViewerInteractions = app.views.Base.extend({

  className : "",

  subviews : {
    "#post-feedback" : "feedbackView",
    "#post-reactions" : "reactionsView",
    "#new-post-comment" : "newCommentView"
  },

  templateName: "post-viewer/interactions",

  initialize : function() {
    this.initViews();

    this.feedbackView.bind("invokePane", this.invokePane, this)
  },

  initViews : function() {
    this.reactionsView = new app.views.PostViewerReactions({ model : this.model })

    /* subviews that require user */
    if(window.app.user()) {
      this.feedbackView = new app.views.PostViewerFeedback({ model : this.model })
      this.newCommentView = new app.views.PostViewerNewComment({ model : this.model })
    }
  },

  togglePane : function(evt) {
    if(evt) { evt.preventDefault() }
    this.$("#post-info").slideToggle()
    this.removeTooltips()
  },

  invokePane : function(evt) {
    if(evt) { evt.preventDefault() }
    if(!this.$("#post-info").is(":visible")) { this.togglePane() }
  },

  hidePane : function(evt) {
    if(evt) { evt.preventDefault() }
    if(this.$("#post-info").is(":visible")) { this.togglePane() }
  }

})
