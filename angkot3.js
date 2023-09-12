var jmlAngkot = 10;
var angkotBeroperasi = 6;
var angkot = 1;

for (angkot; angkot <= jmlAngkot; angkot++) {
  if (angkot <= angkotBeroperasi) {
    console.log("angkot no" + angkot + " " + "beroperasi dengan baik");
  } else {
    console.log("angkot no" + angkot + " " + "tidak dapat beroperasi");
  }
}
