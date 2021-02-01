/*global AmCharts */

( function () {
	"use strict";

	AmCharts.makeChart("chart", {
		"type": "serial",
		"theme": "none",
		"categoryField": "date",
		"color": "#666766",
		"creditsPosition": "bottom-right",
		"dataDateFormat": "YYYY/MM/DD",
		"dataProvider": [
			{ "date": "2008-03-14", "level":  14 },
			{ "date": "2008-04-01", "level":  18 },
			{ "date": "2008-04-16", "level":  18 },
			{ "date": "2008-04-23", "level":  20 },
			{ "date": "2008-05-28", "level":  30 },
			{ "date": "2008-06-25", "level":  36 },
			{ "date": "2008-07-23", "level":  39 },
			{ "date": "2008-08-13", "level":  44 },
			{ "date": "2008-10-22", "level":  47 },
			{ "date": "2008-12-17", "level":  50 },
			{ "date": "2009-02-18", "level":  53 },
			{ "date": "2009-06-24", "level":  55 },
			{ "date": "2009-07-08", "level":  57 },
			{ "date": "2009-09-16", "level":  61 },
			{ "date": "2009-11-11", "level":  65 },
			{ "date": "2010-02-17", "level":  69 },
			{ "date": "2010-07-21", "level":  73 },
			{ "date": "2010-10-20", "level":  77 },
			{ "date": "2011-03-02", "level":  81 },
			{ "date": "2011-08-24", "level":  85 },
			{ "date": "2012-01-25", "level":  90 },
			{ "date": "2012-04-25", "level":  92 },
			{ "date": "2012-07-11", "level":  96 },
			{ "date": "2012-08-22", "level": 100 },
			{ "date": "2012-12-19", "level": 105 },
			{ "date": "2013-06-19", "level": 110 },
			{ "date": "2013-09-26", "level": 115 },
			{ "date": "2016-01-20", "level": 120 },
		],
		"fontFamily": "Candara, Meiryo, sans-self",
		"fontSize": 12,
		"language": "ja",
		"marginRight": 40,
		"valueAxes": [ {
			"axisAlpha": 0.4,
			"axisColor": "#666766",
			"dashLength": 1,
			"gridAlpha": 0.4,
			"gridColor": "#c8cacc",
			"maximum": 120,
			"minimum": 0,
			"position": "left"
		} ],
		"graphs": [ {
			"balloon": {
				"borderAlpha": 0.4,
				"color": "#666766",
				"fillAlpha": 0.4,
				"shadowAlpha": 0.5,
				"shadowColor": "#9a9b98"
			},
			"balloonText": "[[category]]: Lv.[[value]]",
			"bullet": "round",
			"bulletAlpha": 0.6,
			"bulletSize": 6,
			"fontSize": 12,
			"id": "g1",
			"lineColor": "#e6679a",
			"lineAlpha": 0.4,
			"lineThickness": 2,
			"title": "Level Cap",
			"type": "line",
			"valueField": "level"
		} ],
		"chartCursor": {
			"fullWidth": true,
			"categoryBalloonDateFormat": "YYYY/MM/DD",
			"cursorAlpha": 0.5,
			"cursorColor": "#8fb34c",
			"categoryBalloonEnabled": false
		},
		"categoryAxis": {
			"autoGridCount": true,
			"axisAlpha": 0.4,
			"axisColor": "#666766",
			"dateFormats": [
				{ "period": "MM",   "format": "MM"   },
				{ "period": "YYYY", "format": "YYYY" }
			],
			"gridAlpha": 0.4,
			"gridColor": "#c8cacc",
			"parseDates": true
		}
	} );
} () );

