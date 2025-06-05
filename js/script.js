document.getElementById('calc-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const valor = parseFloat(document.getElementById('valor').value);
  const dias = parseInt(document.getElementById('dias').value);
  const juros = 0.35;
  const multaPorDia = 0.01; // 1% por dia de atraso

  if (isNaN(valor) || isNaN(dias)) {
    document.getElementById('resultado').innerHTML = '<div class="alert alert-danger">Por favor, insira valores válidos.</div>';
    return;
  }

  let total = valor + (valor * juros);
  if (dias > 0) {
    total += valor * multaPorDia * dias;
  }

  document.getElementById('resultado').innerHTML = `<div class="alert alert-success">Total a pagar: ${total.toFixed(2)} MZN</div>`;
});
