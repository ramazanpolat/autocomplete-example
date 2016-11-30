var demo3 = new autoComplete({
  selector: '#hero-demo',
  minChars: 1,
  source: function(term, suggest){
    term = term.toLowerCase();
    var suggestions = [];
    for (i=0;i<atamalar.length;i++)
      if (~atamalar[i].a.toLowerCase().indexOf(term))
        suggestions.push(atamalar[i].a + ' - ' + atamalar[i].y +' - ' +atamalar[i].z);
    suggest(suggestions);
  }
});