const contentColumns = 6;

const generateGridClasses = (prefix, startLabel, endLabel, startColumn, endColumn) => {
  const classes = {};
  for (let i = 1; i <= contentColumns; i++) {
  for (let j = i + 1; j <= contentColumns; j++) {
    classes[`.${prefix}-${startLabel}-${i}-${endLabel}-${j}`] = {
    gridColumn: `${startColumn} ${i} / ${endColumn} ${j}`,
    };
  }
  }
  return classes;
};

const utilityClasses = {
  ...generateGridClasses('start-content', 'content', 'content', 'col-start', 'col-end'),
  ...generateGridClasses('start-full', 'full', 'content', 'full-start', 'col-end'),
  ...generateGridClasses('start-wide', 'wide', 'content', 'wide-start', 'col-end'),
  ...generateGridClasses('start-content', 'content', 'wide', 'col-start', 'wide-end'),
};

const components = {
	'.btn': {
    paddingInline: '2em',
    paddingBlock: '0.75em',
    borderRadius: 'var(--ft-rounded-button)',
    fontWeight: '500',
    fontSize: 'var(--text-base)',
    backgroundColor: 'var(--color-primary-500)',
    transition: 'all 500ms ease',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '0.5em',
    minWidth: 'fit-content',
    '&:hover': {
      backgroundColor: 'var(--color-primary-600)',
    }
  },
  '.btn--secondary': {
    paddingInline: '2em',
    paddingBlock: '0.75em',
    borderRadius: 'var(--ft-rounded-button)',
    fontWeight: '500',
    fontSize: 'var(--text-base)',
    backgroundColor: 'var(--color-secondary-500)',
    transition: 'all 500ms ease',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '0.5em',
    minWidth: 'fit-content',
    '&:hover': {
      backgroundColor: 'var(--color-secondary-600)',
    }
  },
	'.btn-outline': {
	  paddingInline: '2em',
	  paddingBlock:  '0.75em',
	  borderRadius:  'var(--ft-rounded-button)',
	  borderWidth:   '2px',
	  borderStyle:   'solid',
	  borderColor:   'var(--color-primary-500)',
	  fontWeight: '500',
	  fontSize: 'var(--text-base)',
	  transition: 'all 500ms ease',
	  display: 'flex',
	  flexDirection: 'row',
	  alignItems: 'center',
	  columnGap: '0.5em',
	  minWidth: 'fit-content',
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
	  borderColor: 'var(--color-secondary-500)',
	},
	'.bg-image': {
	  position: 'absolute',
	  top: '0',
	  left: '0',
	  width: '100%',
	  height: '100%',
	  zIndex: '-10',
	  objectFit: 'cover',
	},
  '.card': {
    '--ring-color': 'rgba(0 0 0 0.1)',
    '--hue': '302',
    '--primary': 'hsl(var(--hue), 66%, 44%)',
    '--gradient': 'linear-gradient(145deg, hsla(var(--hue), 10%, 60%, 0.7), hsla(var(--hue), 10%, 100%, 0.5))',
    borderRadius: 'var(--ft-rounded-card)',
    isolation: 'isolate',
    background: 'var(--gradient)',
    backdropFilter: 'blur(4px)',
    boxShadow: 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--ring-color)',
    padding: 'var(--ft-space-sm)',
  },
  '.card--amber': {
    '--ring-color': 'rgba(0 0 0 0.1)',
    '--hue': '37',
    '--primary': 'hsl(var(--hue), 66%, 44%)',
    '--gradient': 'linear-gradient(145deg, hsla(var(--hue), 90%, 50%, 0.7), hsla(var(--hue), 10%, 100%, 0.5))',
    borderRadius: 'var(--ft-rounded-card)',
    isolation: 'isolate',
    background: 'var(--gradient)',
    backdropFilter: 'blur(4px)',
    boxShadow: 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--ring-color)',
  },
  '.card--indigo': {
    '--ring-color': 'rgba(0 0 0 0.1)',
    '--hue': '238',
    '--primary': 'hsl(var(--hue), 66%, 44%)',
    '--gradient': 'linear-gradient(145deg, hsla(var(--hue), 80%, 60%, 0.7), hsla(var(--hue), 10%, 100%, 0.5))',
    borderRadius: 'var(--ft-rounded-card)',
    isolation: 'isolate',
    background: 'var(--gradient)',
    backdropFilter: 'blur(4px)',
    boxShadow: 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--ring-color)',
  },
  '.card--lighten': {
    backgroundColor: 'rgb(255 255 255 / 0.25)',
  },
  '.card--darken': {
    backgroundColor: 'rgb(0 0 0 / 0.25)',
  },
  '.content-grid': {
    display: 'grid',
    'min-width': '100%',
    gridTemplateColumns: `
      [full-start] 1fr
      [wide-start] var(--ft-wide-space)
      [content-start] repeat(6, [col-start] minmax(0, 1fr) [col-end])
      [content-end] var(--ft-wide-space)
      [wide-end] 1fr
      [full-end]
    `,
    gap: 'var(--ft-gap-content, 1rem)', // Ajusta el espacio entre elementos
  },
	'.content-grid > *': {
		gridColumn: 'content',
	},
	'.content-grid > .content-wide': {
		gridColumn: 'wide',
	},
	'.content-grid > .content-full': {
		gridColumn: 'full',
	},
	'.content-grid > .content-1-2': {
		gridColumn: 'full-start / wide-start',
	},
	'.content-grid > .content-1-3': {
		gridColumn: 'full-start / content-start',
	},
	'.content-grid > .content-1-4': {
		gridColumn: 'full-start / content-end',
	},
	'.content-grid > .content-1-5': {
		gridColumn: 'full-start / wide-end',
	},
	'.content-grid > .content-1-6': {
		gridColumn: 'full-start / full-end',
	},
	'.content-grid > .content-2-3': {
		gridColumn: 'wide-start / content-start',
	},
	'.content-grid > .content-2-4': {
		gridColumn: 'wide-start / content-end',
	},
	'.content-grid > .content-2-5': {
		gridColumn: 'wide-start / wide-end',
	},
	'.content-grid > .content-2-6': {
		gridColumn: 'wide-start / full-end',
	},
	'.content-grid > .content-3-4': {
		gridColumn: 'content-start / content-end',
	},
	'.content-grid > .content-3-5': {
		gridColumn: 'content-start / wide-end',
	},
	'.content-grid > .content-3-6': {
		gridColumn: 'content-start / full-end',
	},
	'.content-grid > .content-4-5': {
		gridColumn: 'content-end / wide-end',
	},
	'.content-grid > .content-4-6': {
		gridColumn: 'content-end / full-end',
	},
	'.content-grid > .content-5-6': {
		gridColumn: 'wide-end / full-end',
	},
  // Clases específicas para columnas
  '.content-1': {
    gridColumn: 'content-start / col-end 1',
  },
  '.content-2': {
    gridColumn: 'col-start 2 / col-end 2',
  },
  '.content-3': {
    gridColumn: 'col-start 3 / col-end 3',
  },
  '.content-4': {
    gridColumn: 'col-start 4 / col-end 4',
  },
  '.content-5': {
    gridColumn: 'col-start 5 / col-end 5',
  },
  '.content-6': {
    gridColumn: 'col-start 6 / col-end 6',
  },
  // Clases generadas dinámicamente para combinar el inicio o fin con elementos fuera del content
  ...utilityClasses,
	
	'@media screen and (max-width: 1000px)': {
		'.content-grid': {
			gridTemplateColumns: '1rem 1fr 1rem',
			gridTemplateAreas:
				`". content ."
				"full full full"
				". wide ."`,
		},
	},
 };
  module.exports = components;