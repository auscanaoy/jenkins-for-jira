import React, { Fragment, useState } from 'react';
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import {
	Field,
	HelperMessage
} from '@atlaskit/form';
import WatchIcon from '@atlaskit/icon/glyph/watch';
import {
	StyledWatchIcon,
	StyledInputHeaderContainer,
	textfieldContainer
} from '../../JenkinsConfigurationForm.styles';
import { FormTooltip } from '../../../Tooltip/Tooltip';

type ServerConfigurationFormSecretProps = {
	secret: string;
	setShowConfirmRefreshSecret: (error: boolean) => boolean | void;
};

const ServerConfigurationFormSecret = ({
	secret,
	setShowConfirmRefreshSecret
}: ServerConfigurationFormSecretProps) => {
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	const togglePassword = () => {
		setPasswordIsVisible(!passwordIsVisible);
	};

	const onClickRefresh = async () => {
		setShowConfirmRefreshSecret(true);
	};

	return (
		<Fragment>
			<StyledInputHeaderContainer>
				<h3>Secret</h3>
				<FormTooltip
					content={
						<span>
							On your Jenkins server, navigate to{' '}
							<b>Manage Jenkins {'>'} Configure system.</b> Find the{' '}
							<b>Jira Software Cloud Integration</b> plugin and create a
							Jira Cloud site with this secret. Choose <b>Secret text</b>{' '}
							as the kind of secret.
						</span>
					}
					label='Secret'
				/>
			</StyledInputHeaderContainer>

			<Field
				label='Unique secret'
				name='server-secret-label'
			>
				{() => (
					<>
						<div className={textfieldContainer}>
							<Textfield
								name='server-secret'
								type={passwordIsVisible ? 'text' : 'password'}
								aria-label='server secret field'
								value={secret}
								readOnly
								testId='server-secret'
								elemAfterInput={
									<StyledWatchIcon
										onClick={togglePassword}
										data-testid='watch-icon'
									>
										<WatchIcon label='Toggle Password View' />
									</StyledWatchIcon>
								}
								isCompact
							/>
							<Button
								onClick={() => onClickRefresh()}
								testId='openRefreshModal'
							>
								Refresh
							</Button>
						</div>

						<HelperMessage>
							Copy and paste this secret into Jenkins to retrieve your build or deployment data.{' '}
							Click refresh to generate a new secret.
						</HelperMessage>
					</>
				)}
			</Field>
		</Fragment>
	);
};

export { ServerConfigurationFormSecret };
