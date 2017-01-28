# ChessClub

## by Ryan Mathisen 1/27/17

# Description

_This project is an exercise implementing Firebase and AngularFire2 with core Angular concepts from last week. This application is a fake website for a Portland Chess Club, featuring full member CRUD functionality for admins. At this time there is no user authentication._

**A seed.json is supplied with this project if you would like to import it to your own firebase for ease of use.**

## Requirements
This project requires:
  * npm
  * bower
  * Typescript
  * Angular2

## Installation
  * Clone this repository to a location on your computer
  * Add a ~/src/app/api-keys.ts file with the following code (adding your api key info from firebase):
   * ```export var masterFirebaseConfig = {
    apiKey: "YOUR API KEY HERE",
    authDomain: "YOUR AUTHDOMAIN HERE",
    databaseURL: "YOUR DATABASE URL HERE",
    storageBucket: "YOUR STORAGE BUCKET HERE",
    messagingSenderId: "YOUR MESSAGING SENDER ID"
    };```
  * Navigate to the repo location using your console/terminal and run the following commands:
    * npm install
    * bower install
    * ng serve
  * Then navigate to localhost:4200 in your browser and enjoy!

## License
Copyright (c) 2016 Ryan Mathisen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
