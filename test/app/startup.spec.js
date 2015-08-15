define(['app', 'jquery'], function (App, $) {
  describe('when the app starts', function(){
    it('outputs App started in target', function(){
      var target = $("<div></div>");
      var app = new App(target);
      app.start();
      target.html().should.equal("App. Started!");
    })
  })
})