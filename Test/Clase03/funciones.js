

var dias = ["Lunes", "Martes", "Miercoles","Jueves", "Viernes", "Sabado", "Domingo"]
function diasSemana() {
    for(var i = 0; i <= 7; i++){
        
        console.log(dias[i]);
        switch (i) {
            case 0:
                alert(dias[i]+" Un día PAR - Día Numero - " + i);
                continue;
            case 2:
                alert(dias[i]+" Un día PAR - Día Numero - " + i);
                continue;
            case 4:
                alert(dias[i]+" Un día PAR - Día Numero - " + i);
                continue;
            case 6:
                alert(dias[i]+" Un día PAR - Día Numero - " + i);
                continue;
        }
    }
}