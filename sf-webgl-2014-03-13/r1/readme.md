SF WebGL 2014-03-13
===================


<iframe src="http://jaanga.github.io/terrain-viewer/un-flatland/r9/un-flatland-r9-embed.html#camalt=500#camlat=-20.2167#camlon=-70.3#lat=-20.2167#lon=-70.15#scale=9#tiles=10#verts=24#taralt=2#tarlat=-20.2267#tarlon=-70.15#zoom=14" width=100% height=600px class='overview' >
There is an `iframe` here. It is not visible when viewed on github.com/fgx. To view, please go to fgx.github.io. See 'Project Links' just below.
</iframe>


## Slide

SF WebGL 2014-03-13

[SF WebGL 2014-03-13]( http://jaanga.github.io/events/sf-webgl-2014-03-13/latest/index.html )

## <a name=heart></a>Heart

* Tony Parisi
* Damon
* Khronos Group
* Web GL / Ken Russell
* Dogpatch host

## Links

Code  
* http://jaanga.gitub.io/terrain

Presentation  
* http://jaanga.gitub.io/events/sf-webgle-2014-03-13

## Demo #1

* Basic
* Embed
* Gallery
* Compare with September

### This is a start

Compare with September versions


## Concept

### Stand on shoulders of giants
- fast and tiny

#### Notes
Newton said 'I am standing on the shoulder's of giants'.

He was very smart. You should we should - all follow in his footsteps.

Just make sure your feet are clean so you don't dirty the shoulders.  

This talk is about helping you find good shoulders to stand on.

### Code for dummies  

- For pilots, architects
- Not aimed for programmers

Immediate effects
- No jQuery or node - which are tools for programmers
- Operates entirely client side. Nothing happens server side. Nothing happens 'locally.
- All in the browser and its cache

- No compiling
- There's no console for finding beauty bugs bugs or elgance bottlenecks
- You just have to reun the darn app a thound times unti things start to to look right

#### Notes
The first set is the shoulder's of Mr.doob. His shoulders will be mentioned more than once.

	The aim of the project is to create a lightweight 3D library with a very low level of complexity — in other words, for dummies. 

If nothing, the source code for this presentation is a descendent of the code Mr.doob uses Three.js documentation


The essence is that a dummy is someone who is not a pogrammer.

Maybe you are a pilot, or contractor or mechanical engineer. A person with excellent skills in their domain, but limited abilities to program.

I see this time and time again. Look at the ource code then look at the examples. The source code written for programmers. The examples for end users

Both in JavaScript. Both parallel in objectives. But two very different styles of writing. 
- The code is objectified, closured, gulped, hatever
- The examples old school function calls. =, if, for/to are the only things you need to know

In my code there is not even any HTML or CSS. Both are handled via JavaScript and the Document Object Model( DOM )


</div>

See also

I am a designer
theoarmour.github.io

### Free both ways

- Of course open source
- No money need pass hands to do sutff
no hosting costs

#### Speaker notes

Goal: that a disadvantaged young person in remote Africa or China may build upon these tools as easiliy as anybody else

Therefore the must be be no charges anywhere. Every aspec must be free

This rules out server side apps. Demmand all client side.

No AWS, Azure, Rackspace. No PHP, Python or PERL.

Static file hosting is good.

Flickr, Imgur, jsFiddle,

Dropbox: no

GitHub is your friend.

Use GitHub pages as your Content Delivery Network

* Learned from Mr Doob





## Asset Organization: Tile Map Service / Slippy Map

### Benefits
The best idea for managing location assets
- real or game
- flatland or globe

In good company: Look who is using it: both Google and OSM  
Tons of help 

No database needed. REST-enabled   
Covers huge areas  
Math is easy - wiki link
Tools are there  
Works equally well as flatland or 3D Globe
Use it for games, for tracking assets  


### Issues
Need to be able to catalog very huge numbers of ojects at varying levels - at least twenty - of detail.

Need to be ble to go to a location and see what objects are there.
Need to be able to identify and object and see where it is located.
Need to be able to calculate distance bewteen any objects in a simple liner manner

Need to be able to go back and forth between lat/lon/alt, theta/phi/radius and XYZ. Any more?
This occurs on the surfaces of planets and this occurs on protons and neutrons
This issue occurs in real or imaginary scenarios



### Barriers

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


### Implementation: Tile Map Service / Slippy Map
TMS enables database-like queries to pass data between client-side and a static host without a database and without server-side code

It's a way to manage folders and files so they work like a database
It's a way of building URIs so they act like database queries 

Tiles are a geo-data storage/indexing strategy - more commonly referred to as hierarchical binning. 

The tiles are square bitmap graphics displayed in a grid arrangement to show a map
The current standard is based on 256 × 256 pixel PNG files
Each zoom level is a directory, each column is a subdirectory, and each tile in that column is a file
The filename (url) format is http://[url template]/zoom/x/y.png
The [url template] specifies the tile server, and perhaps other parameters which might influence the style.

A 'tileset' includes a grid of enough tiles to form a large image.
Generally the idea is not to show all the tiles in a tileset all at once, but only to show the ones needed at the moment
Normally JavaScript routines are used to request fresh tiles from the host. 

There may be multiple zoom levels each with its own tileset.
The zoom parameter is an integer between 0 (zoomed out) and 18 (zoomed in). 18 is normally the maximum, but some tile servers might go beyond that.
Zoom level 0 is one tile that covers whole world
Zoom level 18 requires 68,719,476,736 tiles to cover the world


### X and Y Details
X goes from 0 (left edge is 180 °W) to 2^zoom − 1 (right edge is 180 °E)
Y goes from 0 (top edge is 85.0511 °N) to 2^zoom − 1 (bottom edge is 85.0511 °S) in a Mercator projection
For the curious, the num 85.0511 is the result of arctan(sinh(π)). By using this bound, the entire map becomes a (very large) square. 
There are issues with the projection. See the [Osmarender bug]( http://wiki.openstreetmap.org/wiki/Osmarender_bug ).
Zoom in: multiply tile numbers by two
Zoom out: dvide tile number by two.

### Slippy Map
Slippy Map is, in general, a term referring to modern web maps which let you zoom and pan around (the map slips around when you drag the mouse).

The slippy map is an Ajax component. 
JavaScript runs in the browser, which dynamically requests maps from a server in the background (without reloading the whole HTML page) to give a smooth slippy zoomy map browsing experience. T

### Demos

zoom demo
show terrain dirs on GitHub/locally
major users demo

#### Warnings
Tile Map Service / Slippy Map

http://en.wikipedia.org/wiki/Tile_Map_Service

* Developed by OSGEO
* a URI structure which attempts to fulfill REST principles

The people I tend to talk to are are programmers and are server-side people.
They don't understand the use of TMS to access static files or they have never heard of such a use.
So I have no idea if my use to store assets is typical or not 
 

Not same as 
http://en.wikipedia.org/wiki/Web_Map_Service
http://en.wikipedia.org/wiki/Web_Map_Tile_Service

- Server-based
- Java / XML 


Difference
TMS uses UL/LR
WMS uses LL/UR

## 3D Elevation Data: Heightmaps are your friends

### The Problem

There is a lot of data
If you need one data point for every tile at zoom level 18 then that requires 68,719,476,736 (68 trillion) items of data to cover the world.

Any data format that is not fast, easy is likely to conflict with creating 3D maps.

Google provides an elevation service. If you are a Maps For buiness user you are allowed to acquire elevatiomns for 1,000,000 total locations per day.
So it would only take 68,000 days to acquire our data. And that data would be in ASCII JSON format.

One standard format is SDTS. See http://mcmcweb.er.usgs.gov/sdts/
Regarding SDTS, the Virtual Terrain Project says: 'it is a truly ugly, awful mess of a format' 

How about raw binary? This could be the most efficuent way.
http://www.ngdc.noaa.gov/cgi-bin/mgg/ff/nph-newform.pl/mgg/topo/customdatacd
This site offers 180 by 360 degree area (21600 rows X 43200 columns = 933,120,000 grid cells), and each data value will occupy 2 bytes. 
The uncompressed data file size will be 1,866,240,000 bytes.
Nearly 2 gigs of data here. Now we only need 73 more files like this to get to our one data point per leve; 18 tile/ 
Oh and actually that tile is 150 meters per sided. We want to get to 30 meter resolition so we need 25 times that data.

The data source we use is 'only' 65GB. 

There is no way that you can build a realtime TMS map with 65GB of data.


#### The implementation
Heightmap: 
A raster image used to store values, such as surface elevation data, for display in 3D computer graphics.

A heightmap can be used in 
	* bump mapping to calculate where this 3D data would create shadow in a material
	* displacement mapping to displace the actual geometric position of points over the textured surface,
	* terrain modeling where the heightmap is converted into a 3D mesh.

We like the third usage


### Benefits

Bitmaps travel fast.
Servers know how to send PNG files really well. So do ISPs and carriers.
So do browesers.
They understand, caching, deleting and transmitting
Can do al this and garbade collection at run-time.

There's a lot of knowledge about bitmmaps
- shouldes we can stand on

Whereas with DEM and SDTS we are standing on the shoulders of midgets

### Demos
* tonyparisi land heightmap demo
Edit the Y for fla
change the scale for globes

### Notes
Babylon has a great height map tutorial and buit-in functionality

https://github.com/BabylonJS/Babylon.js/wiki/16-Height-map


## de Ferranti s your friend
The 2D data is easy to get
Google place + lan lon and  you got it. But no elevation or altitude data
It's as if we lived in a 2D world.

Where's the data?  
2000 Shuttle mission  
mishmash of out of data stuff and broken links  
Kind of weird: we know the lat lon of just about everywhere on earth, but not it's elevation.  
We are true flatlanders  
Savior Jonathan de Ferranti  
Probably a character  

## GDAL/OSGEO is your friend  
Look at PNG viewer
Currently source of many errors
At the start of the learning curve ~ 2nd pass may fix many issues


## GitHub is your friend

Seven - with 16,000 files - is the magic level  
Three gigs of data means three repos  
Forking is easy - no need to download - just a file or two for testing
Planning on making CORS files available on Bluehost server - if anybody wants just holler
 
* learned from Mr.doob

## Canvas is your friend

getImageData and putImageData are amazing

## Permalinks

Location.hash is your friend

client-side only
Mey be edited withut reloading the page

## Very Rev 0.5

Second pass theough de Ferranti/ GDAL should fix much

## Apps  
Crossfeed  
geoJSON  
Sky writing  



## <a name=future ></a>Future: Buffer Geometry

What you see is just the start  

## Call to Action

* Where are the 3D client-sie coding buddies?
* Everybody out there is server-based or a 2D flatlander
* Should there be a Google Groups


















