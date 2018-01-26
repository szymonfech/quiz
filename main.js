document.addEventListener("DOMContentLoaded", function () {

    var button1 = document.querySelector(".odp1");
    button1.addEventListener("click", function () {
        var input1 = document.querySelector(".input1");
        var wynik1 = input1.value;
        if (wynik1 == 64) {
            var nastepnaZagadka = document.querySelector(".zagadka2");
            nastepnaZagadka.classList.add("show");
            var button2 = document.querySelector(".odp2");
            var input2 = document.querySelector(".input2");
            button2.addEventListener("click", function () {
                var wynik2 = input2.value;
                if (wynik2 == 3.5) {
                    var nastepnaZagadka1 = document.querySelector(".zagadka3");
                    nastepnaZagadka1.classList.add("show");
                    var button3 = document.querySelector(".odp3");
                    var input3 = document.querySelector(".input3");
                    button3.addEventListener("click", function () {
                        var wynik3 = input3.value;
                        if (wynik3 == 46) {
                            var nastepnaZagadka2 = document.querySelector(".zagadka4");
                            nastepnaZagadka2.classList.add("show");
                            var button4 = document.querySelector(".odp4");
                            button4.addEventListener("click", function () {
                                var nastepnaZagadka3 = document.querySelector(".zagadka5");
                                nastepnaZagadka3.classList.add("show");
                                var button5 = document.querySelector(".odp5");
                                var input4 = document.querySelector(".input4");
                                button5.addEventListener("click", function () {
                                    var wynik4 = input4.value;
                                    if (wynik4 == 8) {
                                        var wrapper = document.querySelector(".wrapper");
                                        wrapper.classList.add("hide");
                                        var wygrana = document.querySelector(".wygrana");
                                        wygrana.classList.add("show")
                                    }
                                })
                            })
                        }
                    })
                }
            })
        }
    })
    var resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", function () {
        location.reload()
    })
})
