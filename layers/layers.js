var wms_layers = [];


        var lyr_SHADEDRELIEF_0 = new ol.layer.Tile({
            'title': 'SHADED RELIEF',
            //'type': 'base',
            'opacity': 0.469000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BASEMAP_1 = new ol.layer.Tile({
            'title': 'BASE MAP',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_INDIGENOUSTERRITORY_2 = new ol.format.GeoJSON();
var features_INDIGENOUSTERRITORY_2 = format_INDIGENOUSTERRITORY_2.readFeatures(json_INDIGENOUSTERRITORY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDIGENOUSTERRITORY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDIGENOUSTERRITORY_2.addFeatures(features_INDIGENOUSTERRITORY_2);
var lyr_INDIGENOUSTERRITORY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDIGENOUSTERRITORY_2, 
                style: style_INDIGENOUSTERRITORY_2,
                popuplayertitle: "INDIGENOUS TERRITORY",
                interactive: true,
                    title: '<img src="styles/legend/INDIGENOUSTERRITORY_2.png" /> INDIGENOUS TERRITORY'
                });
var format_AIRPORTS_3 = new ol.format.GeoJSON();
var features_AIRPORTS_3 = format_AIRPORTS_3.readFeatures(json_AIRPORTS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRPORTS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRPORTS_3.addFeatures(features_AIRPORTS_3);
var lyr_AIRPORTS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRPORTS_3, 
                style: style_AIRPORTS_3,
                popuplayertitle: "AIRPORTS",
                interactive: true,
                    title: '<img src="styles/legend/AIRPORTS_3.png" /> AIRPORTS'
                });
var format_NATURERESERVE_4 = new ol.format.GeoJSON();
var features_NATURERESERVE_4 = format_NATURERESERVE_4.readFeatures(json_NATURERESERVE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NATURERESERVE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NATURERESERVE_4.addFeatures(features_NATURERESERVE_4);
var lyr_NATURERESERVE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NATURERESERVE_4, 
                style: style_NATURERESERVE_4,
                popuplayertitle: "NATURE RESERVE",
                interactive: true,
                    title: '<img src="styles/legend/NATURERESERVE_4.png" /> NATURE RESERVE'
                });
var format_PIPELINES_5 = new ol.format.GeoJSON();
var features_PIPELINES_5 = format_PIPELINES_5.readFeatures(json_PIPELINES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPELINES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPELINES_5.addFeatures(features_PIPELINES_5);
var lyr_PIPELINES_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PIPELINES_5, 
                style: style_PIPELINES_5,
                popuplayertitle: "PIPE LINES",
                interactive: true,
                    title: '<img src="styles/legend/PIPELINES_5.png" /> PIPE LINES'
                });
var format_POWERLINES_6 = new ol.format.GeoJSON();
var features_POWERLINES_6 = format_POWERLINES_6.readFeatures(json_POWERLINES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POWERLINES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POWERLINES_6.addFeatures(features_POWERLINES_6);
var lyr_POWERLINES_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POWERLINES_6, 
                style: style_POWERLINES_6,
                popuplayertitle: "POWER LINES",
                interactive: true,
                    title: '<img src="styles/legend/POWERLINES_6.png" /> POWER LINES'
                });
var format_RIVERS_7 = new ol.format.GeoJSON();
var features_RIVERS_7 = format_RIVERS_7.readFeatures(json_RIVERS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIVERS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIVERS_7.addFeatures(features_RIVERS_7);
var lyr_RIVERS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIVERS_7, 
                style: style_RIVERS_7,
                popuplayertitle: "RIVERS",
                interactive: true,
                    title: '<img src="styles/legend/RIVERS_7.png" /> RIVERS'
                });
var format_PARISHBOUNDARIES_8 = new ol.format.GeoJSON();
var features_PARISHBOUNDARIES_8 = format_PARISHBOUNDARIES_8.readFeatures(json_PARISHBOUNDARIES_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARISHBOUNDARIES_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARISHBOUNDARIES_8.addFeatures(features_PARISHBOUNDARIES_8);
var lyr_PARISHBOUNDARIES_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARISHBOUNDARIES_8, 
                style: style_PARISHBOUNDARIES_8,
                popuplayertitle: "PARISH BOUNDARIES",
                interactive: true,
                    title: '<img src="styles/legend/PARISHBOUNDARIES_8.png" /> PARISH BOUNDARIES'
                });
var format_CANTONBOUNDARIES_9 = new ol.format.GeoJSON();
var features_CANTONBOUNDARIES_9 = format_CANTONBOUNDARIES_9.readFeatures(json_CANTONBOUNDARIES_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANTONBOUNDARIES_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANTONBOUNDARIES_9.addFeatures(features_CANTONBOUNDARIES_9);
var lyr_CANTONBOUNDARIES_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CANTONBOUNDARIES_9, 
                style: style_CANTONBOUNDARIES_9,
                popuplayertitle: "CANTON BOUNDARIES",
                interactive: true,
                    title: '<img src="styles/legend/CANTONBOUNDARIES_9.png" /> CANTON BOUNDARIES'
                });
var format_ECUADORBORDER_10 = new ol.format.GeoJSON();
var features_ECUADORBORDER_10 = format_ECUADORBORDER_10.readFeatures(json_ECUADORBORDER_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECUADORBORDER_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECUADORBORDER_10.addFeatures(features_ECUADORBORDER_10);
var lyr_ECUADORBORDER_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECUADORBORDER_10, 
                style: style_ECUADORBORDER_10,
                popuplayertitle: "ECUADOR BORDER",
                interactive: true,
                    title: '<img src="styles/legend/ECUADORBORDER_10.png" /> ECUADOR BORDER'
                });
var format_PROVINCIALBOUNDARIES_11 = new ol.format.GeoJSON();
var features_PROVINCIALBOUNDARIES_11 = format_PROVINCIALBOUNDARIES_11.readFeatures(json_PROVINCIALBOUNDARIES_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIALBOUNDARIES_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIALBOUNDARIES_11.addFeatures(features_PROVINCIALBOUNDARIES_11);
var lyr_PROVINCIALBOUNDARIES_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVINCIALBOUNDARIES_11, 
                style: style_PROVINCIALBOUNDARIES_11,
                popuplayertitle: "PROVINCIAL BOUNDARIES",
                interactive: true,
                    title: '<img src="styles/legend/PROVINCIALBOUNDARIES_11.png" /> PROVINCIAL BOUNDARIES'
                });
var format_REZBOOUNDARYSOUTH_12 = new ol.format.GeoJSON();
var features_REZBOOUNDARYSOUTH_12 = format_REZBOOUNDARYSOUTH_12.readFeatures(json_REZBOOUNDARYSOUTH_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REZBOOUNDARYSOUTH_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REZBOOUNDARYSOUTH_12.addFeatures(features_REZBOOUNDARYSOUTH_12);
var lyr_REZBOOUNDARYSOUTH_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REZBOOUNDARYSOUTH_12, 
                style: style_REZBOOUNDARYSOUTH_12,
                popuplayertitle: "REZ BOOUNDARY SOUTH",
                interactive: true,
                    title: '<img src="styles/legend/REZBOOUNDARYSOUTH_12.png" /> REZ BOOUNDARY SOUTH'
                });
var format_REZBOUNDARYNORTH_13 = new ol.format.GeoJSON();
var features_REZBOUNDARYNORTH_13 = format_REZBOUNDARYNORTH_13.readFeatures(json_REZBOUNDARYNORTH_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REZBOUNDARYNORTH_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REZBOUNDARYNORTH_13.addFeatures(features_REZBOUNDARYNORTH_13);
var lyr_REZBOUNDARYNORTH_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REZBOUNDARYNORTH_13, 
                style: style_REZBOUNDARYNORTH_13,
                popuplayertitle: "REZ BOUNDARY NORTH",
                interactive: true,
                    title: '<img src="styles/legend/REZBOUNDARYNORTH_13.png" /> REZ BOUNDARY NORTH'
                });
var format_PROVINCELABELS_14 = new ol.format.GeoJSON();
var features_PROVINCELABELS_14 = format_PROVINCELABELS_14.readFeatures(json_PROVINCELABELS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCELABELS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCELABELS_14.addFeatures(features_PROVINCELABELS_14);
var lyr_PROVINCELABELS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVINCELABELS_14, 
                style: style_PROVINCELABELS_14,
                popuplayertitle: "PROVINCE LABELS",
                interactive: true,
                    title: '<img src="styles/legend/PROVINCELABELS_14.png" /> PROVINCE LABELS'
                });

lyr_SHADEDRELIEF_0.setVisible(true);lyr_BASEMAP_1.setVisible(true);lyr_INDIGENOUSTERRITORY_2.setVisible(true);lyr_AIRPORTS_3.setVisible(true);lyr_NATURERESERVE_4.setVisible(true);lyr_PIPELINES_5.setVisible(true);lyr_POWERLINES_6.setVisible(true);lyr_RIVERS_7.setVisible(true);lyr_PARISHBOUNDARIES_8.setVisible(true);lyr_CANTONBOUNDARIES_9.setVisible(true);lyr_ECUADORBORDER_10.setVisible(true);lyr_PROVINCIALBOUNDARIES_11.setVisible(true);lyr_REZBOOUNDARYSOUTH_12.setVisible(true);lyr_REZBOUNDARYNORTH_13.setVisible(true);lyr_PROVINCELABELS_14.setVisible(true);
var layersList = [lyr_SHADEDRELIEF_0,lyr_BASEMAP_1,lyr_INDIGENOUSTERRITORY_2,lyr_AIRPORTS_3,lyr_NATURERESERVE_4,lyr_PIPELINES_5,lyr_POWERLINES_6,lyr_RIVERS_7,lyr_PARISHBOUNDARIES_8,lyr_CANTONBOUNDARIES_9,lyr_ECUADORBORDER_10,lyr_PROVINCIALBOUNDARIES_11,lyr_REZBOOUNDARYSOUTH_12,lyr_REZBOUNDARYNORTH_13,lyr_PROVINCELABELS_14];
lyr_INDIGENOUSTERRITORY_2.set('fieldAliases', {'FID': 'FID', 'objectid': 'objectid', 'pais': 'pais', 'codigo_tis': 'codigo_tis', 'categoriaa': 'categoriaa', 'categoria': 'categoria', 'nombre': 'nombre', 'status': 'status', 'etnias': 'etnias', 'no_habitan': 'no_habitan', 'fuente_fec': 'fuente_fec', 'no_comunid': 'no_comunid', 'fuente_f_1': 'fuente_f_1', 'norma': 'norma', 'fecha_norm': 'fecha_norm', 'fecha_ulti': 'fecha_ulti', 'area_sig_h': 'area_sig_h', 'area_ofici': 'area_ofici', 'fuente': 'fuente', 'fecha_atua': 'fecha_atua', 'leyenda': 'leyenda', 'institucio': 'institucio', 'observacio': 'observacio', 'x': 'x', 'y': 'y', 'nivel': 'nivel', 'link': 'link', 'amzbiog': 'amzbiog', 'limraisg': 'limraisg', 'mosaicomoo': 'mosaicomoo', 'globalid': 'globalid', 'shape_Leng': 'shape_Leng', 'featureid': 'featureid', 'categoria_': 'categoria_', 'name': 'name', 'id_tiunico': 'id_tiunico', 'AREA_HA': 'AREA_HA', 'Shape_Le_1': 'Shape_Le_1', 'CS': 'CS', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AIRPORTS_3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'NAME_EN': 'NAME_EN', 'AEROD_TYPE': 'AEROD_TYPE', 'CLOSEST_TO': 'CLOSEST_TO', 'ICAO': 'ICAO', 'IATA': 'IATA', 'OSM_TYPE': 'OSM_TYPE', 'OSM_ID': 'OSM_ID', });
lyr_NATURERESERVE_4.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'NAME_EN': 'NAME_EN', 'LEISURE': 'LEISURE', 'BOUNDARY': 'BOUNDARY', 'OSM_TYPE': 'OSM_TYPE', 'OSM_ID': 'OSM_ID', });
lyr_PIPELINES_5.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'NAME_EN': 'NAME_EN', 'SUBSTANCE': 'SUBSTANCE', 'LOCATION': 'LOCATION', 'OPERATOR': 'OPERATOR', 'DIAMETER': 'DIAMETER', 'PRESSURE': 'PRESSURE', 'CAPACITY': 'CAPACITY', 'OSM_TYPE': 'OSM_TYPE', 'OSM_ID': 'OSM_ID', });
lyr_POWERLINES_6.set('fieldAliases', {'fid': 'fid', 'POWER': 'POWER', 'VOLTAGE': 'VOLTAGE', 'NAME': 'NAME', 'OSM_TYPE': 'OSM_TYPE', 'OSM_ID': 'OSM_ID', });
lyr_RIVERS_7.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'NAME_EN': 'NAME_EN', 'WATERWAY': 'WATERWAY', 'OSM_TYPE': 'OSM_TYPE', 'OSM_ID': 'OSM_ID', });
lyr_PARISHBOUNDARIES_8.set('fieldAliases', {'ADM3_ES': 'ADM3_ES', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1ES': 'ADM3ALT1ES', 'ADM3ALT2ES': 'ADM3ALT2ES', 'ADM2_ES': 'ADM2_ES', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_ES': 'ADM1_ES', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_ES': 'ADM0_ES', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CANTONBOUNDARIES_9.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_ES': 'ADM2_ES', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1ES': 'ADM2ALT1ES', 'ADM2ALT2ES': 'ADM2ALT2ES', 'ADM1_ES': 'ADM1_ES', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_ES': 'ADM0_ES', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_ECUADORBORDER_10.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM0_EN': 'ADM0_EN', 'ADM0_ES': 'ADM0_ES', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM0_REF': 'ADM0_REF', 'ADM0ALT1EN': 'ADM0ALT1EN', 'ADM0ALT2EN': 'ADM0ALT2EN', 'ADM0ALT1ES': 'ADM0ALT1ES', 'ADM0ALT2ES': 'ADM0ALT2ES', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_PROVINCIALBOUNDARIES_11.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_ES': 'ADM1_ES', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1ES': 'ADM1ALT1ES', 'ADM1ALT2ES': 'ADM1ALT2ES', 'ADM0_EN': 'ADM0_EN', 'ADM0_ES': 'ADM0_ES', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_REZBOOUNDARYSOUTH_12.set('fieldAliases', {'id': 'id', });
lyr_REZBOUNDARYNORTH_13.set('fieldAliases', {'fid': 'fid', });
lyr_PROVINCELABELS_14.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_INDIGENOUSTERRITORY_2.set('fieldImages', {'FID': 'Range', 'objectid': 'Range', 'pais': 'TextEdit', 'codigo_tis': 'Range', 'categoriaa': 'TextEdit', 'categoria': 'TextEdit', 'nombre': 'TextEdit', 'status': 'TextEdit', 'etnias': 'TextEdit', 'no_habitan': 'TextEdit', 'fuente_fec': 'TextEdit', 'no_comunid': 'Range', 'fuente_f_1': 'TextEdit', 'norma': 'TextEdit', 'fecha_norm': 'TextEdit', 'fecha_ulti': 'TextEdit', 'area_sig_h': 'TextEdit', 'area_ofici': 'TextEdit', 'fuente': 'TextEdit', 'fecha_atua': 'TextEdit', 'leyenda': 'TextEdit', 'institucio': 'TextEdit', 'observacio': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'nivel': 'Range', 'link': 'TextEdit', 'amzbiog': 'TextEdit', 'limraisg': 'TextEdit', 'mosaicomoo': 'TextEdit', 'globalid': 'TextEdit', 'shape_Leng': 'TextEdit', 'featureid': 'Range', 'categoria_': 'TextEdit', 'name': 'TextEdit', 'id_tiunico': 'Range', 'AREA_HA': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'CS': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AIRPORTS_3.set('fieldImages', {'fid': '', 'NAME': '', 'NAME_EN': '', 'AEROD_TYPE': '', 'CLOSEST_TO': '', 'ICAO': '', 'IATA': '', 'OSM_TYPE': '', 'OSM_ID': '', });
lyr_NATURERESERVE_4.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'NAME_EN': 'TextEdit', 'LEISURE': 'TextEdit', 'BOUNDARY': 'TextEdit', 'OSM_TYPE': 'TextEdit', 'OSM_ID': 'TextEdit', });
lyr_PIPELINES_5.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'NAME_EN': 'TextEdit', 'SUBSTANCE': 'TextEdit', 'LOCATION': 'TextEdit', 'OPERATOR': 'TextEdit', 'DIAMETER': 'TextEdit', 'PRESSURE': 'TextEdit', 'CAPACITY': 'TextEdit', 'OSM_TYPE': 'TextEdit', 'OSM_ID': 'TextEdit', });
lyr_POWERLINES_6.set('fieldImages', {'fid': 'TextEdit', 'POWER': 'TextEdit', 'VOLTAGE': 'TextEdit', 'NAME': 'TextEdit', 'OSM_TYPE': 'TextEdit', 'OSM_ID': 'TextEdit', });
lyr_RIVERS_7.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'NAME_EN': 'TextEdit', 'WATERWAY': 'TextEdit', 'OSM_TYPE': 'TextEdit', 'OSM_ID': 'TextEdit', });
lyr_PARISHBOUNDARIES_8.set('fieldImages', {'ADM3_ES': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1ES': 'TextEdit', 'ADM3ALT2ES': 'TextEdit', 'ADM2_ES': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_ES': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_ES': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CANTONBOUNDARIES_9.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_ES': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1ES': 'TextEdit', 'ADM2ALT2ES': 'TextEdit', 'ADM1_ES': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_ES': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_ECUADORBORDER_10.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_ES': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM0_REF': 'TextEdit', 'ADM0ALT1EN': 'TextEdit', 'ADM0ALT2EN': 'TextEdit', 'ADM0ALT1ES': 'TextEdit', 'ADM0ALT2ES': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_PROVINCIALBOUNDARIES_11.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_ES': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1ES': 'TextEdit', 'ADM1ALT2ES': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_ES': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_REZBOOUNDARYSOUTH_12.set('fieldImages', {'id': 'TextEdit', });
lyr_REZBOUNDARYNORTH_13.set('fieldImages', {'fid': 'TextEdit', });
lyr_PROVINCELABELS_14.set('fieldImages', {'id': 'TextEdit', 'Label': 'TextEdit', });
lyr_INDIGENOUSTERRITORY_2.set('fieldLabels', {'FID': 'no label', 'objectid': 'no label', 'pais': 'no label', 'codigo_tis': 'no label', 'categoriaa': 'no label', 'categoria': 'no label', 'nombre': 'no label', 'status': 'no label', 'etnias': 'no label', 'no_habitan': 'no label', 'fuente_fec': 'no label', 'no_comunid': 'no label', 'fuente_f_1': 'no label', 'norma': 'no label', 'fecha_norm': 'no label', 'fecha_ulti': 'no label', 'area_sig_h': 'no label', 'area_ofici': 'no label', 'fuente': 'no label', 'fecha_atua': 'no label', 'leyenda': 'no label', 'institucio': 'no label', 'observacio': 'no label', 'x': 'no label', 'y': 'no label', 'nivel': 'no label', 'link': 'no label', 'amzbiog': 'no label', 'limraisg': 'no label', 'mosaicomoo': 'no label', 'globalid': 'no label', 'shape_Leng': 'no label', 'featureid': 'no label', 'categoria_': 'no label', 'name': 'no label', 'id_tiunico': 'no label', 'AREA_HA': 'no label', 'Shape_Le_1': 'no label', 'CS': 'no label', 'SHAPE_Le_2': 'no label', 'SHAPE_Area': 'no label', });
lyr_AIRPORTS_3.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'NAME_EN': 'no label', 'AEROD_TYPE': 'no label', 'CLOSEST_TO': 'no label', 'ICAO': 'no label', 'IATA': 'no label', 'OSM_TYPE': 'no label', 'OSM_ID': 'no label', });
lyr_NATURERESERVE_4.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'NAME_EN': 'no label', 'LEISURE': 'no label', 'BOUNDARY': 'no label', 'OSM_TYPE': 'no label', 'OSM_ID': 'no label', });
lyr_PIPELINES_5.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'NAME_EN': 'no label', 'SUBSTANCE': 'no label', 'LOCATION': 'no label', 'OPERATOR': 'no label', 'DIAMETER': 'no label', 'PRESSURE': 'no label', 'CAPACITY': 'no label', 'OSM_TYPE': 'no label', 'OSM_ID': 'no label', });
lyr_POWERLINES_6.set('fieldLabels', {'fid': 'no label', 'POWER': 'no label', 'VOLTAGE': 'no label', 'NAME': 'no label', 'OSM_TYPE': 'no label', 'OSM_ID': 'no label', });
lyr_RIVERS_7.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'NAME_EN': 'no label', 'WATERWAY': 'no label', 'OSM_TYPE': 'no label', 'OSM_ID': 'no label', });
lyr_PARISHBOUNDARIES_8.set('fieldLabels', {'ADM3_ES': 'no label', 'ADM3_PCODE': 'no label', 'ADM3_REF': 'no label', 'ADM3ALT1ES': 'no label', 'ADM3ALT2ES': 'no label', 'ADM2_ES': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_ES': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_ES': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CANTONBOUNDARIES_9.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_ES': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1ES': 'no label', 'ADM2ALT2ES': 'no label', 'ADM1_ES': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_ES': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_ECUADORBORDER_10.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM0_EN': 'no label', 'ADM0_ES': 'no label', 'ADM0_PCODE': 'no label', 'ADM0_REF': 'no label', 'ADM0ALT1EN': 'no label', 'ADM0ALT2EN': 'no label', 'ADM0ALT1ES': 'no label', 'ADM0ALT2ES': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_PROVINCIALBOUNDARIES_11.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_ES': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1ES': 'no label', 'ADM1ALT2ES': 'no label', 'ADM0_EN': 'no label', 'ADM0_ES': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_REZBOOUNDARYSOUTH_12.set('fieldLabels', {'id': 'no label', });
lyr_REZBOUNDARYNORTH_13.set('fieldLabels', {'fid': 'no label', });
lyr_PROVINCELABELS_14.set('fieldLabels', {'id': 'no label', 'Label': 'no label', });
lyr_PROVINCELABELS_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});