import mapChooser from '../mapChooser';

describe("mapChooser", function() {

    it("returns an image file name based on input gicen to it", function()  {
        let expected = "portland.jpg";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    })
});