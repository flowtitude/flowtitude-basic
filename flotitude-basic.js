// tailwind-plugin.js
const plugin = require('tailwindcss/plugin');

const flowtitudeBasic = plugin(function({ addUtilities, theme, addComponents, addBase, e }) {
  // Añadir variables CSS
  addBase({
	':root': {
	  '--ft-space-4xs: clamp(0.4rem, calc(0.1565vw + 0.3648rem), 0.49rem )',
	  '--ft-space-3xs: clamp(0.48rem, calc(0.2261vw + 0.4291rem), 0.61rem )',
	  '--ft-space-2xs: clamp(0.58rem, calc(0.3304vw + 0.5057rem), 0.77rem )',
	  '--ft-space-xs: clamp(0.69rem, calc(0.4696vw + 0.5843rem), 0.96rem )',
	  '--ft-space-sm: clamp(0.83rem, calc(0.6435vw + 0.6852rem), 1.2rem )',
	  '--ft-space-md: clamp(1rem, calc(0.8696vw + 0.8043rem), 1.5rem )',
	  '--ft-space-lg: clamp(1.2rem, calc(1.1826vw + 0.9339rem), 1.88rem )',
	  '--ft-space-xl: clamp(1.44rem, calc(1.5652vw + 1.0878rem), 2.34rem )',
	  '--ft-space-2xl: clamp(1.73rem, calc(2.087vw + 1.2604rem), 2.93rem )',
	  '--ft-space-3xl: clamp(2.07rem, calc(2.7652vw + 1.4478rem), 3.66rem )',
	  '--ft-space-4xl: clamp(2.49rem, calc(3.6348vw + 1.6722rem), 4.58rem )',
	  '--ft-space-jumbotron: clamp(6.19rem, calc(13.5304vw + 3.1457rem), 13.97rem )',
	  
	  '--ft-container:         1280px',
	  '--ft-padding-content-x: 1rem',
	  '--ft-padding-content-y: 1rem',
	  '--ft-gap-content:	   1.5rem',
	  
	  '--ft-card-xs: calc( (var(--ft-container) - (var(--ft-gap-content) * 5)) / 6 )',
	  '--ft-card-sm: calc( (var(--ft-container) - (var(--ft-gap-content) * 4)) / 5 )',
	  '--ft-card-md: calc( (var(--ft-container) - (var(--ft-gap-content) * 3)) / 4 )',
	  '--ft-card-lg: calc( (var(--ft-container) - (var(--ft-gap-content) * 2)) / 3 )',
	  '--ft-card-xl: calc( (var(--ft-container) - (var(--ft-gap-content) * 1)) / 2 )',
	}
  });

  // Añadir utilidades personalizadas
  const flowtitudeBasicUtilities = {

	'.grid-auto-fit-xs': {
		grid-template-columns: 'repeat(auto-fit, minmax(min(var(--ft-card-xs), 100%), 1fr))',
	},
		  
	'.grid-auto-fit-sm': {
		grid-template-columns: 'repeat(auto-fit, minmax(min(var(--ft-card-sm), 100%), 1fr))',
	},
		  
	'.grid-auto-fit-md': {
		grid-template-columns: 'repeat(auto-fit, minmax(min(var(--ft-card-md), 100%), 1fr))',
	}
		  
	'.grid-auto-fit-lg': {
		grid-template-columns: 'repeat(auto-fit, minmax(min(var(--ft-card-lg), 100%), 1fr))',
	}
		  
	'.grid-auto-fit-xl': {
		grid-template-columns: 'repeat(auto-fit, minmax(min(var(--ft-card-xl), 100%), 1fr))',
	}

	'.grid-auto-fill-xs': {
		grid-template-columns: 'repeat(auto-fill, minmax(min(var(--ft-card-xs), 100%), 1fr))',
	}
		  
	'.grid-auto-fill-sm': {
		grid-template-columns: 'repeat(auto-fill, minmax(min(var(--ft-card-sm), 100%), 1fr))',
	}
		  
	'.grid-auto-fill-md': {
		grid-template-columns: 'repeat(auto-fill, minmax(min(var(--ft-card-md), 100%), 1fr))',
	}
		  
	'.grid-auto-fill-lg': {
		grid-template-columns: 'repeat(auto-fill, minmax(min(var(--ft-card-lg), 100%), 1fr))',
	}
		  
	'.grid-auto-fill-xl': {
		grid-template-columns: 'repeat(auto-fill, minmax(min(var(--ft-card-xl), 100%), 1fr))',
	} 
		  
  };

  addUtilities(flowtitudeBasicUtilities, ['responsive', 'hover']);

  // Añadir componentes personalizados
  const flowtitudeBasicUtilities = {
	'.button': {
	  padding: '.5rem 1rem',
	  borderRadius: '.25rem',
	  fontWeight: '600',
	},
  };

  addComponents(flowtitudeBasicComponents);

}, {
  theme: {
	extend: {
	  // Extender la configuración aquí

	  aspectRatio: {
		  'landscape':	'4 / 3',
		  'portrait':  	'3 / 4', 
		  'ultrawide': 	'18 / 5',
		  'golden': 	'1.6180 / 1',
		  'rrss': 	 	'1.91 / 1',
	   },
	  spacing: {
		  '4xs': 		'var(--ft-space-4xs)',
		  '3xs': 		'var(--ft-space-3xs)',
		  '2xs': 		'var(--ft-space-2xs)',
		  'xs':  		'var(--ft-space-xs)',
		  'sm':  		'var(--ft-space-sm)',
		  'md':  		'var(--ft-space-md)',
		  'lg':  		'var(--ft-space-lg)',
		  'xl':  		'var(--ft-space-xl)',
		  '2xl': 		'var(--ft-space-2xl)',
		  '3xl': 		'var(--ft-space-3xl)',
		  '4xl': 		'var(--ft-space-4xl)',
		  'jumbotron': 	'var(--ft-space-jumbotron)',
	  },
	  gridTemplateColumns: {
		  '1-2': 'minmax(0, 1fr) minmax(0, 2fr)',
		  '2-1': 'minmax(0, 2fr) minmax(0, 1fr)',
		  '1-3': 'minmax(0, 1fr) minmax(0, 3fr)',
		  '3-1': 'minmax(0, 3fr) minmax(0, 1fr)',
		  '1-4': 'minmax(0, 1fr) minmax(0, 4fr)',
		  '4-1': 'minmax(0, 4fr) minmax(0, 1fr)',
		  '2-3': 'minmax(0, 2fr) minmax(0, 3fr)',
		  '3-2': 'minmax(0, 3fr) minmax(0, 2fr)',
		  '1-2-1': 'minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr)',
		  '1-1-2': 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr)',
		  '2-1-1': 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)',
		  '2-1-2': 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 2fr)',
		  '2-2-1': 'minmax(0, 2fr) minmax(0, 2fr) minmax(0, 1fr)',
		  '1-3-1': 'minmax(0, 1fr) minmax(0, 3fr) minmax(0, 1fr)',
		  '1-1-3': 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 3fr)',
		  '3-1-1': 'minmax(0, 3fr) minmax(0, 1fr) minmax(0, 1fr)',
		  '1-3-2': 'minmax(0, 1fr) minmax(0, 3fr) minmax(0, 2fr)',
		  '2-3-1': 'minmax(0, 2fr) minmax(0, 3fr) minmax(0, 1fr)',
		  '1-2-3': 'minmax(0, 1fr) minmax(0, 2fr) minmax(0, 3fr)',
		  '2-1-3': 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 3fr)',
		  '3-2-1': 'minmax(0, 3fr) minmax(0, 2fr) minmax(0, 1fr)',
		  '3-1-2': 'minmax(0, 3fr) minmax(0, 1fr) minmax(0, 2fr)',
		  '1-4-1': 'minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr)',
		  '1-1-4': 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 4fr)',
		  '4-1-1': 'minmax(0, 4fr) minmax(0, 1fr) minmax(0, 1fr)',
	  },
	},
  },
});

module.exports = flowtitudeBasic;
