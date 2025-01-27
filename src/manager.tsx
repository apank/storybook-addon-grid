import addons, { types } from '@storybook/addons';
import { Tools } from './components/Tools';
import { ADDON_ID, PARAM_KEY, PANEL_ID } from './constants';

addons.register(ADDON_ID, () => {
	addons.add(PANEL_ID, {
		title: '',
		type: types.TOOL,
		paramKey: PARAM_KEY,
		match: ({ viewMode }) => viewMode === 'story',
		render: Tools,
	});
});
