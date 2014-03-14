// Theo Armour ~ 2014-03-08 ~ MIT License

	uf.defaults.placards = 1;
	uf.displayPlacards = 1;
	uf.ref = 'r10';

	var offsetX;
	var offsetY;
	var canvasAlt = document.createElement( 'canvas' );
	var contextAlt = canvasAlt.getContext( '2d' );

	function addHelp() {
		help = document.body.appendChild( document.createElement( 'div' ) );
		help.style.cssText = 'display: none; background-color: #ccc; left: 50px; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; left: 0; height: 400px; margin: auto; position: absolute; right: 0; top: 0; width: 500px; zIndex:10; ';
		help.innerHTML =
			'<div onclick=help.style.display="none"; >' +
				'<h3>San Francisco WebGL Meet-Up 2014-03-13</h1>' +
				'<h1>Concept:<br>Eat your own dog food.</h1>' +
				'<h1>Present using the app you are showing.</h1>' +
				'<ul>' +

					'<li>3D talk in 3D world</li>' +
					'<li>Hosted on GitHub</li>' +
					'<li>Many aspects suck. So it goes.</li>' +
					'<li>Release early. Release often</li>' +
					'<li>Many aspects suck. So it goes.</li>' +
					'<li>Feedback helps make your app better, faster.</li>' +
					'<li>Audience gets to see more of your app.</li>' +
				'</ul>' +
				'<a href="https://github.com/jaanga/terrain-viewer/tree/gh-pages/un-flatland" target="_blank">Source code</a><br>' +
				'<small>credits: <a href="http://threejs.org" target="_blank">three.js</a> - ' +
				'<a href="http://khronos.org/webgl/" target="_blank">webgl</a> - ' +
				'<a href="http://jaanga.github.io" target="_blank">jaanga</a><br>' +
				'copyright &copy; 2014 Jaanga authors ~ MIT license</small><br><br>' +
				'<i>Click anywhere in this message to hide...</i>' +
		'</div>';
	}

	function addMenu() {
		stats = new Stats();
		stats.domElement.style.cssText = 'position: absolute; right: 0; top: 0; zIndex: 100; ';
		document.body.appendChild( stats.domElement );

		var data = requestFile( '../../../../terrain-plus/gazetteer/places-2000.csv' );
		var lines = data.split(/\r\n|\n/);
		uf.gazetteer = [ ['Select a location','37.796','-122.398'] ];
		for ( var i = 1, length = lines.length; i < length; i++ ) {
			pl = lines[i].split( ';' );
			uf.gazetteer.push( [ pl[0], parseFloat( pl[1] ), parseFloat( pl[2] ) ] );
			if ( pl[0] === uf.defaults.location ) uf.defaults.start = i; 
		}

		parsePermalink();
		uf.defaults.placards = 1;
		uf.displayPlacards = 1;

		var css = document.body.appendChild( document.createElement('style') );
		css.innerHTML = 'body { font: 600 12pt monospace; margin: 0; overflow: hidden; }' +
			'h1 { margin: 0; }' +
			'h1 a {text-decoration: none; }' +
			'td {font: 400 10pt monospace; }' +
			'#closer { position: absolute; right: 5px; top: 5px; }' +
			'#movable { overflow: auto; margin: 10px; padding: 10px 20px; position: absolute; }' +
		'';

		uf.info = document.body.appendChild( document.createElement( 'div' ) );
		uf.info.id = 'movable';
		uf.info.style.cssText = ' background-color: #ccc; height:' + (window.innerHeight-50) + 'px; left: 3px; opacity: 0.8; ' +
			' overflow: scroll; top: 5px; max-width: 80% ';
		uf.info.addEventListener( 'mousedown', mouseMove, false );
		uf.info.innerHTML = 

			'<div onclick=uf.info.style.display="none";stats.domElement.style.display="none"; >[x]</div>' +
			'<h1>' +
				'<a href="" >San Francisco<br>WebGL Meet-Up<br>2014-03-13</a> ' +
				'<a href=# title="Get help and info" onclick=help.style.display="block"; ><large>&#x24D8;</large></a>' +
			'</h1>' +
			'<h1><a href=../../index.html >read me</a></h1>' +
			'<h1>' +
				'<a href=JavaScript:heart(); >&lt;3</a><br>' +
			'</h1>' +
			'<h1>' +
				'<a href=JavaScript:links(); >links</a><br>' +
			'</h1>' +
			'<h1>' +
				'<a href=JavaScript:concept(); >concept</a><br>' +
			'</h1>' +
			'<h1>' +
				'<a href=../../../terrain-viewer/un-flatland/r10/un-flatland-r10.html target="_blank" >demo</a><br>' +
			'</h1>' +
			'<h1>' +
				'<a href=JavaScript:slippyMaps(); >slippy maps</a><br>' +
				'- <a href=../tms/tms.html target="_blank" >tms demo</a><br>' +
				'- <a href=../good-company/good-company.html target="_blank" >good company</a><br>' +
			'</h1>' +

			'<h1>' +
				'<a href=JavaScript:heightmaps(); >heightmaps</a><br>' +
				
				'- <a href=http://jsfiddle.net/theo/Zq65L/ target="_blank" >Parisi Land</a> <a href=../parisi-land/parisi-land.html target="_blank" >pl2</a><br>' +
				'- <a href=http://jsfiddle.net/theo/2wT9z/ target="_blank" >Parisi Global</a>' +
			'</h1>' +
			'<h1>' +
				'<a href=JavaScript:ferranti(); >j de ferranti</a><br>' +
				'- <a href=http://www.viewfinderpanoramas.org/dem3.html target="_blank" >viewfinder pano</a><br>' +
				'- <a href=http://www.osgeo.org/home target="_blank" >osgeo / gdal</a><br>' +
			'</h1>' +
			'<h1>' +
				'<a href=JavaScript:terrain(); >jaanga terrain</a><br>' +
				'- <a href=../../../terrain/readme-reader.html target="_blank" >terrain read me</a><br>' +
				'- <a href=https://github.com/jaanga/terrain/ target="_blank" >terrain github</a><br>' +
				'- <a href=../../../terrain-viewer/png-viewer/r3/png-viewer-r3.html target="_blank" >png viewer</a><br>' +
			'</h1>' +
			'<h1>' +
				'<a href=JavaScript:more(); >more</a><br>' +
				'<a href=JavaScript:more(); >github pages</a><br>' +
				'<a href=JavaScript:more(); >canvas element</a><br>' +
				'<a href=JavaScript:more(); >location.hash</a><br>' +
			'</h1>' +
			'<br>' +
			'<h1>' +

				'<a href=../../../fgx-plane-spotter/r3/dummy-folder/fgx-plane-spotter-r3.html target="_blank">plane spotter</a><br>' +
				'<a href=../../../terrain-viewer/un-flatland/r10/un-flatland-r10-debug.html target="_blank">crossfeed Sim</a><br>' +
			'</h1>' +
			'<hr>' +
			'<h1>' +
				'<a href=../../../fgx-airports/cookbook/display-csv/r2/display-csv-r2.html target="_blank" >future is now</a><br>' +
				'<a href=JavaScript:action(); >call to action</a><br>' +
			'</h1>' +


			'<hr>' +
			'<h1>' +
				'<a href=JavaScript:uf.setCamera(); >&#x2302;</a> ' +
				'<a href=JavaScript:getTile("left"); >&#8678;</a> ' +
				'<a href=JavaScript:getTile("right"); >&#8680;</a> ' +
				'<a href=JavaScript:getTile("up"); >&#8679;</a> ' +
				'<a href=JavaScript:getTile("down"); >&#8681;</a>' +
			'</h1>' +
			'<div id=messages></div>' +
		'';
		window.addEventListener('mouseup', mouseUp, false);

	}

var bullets = new THREE.Object3D();
var colors = ['#ff0000','#00ff00','#0000ff','#ffffff', '#ffff00','#ff00ff','#00ffff',];

	function heart() {

		uf.scene.remove( bullets );
		bullets = new THREE.Object3D();
		bullets.ht = 1;
		mesh = drawSprite( 'Tony Parisi', bullets.ht, colors[ Math.floor(Math.random()*colors.length) ], -20, 180, 900 );
		bullets.add( mesh );

		mesh = drawSprite( 'Damon Hernandez', bullets.ht, colors[ Math.floor(Math.random()*colors.length) ], 300, 70, 800 );
		bullets.add( mesh );

		mesh = drawSprite( 'WebGL & Ken Russell', bullets.ht, colors[ Math.floor(Math.random()*colors.length) ], -0, 100, 20 );
		bullets.add( mesh );
		
		mesh = drawSprite( 'Khronos Group', bullets.ht, colors[ Math.floor(Math.random()*colors.length) ], 200, 210, -300 );
		bullets.add( mesh );

		mesh = drawSprite( ['Host:','VonChurch Consulting','http://vonchurch.com','Nicole Ossey','Leah Thomas'], bullets.ht, colors[ Math.floor(Math.random()*colors.length) ], -200, 400, -300 );
		bullets.add( mesh );

		mesh = drawSprite( ['Any Others?' ], bullets.ht, colors[ Math.floor(Math.random()*colors.length) ], 600, 400, -800 );
		bullets.add( mesh );

		uf.scene.add( bullets );
	}

	function links() {
		uf.scene.remove( bullets );
		bullets = new THREE.Object3D();
		bullets.ht = 1;

		var txt = ['Source code:','http://jaanga.github.io/terrain-viewer/un-flatland']; 
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 320, 0 );
		bullets.add( mesh );

		txt = [ 'Presentation', 'http://jaanga.github.io/events/sf-webgl-2014-03-13' ];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 150, 0 );
		bullets.add( mesh );


		uf.scene.add( bullets );
	}

	function concept() {
		uf.scene.remove( bullets );
		bullets = new THREE.Object3D();
		bullets.ht = 1;

		var txt = ['Backstory on this talk...','My thoughts when coding...']; 
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 3000, 100 );
		bullets.add( mesh );

		var txt = ['1. Follow Isaac Newton\'s footsteps:','Stand on the shoulders of giants',' ', 'Here are some good shoulders']; 
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 2000, 100 );
		bullets.add( mesh );

		txt = [ '2. Follow Mr.doob:', 'Build code for dummies', '', 
			'Remember: not everbody is a programmer',
			'Pilots, architects, teachers and more are learning to code'];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 1000, 100 );
		bullets.add( mesh );

		txt = [ '3. Follow the nice nerdy bartender: ', 'Supply free beer and free code',' ', 'Let people start with no money passing hands...' ];
		mesh = drawSprite( txt, bullets.ht, '#fff', 100, 80, 100 );
		bullets.add( mesh );

		uf.scene.add( bullets );
	}

	function demo(){
		window.location = 'http://jaanga.github.io/terrain-viewer/un-flatland/readme-reader.html';
	}

	function slippyMaps() {
		uf.scene.remove( bullets );
		bullets = new THREE.Object3D();
		bullets.ht = 1;

		var txt = [
			'Good Shoulders for asset organization:',
			'>>Tile Map Service / Slippy Map', '',
			'How to track ~147 & 1/2 billion elevation data points?',
			'How to store 16,384 files of data?', '',
			'For free, yet fast. And dummy doable?'

		]; 
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 300, 500 );
		bullets.add( mesh );



		txt = [ 'Slippy Map / TMS Benefits',
			'The fastest, easiest idea for managing location assets',
			'- real or game',
			'- flatland or globe' ,
			'',
			'In good company: Look who is using it: both Google and OSM ',
			'Tools are there, math is easy, tons of help'

		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 1000, 0 );
		bullets.add( mesh );

		txt = [ 'The Problem', '',
			'You need to be able to:',
			'Catalog huge numbers of objects at varying - at least 20 - levels of detail.',
			'Go to a location and see what objects are there.',
			'Identify an object and see where it is located.',
			'Calculate distance between any objects in a simple linear manner',
			'Jump between lat/lon/alt, theta/phi/radius and XYZ. Any more?',
			'',
			'These asset issues occur in all manner of locations:',
			'On the surfaces of planets and this occurs on protons and neutrons',
			'In real or imaginary scenarios'
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 2000, -500 );
		bullets.add( mesh );

		txt = [ 'The Barriers', '',
			'Server code is out there, but you need a access to your own real-live-costs-real-money server',
			'Catalog huge numbers of objects at varying - at least 20 - levels of detail.',

			'Stuff is out there but it is no longer supported (ie huge amounts of government-aided projects )',
			'Great libraries are out there but you need to be able to write Java and use Eclipse',

			'Very powerful tools exist and you better be an expert in Delaunay triangulation and point clouds',
			'You have all of the above but can\'t afford the intellectual property usage fees or can\'t comply with the license requirements',
			'It\'s difficult, costly and time-consuming. It may also be old-school',
			'>> Hints it\'s old school:',
			'Using LL and UR instead of UL and LR',
			'Putting the words \'web\' and emphasize  \'service\' around TMS.',
			'Talking of XML'
			
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 5000, -500 );
		bullets.add( mesh );

		txt = [
			'Implementation: Tile Map Service / Slippy Map', '',
			'TMS enables database-like queries to pass data between client-side and a static host',
			' - without a database and without server-side code',
			'It\'s a way to manage folders and files so they work like a database', '',
			'It\'s a way of building URLs so they act like database queries ', '',

			'Tiles are a geo-data storage/indexing strategy - more commonly referred to as >>hierarchical binning<<. ', '',

			'The tiles are square bitmap graphics displayed in a grid arrangement to show a map',
			'The current standard is based on 256 × 256 pixel PNG files',
			'Each zoom level is a directory, each column is a subdirectory, and each tile in that column is a file',
			'The filename (URL) format is http://[url template]/zoom/x/y.png',
			'The [URL template] specifies the tile server, and perhaps other parameters which might influence the style.',
			'',
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 7000, -500 );
		bullets.add( mesh );

		txt = [ 'Let\'s look at a demo...'
			
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 8000, -500 );
		bullets.add( mesh );

		uf.scene.add( bullets );
/*
A 'tileset' includes a grid of enough tiles to form a large image.
Generally the idea is not to show all the tiles in a tileset all at once, but only to show the ones needed at the moment
Normally JavaScript routines are used to request fresh tiles from the host. 

There may be multiple zoom levels each with its own tileset.
The zoom parameter is an integer between 0 (zoomed out) and 18 (zoomed in). 18 is normally the maximum, but some tile servers might go beyond that.
Zoom level 0 is one tile that covers whole world
Zoom level 18 requires 68,719,476,736 tiles to cover the world
*/

	}



	function heightmaps() {
		uf.scene.remove( bullets );
		bullets = new THREE.Object3D();
		bullets.ht = 1;

		txt = [ 'Now you have shoulders that give nice bins for your data,',
				' - What 3D data are you going to put in those bins?', '',
				'Good Shoulders Managing and Storing 3D Elevation Data:',
				'>> Heightmaps'
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 300, -500 );
		bullets.add( mesh );

		txt = [ 
			'The Problem',
			'There is a lot of data.',
			'If you need one data point for every tile at zoom level 18 ',
			'- then you need to manage 68,719,476,736 (68 trillion) items of data to cover the world.',
			'Any data format that is not fast, easy is likely to conflict with creating 3D maps.', '',
			'Fun fact: TMS is good for any sort of data, not just maps.' 
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 1000, -500 );
		bullets.add( mesh );

		txt = [ 'The Barriers',
			'Google provides an elevation service. If you are a Maps For business user you are allowed to acquire elevatiomns for 1,000,000 total locations per day.',
			'So it would only take 68,000 days to acquire our data. And that data would be in ASCII JSON format.', '',
			'One standard format is SDTS. See http://mcmcweb.er.usgs.gov/sdts/',
			'Regarding SDTS, the Virtual Terrain Project says: \'it is a truly ugly, awful mess of a format\' ', '',
			'How about raw binary? Could this be the most efficient way.',
			'http://www.ngdc.noaa.gov/cgi-bin/mgg/ff/nph-newform.pl/mgg/topo/customdatacd',
			'This site offers 180 by 360 degree area (21600 rows X 43200 columns = 933,120,000 grid cells), and each data value will occupy 2 bytes. ',
			'The uncompressed data file size will be 1,866,240,000 bytes.',
			'Nearly 2 gigs of data here. Now we only need 73 more files like this to get to our one data point per leve; 18 tile/ ',
			'Oh and actually that tile is 150 meters per sided. We want to get to 30 meter resolition so we need 25 times that data.', '',
			'Even the bimary data source we use - in HGT format - is \'only\' 65GB. ', '',
			'There is no way that you can build a realtime 3D TMS map with 65GB of normal binary data.',
			''
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 3000, -500 );
		bullets.add( mesh );

		txt = [ 'The implementation',
			'Heightmap: ',
			'Wikipedia: A raster image used to store values, such as surface elevation data, for display in 3D computer graphics.', '',
			'A heightmap can be used in ',
			'	* bump mapping to calculate where this 3D data would create shadow in a material',
			'	* displacement mapping to displace the actual geometric position of points over the textured surface,',
			'	* terrain modeling where the heightmap is converted into a 3D mesh.', '',
			'Your shoulders are on the third usage',
			'',
			''
			
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 5000, -500 );
		bullets.add( mesh );

		txt = [ 'Heightmap Benefits',
			'Bitmaps travel fast.',
			'Servers know how to send PNG files really well. ',
			'So do ISPs and carriers.',
			'And rowsers know how to receive thme fast.',
			'All of these services  understand, caching, deleting and transmitting bitmaps',
			'Can do all this and garbage collection at run-time.', '',
			'There\'s a lot of knowledge about bitmmaps - much more than other binary formats',
			'- lots of shoulders you can stand on', '',
			'And, btw, bitmaps are an easy way to compress the s*** ot of data'
			
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 7000, -500 );
		bullets.add( mesh );


		txt = [ 'Let\'s look at a demo...',
			'',
			'BTW',
			'Babylon has a great height map tutorial and buit-in functionality',
			'https://github.com/BabylonJS/Babylon.js/wiki/16-Height-map',
			'',
			'',
			'',
			''
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 8000, -500 );
		bullets.add( mesh );

		uf.scene.add( bullets );

	}
	
	function ferranti() {
		uf.scene.remove( bullets );
		bullets = new THREE.Object3D();
		bullets.ht = 1;

		txt = [ 
			'Now you know what to put in the bins,',
			'Where do you source the data?', '',
			'',
			'Excellent shoulders: Jonathan de Ferranti  ',
			'Probably a character...',
			'',
			'',
			'',
			'',
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 200, -500 );
		bullets.add( mesh );

		txt = [ 
			'The Problem',
			'2D data is easy to get',
			'Search Google for place + lan lon and you got the data.',
			'But no elevation or altitude data',
			'It\'s as if we lived in a 2D world.',
			'',
			'Where\'s the data?  ',
			'Almost everything we know comes from a 2000 Shuttle mission  ',
			'Now a mishmash of out of date stuff and broken links  ',
			'Kind of weird: we know the lat lon of just about everywhere on earth, ',
			' - but not it\'s elevation.  ',
			'We are true flatlanders',
			'',
			'The shoulders: Ferranti\'s site...',
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 2000, -500 );
		bullets.add( mesh );

		txt = [ 'Data procsseing shoulders: osGeo / GDAL',
			'',
			'How do you get the data fron the Binary HGT files into PNG files?',
			'',
			'GDAL: command-line driven. Fast. Not too difficult to learn',
			'Crib sheet in Jaanga Terrain',
			'Fster and more effective than Image Magick',
			'',
			'My GDAL knowledge still at beginner level...',
			'',
			'The shoulders: osGeo/GDAL',
			'',
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 4000, -500 );
		bullets.add( mesh );

		uf.scene.add( bullets );
	}

	function terrain() {
		uf.scene.remove( bullets );
		bullets = new THREE.Object3D();
		bullets.ht = 1;

		txt = [ 'Now you know the basics,',
			'Is there a good example of the process?', '',
			'',
			'Possible shoulders: Jaanga Terrain  ',
			'How about standing on the shoulders of dwarfs?',
			'',
			'Takes Ferranti\'s 65GB of data, over 1,100 files',
			'Brings it down to 2.8 GB of data',
			'Stores the data as if it is TMS level 7 data',
		];

		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 300, -500 );
		bullets.add( mesh );

		txt = [ 'And to interpolate the data',
			'Look at the Jannga Terrain Viewer examples', '',
			'',
			'See PNG viewer of the overview...',
			'',
			'',
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50,2000, -500 );
		bullets.add( mesh );

		uf.scene.add( bullets );
	}

	function more() {
		uf.scene.remove( bullets );
		bullets = new THREE.Object3D();
		bullets.ht = 1;

		txt = [ 'GitHub Pages',
			'Under utilized resource', '',
			'So easy: just publish to branch with title \'gh-pages\'. ',
			'Nice limits: 1 GB per repo. Projects can have as many repos os needed',
			'Publish any type of static data: HMTNL, CSS, JS, images, PDF etc',
			'Use it as a starter Content Delivery Network',
			'',
			'Janang Terrain data: 2.65 GB in 16K files: all on GitHub',
			'',
			'BTW, GitHub has built-in readers for STL, CSV, and geoJSON files',
			'',
			'',
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 300, -500 );
		bullets.add( mesh );

		txt = [ 'Canvas Element',
			'', 
			'Working with raw binary files requires matrix multiplication',
			'- lots of it.',
			'',
			'Working with bitmap files allow you to use the HTML Canvas element',
			'- getImageData and putImageData do the multiplications for you',
			'- painlessly and very fast.',
			'',
			'Canvas is a great shoulder.',
			'',
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 2000, -500 );
		bullets.add( mesh );

		txt = [ 'Location.hash',
			'Easy way to add permalinks', '',
			'Client-side oriented',
			'Real-time updating and clearing',
			'',
			'',
			'',
			'',
		];

		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 4000, -500 );
		bullets.add( mesh );

		uf.scene.add( bullets );
	}

	function action() {
		uf.scene.remove( bullets );
		bullets = new THREE.Object3D();
		bullets.ht = 1;

		txt = [ 'Call to Action',
			'', 
			'Where are the people who like to design in 3D',
			'- using code as their media?',
			'',
			'2D designers: are everywhere',
			'3D programmers: not enough but at least there are some',
			'',
			'Looking for a good online venue for open-ended 3D dicussion',
			'- WebGL Dev: for programmers',
			'- Reddit: no ongoing discussion.',
			'',
			'Please put me in touch with people you know who thing like this...',
			''
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 300, -500 );
		bullets.add( mesh );

		uf.scene.add( bullets );
	}

/*
	function xxx() {
		uf.scene.remove( bullets );
		bullets = new THREE.Object3D();
		bullets.ht = 1;

		txt = [ '',
			'', '',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 1000, -500 );
		bullets.add( mesh );

		uf.scene.add( bullets );
	}
*/

	function updateMenu() {
		uf.drawTerrain();

		var lat = uf.ulLat - 0.5 * (uf.ulLat - uf.lrLat);
		var lon = uf.ulLon - 0.5 * ( uf.ulLon - uf.lrLon)

		var point = uf.getPoint( lat, lon, uf.zoom );
		inpCamAlt.value = uf.camAlt = 500;
		inpCamLat.value = uf.camLat = point.ulTileLat - 0.5;
		inpCamLon.value = uf.camLon = point.ulTileLon;

		inpTarAlt.value = uf.tarAlt = 0;
		inpTarLat.value = uf.tarLat = point.ulTileLat;
		inpTarLon.value = uf.tarLon = point.ulTileLon;

	}

	function updateCameraTarget() {
		uf.camLat = parseFloat( inpCamLat.value);
		uf.camLon = parseFloat( inpCamLon.value );
		uf.camAlt = parseFloat( inpCamAlt.value );

		uf.tarLat = parseFloat( inpTarLat.value );
		uf.tarLon = parseFloat( inpTarLon.value );
		uf.tarAlt = parseFloat( inpTarAlt.value );

		uf.setCamera();
	}

	function updatePlacards() {
		if ( uf.placards && uf.placards.children.length > 0) {
			uf.scene.remove( uf.placards );
			uf.placards.children.length = 0;
		}
		if ( uf.displayPlacards === 0 ) return;

		uf.placards = new THREE.Object3D();

		var pointStart = uf.getPoint( uf.lat, uf.lon, uf.zoom );
		var alt, point, mesh;
		var off = uf.tilesPerSide % 2 > 0 ? -128 : -256;
		var scale = 0.5 * uf.scaleVertical * uf.zoomScales[ uf.zoom ][1];

		var distance = uf.camera.position.distanceTo( uf.controls.target );
		var scalePlacard = 0.0001 * distance;

		for ( var i = 1, iLen = uf.gazetteer.length; i < iLen; i++ ) {
			place = uf.gazetteer[i];
			lat = place[1]; lon = place[2];
			if ( lat < uf.ulLat && lat > uf.lrLat && lon > uf.ulLon && lon < uf.lrLon ) {
				point = uf.getPoint( lat, lon, uf.zoom );
				point.ptX += off + uf.tileSize * ( point.tileX - pointStart.tileX )
				point.ptY += off + uf.tileSize * ( point.tileY - pointStart.tileY );
				alt = getAltitude( lat, lon )
				point.alt = scale * alt;
				mesh = drawObject( point.ptX, 0.5 * point.alt, point.ptY );
				mesh.scale.set( 5, point.alt, 5 );
				uf.placards.add( mesh );

				mesh = drawSprite( place[0] + ' ' + point.alt , scalePlacard, '#fff', point.ptX, 50 + point.alt , point.ptY );
				mesh.material.opacity = 0.5;
				uf.placards.add( mesh );
			}
		}
		uf.scene.add( uf.placards );

	}

	function parsePermalink() {
		var item, index;
		var hashes = location.hash.split('#');
		for (var i = 1, len = hashes.length; i < len; i++) {
			item = hashes[i].split('=');

			index = item[0];
			if ( uf.defaults[ index ] !== undefined ){
				uf.values[ index ] = item;
			}
		}
		uf.startPlace = uf.values.start ? parseInt( uf.values.start[1], 10 ) : uf.defaults.start;
		uf.displayPlacards = uf.values.placards ? parseInt( uf.values.placards[1], 10 ) : uf.defaults.placards;
	}

	function setPermalink() {
		var txt = '';
// in alphabetical order
		if ( uf.displayPlacards !== uf.defaults.placards ) txt += '#placards=' + uf.displayPlacards;
		if ( uf.startPlace !== uf.defaults.start && uf.startPlace !== "" ) txt += '#start=' + uf.startPlace;

		if ( uf.camAlt && uf.camAlt !== uf.defaults.camalt ) txt += '#camalt=' + parseInt( uf.camAlt, 10 );
		if ( uf.camLat && uf.camLat !== uf.defaults.camlat ) txt += '#camlat=' + parseFloat( uf.camLat );
		if ( uf.camLon && uf.camLon !== uf.defaults.camlon ) txt += '#camlon=' + parseFloat( uf.camLon );
		if ( uf.camX && uf.camX !== uf.defaults.camx && uf.camLon === uf.defaults.camlon ) txt += '#camx=' + parseInt( uf.camX, 10 );
		if ( uf.camY && uf.camY !== uf.defaults.camy && uf.camAlt === uf.defaults.camalt ) txt += '#camy=' + parseInt( uf.camY, 10 );
		if ( uf.camZ && uf.camZ !== uf.defaults.camz && uf.camLat === uf.defaults.camlat ) txt += '#camz=' + parseInt( uf.camZ, 10 );
		if ( uf.lat && uf.lat !== uf.defaults.lat ) txt += '#lat=' + uf.lat;
		if ( uf.lon && uf.lon !== uf.defaults.lon ) txt += '#lon=' + uf.lon;
		if ( uf.mapType !== uf.defaults.map ) txt += '#map=' + uf.mapType;
		if ( uf.scaleVertical !== uf.defaults.scale ) txt += '#scale=' + uf.scaleVertical;
		if ( uf.tilesPerSide !== uf.defaults.tiles ) txt += '#tiles=' + uf.tilesPerSide;
		if ( uf.vertsPerTile !== uf.defaults.verts ) txt += '#verts=' + uf.vertsPerTile;
		if ( uf.tarAlt && uf.tarAlt !== uf.defaults.taralt ) txt += '#taralt=' + parseInt( uf.tarAlt, 10 );
		if ( uf.tarLat && uf.tarLat !== uf.defaults.tarlat ) txt += '#tarlat=' + parseFloat( uf.tarLat );
		if ( uf.tarLon && uf.tarLon !== uf.defaults.tarlon ) txt += '#tarlon=' + parseFloat( uf.tarLon );
		if ( uf.tarX && uf.tarX !== uf.defaults.tarx && uf.tarLon === uf.defaults.tarlon ) txt += '#tarx=' + parseInt( uf.tarX, 10 );
		if ( uf.tarY && uf.tarY !== uf.defaults.tary && uf.tarAlt === uf.defaults.taralt ) txt += '#tary=' + parseInt( uf.tarY, 10 );
		if ( uf.tarZ && uf.tarZ !== uf.defaults.tarz && uf.tarLat === uf.defaults.tarlat ) txt += '#tarz=' + parseInt( uf.tarZ, 10 );
		if ( uf.zoom && uf.zoom !== uf.defaults.zoom) txt += '#zoom=' + uf.zoom;

		window.location.hash = txt;
	}

	function clearPermalink() {
		window.history.pushState( '', '', window.location.pathname);
	}

	function viewPNG() {
		window.location = 'http://jaanga.github.io/terrain-viewer/png-viewer/r3/png-viewer-r3.html#' +
			lon2tile( uf.lon, 7 ) + '#' + lat2tile( uf.lat, 7 );
	}

	function getTile( direction ) {
		var max = Math.pow( 2, uf.zoom) - 1;
		var jump = uf.tilesPerSide / 2;
		var point = uf.getPoint( uf.lat, uf.lon, uf.zoom );
		if ( direction === 'left' ) {
			point.tileX -= jump;
			if ( point.tileX < 0 ) point.tileX = max;
		} else if ( direction === 'right' ) {
			point.tileX += jump;
			if ( point.tileX > max ) point.tileX = 0;
		} else if ( direction === 'up' ) {
			point.tileY -= jump;
			if ( point.tileY < 0 ) point.tileY = max;
		} else if ( direction === 'down' ) {
			point.tileY += jump + 1;
			if ( point.tileY > max ) point.tileY = 0;
		}
		uf.lon = uf.tile2lon( point.tileX, uf.zoom);
		uf.lat = uf.tile2lat( point.tileY, uf.zoom);

		selPlace.selectedIndex = 0;
		uf.drawTerrain();
	}

	function getAltitude( lat, lon ) {
		var point7 = uf.getPoint( lat, lon, 7);
		var name = point7.tileX + '/' + point7.tileY;
if ( !uf.images[name] ) { console.log( point7 ); return 0; }
		var dim, img = uf.images[name].img;
		canvasAlt.height = canvasAlt.width = dim = img.width;
		contextAlt.drawImage( img, 0, 0 );
		var xStart = dim * Math.abs( point7.ulTileLon - lon ) /  point7.deltaLon;
		var yStart = dim * ( point7.ulTileLat - lat) /  point7.deltaLat;
		var spot = contextAlt.getImageData( xStart, yStart, 1, 1 ).data;
		return spot[0];
	}

	function drawObject( x, y, z ) {
		var geometry = new THREE.CubeGeometry( 1, 1, 1 );
		var material = new THREE.MeshNormalMaterial( { opacity: 0.5, transparent: true });
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( x, y, z) ;
		return mesh;
	}

	function drawSprite( text, scale, color, x, y, z) {
		texture = canvasText( text, color );
		var spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false, opacity: 1 } );
		var sprite = new THREE.Sprite( spriteMaterial );
		sprite.position.set( x, y, z ) ;
		sprite.scale.set( scale * texture.image.width, scale * texture.image.height );
		return sprite;
	}

	function drawLine( vertices, color, linewidth) {
		function convert( element ) {
			return v( element[0], element[1], element[2] );
		}

		var geometry = new THREE.Geometry();
		geometry.vertices = vertices.map( convert );
		var material = new THREE.LineBasicMaterial( { color: color, linewidth: linewidth } );
		var line = new THREE.Line( geometry, material );
		return line;
	}

	function xxxcanvasText( text, color ) {
		var canvas = document.createElement( 'canvas' );
		var context = canvas.getContext( '2d' );

		context.font = '18px sans-serif';
		var width = context.measureText( text );

		canvas.width = ( width.width + 10 ) ; // 480
		canvas.height = 20;

		context.fillStyle = color;
		context.fillRect( 0, 0, canvas.width, canvas.height);

		context.lineWidth = 1 ;
		context.strokeStyle = '#000';
		context.strokeRect( 0, 0, canvas.width, canvas.height);

		context.fillStyle = '#000' ;
		context.font = '18px sans-serif';
		context.fillText( text, 5, 17 );

		var texture = new THREE.Texture( canvas );
		texture.needsUpdate = true;
		return texture;
	}

	function canvasText( textArray, color ) {
		var canvas = document.createElement( 'canvas' );
		var context = canvas.getContext( '2d' );

		if ( typeof textArray === 'string' ) textArray = [ textArray ];
		context.font = '48px sans-serif';
		var width = 0;
		for (var i = 0, len = textArray.length; i < len; i++) {
			width = context.measureText( textArray[i] ).width > width ? context.measureText( textArray[i] ).width : width;
		}

		canvas.width = width + 20; // 480
		canvas.height = textArray.length * 60;

		context.fillStyle = color;
		context.fillRect( 0, 0, canvas.width, canvas.height);

		context.lineWidth = 1 ;
		context.strokeStyle = '#000';
		context.strokeRect( 0, 0, canvas.width, canvas.height);

		context.fillStyle = '#000' ;
		context.font = '48px sans-serif';

		for (var i = 0, len = textArray.length; i < len; i++) {
			context.fillText( textArray[i], 10, 48  + i * 60 );
		}

		var texture = new THREE.Texture( canvas );
		texture.needsUpdate = true;
		return texture;
	}

// events
	function mouseUp() {
		window.removeEventListener('mousemove', divMove, true);
	}

	function mouseMove( event ){
		if ( event.target.id === 'movable' ) {
			event.preventDefault();

			offsetX = event.clientX - event.target.offsetLeft;
			offsetY = event.clientY - event.target.offsetTop;
			window.addEventListener('mousemove', divMove, true);
		}
	}

	function divMove( event ){
		event.target.style.left = ( event.clientX - offsetX ) + 'px';
		event.target.style.top = ( event.clientY - offsetY ) + 'px';
	}

	function requestFile( fname ) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.crossOrigin = "Anonymous";
		xmlHttp.open( 'GET', fname, false );
		xmlHttp.send( null );
		return xmlHttp.responseText;
	}

// custom animate
// adds stata * placard support
	function animate() {
		requestAnimationFrame( animate );
		uf.controls.update();
		uf.renderer.render( uf.scene, uf.camera );
		stats.update();
		if ( uf.update ) {
			updatePlacards();
//			spnAlt.innerHTML = 'Alt: ' + getAltitude( uf.lat, uf.lon );
			uf.update = false;
		}
	}