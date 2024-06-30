function TajSzamEllenorzo(taj) {
    var tajSzamjegyek = taj.toString().split('');
    if (tajSzamjegyek.length != 9)
        return false;
    var osszeg = 0;
    for (var i = 0; i < 8; i++) {
        if ((i + 1) % 2) {
            osszeg += Number(tajSzamjegyek[i]) * 3;
        }
        else {
            osszeg += Number(tajSzamjegyek[i]) * 7;
        }
    }
    return (osszeg % 10) == Number(tajSzamjegyek[8]);
}
