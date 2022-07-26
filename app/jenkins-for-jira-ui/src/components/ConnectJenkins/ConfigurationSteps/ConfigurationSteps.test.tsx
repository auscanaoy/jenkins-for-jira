import React from 'react';
import { render, screen } from '@testing-library/react';

import { ConfigurationSteps } from './ConfigurationSteps';

// Note: Using getByText() in this test as AtlasKit does not give you the ability to attach a testId to the elements.

describe('ConfigurationSteps Page Suite', () => {
	it('Should render three stages', () => {
		render(<ConfigurationSteps currentStage="install" />);
		expect(screen.getByText('Install plugin')).toBeInTheDocument();
		expect(screen.getByText('Create server')).toBeInTheDocument();
		expect(screen.getByText('Connect server')).toBeInTheDocument();
	});

	it('Should render correctly with install as currentStage', () => {
		render(<ConfigurationSteps currentStage="install" />);
		const InstallJenkinsStep = screen.getByText('Install plugin');
		const CreateServerStep = screen.getByText('Create server');
		const ConnectServerStep = screen.getByText('Connect server');
		expect(InstallJenkinsStep).toHaveAttribute('style', 'color: rgb(0, 101, 255); font-weight: 600;');
		expect(CreateServerStep).toHaveAttribute('style', 'color: rgb(94, 108, 132); font-weight: 400;');
		expect(ConnectServerStep).toHaveAttribute('style', 'color: rgb(94, 108, 132); font-weight: 400;');
	});

	it('Should render correctly with create as currentStage', () => {
		render(<ConfigurationSteps currentStage="create" />);
		const InstallJenkinsStepParentContainer = screen.getByText('Install plugin').closest('div');
		const CreateServerStep = screen.getByText('Create server');
		const ConnectServerStep = screen.getByText('Connect server');

		// Visited steps are styled via parent container
		expect(InstallJenkinsStepParentContainer).toHaveAttribute('style', 'color: rgb(23, 43, 77); font-weight: 600;');
		expect(CreateServerStep).toHaveAttribute('style', 'color: rgb(0, 101, 255); font-weight: 600;');
		expect(ConnectServerStep).toHaveAttribute('style', 'color: rgb(94, 108, 132); font-weight: 400;');
	});

	it('Should render correctly with connect as currentStage', () => {
		render(<ConfigurationSteps currentStage="connect" />);
		const InstallJenkinsStepParentContainer = screen.getByText('Install plugin').closest('div');
		const CreateServerStepParentContainer = screen.getByText('Create server').closest('div');
		const ConnectServerStep = screen.getByText('Connect server');

		// Visited steps are styled via parent container
		expect(InstallJenkinsStepParentContainer).toHaveAttribute('style', 'color: rgb(23, 43, 77); font-weight: 600;');
		expect(CreateServerStepParentContainer).toHaveAttribute('style', 'color: rgb(23, 43, 77); font-weight: 600;');
		expect(ConnectServerStep).toHaveAttribute('style', 'color: rgb(0, 101, 255); font-weight: 600;');
	});
});
