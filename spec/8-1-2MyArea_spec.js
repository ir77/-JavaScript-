describe('Jasmineの基本', function(){
    var area;

    beforeEach(function() {
        area = new MyArea(10, 5);
    });

    it('getTriangle', function() {
        expect(area.getTriangle()).toEqual(25);
    });
    it('getSquare', function() {
        expect(area.getSquare() === 50).toBeTruthy();
    });
});