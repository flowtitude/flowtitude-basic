// variables.js
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
  module.exports = flowtitudeComponents;