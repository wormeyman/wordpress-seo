/* External dependencies */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/* Internal dependencies */
import { NAME as JOBS } from "../../inner-blocks-jobs/block";
import { CATEGORY } from "../../constants";
import RemoteJob from "./RemoteJob";

const attributes = {
	jobLocationType: {
		type: "string",
	},
	applicantLocationRequirements: {
		type: "string",
	},
};

export const NAME = "yoast/remotejob";

export default () => {
	registerBlockType( NAME, {
		title: __( "Remote Job", "wordpress-seo" ),
		description: __( "A Remote Job block", "wordpress-seo" ),
		icon: "image-filter",
		category: CATEGORY,
		keywords: [
			__( "Remote Job", "wordpress-seo" ),
			__( "Remote", "wordpress-seo" ),
		],
		parent: [ JOBS ],
		supports: {
			multiple: false,
		},
		// Block attributes - decides what to save and how to parse it from and to HTML.
		attributes,

		edit: RemoteJob,
		save: RemoteJob.Content,
	} );
};
