//reading file
// const decoder = new TextDecoder('utf-8');

// const data = await Deno.readFile('readme.txt')

// console.log(decoder.decode(data));

const data = await Deno.readTextFile('readme.txt');
console.log(data);

//writting file
// const encoder = new TextEncoder();

// const text = encoder.encode('hello again, rhamad');

// await Deno.writeFile('readme.txt', text);

// //renaming and removing files
// await Deno.rename('readme.txt', 'deleteme.txt');
// await Deno.remove('deleteme.txt');