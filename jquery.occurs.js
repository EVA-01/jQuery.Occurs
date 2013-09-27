jQuery.fn.occurs=function(o) {
 switch(jQuery.type(o)) {
  case 'undefined':
   return jQuery(this).length;
  break;
  case 'object':
   if(o instanceof jQuery) {
    return jQuery(this).contents().add(jQuery(this)).filter(o).length;
   }
  break;
  case 'array':
   var k=jQuery(this);
   var l={};
   jQuery.each(o, function() {
	var j=0;
	var c=this;
	k.each(function() {
	 j=(jQuery(this).text().match(new RegExp(c.toString().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'gi'))==null)?j:(j+jQuery(this).text().match(new RegExp(c.toString().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'gi')).length);
	});
	l[c]=j;
   });
   return l;
  break;
  case 'regexp':
   var l=0;
   jQuery(this).each(function() {
    l=(jQuery(this).text().match(o)==null)?l:(l+jQuery(this).text().match(o).length);
   });
   return l;
  break;
  default:
   var l=0;
   jQuery(this).each(function() {
    l=(jQuery(this).text().match(new RegExp(o.toString().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'gi'))==null)?l:(l+jQuery(this).text().match(new RegExp(o.toString().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'gi')).length);
   });
   return l;
  break;
 }
}
