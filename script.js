document.querySelectorAll('table').forEach(function(table, index){
    index += 1
    console.log('----------------------------------------------------------' + index + '----------------------------------------------------------')
    var row_length = table.rows.length,
    col_length = table.rows[0].cells.length;
    var data = [];
    for(var i = 0; i < row_length; i++){
        for(var j = 0; j < col_length; j++){
            if(j == 0)
                data.push("[tr][td]")
            else
                data.push("[/td][td]")
            data.push(table.rows[i].cells[j].innerHTML.replace(/\s+|<em>|<\/em>|<p>|<\/p>/g, " ").replace(/<\/a>/g, "[/url]").replace(/<a href="/g, "[url=").replace(/".*?>/g, "]"))
        }
        data.push("[/td][/tr]\n")
    }
    console.log("[table=80%]\n" + data.join("") + "[/table]")
})
