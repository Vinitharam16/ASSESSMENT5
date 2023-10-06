var span = document.getElementById("span");
span.innerHTML = 10
document.body.append(span)
count = 10
setTimeout(()=>{
    count = count-1
    span.innerHTML = count
    setTimeout(()=>{
        count = count-1
        span.innerHTML = count
        setTimeout(()=>{
            count = count-1
            span.innerHTML = count
            setTimeout(()=>{
                count = count-1
                span.innerHTML = count
                setTimeout(()=>{
                    count = count-1
                    span.innerHTML = count
                    setTimeout(()=>{
                        count = count-1
                        span.innerHTML = count
                        setTimeout(()=>{
                            count = count-1
                            span.innerHTML = count
                            setTimeout(()=>{
                                count = count-1
                                span.innerHTML = count
                                setTimeout(()=>{
                                    count = count-1
                                    span.innerHTML = count
                                    setTimeout(()=>{
                                        span.innerHTML = "Happy Independence Day"
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
