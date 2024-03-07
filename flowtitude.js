// tailwind-plugin.js
const plugin = require('tailwindcss/plugin');

const flowtitude = plugin(function({ addUtilities, theme, addComponents, addBase, e }) {
  // Añadir variables CSS
  addBase({
	':root': {
	 '--ft-text-xs':   'clamp(0.69rem, calc(-0.087cqi + 0.7096rem), 0.64rem )';
	 '--ft-text-sm':   'clamp(0.83rem, calc(-0.0522cqi + 0.8417rem), 0.8rem )';
	 '--ft-text-base': 'clamp(1rem, calc(0cqi + 1rem), 1rem )';
	 '--ft-text-lg':   'clamp(1.2rem, calc(0.087cqi + 1.1804rem), 1.25rem )';
	 '--ft-text-xl':   'clamp(1.44rem, calc(0.2087cqi + 1.393rem), 1.56rem )';
	 '--ft-text-2xl':  'clamp(1.73rem, calc(0.3826cqi + 1.6439rem), 1.95rem )';
	 '--ft-text-3xl':  'clamp(2.07rem, calc(0.6435cqi + 1.9252rem), 2.44rem )';
	 '--ft-text-4xl':  'clamp(2.49rem, calc(0.9739cqi + 2.2709rem), 3.05rem )';
	 '--ft-text-5xl':  'clamp(2.99rem, calc(1.4261cqi + 2.6691rem), 3.81rem )';
	 '--ft-text-6xl':  'clamp(3.58rem, calc(2.0696cqi + 3.1143rem), 4.77rem )';
	 '--ft-text-7xl':  'clamp(4.3rem, calc(2.887cqi + 3.6504rem), 5.96rem )';
	 '--ft-text-8xl':  'clamp(5.16rem, calc(3.9826cqi + 4.2639rem), 7.45rem )';
	 '--ft-text-9xl':  'clamp(6.19rem, calc(5.4261cqi + 4.9691rem), 9.31rem )';
	 
	 '--ft-space-4xs': 'clamp(0.4rem, calc(0.1565cqi + 0.3648rem), 0.49rem )',
	 '--ft-space-3xs': 'clamp(0.48rem, calc(0.2261cqi + 0.4291rem), 0.61rem )',
	 '--ft-space-2xs': 'clamp(0.58rem, calc(0.3304cqi + 0.5057rem), 0.77rem )',
	 '--ft-space-xs':  'clamp(0.69rem, calc(0.4696cqi + 0.5843rem), 0.96rem )',
	 '--ft-space-sm':  'clamp(0.83rem, calc(0.6435cqi + 0.6852rem), 1.2rem )',
	 '--ft-space-md':  'clamp(1rem, calc(0.8696cqi + 0.8043rem), 1.5rem )',
	 '--ft-space-lg':  'clamp(1.2rem, calc(1.1826cqi + 0.9339rem), 1.88rem )',
	 '--ft-space-xl':  'clamp(1.44rem, calc(1.5652cqi + 1.0878rem), 2.34rem )',
	 '--ft-space-2xl': 'clamp(1.73rem, calc(2.087cqi + 1.2604rem), 2.93rem )',
	 '--ft-space-3xl': 'clamp(2.07rem, calc(2.7652cqi + 1.4478rem), 3.66rem )',
	 '--ft-space-4xl': 'clamp(2.49rem, calc(3.6348cqi + 1.6722rem), 4.58rem )',
	 '--ft-space-jumbotron': 'clamp(6.19rem, calc(13.5304cqi + 3.1457rem), 13.97rem )',
	 
	 '--ft-container':         '1280px',
	 '--ft-padding-content-x': '1rem',
	 '--ft-padding-content-y': '1rem',
	 '--ft-gap-content':	   '1.5rem',
	 
	 '--ft-card-xs': 'calc( (var(--ft-container) - (var(--ft-gap-content) * 5)) / 6 )',
	 '--ft-card-sm': 'calc( (var(--ft-container) - (var(--ft-gap-content) * 4)) / 5 )',
	 '--ft-card-md': 'calc( (var(--ft-container) - (var(--ft-gap-content) * 3)) / 4 )',
	 '--ft-card-lg': 'calc( (var(--ft-container) - (var(--ft-gap-content) * 2)) / 3 )',
	 '--ft-card-xl': 'calc( (var(--ft-container) - (var(--ft-gap-content) * 1)) / 2 )',
	}
  });

  // Añadir utilidades personalizadas
  
  const flowtitudeUtilities = {
	'.grid-auto-fit-xs': {
	  gridTemplateColumns: 'repeat(auto-fit, minmax(min(var(--ft-card-xs), 100%), 1fr))',
	},
	'.grid-auto-fit-sm': {
	  gridTemplateColumns: 'repeat(auto-fit, minmax(min(var(--ft-card-sm), 100%), 1fr))',
	},
	'.grid-auto-fit-md': {
	  gridTemplateColumns: 'repeat(auto-fit, minmax(min(var(--ft-card-md), 100%), 1fr))',
	},
	'.grid-auto-fit-lg': {
	  gridTemplateColumns: 'repeat(auto-fit, minmax(min(var(--ft-card-lg), 100%), 1fr))',
	},
	'.grid-auto-fit-xl': {
	  gridTemplateColumns: 'repeat(auto-fit, minmax(min(var(--ft-card-xl), 100%), 1fr))',
	},
	'.grid-auto-fill-xs': {
	  gridTemplateColumns: 'repeat(auto-fill, minmax(min(var(--ft-card-xs), 100%), 1fr))',
	},
	'.grid-auto-fill-sm': {
	  gridTemplateColumns: 'repeat(auto-fill, minmax(min(var(--ft-card-sm), 100%), 1fr))',
	},
	'.grid-auto-fill-md': {
	  gridTemplateColumns: 'repeat(auto-fill, minmax(min(var(--ft-card-md), 100%), 1fr))',
	},
	'.grid-auto-fill-lg': {
	  gridTemplateColumns: 'repeat(auto-fill, minmax(min(var(--ft-card-lg), 100%), 1fr))',
	},
	'.grid-auto-fill-xl': {
	  gridTemplateColumns: 'repeat(auto-fill, minmax(min(var(--ft-card-xl), 100%), 1fr))',
	}
  };

  addUtilities(flowtitudeUtilities, ['responsive', 'hover']);

  // Añadir componentes personalizados
  const flowtitudeComponents = {
	'.button': {
	  padding: '.5rem 1rem',
	  borderRadius: '.25rem',
	  fontWeight: '600',
	},
  };

  addComponents(flowtitudeComponents);

}, {
  theme: {
	fontSize: {
	   'xs': 'var(--ft-text-xs)',
	   'sm': 'var(--ft-text-sm)',
	   'base': 'var(--ft-text-base)',
	   'lg': 'var(--ft-text-lg)',
	   'xl': 'var(--ft-text-xl)',
	   '2xl': 'var(--ft-text-2xl)',
	   '3xl': 'var(--ft-text-3xl)',
	   '4xl': 'var(--ft-text-4xl)',
	   '5xl': 'var(--ft-text-5xl)',
	   '6xl': 'var(--ft-text-6xl)',
	   '7xl': 'var(--ft-text-7xl)',
	   '8xl': 'var(--ft-text-8xl)',
	   '9xl': 'var(--ft-text-9xl)',
	},
	
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

module.exports = flowtitude;
