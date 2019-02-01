/* External dependencies */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/* Internal dependencies */
import { NAME as JOBS } from "../../inner-blocks-jobs/block";
import Address from "./Address";
import { CATEGORY } from "../../constants";

export const NAME = "yoast/address";

export default () => {
	registerBlockType( NAME, {
		title: __( "Address", "wordpress-seo" ),
		description: __( "Address", "wordpress-seo" ),
		icon: "editor-ol",
		category: CATEGORY,
		keywords: [
			__( "Address", "wordpress-seo" ),
		],
		parent: [ JOBS ],
		// Allow only one Address block per post.
		supports: {},

		edit: Address,
		save: Address.Content,
	} );
};
