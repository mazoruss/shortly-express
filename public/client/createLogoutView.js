Shortly.createLogoutView = Backbone.View.extend({
  className: 'creator',

  template: Templates['logout'],

  render: function() {
    this.$el.html( this.template() );
    return this;
  }
});
