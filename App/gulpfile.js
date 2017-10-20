/**
 * Created by 高媛媛 on 2017/10/20.
 */
var fs = require("fs");
var url = require("url");
var path = require("path");
var gulp = require("gulp");
var server = require("gulp-webserver");
gulp.task("server", function () {
    gulp.src('./')
        .pipe(server({
            port: 8099,
            livereload: true,
            directoryListing: {
                path: "./",
                enable: true
            },
            open:true,
            fallback:"index.html",
            middleware: function (req, res, next) {
                var urlObj = url.parse(req.url);
                var mockDataFile = path.join(__dirname, "Data", urlObj.query + ".json");
                console.log(mockDataFile);
                fs.exists(mockDataFile, function (exist) {
                    if (!exist) {
                        var data = {
                            isScuccess: false,
                            errMsg: "",
                            errCode: 1,
                            data: null
                        };
                        res.writeHead(404, {
                            "Content-Type": "text/jsonp;charset=UTF-8",
                            "Access-Control-Allow-Origin": "*"
                        });
                        res.end(JSON.stringify(data));
                    } else {
                        fs.readFile(mockDataFile, function (error, result) {
                            if (error) return console.error(error);
                            var data = {
                                isScuccess: true,
                                errMsg: "",
                                errCode: 1,
                                data: result.toString()
                            };
                            res.writeHead(200, {
                                "Content-Type": "text/json;charset=UTF-8",
                                "Access-Control-Allow-Origin": "*"
                            });
                            res.end(JSON.stringify(data));

                        });
                    }
                });
            }
        }));
});