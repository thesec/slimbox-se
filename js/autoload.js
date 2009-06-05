jQuery(function($){
$("a[rel^='lightbox']").slimbox({},null,function(el){
return (this==el)||((this.rel.length>8)&&(this.rel==el.rel));
});
});

