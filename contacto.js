var mensajeInput = document.getElementById('mensaje');

mensajeInput.addEventListener('focus', function() {
  if (this.value === 'INGRESE SU CONSULTA AQUÍ') {
    this.value = '';
  }
});

mensajeInput.addEventListener('blur', function() {
  if (this.value === '') {
    this.value = 'INGRESE SU CONSULTA AQUÍ';
  }
});