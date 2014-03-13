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
			'bottom: 0; left: 0; height: 350px; margin: auto; position: absolute; right: 0; top: 0; width: 500px; zIndex:10; ';
		help.innerHTML =
			'<div onclick=help.style.display="none"; >' +
				'<h3>San Francisco WebGL Meet-Up 2014-03-13</h1>' +
				'<h1>Concept:<br>Eat your own dog food</h1>' +
				'<ul>' +
					'<li>Presentation built using the app</li>' +
					'<li>3D talk in 3D world</li>' +
					'<li>Hosted on GitHub</li>' +
					'<li>Many aspects suck</li>' +
					'<li>Release early. Release often</li>' +

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

		var data = requestFile( '../../../../projects/terrain-plus/gazetteer/places-2000.csv' );
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
		uf.info.style.cssText = ' background-color: #ccc; height:' + (window.innerHeight-100) + 'px; left: 10px; opacity: 0.8; overflow: scroll; top: 10px; ';
//		uf.info.addEventListener( 'mousedown', mouseMove, false );
		uf.info.innerHTML = '<div onclick=uf.info.style.display="none";stats.domElement.style.display="none"; >[x]</div>' +
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
				'<a href=JavaScript:demo(); >demo</a><br>' +
			'</h1>' +
			'<h1>' +
				'<a href=JavaScript:slippyMaps(); >Slippy Maps 1</a><br>' +
				'<a href=JavaScript:slippyMap2(); >Slippy Maps 2</a><br>' +
				'- <a href=../tms/tms.html target="_blank" >tms demo</a><br>' +
				'- <a href=../good-company/good-company.html target="_blank" >good company</a><br>' +
			'</h1>' +

			'<h1>' +
				'<a href=JavaScript:heightmaps(); >heightmaps</a><br>' +
				'- <a href=../parisi-land/parisi-land.html target="_blank" >Parisi-land</a><br>' +
			'</h1>' +
			'<h1>' +
				'<a href=JavaScript:ferranti(); >J de Ferranti</a><br>' +
				'- <a href=http://www.viewfinderpanoramas.org/dem3.html target="_blank" >Viewfinder Pano</a><br>' +
				'- <a href=http://www.osgeo.org/home target="_blank" >osGeo / GDAL</a><br>' +
			'</h1>' +
			'<h1>' +
				'<a href=JavaScript:terrain(); >Jaanga Terrain</a><br>' +
				'- <a href=http://jaanga.github.io/terrain/readme-reader.html target="_blank" >Terrain Read Me</a><br>' +
				'- <a href=https://github.com/jaanga/terrain/ target="_blank" >Terrain GitHub</a><br>' +
				'- <a href=http://jaanga.github.io/terrain-viewer/png-viewer/r3/png-viewer-r3.html target="_blank" >PNG Viewer</a><br>' +
			'</h1>' +
			'<h1>' +
				'<a href=JavaScript:terrain(); >GitHib Pages</a><br>' +
				'<a href=JavaScript:terrain(); >Canvas Element</a><br>' +
				'<a href=JavaScript:terrain(); >location.hash</a><br>' +
			'</h1>' +
			'<h1>' +
				'<a href=JavaScript:terrain(); >More</a><br>' +
				'<a href=JavaScript:terrain(); >Crossfeed</a><br>' +
				'<a href=JavaScript:terrain(); >Crossfeed Sim</a><br>' +
				'<a href=JavaScript:terrain(); >location.hash</a><br>' +
			'</h1>' +
			'<hr>' +
			'<h1>' +
				'<a href=JavaScript:terrain(); >Future Now</a><br>' +
				'<a href=JavaScript:terrain(); >Call to Action</a><br>' +
			'</h1>' +
/*
			'<p>' +
				'Zoom: &nbsp;  &nbsp;<input id=setZoom title="0 to 18: OK"type=number min=0 max=18 step=1 ><br>' +
				'Scale:  &nbsp; <input id=setScale type=number min=1 max=50 ><br>' +
				'Overlay: <select id=selMapType title="Select the 2D overlay" ><select>' +
			'</p>' +
			'<hr>' +
			'<p>' +
				'Tiles/side: &nbsp;<input id=setTiles title="2 to 8: normal. 16+: pushing" type=number min=1 max=32 ><br>' +
				'Vertices/tile: <input id=setVerts title="16 to 32: OK. 64+: pushing" type=number min=16 max=128 ><br>' +
				'<hr>' +
				'Location<br>' +
				'Lat:<input id=inpLat type="text" size=4 />' +
				'Lon:<input id=inpLon type="text" size=4 /> ' +
				'<button id=butGo title="Click Go to update location longitude and latitude" >Go</button><br>' +
				'<select id=selPlace ></select> ' +
				'<span id=spnAlt></span>' +
			'</p>' +
			'<hr>' +
			'<p>' +
				'Camera<br>' +
				'Lat:<input id=inpCamLat type="text" size=4 />' +
				'Lon:<input id=inpCamLon type="text" size=4 />' +
				'Alt:<input id=inpCamAlt type="text" size=3 />' +
				'</br>' +
				'Camera Target<br>' +
				'Lat:<input id=inpTarLat type="text" size=4 />' +
				'Lon:<input id=inpTarLon type="text" size=4 />' +
				'Alt:<input id=inpTarAlt type="text" size=3 /><br>' +
				'<button id=butCam title="Click Go to update camera and target longitude and latitude" >Go</button>' +
			'</p>' +
			'<hr>' +
			'<p>' +
				'<input id=chkPlacards type="checkbox" >Display Placards' +
			'</p>' +
			'<p>' +
				'<a href=JavaScript:setPermalink(); >Permalink</a> ' +
				'<a href=JavaScript:clearPermalink(); >Clear Permalink</a><br>' +
//				'<a href=JavaScript:cameraToPermalink(); >Link to View</a> ' +
//				'<a href=JavaScript:uf.setCamera(); style:float:right; >Reset Camera</a>' +
			'</p>' +
			'<p>' +
				'<a href=JavaScript:viewPNG(); >View PNG</a></p>' +
			'</p>' +
*/
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

/*
		setZoom.value = uf.zoom;
		setZoom.onchange = function() { uf.zoom = this.value; uf.drawTerrain(); };

		setScale.value = uf.scaleVertical;
		setScale.onchange = function() { uf.scaleVertical = this.value; uf.drawTerrain(); };

		for ( var option, i = 0, len = uf.mapTypes.length; i < len; i++ ) {
			selMapType.appendChild( option = document.createElement( 'option' ) );
			selMapType.children[i].text = uf.mapTypes[i][0];
		}
		selMapType.selectedIndex = uf.mapType;
		selMapType.onchange = function() { uf.mapType = this.selectedIndex; uf.drawTerrain(); };

		setTiles.value = uf.tilesPerSide;
		setTiles.onchange = function() { uf.tilesPerSide = this.value; uf.drawTerrain(); };

		setVerts.value = uf.vertsPerTile;
		setVerts.onchange = function() { uf.vertsPerTile = this.value; uf.drawTerrain(); };

		for ( var i = 1, length = lines.length; i < length; i++ ) {
			selPlace.appendChild( document.createElement( 'option' ) );
			selPlace.children[ i - 1].text = uf.gazetteer[i - 1][0];
		}

		inpLat.value = uf.lat;
		inpLon.value = uf.lon;

		butGo.onclick = function() { 
			selPlace.selectedIndex = uf.startPlace = 0;
			uf.setCamera();
			uf.lat = parseFloat( inpLat.value);
			uf.lon = parseFloat( inpLon.value);
			updateMenu(); 
		};

		selPlace.selectedIndex = uf.startPlace;
		selPlace.onchange = function() {
			uf.startPlace = this.selectedIndex;
			uf.setCamera();
			inpLat.value = uf.lat = uf.gazetteer[ uf.startPlace ][1];
			inpLon.value = uf.lon = uf.gazetteer[ uf.startPlace ][2];
			updateMenu(); 
		};

		inpCamAlt.value = uf.camAlt;
		inpCamLat.value = uf.camLat;
		inpCamLon.value = uf.camLon;

		inpTarAlt.value = uf.tarAlt;
		inpTarLat.value = uf.tarLat;
		inpTarLon.value = uf.tarLon;

		butCam.onclick = function() { updateCameraTarget() };
		chkPlacards.checked = uf.displayPlacards > 0 ? true : false;
		chkPlacards.onchange = function() { uf.displayPlacards = chkPlacards.checked ? 1 : 0; uf.update = true; };
*/

	}

var bullets = new THREE.Object3D();

	function heart() {

		uf.scene.remove( bullets );
		bullets = new THREE.Object3D();
		bullets.ht = 1;
		mesh = drawSprite( 'Tony Parisi', bullets.ht, '#fff', -20, 180, 900 );
		bullets.add( mesh );

		mesh = drawSprite( 'Damon Hernandez', bullets.ht, '#fff', 300, 70, 800 );
		bullets.add( mesh );

		mesh = drawSprite( 'Web GL & Ken Russell', bullets.ht, '#fff', -0, 100, 20 );
		bullets.add( mesh );
		
		mesh = drawSprite( 'Khronos Group', bullets.ht, '#fff', 200, 210, -300 );
		bullets.add( mesh );

		mesh = drawSprite( ['Host:','VonChurch Consulting','http://vonchurch.com','Nicole Ossey','Leah Thomas'], bullets.ht, '#fff', -200, 400, -300 );
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

		var txt = ['Follow Isaac Newton\'s footsteps:','Stand on the shoulders of giants']; 
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 400, 100 );
		bullets.add( mesh );

		txt = [ 'Follow Mr.doob:', 'Build code for dummies' ];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 250, 100 );
		bullets.add( mesh );

		txt = [ 'Follow the nice nerdy bartender: ', 'Supply free beer and free code' ];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 80, 100 );
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

		var txt = ['Asset Organization:','Tile Map Service / Slippy Map']; 
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 400, 500 );
		bullets.add( mesh );

		txt = [ 'Benefits',
			'The fastest, easiest idea for managing location assets',
			'- real or game',
			'- flatland or globe' ,
			'',
			'In good company: Look who is using it: both Google and OSM ',
			'Tools are there, math is easy, tons of help'

		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 250, 0 );
		bullets.add( mesh );

		txt = [ 'Need to be able to:',
			'catalog very huge numbers of ojects at varying levels - at least twenty - of detail.',

			'Go to a location and see what objects are there.',
			'Identify and object and see where it is located.',
			'Calculate distance bewteen any objects in a simple liner manner',
			'Jump between lat/lon/alt, theta/phi/radius and XYZ. Any more?',
			'',
			'These asset issues occur in all manner of way:',
			'On the surfaces of planets and this occurs on protons and neutrons',
			'In real or imaginary scenarios'
		];
		mesh = drawSprite( txt, bullets.ht, '#fff', 50, 80, -500 );
		bullets.add( mesh );

		uf.scene.add( bullets );
	}


	function slippyMap2() {

/*

### What exists are Barriers

Server code is out there, but you need a access to your owm real-live-costs-real-money server
Stuff is out there but you need an API key
Stuff is out there but it is no longer supported (ie huge amounts of government-aided projects )
Great libraries are out there but you need to be able to write Java and use Eclipse
Very powerful tools exist and you better be an expert in Delaunay triangulation and point couds
You have all of the above but can't afford the intellectual property usage fees or can't comply with the license reuirements
It's difficult, costly and time-consuming. It may also be old-school

### Wanted
You are one little dude and want something that you can be able to play with within, say 45 minutes.
It's free and works in your browser now.


*/

}

	function slippyImplement() {
/*
Implementation: Tile Map Service / Slippy Map
### X and Y Details

*/

	}

	function heightmap() {

	}
	
	function ferranti() {

	}


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