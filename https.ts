//server module
import { serve } from "https://deno.land/std@0.97.0/http/server.ts";

const server = serve({port:3000});
console.log("server is run");

for await(const req of server){

    console.log(req);
    req.respond({body:"Halo"});
}