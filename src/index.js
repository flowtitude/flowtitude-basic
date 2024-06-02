const plugin 		= require('tailwindcss/plugin');
const variables 	= require('./css/variables');
const base 			= require('./css/base');
const utilities 	= require('./css/utilities');
const components	= require('./css/components');
const theme 		= require('./theme');

const flowtitude = plugin(function({ addUtilities, matchUtilities, addComponents, addBase, theme}) {
  function extractVars(obj, group = '', prefix) {
	  return Object.keys(obj).reduce((vars, key) => {
		const value = obj[key];
		key = key.replaceAll('.', '_').replaceAll('/', '__');
  
		const cssVariable = key === "DEFAULT" ? `--${prefix}${group}` : `--${prefix}${group}-${key}`;
  
		const newVars =
		  typeof value === 'string'
			? { [cssVariable]: value }
			: extractVars(value, `-${key}`, prefix);
  
		return { ...vars, ...newVars };
	  }, {});
	}
  
  // Importar variables CSS
  addBase({
	':root': variables
  });
  
  addBase({
	  ':root': {
		...extractVars(theme('colors'), '', 'color'),
		...extractVars(theme('fontSize'), '', 'text'),
		...extractVars(theme('screens'), '', 'screen'),
		...extractVars(theme('fontWeight'), '', 'font'),
		...extractVars(theme('lineHeight'), '', 'leading'),
		...extractVars(theme('letterSpacing'), '', 'tracking'),
		...extractVars(theme('borderWidth'), '', 'border'),
		...extractVars(theme('borderRadius'), '', 'rounded'),
		...extractVars(theme('width'), '', 'space'),
		...extractVars(theme('minWidth'), '', 'min-space'),
		...extractVars(theme('maxWidth'), '', 'max-space'),
		...extractVars(theme('zIndex'), '', 'z'),
		...extractVars(theme('opacity'), '', 'opacity'),
	  }
	});
  
  addBase(base);

  // Importar utilidades CSS
  addUtilities(utilities, ['responsive', 'hover']);

  // Importar componentes CSS
  addComponents(components);
  
  const singleTimeline = value => {
	let customNameTimeline = value
	if (value.startsWith('var(')) customNameTimeline = value.slice(4, -1)
  
	return customNameTimeline
  }
  
  const dynamicUtils = {
	'animate-delay': { css: 'animation-delay', values: theme('animationDelay') },
	'animate-duration': { css: 'animation-duration', values: theme('animationDuration') },
	'animate-iteration-count': { css: 'animation-iteration-count', values: theme('animationIterationCount') },
	'animate-fill-mode': { css: 'animation-fill-mode', values: theme('animationFillMode') },
	'animate-bezier': { css: 'animation-timing-function', values: theme('animationCubicBezier') },
	'animate-steps': { css: 'animation-timing-function', values: theme('animationSteps'), generateValue: value => `steps(${value})` },
	'animate-range': { css: 'animation-range', values: theme('animationRange'), generateValue: value => value },
	timeline: { css: 'animation-timeline', values: theme('timeline'), generateValue: value => singleTimeline(value) },
	'scroll-timeline': { css: 'scroll-timeline-name', values: theme('scrollTimeline'), generateValue: (value) => singleTimeline(value) },
	'view-timeline': { css: 'view-timeline-name', values: theme('viewTimeline'), generateValue: (value) => singleTimeline(value) },
	'scroll-timeline-axis': { css: 'scroll-timeline-axis', values: theme('scrollTimelineAxis') },
	'view-timeline-axis': { css: 'view-timeline-axis', values: theme('viewTimelineAxis') },
	'scroll-animate': { css: 'scroll-timeline-name', values: theme('scrollTimeline'), generateValue: (value) => `${singleTimeline(value)};\n  animation-timeline: ${singleTimeline(value)}` },
	'view-animate': { css: 'view-timeline-name', values: theme('viewTimeline'), generateValue: (value) => `${singleTimeline(value)};\n  animation-timeline: ${singleTimeline(value)}` }
  }
  
  Object.entries(dynamicUtils).forEach(([name, { css, values, generateValue }]) => {
	matchUtilities({
	  [name]: value => ({
		[css]: generateValue ? generateValue(value) : value
	  })
	}, {
	  values
	})
  })


}, theme);

module.exports = flowtitude;