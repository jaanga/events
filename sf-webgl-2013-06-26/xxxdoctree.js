	
	var DELIMITER = '/';
	
	var nameCategoryMap = {};
	
	html += '<div id="accordion">';
	for ( var section in list ) {
		html += '<h2>' + section + '</h2>';
		html += '<ul>';
		for ( var category in list[ section ] ) {
			html += '<h3>' + category + '</h3>';
			html += '<ul>';
			for ( var i = 0; i < list[ section ][ category ].length; i ++ ) {
				var page = list[ section ][ category ][ i ];
				html += '<li><a href="javascript:goTo(\'' + section + '\', \'' + category + '\', \'' + page[ 0 ] + '\')">' + page[ 0 ] + '</a></li>';
				nameCategoryMap[page[0]] = {
					section: section,
					category: category,
					name: page[0]
				};
			}
			html += '</ul>';
		}
		html += '</ul>';
	}

	panel.innerHTML += '</div>' + html;
	
	function encodeUrl( path ) {
		return path.replace(/\ \/\ /g, '.').replace(/\ /g, '_');
	}

	function decodeUrl( path ) {
		return path.replace(/_/g, ' ').replace(/\./g, ' / ');
	}

	// Page loading
	function goTo( section, category, name ) {
		// Fully resolve links that only provide a name
		if(arguments.length == 1) {
			var location = nameCategoryMap[section];
			section = location.section;
			category = location.category;
			name = location.name;
		}
		// var title = 'three.js - documentation - ' + section + ' - ' + category + ' - ' + name;
		// var title = category + '-' + name;
		var title = name + '-' + category + '-' + section + '-' + appName;
		var url = encodeUrl(section) + DELIMITER + encodeUrl( category ) + DELIMITER + encodeUrl(name);

		window.location.hash = url;
		window.document.title = title;

		viewer.src = pages[ section ][ category ][ name ] + '.html';
	}

	function goToHash() {
		var hash = window.location.hash.substring( 1 ).split(DELIMITER);
		goTo( decodeUrl(hash[0]), decodeUrl(hash[1]), decodeUrl(hash[2]) );
	}

	window.addEventListener( 'hashchange', goToHash, false );

	if ( window.location.hash.length > 0 ) goToHash();
