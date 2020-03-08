'use strict';
const React = require('react');
const {Box, Text} = require('ink');
const SelectInput = require('ink-select-input').default;
const open = require('open');

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const createItems = items => {
	for (const item of items) {
		item.key = item.url || item.label;
	}

	return items;
};

const items = createItems([
	{
		label: 'Website',
		url: 'https://moke.dev/'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/uechan9220'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/mokeeemokeee'
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: '---------'
	},
	{
		label: 'Quit',
		action() {
			process.exit(1);
		}
	}
]);

module.exports = () => (
	<Box flexDirection="column">
		<Box marginBottom={1}>
			<Text bold>I am a Web FrontEnd developer💻</Text>
		</Box>
		<SelectInput items={items} onSelect={handleSelect}/>
	</Box>
);
