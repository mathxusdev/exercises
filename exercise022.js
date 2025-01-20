function printNumbers1(from, to) { 
    setTimeout(function go() { 
        console.log(from); 
        from++ 
        if (from <= to) { 
            setTimeout(go, 1000); }
         }, 1000); } 

function printNumbers2(from, to) { 
    let c = setInterval(function go() { 
        console.log(from); 
        from++ 
        if (from > to) { 
            clearInterval(c); } 
        }, 1000); }