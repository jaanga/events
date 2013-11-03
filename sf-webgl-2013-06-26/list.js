var list = {
// avoid using - , / _ .
// use same capitalization

	'Introductions': {
		'Acknowledgements': [
			[ 'Yay: Ken ~ Khronos ~ Tony&Damien', 'introduction/intro/threejs-osome-globe-r2-webgl.html'],
			[ 'blank', '']
		],
		'The Apps': [
			[ 'FGx Globe R2', 'introduction/fgx-globe-r2.html'],
			[ 'FGx GitHub  - fgx|github|io', 'introduction/fgx-github.html'],
			[ 'Jaanga oSoMe Globe R1', 'introduction/osome-globe-r1.html'],
			[ 'Jaanga oSoMe Globe R4', 'introduction/osome-globe-r4.html'],
			[ 'unFlatLand R1 with Materials', 'introduction/unflatland-r1.html'],
			[ 'unFlatland R2', 'introduction/unflatland-r2.html'],
			// [ 'unFlatland R2 source code', 'introduction/unflatland-r2-source-code.html']
		]

	},
	'Over-Arching Guidelines ': {
		'User In-yer-face': [
			[ 'Henrik Bennetson said', 'introduction/intro/henrik-bennetsen.html'],
			[ '3D or not 3D', 'slides/slides.html#Previous slide was 2D#I made it and was disguted#Where is my real dogfood?#The rest is a first pass at 3D'],
			[ '3D - You|Eye - for the masses', 'slides/slides2.html#3D:#the core of the UI of the future#no need for skeumorphism#Let us seek fresh thoughts'],
			[ '3D UI?', 'slides/slides.html#3D:#The following is #beginning of an example#perhaps']
		],
		'Great example: Lindsay Kay Has It': [
			[ 'Scenejs Examples', 'introduction/examples/scenejs-examples.html'],
			[ 'Scenejs Examples Source Code', 'introduction/examples/scenejs-examples-source.html'],
			[ 'MrDoob Examples', 'introduction/examples/mr-doob-examples.html'],
			[ 'MrDoob Docs', 'introduction/examples/mr-doob-docs.html'],
			[ 'MrDoob Editor', 'introduction/examples/mr-doob-htmleditor.html']
		],
		'Rules ~ Thoughts While Coding': [
			[ 'The UI: stingy in life but greedy on the web', 'slides/slides.html#The UI:#On the web I want it all#And I want it here#And I want it now!# - I want the World!!!'],
			[ 'For Dummies', 'slides/slides2.html#Follow what MrDoob says#Aim of the project# - create with low level of complexity# - in other words, for dummies'],
			[ 'Hosted on GitHub', 'slides/slides.html#GitHub#Free as in liberty ~ free as in beer ~ free as in fun#Use gh-pages as the web front-end#Use gh-pages as content delivery network'],
			[ 'No servers', 'slides/slides2.html#No servers needed ~ No PostgreSQL#No Double E degrees needed#OK for third world kids & artists'],
			[ 'Small is beautiful', 'slides/slides.html#Be small#What can you do in 500 lines?#Build great demos#Prepare terrain for real coders']
		],		
	},
	'oSome Globe ': {
		'Origins': [
			[ 'Name', 'slides/slides.html#Derivation of the name# oSome Globe:# oSome = OSM + awesome +# "That\'s some Globe!"'],
			[ 'UDC FGx', 'osome-globe/origins/fgx-globe-r3.html'],
			// [ 'Slippy Map', 'slides/slides2.html#Slippy map is what Google Maps and OSM do'],
			[ 'Not round ~ No bumps ~ Nothing moves', 'slides/slides.html#Our actual world:#is spherical#has mountains and oceans#teams with life']
		],

		'Technics Mapping': [
			[ 'OpenStreetMaporg is your friend', 'slides/slides2.html#OpenStreetMap.org#Imposes few usage limits#friendly wiki#Mercator Globe code samples'],
			[ 'Slippy Maps', 'osome-globe/slippy-map.html'],
			[ 'Tiles, tiles, tiles', 'slides/slides.html#Imagine a world full of folders# - full of PNG files#Um, welcome to the world#Database skills not required'],
			[ 'tiles 2','slides/slides2.html#tiles: are 256 × 256 pixel PNG files#Each zoom level is a directory#each column is a subdirectory#and each tile in that column is a file#Filename(url) format is /zoom/x/y.png'],
			[ 'Reverse Mercator', 'slides/slides2.html#Sufficient complexity # - to satisfy barrel full of PhDs#Or choose half dozen# - workhorse blackbox functions'],
			[ 'MrDoob is your friend', 'slides/slides.html#ThreeJS does no-name sphere thing# - truncated segment?# And clamps applied bitmap to edges#yippee - no thinking needed'],
			[ 'Count the pixels', 'slides/slides2.html#Forget X-Y cordinates or I & J loops# - they double the untraceable errors#Use single linear array#Track total pixels and vertices#check that they stay identical'],
			[ 'Katamari Damacy variable names', 'slides/slides.html#A point has:#latitude and longitude#X and Y on a tile which has X and Y#theta and phi on a sphere#and is some where in an IJ loop'],
			[ 'Reuse everything', 'slides/slides2.html#variables for scenes, cameras, controls, objects# reuse over and over again'],
			[ 'Elevations', 'slides/slides.html#Elevations: most difficult to source#Google has best beautiful data# - and smallish - no-fee usage limits#Zoom level 4 ASCII data > 5 gig!!!#What to do?'],
			[ 'PNGs are effective', 'slides/slides2.html#OSM circulates its data in 2D PNGs#Why not do same with elevations#use identical grid#Bingo! Whole world in 88MB ~ fully chached']
		],
		'Technics Assets': [
			[ 'Google is your friend', 'slides/slides.html#Google Apps:#keeps the world assets# in a Google Spreadsheet#Downloaded on demand'],
			[ 'Spreadsheets are good', 'slides/slides2.html#Assets stored as JavaScript files#CORS compatible#Basic SQL handled by SS#Simple URL call#'],
			[ 'oSome Globe Assets SS', 'osome-globe/osome-globe-assets.html'],
			// [ '~~', 'Section-2/Category-2-1/File-2-1-1'],
		],

		'Cartoon Physics': [
			[ 'Exaggerated Scale', 'slides/slides.html#Cartoon Pysics:#exaggerated scales#need frustrum matric scaler'],
			[ 'Shadows, lighting, laayers', 'slides/slides2.html#Much work to be done#lighting, shadows and shaders#adding OSM map layers'],
			[ 'Augmented Reality', 'slides/slides.html#Is this a map or a game?#Most any bits - not all - #of Google Maps or Secondlife# - can be replicated'],
			[ '', 'Section-2/Category-2-1/File-2-1-1'],
		],
	},	
	'Links': {
		'': [
			//[ 'docTree', 'Section-2/Category-2-1/File-2-1-1'],
			[ 'j3qUE r1', 'links/j3que.html'],
			// [ 'FGx', 'Section-2/Category-2-1/File-2-1-1'],
			[ 'Marching Cubes with Materials', 'links/marching-cubes.html'],
		]
	},

	'Closing': {
		'Close': [
			[ 'The Hills are Alive', 'links/geoffair-craft.html']
		]
	}
};

var pages = {};

for ( var section in list ) {
	pages[ section ] = {};
	for ( var category in list[ section ] ) {
		pages[ section ][ category ] = {};
		for ( var i = 0; i < list[ section ][ category ].length; i ++ ) {
			var page = list[ section ][ category ][ i ];
			pages[ section ][ category ][ page[ 0 ] ] = page[ 1 ];
			
		}
	}
}
// console.log('list: ', list, pages );