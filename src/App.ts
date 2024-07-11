import * as ChildProcess from "child_process";
import * as Path from "path";
import Express from "express";

(async function() {
    let pathA: string = Path.join(__dirname, "App.tsx");
    let pathB: string = Path.join(__dirname);
    let buffer: Buffer = ChildProcess.execSync(`bun build ${pathA} --outdir ${pathB}`);
    console.log(buffer.toString("utf8"));
    Express()
        .use(Express.static(__dirname))
        .get("/", async function(request, response) {
            response
                .status(200)
                .sendFile(Path.join(__dirname, "App.html"));
        })
        .listen(3000n);
})();