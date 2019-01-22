/* External dependencies */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/* Internal dependencies */
import Jobs from "./Jobs";
import { CATEGORY } from "../constants";

export const NAME = "yoast/jobs-block";

export default () => {
	registerBlockType( NAME, {
		title: __( "Jobs", "yoast-jobs" ),
		description: __( "Create a Job page in an SEO-friendly way. You can only use one Job block per post.", "yoast-jobs" ),
		icon: "businessman",
		category: CATEGORY,
		keywords: [
			__( "Yoast", "wordpress-seo" ),
			__( "Jobs", "wordpress-seo" ),
		],
		// Allow only one Jobs block per post.
		supports: {
			multiple: false,
		},
		edit: Jobs,
		save: Jobs.Content,
	} );
};
