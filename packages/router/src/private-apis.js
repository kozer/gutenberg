/**
 * WordPress dependencies
 */
import { __dangerousOptInToUnstableAPIsOnlyForCoreModules } from '@wordpress/private-apis';

/**
 * Internal dependencies
 */
import { useHistory, useLocation, RouterProvider } from './router';

export const { lock, unlock } =
	__dangerousOptInToUnstableAPIsOnlyForCoreModules(
		'I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.',
		'@wordpress/router'
	);

export const privateApis = {};
lock( privateApis, {
	useHistory,
	useLocation,
	RouterProvider,
} );
