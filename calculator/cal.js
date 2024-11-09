let calculation = localStorage.getItem('score')||''; 
        function update(num){
          calculation+=num;
               fun();
                localStorage.setItem('score',calculation);

        }
        function fun(){
          document.getElementById("view").value=calculation;
        }

      