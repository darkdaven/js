window._scriptLoaded = window._scriptLoaded || [];
window._scriptQueue = window._scriptQueue || [];

function deferLoading(d, t, u, n, l) 
{
    if(window._scriptLoaded.indexOf(n) >= 0) {
        return true;
    }
    
    if(l != undefined) {
        for(nl in l) {
            if(window._scriptLoaded.indexOf(l[nl]) < 0) {

                window._scriptQueue[l[nl]] =  window._scriptQueue[l[nl]]  || [];     
                window._scriptQueue[l[nl]].push(
                    {   
                        name: n, 
                        callback: function() {
                            deferLoading(d, t, u, n, l);
                        }
                    }
                );
                return true;
            }
        }
      
    }

  var g = d.createElement(t);
  var s = d.getElementsByTagName(t)[0];
  g.async = true;
  g.type = 'text/javascript';
  g.src = u;

  g.onload = function() {
      if(n != undefined) {
          window._scriptLoaded.push(n);
          executeQueueCallbacks(n);  
      }
  };

  s.parentNode.insertBefore(g, s);
  return true;
}

function executeQueueCallbacks(n) 
{
    for(f in window._scriptQueue) {
        nf = window._scriptQueue[f];
        if(nf.constructor.toString().indexOf('Array') >= 0 && f==n) {
            var len =  nf.length;
            for(var i =0; i < len; i++) {
                cf = window._scriptQueue[f].shift();
                if(cf != undefined && typeof cf.callback == 'function') {
                    cf.callback();
                } 
          }
          delete window._scriptQueue[f];
          return true; 
        }          
    }
}
