{

"metadata" :
{
	"formatVersion" : 3.2,
	"type"          : "scene",
	"sourceFile"    : "",
	"generatedBy"   : "Blender 2.66 Exporter",
	"objects"       : 5,
	"geometries"    : 3,
	"materials"     : 3,
	"textures"      : 0
},

"urlBaseType" : "relativeToScene",


"objects" :
{
	"Icosphere" : {
		"geometry"  : "geo_Icosphere.001",
		"groups"    : [  ],
		"material"  : "Material.002",
		"position"  : [ -8.85903, -0.35938, -1.19491 ],
		"rotation"  : [ -1.5708, 0, 0 ],
		"quaternion": [ -0.707107, 0, 0, 0.707107 ],
		"scale"     : [ 2.99892, 2.99892, 2.99892 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"Torus" : {
		"geometry"  : "geo_Torus",
		"groups"    : [  ],
		"material"  : "Material.001",
		"position"  : [ 1.18539, 1.40587, 1.89142 ],
		"rotation"  : [ -1.5708, 0, 0 ],
		"quaternion": [ -0.707107, 0, 0, 0.707107 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"Cylinder" : {
		"geometry"  : "geo_Cylinder.001",
		"groups"    : [  ],
		"material"  : "Material",
		"position"  : [ -0.473905, 0.62954, -1.93329 ],
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

	"Camera" : {
		"type"  : "PerspectiveCamera",
		"fov"   : 49.159264,
		"aspect": 1.333000,
		"near"  : 0.100000,
		"far"   : 100.000000,
		"position": [ 7.48113, 6.50764, 5.34367 ],
		"target"  : [ 0, 0, 0 ]
	}
},


"geometries" :
{
	"geo_Icosphere.001" : {
		"type" : "ascii",
		"url"  : "test.Icosphere.001.js"
	},

	"geo_Torus" : {
		"type" : "ascii",
		"url"  : "test.Torus.js"
	},

	"geo_Cylinder.001" : {
		"type" : "ascii",
		"url"  : "test.Cylinder.001.js"
	}
},


"materials" :
{
	"Material" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 10698084, "opacity": 1, "blending": "NormalBlending" }
	},

	"Material.001" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 8272803, "opacity": 1, "blending": "NormalBlending" }
	},

	"Material.002" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 10684762, "opacity": 1, "blending": "NormalBlending" }
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
	"camera"  : "Camera"
}

}
