import { render, screen } from '@testing-library/react';
import PresetList from './PresetList';

test('render preset list', () => {
    var presets = [{
        id: 1,
        accountId: 1,
        presetName: 'React Preset Test1'
    }];

    render(<PresetList presets={presets}/>);
    const linkElement = screen.getByText(/React Preset Test1/);
    expect(linkElement).toBeInTheDocument();
});