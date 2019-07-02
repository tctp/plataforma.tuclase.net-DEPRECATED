
document.addEventListener("DOMContentLoaded", function (event) {
  document.body.onload = function(){
    let el = document.createElement('script');
    el.type = 'text/javascript';
    el.src = 'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js';
    document.body.appendChild(el);
    el.onload = function (script) {  
      docsearch({
        apiKey: 'faaa6a3b9d9ea923005b717a64e9e7f9',
        indexName: 'plataforma_prod',
        appId: 'NFPVPALPLG',
        inputSelector: '#tctpSearch',
        debug: true,
      });
    }
  }

});
