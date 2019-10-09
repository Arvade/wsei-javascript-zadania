document.addEventListener("DOMContentLoaded", function () {
  var a = document.getElementById("a");
  var b = document.getElementById("b");

  // Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
  // addEventListener to właśnie document)
  console.log("obiekt document: ", this);

  a.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id a
    console.log("a: ", this);
  });

  b.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id b
    console.log("b: ", this);


    function innerFuncOne() {
      // Tutaj this wskazuje na element Window, bo funkcja została
      //wywołana bez żadnego kontekstu.
        /*
          Możemy to osiągnąć wykonując np.
            1) Przypisać context wyżej do zmiennej, wtedy będziemy mieli do niej dostęp i możemy z niej skorzystać
            2) Przypisać innerFuncOne() do zmiennej na kontekście elementu i wtedy ją wywołać
                  (this.innerFuncOne = function innerFuncOne()...
        */
      console.log("innerFuncOne: ", this);
    }
    innerFuncOne();

  });

});
