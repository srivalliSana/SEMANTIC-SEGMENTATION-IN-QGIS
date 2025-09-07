var wms_layers = [];


        var lyr_googleearth_0 = new ol.layer.Tile({
            'title': 'google earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_road_1 = new ol.format.GeoJSON();
var features_road_1 = format_road_1.readFeatures(json_road_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_1.addFeatures(features_road_1);
var lyr_road_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_1, 
                style: style_road_1,
                popuplayertitle: 'road',
                interactive: true,
                title: '<img src="styles/legend/road_1.png" /> road'
            });
var format_water_2 = new ol.format.GeoJSON();
var features_water_2 = format_water_2.readFeatures(json_water_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_2.addFeatures(features_water_2);
var lyr_water_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_2, 
                style: style_water_2,
                popuplayertitle: 'water',
                interactive: true,
                title: '<img src="styles/legend/water_2.png" /> water'
            });
var format_woodland_3 = new ol.format.GeoJSON();
var features_woodland_3 = format_woodland_3.readFeatures(json_woodland_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_woodland_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_woodland_3.addFeatures(features_woodland_3);
var lyr_woodland_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_woodland_3, 
                style: style_woodland_3,
                popuplayertitle: 'woodland',
                interactive: true,
                title: '<img src="styles/legend/woodland_3.png" /> woodland'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_4, 
                style: style_building_4,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_4.png" /> building'
            });
var format__background_5 = new ol.format.GeoJSON();
var features__background_5 = format__background_5.readFeatures(json__background_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__background_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__background_5.addFeatures(features__background_5);
var lyr__background_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__background_5, 
                style: style__background_5,
                popuplayertitle: '_background',
                interactive: true,
                title: '<img src="styles/legend/_background_5.png" /> _background'
            });
var group_model_output = new ol.layer.Group({
                                layers: [lyr_road_1,lyr_water_2,lyr_woodland_3,lyr_building_4,lyr__background_5,],
                                fold: 'open',
                                title: 'model_output'});

lyr_googleearth_0.setVisible(true);lyr_road_1.setVisible(true);lyr_water_2.setVisible(true);lyr_woodland_3.setVisible(true);lyr_building_4.setVisible(true);lyr__background_5.setVisible(true);
var layersList = [lyr_googleearth_0,group_model_output];
lyr_road_1.set('fieldAliases', {});
lyr_water_2.set('fieldAliases', {});
lyr_woodland_3.set('fieldAliases', {});
lyr_building_4.set('fieldAliases', {});
lyr__background_5.set('fieldAliases', {});
lyr_road_1.set('fieldImages', {});
lyr_water_2.set('fieldImages', {});
lyr_woodland_3.set('fieldImages', {});
lyr_building_4.set('fieldImages', {});
lyr__background_5.set('fieldImages', {});
lyr_road_1.set('fieldLabels', {});
lyr_water_2.set('fieldLabels', {});
lyr_woodland_3.set('fieldLabels', {});
lyr_building_4.set('fieldLabels', {});
lyr__background_5.set('fieldLabels', {});
lyr__background_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});