
var http = require('http'),
	 querystring = require('querystring'),
    URL = require('url'),
	 xml2js = require('xml2js-expat');


exports.definition = {
    "name": "material",
    "category": "Sources",
    "container": {
        "icon": "/images/icons/arrow_right.png",
        "xtype": "WireIt.FormContainer",
        "title": "material",
        "fields": [
        {
            "type": "string",
            "name": "name",
            "wirable": true,
            label: "Name"
        },
        {
            "type": "list",
            "name": "params",
            listLabel: 'Parameters',
            elementType: {
                type: 'combine',
                fields: [{typeInvite: 'field'},{ typeInvite: 'value',wirable: true}],
                separators: [false, ":", false]
            }
        }
        ],
        "terminals": [
        {
            "name": "out",
            "direction": [0, 1],
            "offsetPosition": {
                "left": 86,
                "bottom": -15
            },
            "ddConfig": {
                "type": "output",
                "allowedTypes": ["input"]
            }
        }
        ]
    }
};

exports.run = function(params, cb) {
	var r = params;

	cb( {out: r} );
};