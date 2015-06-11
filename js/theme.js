var tagCloudView = Backbone.View.extend({
  el: "#tag-cloud",
  initialize: function() {
    this.collection = new Backbone.Collection(Tag.data);
    this.$list = $("#tag-cloud ul");
    this.render();
  },
    template: _.template($('#tag-cloud-template').html()),
    render: function() {
      this.collection.each(function(item) {
        console.log(item.toJSON());
        this.$list.append(this.template(item.toJSON()));
      }, this);
    }

});

var dashboardview = Backbone.View.extend({
  el: "#dashboard-body",
    events: {
      "click .play-button" : "playClick",
      //"click .fav-button" : "favClick",
      "click .share-button" : "shareClick",
      "click .options-button" : "optionsClick"
    },
    initialize: function() {
      this.collection = new Backbone.Collection(Tag.data);
      this.render();
    },
    template: _.template($('#audio-item-template').html()),
    render: function() {
      this.collection.each(function(item) {
        this.$el.append(this.template(item.toJSON()));
      }, this); 

    },
    playClick: function(event) {
      console.log($(event.currentTarget));

    },
    favClick: function(event) {
      console.log($(event.currentTarget));
    },
    shareClick: function(event) {
      console.log($(event.currentTarget));
    },
    optionsClick: function(event) {
      console.log($(event.currentTarget));
    }


});
var appview = Backbone.View.extend({
    initialize: function(options) {
      console.log("hurrat");
      new dashboardview();
      new tagCloudView();

    }
});
var app = new appview;
