{

"metadata" :
{
	"formatVersion" : 3.2,
	"type"          : "scene",
	"sourceFile"    : "",
	"generatedBy"   : "Blender 2.66 Exporter",
	"objects"       : 4,
	"geometries"    : 2,
	"materials"     : 2,
	"textures"      : 0
},

"urlBaseType" : "relativeToScene",


"objects" :
{
	"Torus" : {
		"geometry"  : "geo_Torus",
		"groups"    : [  ],
		"material"  : "Material.001",
		"position"  : [ 1.18539, -1.89142, 1.40587 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
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
		"position"  : [ -0.473905, 1.93329, 0.62954 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
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
