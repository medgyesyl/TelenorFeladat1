function myFunction(){
    var y = document.getElementById("name").value; 
    var x = y.toLowerCase().split(' '); /*az x változóban szereplő értéket kisbetűssé alakítsa át és spacenként tömbösítse*/
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i].charAt(0).toUpperCase() + x[i].substring(1);     /* az x változó első karaktereit nagybetűsítse, majd írja ki az utána lévő karaktereket*/
    }
    y = x.join(' '); /* az x értékeit vonja össze*/

    /*Kötőjeles nevekhez kiegészítés*/

    var z = y.split('-'); /*Az előzőekben megadott értékeket kötőjelenként tömbösíti*/
    for (var i = 0; i < z.length; i++) {
        z[i] = z[i].charAt(0).toUpperCase() + z[i].substring(1);     /*Első betű kötőjel után nagybetű legyen, többit írja ki*/
    }
    document.getElementById("name").value = z.join('-'); /*z értékének összevonása és kiírása a name mezőben*/
}

