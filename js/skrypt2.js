//definiujemy 2 zmienne, dzieki ktorym bedziemy przenosic puste tablice 2 wymiarowe miedzy funkcjami
var macierzA;
var macierzB;

//pokaz przycisk dodaj, ukryj pozostale itd dla wszystkich
function pokazDodaj() {

    var dodaj = document.getElementById("dodaj").classList;
    var odejmij = document.getElementById("odejmij").classList;
    var wyznacznik = document.getElementById("wyznacznik").classList;
    var mnozenie = document.getElementById("mnozenie").classList;
    var odwrotna = document.getElementById("odwrotna").classList;
    var transponowana = document.getElementById("transponowana").classList;

    //jesli przycik zawiera klase ukryj, usun ukryj, dodaj pokaz
    if (dodaj.contains("ukryj")) {

        dodaj.remove("ukryj");
        dodaj.add("pokaz");
        odejmij.add("ukryj");
        wyznacznik.add("ukryj");
        mnozenie.add("ukryj");
        odwrotna.add("ukryj");
        transponowana.add("ukryj");

    }

}

function pokazOdejmij() {

    var dodaj = document.getElementById("dodaj").classList;
    var odejmij = document.getElementById("odejmij").classList;
    var wyznacznik = document.getElementById("wyznacznik").classList;
    var mnozenie = document.getElementById("mnozenie").classList;
    var odwrotna = document.getElementById("odwrotna").classList;
    var transponowana = document.getElementById("transponowana").classList;

    if (odejmij.contains("ukryj")) {

        odejmij.remove("ukryj");
        odejmij.add("pokaz");
        dodaj.add("ukryj");
        wyznacznik.add("ukryj");
        mnozenie.add("ukryj");
        odwrotna.add("ukryj");
        transponowana.add("ukryj");

    }

}

function pokazWyznacznik() {

    var dodaj = document.getElementById("dodaj").classList;
    var odejmij = document.getElementById("odejmij").classList;
    var wyznacznik = document.getElementById("wyznacznik").classList;
    var mnozenie = document.getElementById("mnozenie").classList;
    var odwrotna = document.getElementById("odwrotna").classList;
    var transponowana = document.getElementById("transponowana").classList;

    if (wyznacznik.contains("ukryj")) {

        wyznacznik.remove("ukryj");
        wyznacznik.add("pokaz");
        dodaj.add("ukryj");
        odejmij.add("ukryj");
        mnozenie.add("ukryj");
        odwrotna.add("ukryj");
        transponowana.add("ukryj");

    }

}

function pokazMnozenie() {

    var dodaj = document.getElementById("dodaj").classList;
    var odejmij = document.getElementById("odejmij").classList;
    var wyznacznik = document.getElementById("wyznacznik").classList;
    var mnozenie = document.getElementById("mnozenie").classList;
    var odwrotna = document.getElementById("odwrotna").classList;
    var transponowana = document.getElementById("transponowana").classList;

    if (mnozenie.contains("ukryj")) {

        mnozenie.remove("ukryj");
        mnozenie.add("pokaz");
        dodaj.add("ukryj");
        odejmij.add("ukryj");
        wyznacznik.add("ukryj");
        odwrotna.add("ukryj");
        transponowana.add("ukryj");

    }

}

function pokazOdwrotna() {

    var dodaj = document.getElementById("dodaj").classList;
    var odejmij = document.getElementById("odejmij").classList;
    var wyznacznik = document.getElementById("wyznacznik").classList;
    var mnozenie = document.getElementById("mnozenie").classList;
    var odwrotna = document.getElementById("odwrotna").classList;
    var transponowana = document.getElementById("transponowana").classList;

    if (odwrotna.contains("ukryj")) {

        odwrotna.remove("ukryj");
        odwrotna.add("pokaz");
        dodaj.add("ukryj");
        odejmij.add("ukryj");
        wyznacznik.add("ukryj");
        mnozenie.add("ukryj");
        transponowana.add("ukryj");

    }

}

function pokazTransponowana() {

    var dodaj = document.getElementById("dodaj").classList;
    var odejmij = document.getElementById("odejmij").classList;
    var wyznacznik = document.getElementById("wyznacznik").classList;
    var mnozenie = document.getElementById("mnozenie").classList;
    var odwrotna = document.getElementById("odwrotna").classList;
    var transponowana = document.getElementById("transponowana").classList;

    if (transponowana.contains("ukryj")) {

        transponowana.remove("ukryj");
        transponowana.add("pokaz");
        dodaj.add("ukryj");
        odejmij.add("ukryj");
        wyznacznik.add("ukryj");
        mnozenie.add("ukryj");
        odwrotna.add("ukryj");

    }

}

function stworzMacierzA() {

    //zmienne pomocnicze do iteracji 2 wymiarowej tablicy
    var i, j;
    //zmienna do przechowywania kodu HTML
    var elementyHtml = "";
    //pobieramy liczby z inputow w formacie String i zmieniamy je na typ liczba calkowita
    var dlugoscMacierzy = parseInt(document.getElementById("dlugosc-macierzy-a").value, 10);
    var wysokoscMacierzy = parseInt(document.getElementById("wysokosc-macierzy-a").value, 10);

    //maksymalne rozmiary macierzy to 7 na 7
    if (dlugoscMacierzy <= 7 && wysokoscMacierzy <= 7) {

        //definiujemy liczbe wierszy
        macierzA = new Array(wysokoscMacierzy);

        for (i = 0; i < macierzA.length; i++) {
            //definiujemy liczbe kolumn
            macierzA[i] = new Array(dlugoscMacierzy);
        }

        for (i = 0; i < macierzA.length; i++) {

            elementyHtml += "<div>";

            //tworzymy inputy by mozna bylo wpisac liczby
            for (j = 0; j < macierzA[i].length; j++) {
                macierzA[i][j] = "<div class=\"input-kontener\"><input type=\"number\" class=\"form-control element-a\" id=\"a" + (i + 1) + (j + 1) + "\" placeholder=\"a" + (i + 1) + (j + 1) + "\" ></div>";
                elementyHtml += macierzA[i][j];
            }

            elementyHtml += "</div>";
        }

        document.getElementById("macierz-a").innerHTML = elementyHtml;

    } else {

        document.getElementById("macierz-a").innerHTML = "<p>Maksymalny rozmiar macierzy to 7x7.</p>";

    }

}

function stworzMacierzB() {

    var i, j;
    var elementyHtml = "";
    var dlugoscMacierzy = parseInt(document.getElementById("dlugosc-macierzy-b").value, 10);
    var wysokoscMacierzy = parseInt(document.getElementById("wysokosc-macierzy-b").value, 10);

    if (dlugoscMacierzy <= 7 && wysokoscMacierzy <= 7) {

        macierzB = new Array(wysokoscMacierzy);

        for (i = 0; i < macierzB.length; i++) {
            macierzB[i] = new Array(dlugoscMacierzy);
        }

        for (i = 0; i < macierzB.length; i++) {

            elementyHtml += "<div>";

            for (j = 0; j < macierzB[i].length; j++) {
                macierzB[i][j] = "<div class=\"input-kontener\"><input type=\"number\" class=\"form-control element-b\" id=\"b" + (i + 1) + (j + 1) + "\" placeholder=\"b" + (i + 1) + (j + 1) + "\" ></div>";
                elementyHtml += macierzB[i][j];
            }

            elementyHtml += "</div>";
        }

        document.getElementById("macierz-b").innerHTML = elementyHtml;

    } else {

        document.getElementById("macierz-a").innerHTML = "<p>Maksymalny rozmiar macierzy to 7x7.</p>";

    }

}

function wyswietlenieMacierzyOdwrotnej() {

    var i, j;
    //kopiujemy pusta macierzA i pobieramy dane z inputow od uzytkownika
    var macierz = macierzA.slice();

    for (i = 0; i < macierz.length; i++) {

        for (j = 0; j < macierz[i].length; j++) {
            macierz[i][j] = parseInt(document.getElementById("a"  + (i+1) + (j+1)).value, 10);
        }

    }

    //macierz musi byc kwadratowa
    if (macierz.length == macierz[0].length) {

        document.getElementById("wynik").innerHTML = "<p>A<sup>-1</sup> = " + odwrocenieMacierzy(macierz) + "</p>";

    } else {

        document.getElementById("wynik").innerHTML = "<p>Macierz nie ma równej liczby kolumn i wierszy.</p>";

    }

}
//Metoda eliminacji Gaussa-Jordana, czasem wynik moze byc 'undefined' ponieważ wyznacznik moze wyniesc 0
function odwrocenieMacierzy(macierz){
    // I use Guassian Elimination to calculate the inverse:
    // (1) 'augment' the matrix (left) by the identity (on the right)
    // (2) Turn the matrix on the left into the identity by elemetry row ops
    // (3) The matrix on the right is the inverse (was the identity matrix)
    // There are 3 elemtary row ops: (I combine b and c in my code)
    // (a) Swap 2 rows
    // (b) Multiply a row by a scalar
    // (c) Add 2 rows

    //tworzymy macierz, ktora zwrocimy (rezultat) i kopie oryginalnej (kopia)
    var i, ii, j, e = 0;
    var rezultat = [], kopia = [];

    for (i = 0; i < macierz.length; i += 1) {
        //tworzymy wiersz
        rezultat[rezultat.length] = [];
        kopia[kopia.length] = [];

        for (j = 0; j < macierz.length; j += 1) {

            //jesli jestesmy na przekatnej wstawiamy 1
            if (i == j) {
                rezultat[i][j] = 1;
            } else {
                rezultat[i][j] = 0;
            }

            //robimy kopie oryginalnej
            kopia[i][j] = macierz[i][j];
        }
    }

    for (i = 0; i < macierz.length; i += 1) {

        e = kopia[i][i];

        //jesli mamy 0 na przekatnej (musimy zamienic miejscami z nizszym wierszem)
        if (e == 0) {
            //szukamy 'i' wiersza
            for (ii = i + 1; ii < macierz.length; ii += 1) {
                //jesli 'ii' wiersz nie ma 0 w 'i' kolumnie
                if(kopia[ii][i] != 0) {
                    //przekatna nie bedzie miala 0
                    for(j = 0; j < macierz.length; j++){
                        e = kopia[i][j];       //tymczasowo przechowujemy 'i' wiersz
                        kopia[i][j] = kopia[ii][j];//zamieniamy 'i' wiersz na 'ii'
                        kopia[ii][j] = e;      //zamieniamy 'ii' na tymczasowy
                        e = rezultat[i][j];       //tymczasowo przechowujemy 'i' wiersz
                        rezultat[i][j] = rezultat[ii][j];//zamieniamy 'i' wiersz na 'ii'
                        rezultat[ii][j] = e;      //zamieniamy 'ii' na tymczasowy
                    }

                    break;
                }
            }
            //nowa przekatna
            e = kopia[i][i];
            //jesli wciaz 0, nie mozna odwrocic
            if (e == 0) {
                return;
            }
        }

        //dzielimy wiersz przez e (wiec mamy 1 na przekatnej)
        for (j = 0; j < macierz.length; j++){
            kopia[i][j] = kopia[i][j]/e; //zapisujemy do oryginalnej tablicy
            rezultat[i][j] = rezultat[i][j]/e; //zapisujemy do wynikowej
        }

        for (ii = 0; ii < macierz.length; ii++){

            if (ii == i) {
                continue;
            }

            // chcemy zmienic ten element na 0
            e = kopia[ii][i];

            for(j = 0; j < macierz.length; j++){
                kopia[ii][j] -= e*kopia[i][j];
                rezultat[ii][j] -= e*rezultat[i][j];
            }
        }
    }

    return rezultat;
}

function transponowanie(){

    var i, j;
    var macierz1 = macierzA.slice();
    var rezultat;

    for (i = 0; i < macierz1.length; i++) {

        for (j = 0; j < macierz1[i].length; j++) {
            macierz1[i][j] = parseInt(document.getElementById("a"  + (i+1) + (j+1)).value, 10);
        }

    }

    rezultat = new Array(macierz1[0].length);

    for (i = 0; i < rezultat.length; i++){

        rezultat[i] = new Array(macierz1.length);
        //odwracamy
        for (j = 0; j < rezultat[i].length; j++){
            rezultat[i][j] = macierz1[j][i];
        }

    }

    wyswietlenieWyniku(rezultat);

}

function wyswietlenieWyznacznika(){
    var i, j;
    var macierz = macierzA.slice();

    //jesli macierz kwadratowa to obliczamy
    if (macierz.length == macierz[0].length) {

        for (i = 0; i < macierz.length; i++) {

            for (j = 0; j < macierz[i].length; j++) {
                macierz[i][j] = parseInt(document.getElementById("a" + (i + 1) + (j + 1)).value, 10);
            }

        }

        document.getElementById("wynik").innerHTML = "<p>det(A) = " + obliczenieWyznacznika(macierz) + "</p>";

    } else {

        document.getElementById("wynik").innerHTML = "<p>Macierz nie ma równej liczby kolumn i wierszy.</p>";

    }

}

//algorytm korzystający z rekurencji
function obliczenieWyznacznika(macierz){
    var i, j, k, l, znak, mnoznik, m1, m2;
    var wyznacznik = 0;
    var elementyHtml = "";

    if (macierz.length == 1) {

        wyznacznik = macierz[0][0];

    } else if (macierz.length == 2) {

        wyznacznik = (macierz[0][0] * macierz[1][1]) - (macierz[1][0] * macierz[0][1]);
        elementyHtml = "<p>" + wyznacznik + "</p>";

    } else {

        for (i = 0; i < macierz[0].length; i++) {

            znak = 1;

            if (i % 2 != 0) {
                znak = -1;
            }

            mnoznik = macierz[0][i];
            m1 = new Array();
            m2 = new Array();

            for (j = 1; j < macierz.length; j++) {

                l = 0;

                for (k = 0; k < macierz[j].length - 1; k++) {
                    if (k == i) {
                        l = 1;
                    }
                    m2[k] = macierz[j][k + l];
                }

                m1[j - 1] = m2;
                m2 = new Array();

            }

            wyznacznik += znak * mnoznik * obliczenieWyznacznika(m1);

        }

    }

    return wyznacznik;

}

function obliczanieWyznacznika(macierz){
    var i, j, k, l, macierz1, macierz2, znak, mnoznik;
    var wyznacznik = 0;

    if (macierz.length == 1) {

        wyznacznik = macierz[0][0];

    }
    //jesli macierz 2x2
    else if (macierz.length == 2) {

        wyznacznik = (macierz[0][0] * macierz[1][1]) - (macierz[1][0] * macierz[0][1]);

    }

    for (i = 0; i < macierz[0].length; i++){

        znak = 1;

        if( i % 2 != 0) {
            znak = -1;
        }

        mnoznik = macierz[0][i];
        macierz1 = new Array();
        macierz2 = new Array();

        for ( j = 1; j < macierz.length; j++) {

            l = 0;

            for ( k = 0; k < macierz[j].length-1; k++){
                if ( k == i) {
                    l = 1;
                }
                macierz2[k] = macierz[j][k+l];
            }

            macierz1[j-1]= macierz2;
            macierz2 = new Array();

        }

        wyznacznik += znak * mnoznik * obliczanieWyznacznika(macierz1);

    }

    return wyznacznik;
}

function mnozenie() {
    var i, j, k, suma;
    var macierz1 = macierzA.slice();
    var macierz2 = macierzB.slice();
    var rezultat;

    //liczba kolumn macierz1 musi byc rowna liczbie wierszy macierz2
    if(macierz1[0].length == macierz2.length) {

        pobranieWartosci(macierz1, macierz2);

        rezultat = new Array(macierz1.length);

        for (i = 0; i < macierz1.length; i++) {

            rezultat[i] = new Array(macierz2[0].length);

            for (j = 0; j < macierz2[0].length; j++) {

                suma = 0;

                for (k = 0; k < macierz1[0].length; k++) {
                    suma += macierz1[i][k] * macierz2[k][j];
                }

                rezultat[i][j] = suma;

            }

        }

        wyswietlenieWyniku(rezultat);

    } else {

        document.getElementById("wynik").innerHTML = "<p>Liczba kolumn macierzy A musi być równa liczbie wierszy macierzy B.</p>";

    }

}

function dodawanie() {
    var i, j;
    var macierz1 = macierzA.slice();
    var macierz2 = macierzB.slice();
    var rezultat;

    //jesli rowna licza kolumn i wierszy to dodajemy
    if (macierz1.length == macierz2.length && macierz1[0].length == macierz2[0].length) {

        pobranieWartosci(macierz1, macierz2);

        rezultat = new Array(macierz2.length);

        for (i = 0; i < rezultat.length; i++) {

            rezultat[i] = new Array(macierz2[i].length);

            for (j = 0; j < rezultat[i].length; j++) {
                rezultat[i][j] = macierz1[i][j] + macierz2[i][j];
            }
        }

        wyswietlenieWyniku(rezultat);

    } else {

        document.getElementById("wynik").innerHTML = "<p>Macierze nie mają równych rozmiarów.</p>";

    }


}

function odejmowanie() {
    var i, j;
    var macierz1 = macierzA.slice();
    var macierz2 = macierzB.slice();
    var rezultat;

    if (macierz1.length == macierz2.length && macierz1[0].length == macierz2[0].length) {

        pobranieWartosci(macierz1, macierz2);

        rezultat = new Array(macierz1.length);

        for (i = 0; i < rezultat.length; i++) {

            rezultat[i] = new Array(macierz1[i].length);

            for (j = 0; j < rezultat[i].length; j++) {
                rezultat[i][j] = macierz1[i][j] - macierz2[i][j];
            }

        }

        wyswietlenieWyniku(rezultat);

    } else {

        document.getElementById("wynik").innerHTML = "<p>Macierze nie mają równych rozmiarów.</p>";

    }

}

function pobranieWartosci(macierz1, macierz2) {

    var i, j;

    //pobieranie wartosci z inputow od uzytkownika
    for (i = 0; i < macierz1.length; i++) {

        for (j = 0; j < macierz1[i].length; j++) {
            macierz1[i][j] = parseInt(document.getElementById("a"  + (i+1) + (j+1)).value, 10);
        }

    }

    for (i = 0; i < macierz2.length; i++) {

        for (j = 0; j < macierz2[i].length; j++) {
            macierz2[i][j] = parseInt(document.getElementById("b"  + (i+1) + (j+1)).value, 10);
        }

    }

}

function wyswietlenieWyniku(macierz) {

    var i, j;
    var elementyHtml = "";

    //wyswietlanie wyniku w formie macierzy
    for (i = 0; i < macierz.length; i++) {

        //kazdy wiersz zamykamy w div
        elementyHtml += "<div>";

        for (j = 0; j < macierz[i].length; j++) {
            elementyHtml += "<div class=\"input-kontener\"><input type=\"number\" class=\"form-control\" value=\"" + macierz[i][j] + "\"></div>";
        }

        elementyHtml += "</div>";
    }

    document.getElementById("wynik").innerHTML = elementyHtml;

}

