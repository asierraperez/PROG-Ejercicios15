function main() {

    $("body").css({ "display": "flex", "flex-direction": "row", "flex-wrap": "wrap" })

    $(".heroe").css("font-size", "16pt")
    $(".heroe").css("color", "blue")
    $(".heroe").css("text-align", "center")

    $(".enemigo").css({ "font-size": "16pt", "color": "red", "border-style": "solid", "border-color": "black" })


    var personajes = personaje()
    var enemigos = enemigo(personajes)
    var heroes = heroe(personajes)

    var nombre_personaje = entrada("Ponle un nombre a tu héroe")
    var nivel = entrada("A que nivel quieres que empiece tu heroe")
    var repetir = true
    var nordico = new heroes(300, 50, nombre_personaje, nivel, 5, 15)
    var heroe_muerto = false

    var nombre_html = document.getElementById("nombre_heroe")
    nombre_html.innerHTML = nordico.get_nombre

    while (repetir & !heroe_muerto) {

        var vida_original = nordico.get_vida
        var ataque_original = nordico.get_ataque

        $("#nivel_heroe").html(nordico.nivel)
        $("#experiencia_heroe").html(nordico.experiencia)
        $("#salud_heroe").html(nordico.vida + "/" + vida_original)






        var esqueleto = new enemigos(100, 30, "Esqueleto", 5, 1)
        var bandido = new enemigos(150, 35, "Bandido", 7, 5)
        var nigromante = new enemigos(150, 50, "Nigromante", 9, 5)
        var caballero = new enemigos(200, 70, "Caballero", 10, 7)
        var dragon = new enemigos(300, 100, "Dragon", 15, 10)


        if (nordico.get_nivel <= 5) {


            heroe_muerto = combate(nordico, esqueleto, vida_original)

            nordico = salida(heroe_muerto, nordico, esqueleto, vida_original, ataque_original)
            if (!heroe_muerto) {
                repetir = confirmar("continuar con la aventura")
            }

        } else if (nordico.get_nivel <= 10 && nordico.get_nivel > 5) {

            heroe_muerto = combate(nordico, bandido)
            nordico = salida(heroe_muerto, nordico, bandido, vida_original, ataque_original)
            if (!heroe_muerto) {
                repetir = confirmar("continuar con la aventura")
            }

        } else if (nordico.get_nivel <= 15 && nordico.get_nivel > 10) {

            heroe_muerto = combate(nordico, nigromante)
            nordico = salida(heroe_muerto, nordico, nigromante, vida_original, ataque_original)
            if (!heroe_muerto) {
                repetir = confirmar("continuar con la aventura")
            }

        } else if (nordico.get_nivel <= 20 && nordico.get_nivel > 15) {

            heroe_muerto = combate(nordico, caballero)
            nordico = salida(heroe_muerto, nordico, caballero, vida_original, ataque_original)
            if (!heroe_muerto) {
                repetir = confirmar("continuar con la aventura")
            }

        } else if (nordico.get_nivel <= 25 && nordico.get_nivel > 20) {

            heroe_muerto = combate(nordico, dragon)
            nordico = salida(heroe_muerto, nordico, dragon, vida_original, ataque_original)
            if (!heroe_muerto) {
                repetir = confirmar("continuar con la aventura")
            }

        }




    }


}
main()