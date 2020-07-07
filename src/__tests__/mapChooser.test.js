import mapChooser from '../mapChooser';

describe("mapChooser", function() {

    // it("returns portland.jpg when portland is passed into it", function()  {
    //     let expected = "portland.jpg";
    //     let actual = mapChooser("portland");
    //     expect(actual).toEqual(expected);
    // }),
    it("returns an image based on input given to it", function()  {
        let expected = "astoria.png";
        let actual = mapChooser("astoria");
        expect(actual).toEqual(expected);
    }),
    it("returns default image when no input is given ", function()  {
        let expected = "default.png";
        let actual = mapChooser("");
        expect(actual).toEqual(expected);
    })

});