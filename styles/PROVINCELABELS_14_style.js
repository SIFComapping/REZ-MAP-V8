var size = 0;
var placement = 'point';

var style_PROVINCELABELS_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "11.700000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#ff00cc";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.2;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Label") !== null && resolution > 0 && resolution < 1483) {
        labelText = String(feature.get("Label"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(249,255,75,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
