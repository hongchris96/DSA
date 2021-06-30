var message:string = "First TypeScript code ever"
console.log(message)

// tsc file.ts to compile into file.js
// node file.js

// tsc file1.ts, file2.ts, file3.ts to compile multiple at once

// --help
// Displays the help manual

// --module
// Load external modules

// --target
// Set the target ECMA version

// --declaration
// Generates an additional .d.ts file

// --removeComments
// Removes all comments from the output file

// --out
// Compile multiple files into a single output file

// --sourcemap
// Generate a sourcemap (.map) files

// --module noImplicitAny
// Disallows the compiler from inferring the any type

// --watch
// Watch for file changes and recompile them on the fly

class Yelling {
  yell():void {
    console.log("HELLO WARUDO")
  }
}

var firstObj = new Yelling;
firstObj.yell();
