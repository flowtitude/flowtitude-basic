// utilities.js
const utilities = {
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
	'.rotate-y-180': {
	  transform: 'rotateY(180deg)',
	},
	'.rotate-y-180-inverse': {
	  transform: 'rotateY(-180deg)',
	},
	'.\-rotate-y-180': {
	  transform: 'rotateY(-180deg)',
	},
	'.rotate-x-180': {
	  transform: 'rotateX(180deg)',
	},
	'.\-rotate-x-180': {
	  transform: 'rotateX(-180deg)',
	},
	'.rotate-x-180-inverse': {
	  transform: 'rotateX(-180deg)',
	},
	'.animate-ease': {
	  'animation-timing-function': 'ease'
	},
	'.animate-ease-in': {
	  'animation-timing-function': 'ease-in'
	},
	'.animate-ease-out': {
	  'animation-timing-function': 'ease-out'
	},
	'.animate-ease-in-out': {
	  'animation-timing-function': 'ease-in-out'
	},
	'.animate-linear': {
	  'animation-timing-function': 'linear'
	},
	'.animate-direction-normal': {
	  'animation-direction': 'normal'
	},
	'.animate-direction-reverse': {
	  'animation-direction': 'reverse'
	},
	'.animate-direction-alternate': {
	  'animation-direction': 'alternate'
	},
	'.animate-direction-alternate-reverse': {
	  'animation-direction': 'alternate-reverse'
	},
	'.animate-play-running': {
	  'animation-play-state': 'running'
	},
	'.animate-play-paused': {
	  'animation-play-state': 'paused'
	},
	'.content-visibility': {
	  contentVisibility: 'auto',
	},
  };
  
  module.exports = utilities;