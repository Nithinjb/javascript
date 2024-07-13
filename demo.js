        var box1 = document.getElementById("num1") 
        var box2 = document.getElementById("num2")
        var res = document.getElementById("ans")
        function add(){
            var box1value = Number(box1.value)
            var box2value = Number(box2.value)
            var total = box1value+box2value
            res.textcontent=total
        }
        function Sub(){
            var box1value = Number(box1.value)
            var box2value = Number(box2.value)
            var total =box1value-box2value
            res.textcontent=total
        }
        function multiply(){
            var box1value = Number(box1.value)
            var box2value = Number(box2.value)
            var total =box1value*box2value
            res.textcontent=total
        }
        function div(){
            var box1value = Number(box1.value)
            var box2value = Number(box2.value)
            var total =box1value/box2value
            res.textcontent=total
        }