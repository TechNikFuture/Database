
function downloadFile(url) {
    var a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}





function download_database() {
    downloadFile(`https://niklas-database-file.netlify.app/Database.kdbx`)
}





function copy_bookmarks() {
    navigator.clipboard.writeText(browser_bookmarks);
}


var browser_bookmarks = `[{"groups":[{"name":"Standard","bookmarks":[{"name":"Google","url":"https://www.google.com"},{"name":"Youtube","url":"https://www.youtube.com"},{"name":"Amazon","url":"https://www.amazon.de"},{"name":"Chrome Extentsions","url":"https://chrome.google.com/webstore/category/extensions"},{"name":"Google Übersetzer","url":"https://www.google.de/search?sxsrf=ALeKk03k0OhkhykZK-arN3CH8pwIGN35HA%3A1612261726742&source=hp&ei=XikZYJz9KsCIhbIPq4GksAg&q=übersetzer&oq=üb&gs_lcp=CgZwc3ktYWIQARgAMgQIIxAnMgQIIxAnMgQIIxAnMgQIABBDMggIABCxAxCDATICCC4yBQgAELEDMgUIABCxAzICCAAyAggAUL4NWIARYLcbaABwAHgAgAFMiAGWAZIBATKYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab"},{"name":"Deepl","url":"https://www.deepl.com/de/translator"},{"name":"iServ","url":"https://iserv-trg-oha.de/iserv/"},{"name":"Bitwarden","url":"https://vault.bitwarden.eu/#/vault"}]},{"name":"AI","bookmarks":[{"name":"ChatGPT","url":"https://chat.openai.com"},{"name":"Gemini","url":"https://gemini.google.com/app"},{"name":"Dall-E 2","url":"https://labs.openai.com"}]}]},{"groups":[{"name":"IRC","bookmarks":[{"name":"XDCC","url":"https://www.xdcc.eu"},{"name":"SunXDCC","url":"https://sunxdcc.com"}]},{"name":"Programming","bookmarks":[{"name":"Netlify","url":"https://app.netlify.com/teams/tech-nik-effects/overview"},{"name":"Github","url":"https://github.com"},{"name":"Codepen","url":"https://codepen.io/trending"},{"name":"Vokabelseite","url":"https://niklas-vokabelseite.netlify.app"},{"name":"Coddy.tech","url":"https://coddy.tech/"}]},{"name":"Neu","bookmarks":[{"name":"Keybr","url":"https://www.keybr.com"},{"name":"10FastFingers","url":"https://10fastfingers.com"}]}]},{"groups":[{"name":"Sonstiges","bookmarks":[{"name":"Apple","url":"https://www.apple.com"},{"name":"Apple Events","url":"https://www.apple.com/apple-events/"},{"name":"KnowUnity","url":"https://knowunity.de/knows"},{"name":"Studypool","url":"https://www.studypool.com"},{"name":"Tradingview","url":"https://de.tradingview.com/chart/"},{"name":"Pc Doctor Toolbox","url":"https://www.pcdtoolbox.com"},{"name":"Kaufland Werbung","url":"https://filiale.kaufland.de/prospekte.html?cid=de%3Asea%3Agoogle_180788632_46609001243&campaign=180788632&adgroupid=46609001243&matchtype=e&network=g&keyword=kaufland+prospekt&placement=&target=aud-656306585174%3Akwd-309545232366&adposition=&creative=334915973485&aceid=&device=c&gclid=Cj0KCQjwse-DBhC7ARIsAI8YcWK2uCdAdi_MKHPfYu_Z2oDygf5JaBIfjH8pkrcfRVa9flwiyUq4I3caAgVbEALw_wcB&gclid=Cj0KCQjwse-DBhC7ARIsAI8YcWK2uCdAdi_MKHPfYu_Z2oDygf5JaBIfjH8pkrcfRVa9flwiyUq4I3caAgVbEALw_wcB"},{"name":"Twitch","url":"https://www.twitch.tv"},{"name":"Reddit","url":"https://www.reddit.com"}]},{"name":"3d Assets","bookmarks":[{"name":"Free3d","url":"https://free3d.com"},{"name":"TurboSquid","url":"https://www.turbosquid.com"},{"name":"CGTrader","url":"https://www.cgtrader.com"},{"name":"Sketchfab","url":"https://sketchfab.com"}]}]}]`
//var browser_bookmarks = ``


function download_file_1() {
    downloadFile(`https://niklas-dateien.netlify.app/Alle Schnellauswahlordner entfernen Win 10.reg`)
}

function download_file_2() {
    downloadFile(`https://niklas-dateien.netlify.app/Besten Nirsoft Programme.rar`)
}

function download_file_3() {
    downloadFile(`https://niklas-dateien.netlify.app/ExplorerPatcher Einstellungen - 14.02.24.reg`)
}

function download_file_4() {
    downloadFile(`https://niklas-dateien.netlify.app/Total Uninstall Ultimate 6.14.0.rar`)
}

function download_file_5() {
    downloadFile(`https://niklas-dateien.netlify.app/Windows Programme löschen (ThioJoe).rar`)
}

function download_file_6() {
    downloadFile(`https://niklas-dateien.netlify.app/Laila.zip`)
}