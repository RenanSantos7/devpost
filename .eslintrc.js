module.exports = {
  root: true,
  extends: '@react-native',
  rules: [
    'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
'indent': ['error', 'tab' ],
'sort-imports': [
	'error',
	{
		'ignoreCase': true,
		'ignoreDeclarationSort': false,
		'ignoreMemberSort': false,
		'memberSyntaxSortOrder': ['none', 'all', 'single', 'multiple'],
	}
],
  ]
};
