var Veiculos = [
  { Marca: "Tesla", Modelo: "Model S", Placa: "ABC-1234", VelMax: "290" },
  { Marca: "Volvo", Modelo: "XC60", Placa: "QWE-1234", VelMax: "280" },
  { Marca: "BMW", Modelo: "M1", Placa: "ZXC-1234", VelMax: "300" },
  { Marca: "VW", Modelo: "Gol", Placa: "GHJ-1234", VelMax: "999" },
  { Marca: "Ford", Modelo: "GT", Placa: "RTY-1234", VelMax: "300" },
];
// Lista
document.write(
  `<div style="display: flex;justify-content: space-around;"><div><h1>Veiculos em Lista</h1><div class="list-group">`
);
for (var x = 0; x < Veiculos.length; x++) {
  document.write(
    `<a href="#" class="list-group-item list-group-item-action flex-column align-items-start "><div class="d-flex w-100 justify-content-between">`
  );
  document.write(`<h5 class="mb-1">Marca: ` + Veiculos[x].Marca + `</h5>`);
  document.write(`<small>Veiculo: ` + (x + 1) + ` </small>`);
  document.write(`</div>`);
  document.write(`<p class="mb-1">Modelo: ` + Veiculos[x].Modelo + `</p>`);
  document.write(`<p class="mb-1">Placa: ` + Veiculos[x].Placa + ` </p>`);
  document.write(
    `<p class="mb-1">Velocidade Maxima: ` + Veiculos[x].VelMax + `</p>`
  );
  document.write(`</a>`);
}
document.write(`</div></div>`);
// Lista

// Tabela
document.write("<div><h1>Veiculos em Tabela</h1><table border='1'>");
document.write("<tr>");
document.write("<th style='text-align: center;'>Marca</th>");
document.write("<th style='text-align: center;'>Modelo</th>");
document.write("<th style='text-align: center;'>Placa</th>");
document.write("<th style='text-align: center;'>Velocidade Maxima</th>");
document.write("</tr>");

for (var x = 0; x < Veiculos.length; x++) {
  document.write("<tr><td style='text-align: center;'>");
  document.write(Veiculos[x].Marca);
  document.write("</td><td style='text-align: center;'>");
  document.write(Veiculos[x].Modelo);
  document.write("</td><td style='text-align: center;'>");
  document.write(Veiculos[x].Placa);
  document.write("</td><td style='text-align: center;'>");
  document.write(Veiculos[x].VelMax);
  document.write("</td></tr>");
}
document.write("</table></div></div>");
// Tabela
