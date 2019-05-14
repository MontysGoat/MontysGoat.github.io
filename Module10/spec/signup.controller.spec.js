describe("SignUpController", function() {
  
  beforeEach(module('public'));
  var $controller;
  var signUpController;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;

    signUpController =
      $controller('SignUpController',
                  {allMenuItems: ['A1','A2','B1']});

  }));
  describe('.dishExists', function() {

    it("should return false if a dish does not exist", function() {
      expect(signUpController.dishExists('C1')).toBe(false);
    });
  })
});
