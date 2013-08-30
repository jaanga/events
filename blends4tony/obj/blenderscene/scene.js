{

"metadata" :
{
	"formatVersion" : 3.2,
	"type"          : "scene",
	"sourceFile"    : "scene.blend",
	"generatedBy"   : "Blender 2.65 Exporter",
	"objects"       : 3,
	"geometries"    : 2,
	"materials"     : 2,
	"textures"      : 0
},

"urlBaseType" : "relativeToScene",


"objects" :
{
	"Cube.006" : {
		"geometry"  : "geo_Cube",
		"groups"    : [  ],
		"material"  : "Material",
		"position"  : [ 10.6237, 3.37078, -0.321692 ],
		"rotation"  : [ -1.62708, 0.00553477, 1.56601 ],
		"quaternion": [ -0.513755, 0.513985, 0.483143, 0.488311 ],
		"scale"     : [ 8.31, 0.12, 4.93 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"Plane" : {
		"geometry"  : "geo_Plane",
		"groups"    : [  ],
		"material"  : "Material.001",
		"position"  : [ 0, -4.04787e-09, 0.11826 ],
		"rotation"  : [ -1.5708, 0, 0 ],
		"quaternion": [ -0.707107, 0, 0, 0.707107 ],
		"scale"     : [ 7.92279, 7.92279, 7.92279 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"Cube" : {
		"geometry"  : "geo_Cube",
		"groups"    : [  ],
		"material"  : "Material",
		"position"  : [ 3.65198, 1.07114, 5.15649e-08 ],
		"rotation"  : [ -1.34037, 0.0327791, -0.193151 ],
		"quaternion": [ -0.619393, -0.0471007, -0.0856911, 0.778968 ],
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
		"position": [ 0, 10, 20 ],
		"target"  : [ 0, 0, 0 ]
	}
},


"geometries" :
{
	"geo_Cube" : {
		"type" : "ascii",
		"url"  : "scene.Cube.js"
	},

	"geo_Plane" : {
		"type" : "ascii",
		"url"  : "scene.Plane.js"
	}
},


"materials" :
{
	"Material" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 10688800, "opacity": 1, "blending": "NormalBlending" }
	},

	"Material.002" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 10711076, "opacity": 1, "blending": "NormalBlending" }
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
