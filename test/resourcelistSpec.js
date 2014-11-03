describe('ResourceList', function() {

  beforeEach(angular.mock.module("resourcelist"));

  var ResourceList,
      resourceList,
      TestResource;


  beforeEach(inject(function($injector, _ResourceList_, $resource) {
    ResourceList = _ResourceList_;

    TestResource = $resource('/test/', {}, {
      query: { method: 'GET' }
    });

    function getResourceList() {
      return new ResourceList(TestResource);
    }

    resourceList = getResourceList();
  }));

  it('should be defined', function() {
    expect(ResourceList).not.toBeUndefined();
  });

  it('should default to an empty data set', function() {
    expect(resourceList.getData().length).toEqual(0);
  });

  it('should carry a reference to a $resource', function() {
    expect(resourceList.Resource).toBe(TestResource);
  });

  describe('during `add`', function() {

    it('should add a resource', function() {
      resourceList.add(new TestResource({foo: 'bar'}));
      expect(resourceList.getData().length).toEqual(1);
    });

    it('should convert a non-resource', function() {
      resourceList.add({foo: 'bar'});
      expect(resourceList.getData()[0] instanceof TestResource).toBeTruthy();
    });

    it('should add a list of resources', function() {
      resourceList.add([
        new TestResource({foo: 'bar'}),
        new TestResource({foo: 'foobar'})
      ]);
      expect(resourceList.getData().length).toEqual(2);
    });

    it('should convert a list of non-resources', function() {
      resourceList.add([
        {foo: 'bar'},
        {foo: 'foobar'}
      ]);
      angular.forEach(resourceList.getData(), function(resource) {
        expect(resource instanceof TestResource).toBeTruthy();
      });
    });
  });

  it('should remove a resource', function() {
  });
});

