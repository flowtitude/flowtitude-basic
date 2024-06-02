// base.js
const base = (theme) => ({
	'html': {
		overflowX: 'hidden',
		fontSize: '100%',
	},
	'body': {
		fontFamily: 'var(--ft-font-body)',
		fontSize: 'var(--ft-text-base)',
		background: '#fff',
		color: 'var(--ft-color-text)',
		scrollBehavior: 'smooth',
	},
	'*': { 
		boxSizing: 'border-box',
		borderWidth: '0', 
		borderStyle: 'solid', 
		borderColor: 'var(--color-secondary-500)' 
	},
	'*::before': { 
		boxSizing: 'border-box',
		borderWidth: '0', 
		borderStyle: 'solid', 
		borderColor: 'var(--color-secondary-500)'
	},
	  '*::after': { 
		boxSizing: 'border-box',
		borderWidth: '0', 
		borderStyle: 'solid', 
		borderColor: 'var(--color-secondary-500)' 
	},
	'section': {
		paddingInline: 'var(--ft-space-md)',
		paddingBlock:  'var(--ft-space-xs)',
	},
	'section > [class*=brxe-]': {
		marginInline: 'auto',
		maxWidth: 'var(--ft-container)',
	},
	'#brx-content': {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	'h1, h2, h3, h4, h5, h6': {
		overflowWrap: 'break-word',
		fontFamily: 'var(--ft-font-display)',
		fontWeight: '700',
		textWrap: 'balance',
		letterSpacing: 'var(--tracking-tight)',
	},
	'h1': {
		fontSize: 'var(--text-4xl)',
		lineHeight: 'var(--leading-none)',
		marginBlock: 'var(--space-3)',
	},
	'h2': {
		fontSize: 'var(--text-3xl)',
		lineHeight: 'var(--leading-none)',
		marginBlock: 'var(--space-2)',
	},
	'h3': {
		fontSize: 'var(--text-2xl)',
		lineHeight: 'var(--leading-none)',
		marginBlock: 'var(--space-1)',
	},
	'h4': {
		fontSize: 'var(--text-xl)',
		lineHeight: 'var(--leading-tight)',
		marginBlock: 'var(--space-1)',
	},
	'h5': {
		fontSize: 'var(--text-lg)',
		lineHeight: 'var(--leading-tight)',
		marginBlock: 'var(--space-1)',
	} ,
	'h6': {
		fontSize: 'var(--text-base)',
		lineHeight: 'var(--leading-tight)',
		marginBlock: 'var(--space-1)',
	},
	'p': {
		marginBlock: 'var(--space-sm)',
	},
	'p + p': {
		marginTop: '0.5rem',
	},
	 'p:first-child': {
		marginTop: '0',
	},
	'p:last-child': {
		marginBottom: '0',
	},
	'h1 + h2, h1 + h3, h1 + h4, h1 + h5, h1 + h6, h2 + h3, h2 + h4, h2 + h5, h2 + h6, h3 + h4, h3 + h5, h3 + h6, h4 + h5, h4 + h6, h5 + h6': {
		marginTop: '0',
	},
	'img': {
		maxWidth: '100%',
		height: 'auto',
		marginBlock: 'var(--space-sm)',
	},
	 'a': {
		color: 'var(--color-primary-500, #1a202c)',
		textDecoration: 'none',
	},
	'a:hover': {
		textDecoration: 'underline',
	},
	'ul, ol': {
		marginBlock: 'var(--space-sm)',
		paddingInlineStart: '1.25rem',
	},
	'ul ul, ul ol, ol ul, ol ol': {
		marginBlock: '0',
	},
	'li': {
		marginBlock: 'calc(var(--space-sm) / 2)',
	},
	'blockquote': {
		borderLeft: '4px solid var(--color-secondary-500)',
		paddingLeft: 'var(--space-sm)',
		marginBlock: 'var(--space-sm)',
		fontStyle: 'italic',
		color: 'var(--color-secondary-700, #6b7280)',
	},
	'code': {
		fontFamily: 'var(--ft-font-mono, monospace)',
		backgroundColor: 'var(--color-gray-100, #f7fafc)',
		padding: '0.2rem 0.4rem',
		borderRadius: 'var(--rounded-sm)',
	},
	'pre': {
		fontFamily: 'var(--ft-font-mono, monospace)',
		backgroundColor: 'var(--color-gray-100, #f7fafc)',
		padding: 'var(--space-sm)',
		borderRadius: 'var(--rounded-md)',
		overflowX: 'auto',
	},
	'table': {
		width: '100%',
		borderCollapse: 'collapse',
		marginBlock: 'var(--space-sm)',
	},
	'th, td': {
		padding: '0.75rem',
		border: '1px solid var(--color-secondary-200)',
	},
	'th': {
		backgroundColor: 'var(--color-secondary-100)',
		fontWeight: '600',
		textAlign: 'left',
	},
	'tbody tr:nth-child(odd)': {
		backgroundColor: 'var(--color-secondary-50)',
	}
 });
  module.exports = base;



  