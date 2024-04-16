const plugin = require('tailwindcss/plugin');
const variables = require('../js/base');
const utilidades = require('../js/utilities');
const componentes = require('../js/components');
const tema = require('./temaFlowtitude');

const flowtitude = plugin(function({ addUtilities, addComponents, addBase}) {
  // Importar variables CSS
  addBase({
    ':root': variables
  });

  // Importar utilidades CSS
  addUtilities(utilidades, ['responsive', 'hover']);

  // Importar componentes CSS
  addComponents(componentes);

}, tema);

module.exports = flowtitude;
