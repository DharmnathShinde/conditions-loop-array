
    
    // let sp = document.getElementById("arr");
    //   const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //   document.getElementById("arr").innerText = arr3;
      
    //   function sub(){
    //     let numb = document.getElementById("in");
    //   console.log(numb)
    //     let num2 =parseInt(numb.value)
    //    document.getElementById("op").innertext =arr3.find(large)
    //    function large(numbe) {
    //     return num2>numbe;
    //   };}
    let flag=1;
    function load(){
      var s1=document.getElementById("nav");
      if (flag==1){
        
        s1.style.display="flex";
        flag=0;
      }
      else if(flag==0){
        s1.style.display="none";
        flag=1
      }}
    




      var array = ["one", "two", "three"];
      document.getElementById("clone").innerHTML = array;
      function clon() {
        var arr2 = array.slice();
        const node = document.createTextNode("    " + arr2);
        document.getElementById("clone").appendChild(node);
        console.log(arr2);
      }

      function display() {
        let k = document.getElementById("list");
        k.style.display = "block";
      }

      function table() {
        let tabl = document.getElementById("t");
        let tab = parseInt(tabl.value);
        let t = document.getElementById("st");
        var tablehtml = "<table>";
        for (i = 1; i <= 10; i++) {
          let mult = i * tab;
          tablehtml += "<tr><td>" + mult + "</td></tr>";
        }
        tablehtml += "</table>";
        t.innerHTML = tablehtml;
        console.log(tablehtml);
      }
      let s = document.getElementById("ss");

      function cal() {
        let a = parseInt(s.value);
        if (a >= 18) {
          document.getElementById("op").innerText = "you can drive car";
        } else {
          document.getElementById("op").innerText = "you can't drive";
        }
      }

      let sw = document.getElementById("switch");
      function swich() {
        let b = parseInt(sw.value);
        switch (b) {
          case 1:
            document.getElementById("options").innerHTML =
              "you choose adition option";
            break;
          case 2:
            document.getElementById("options").innerHTML =
              "you choose substraction option";
            break;
          case 3:
            document.getElementById("options").innerHTML =
              "you choose multiplication option";
            break;
          default:
            document.getElementById("options").innerHTML = "wrong choise";
            break;
        }
      }
