function mapChooser(locationName) {

    if(!locationName) {
        locationName = "default";
    }
    return (locationName + ".png");
}

export default mapChooser;