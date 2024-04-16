const plugin = require('tailwindcss/plugin');

const flowtitude = plugin(function({ addUtilities, theme, addComponents, addBase, e }) {
  // Añadir variables CSS
  addBase({
	':root': {
	  '--ft-text-xs':   'clamp(0.69rem, calc(-0.087cqi + 0.7096rem), 0.64rem )',
	  '--ft-text-sm':   'clamp(0.83rem, calc(-0.0522cqi + 0.8417rem), 0.8rem )',
	  '--ft-text-base': 'clamp(1rem, calc(0cqi + 1rem), 1rem )',
	  '--ft-text-lg':   'clamp(1.2rem, calc(0.087cqi + 1.1804rem), 1.25rem )',
	  '--ft-text-xl':   'clamp(1.44rem, calc(0.2087cqi + 1.393rem), 1.56rem )',
	  '--ft-text-2xl':  'clamp(1.73rem, calc(0.3826cqi + 1.6439rem), 1.95rem )',
	  '--ft-text-3xl':  'clamp(2.07rem, calc(0.6435cqi + 1.9252rem), 2.44rem )',
	  '--ft-text-4xl':  'clamp(2.49rem, calc(0.9739cqi + 2.2709rem), 3.05rem )',
	  '--ft-text-5xl':  'clamp(2.99rem, calc(1.4261cqi + 2.6691rem), 3.81rem )',
	  '--ft-text-6xl':  'clamp(3.58rem, calc(2.0696cqi + 3.1143rem), 4.77rem )',
	  '--ft-text-7xl':  'clamp(4.3rem, calc(2.887cqi + 3.6504rem), 5.96rem )',
	  '--ft-text-8xl':  'clamp(5.16rem, calc(3.9826cqi + 4.2639rem), 7.45rem )',
	  '--ft-text-9xl':  'clamp(6.19rem, calc(5.4261cqi + 4.9691rem), 9.31rem )',
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
	  '--ft-space-jumbotron': 	'clamp(6.19rem, calc(13.5304cqi + 3.1457rem), 13.97rem )',
	  '--ft-rounded-custom': 	'1.5rem',
	  '--ft-border-custom': 	'0.8rem',
	  '--ft-container':         '80rem',
	  '--ft-content-space':     'min(var(--ft-container), 90%)',
	  '--ft-wide-space':        'min(var(--ft-space-jumbotron), 5%)',
	  '--ft-padding-content-x': '1rem',
	  '--ft-padding-content-y': '1rem',
	  '--ft-gap-content':       'var(--ft-space-md)',
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
	},
	'.flip-w': {
	  transform: 'scaleX(-1)',
	},
	'.flip-h': {
	  transform: 'scaleY(-1)',
	},
	'.preserve-3d': {
	  transformStyle: 'preserve-3d',
	},
	'.perspective': {
	  perspective: '1000px',
	},
	'.backface-hidden': {
	  backfaceVisibility: 'hidden',
	},
	'.my-rotate-y-180': {
	  transform: 'rotateY(180deg)',
	},
	'.content-visibility': {
	  contentVisibility: 'auto',
	},
  };

  addUtilities(flowtitudeUtilities, ['responsive', 'hover']);

  // Añadir componentes personalizados
  const flowtitudeComponents = {
	'.btn': {
	  paddingInline: '2em',
	  paddingBlock:  '0.75em',
	  borderRadius: 'var(--ft-custom-rounded)',
	  fontWeight: '500',
	  fontSize: 'var(--text-base)',
	  backgroundColor: 'var(--color-primary-500)',
	  transition: 'all 500ms ease',
	  color: '#fff',
	  '&:hover': {
		backgroundColor: 'var(--color-primary-600)',
	  }  
	},
	'.btn-outline': {
	  paddingInline: '2em',
	  paddingBlock:  '0.75em',
	  borderRadius:  'var(--ft-rounded-custom)',
	  borderWidth:   '2px',
	  borderStyle:   'solid',
	  borderColor:   'var(--color-primary-500)',
	  fontWeight: '500',
	  fontSize: 'var(--text-base)',
	  transition: 'all 500ms ease',
	  '&:hover': {
		backgroundColor: 'var(--color-primary-600)',
		color: 'var(--color-white)',
	  }  
	}, 
	'.btn-link': {
	  fontWeight: '500',
	  fontSize: 'var(--text-base)',
	  transition: 'all 500ms ease',
	  paddingInline: '2em',
	  paddingBlock:  '0.75em',
	},
	'.click-parent a': {
	  outline: 'none !important',
	},
	'.click-parent a::after': {
	  content: '""',
	  position: 'absolute',
	  cursor: 'pointer',
	  zIndex: '10',
	  width: '100%',
	  height: '100%',
	  top: '0',
	  left: '0',
	},
	'.focus-from-child': {
	  position: 'relative',
	  transition: 'all 700ms !important',
	},
	'.focus-from-child:focus-within': {
	  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
	  backgroundColor: 'var(--ft-neutral-100)',
	  outline: '2px solid transparent',
	  outlineOffset: '2px',
	  borderColor: 'var(--color-primary-500)',
	},
	'.bg-image': {
	  position: 'absolute',
	  top: '0',
	  left: '0',
	  width: '100%',
	  height: '100%',
	  zIndex: '-10',
	  objectFit: 'cover',
	}
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
	  borderRadius: {
		  'custom': 'var(--ft-rounded-custom)',
	  },
	  borderWidth: {
		  '3': 		'3px',
		  '5': 		'5px',
		  '6': 		'6px',
		  '7': 		'7px',
		  'custom':	'var(--ft-border-custom)',
	  },
	  
	},
  },
});

module.exports = flowtitude;