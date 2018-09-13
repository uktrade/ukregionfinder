#UK Region Finder

This is a simple micrososervice that takes a postcode and returns the DIT Region associated with that postcode. 
It's basically just a hash table over HTTP, but that means it can be really small and uncomplicated (for now)

Prerequisites: node - should work with any version from 0.6 up.

To start: `npm start`
To test: `npm test`

There are no dependencies to load. 

Note that the table we use only includes the first part of the postcode (postcode geekery - this part is called the _outward_ code. The bit after the space is called the _inward_ code). This means that it currently can't indicate which county a postcode is in because some outward postcodes are vast. SY1 for instance covers five counties and two countries. See the roadmap below.

Roadmap

0. Secure access
1. Support counties
2. Support constituencies
3. Possibly support LEPs

These require the use of a much bigger data set, which means this might have to stop being quite so simple

Jim
