{

"metadata" :
{
	"formatVersion" : 3.2,
	"type"          : "scene",
	"sourceFile"    : "houseA_blender.blend",
	"generatedBy"   : "Blender 2.66 Exporter",
	"objects"       : 3,
	"geometries"    : 1,
	"materials"     : 0,
	"textures"      : 2
},

"urlBaseType" : "relativeToScene",


"objects" :
{
	"houseA" : {
		"geometry"  : "geo_houseA.001",
		"groups"    : [  ],
		"material"  : "",
		"position"  : [ 0, 0, 0 ],
		"rotation"  : [ -1.5708, 0, 0 ],
		"quaternion": [ -0.707107, 0, 0, 0.707107 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"default_light" : {
		"type"       : "DirectionalLight",
		"direction"  : [ 0, 1, 1 ],
		"color"      : 16777215,
		"intensity"  : 0.80
	},

	"default_camera" : {
		"type"  : "PerspectiveCamera",
		"fov"   : 60.000000,
		"aspect": 1.333000,
		"near"  : 1.000000,
		"far"   : 10000.000000,
		"position": [ 0, 0, 10 ],
		"target"  : [ 0, 0, 0 ]
	}
},


"geometries" :
{
	"geo_houseA.001" : {
		"type" : "ascii",
		"url"  : "houseA_blender-scene.houseA.001.js"
	}
},


"textures" :
{
	"houseANM.jpg" : {
		"url": "houseANM.jpg"
	},

	"houseA.jpg" : {
		"url": "houseA.jpg",
        "wrap": ["repeat", "repeat"]
	}
},


"transform" :
{
	"position"  : [ 0, 0, 0 ],
	"rotation"  : [ -1.5708, 0, 0 ],
	"scale"     : [ 1, 1, 1 ]
},

"defaults" :
{
	"bgcolor" : [ 0, 0, 0 ],
	"bgalpha" : 1.000000,
	"camera"  : "default_camera"
}

}
