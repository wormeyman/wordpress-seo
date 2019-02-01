/* External dependencies */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/* Internal dependencies */
import { NAME as ADDRESS } from "../address";
import { CATEGORY } from "../../constants";
import StreetAddress from "./StreetAddress";

const attributes = {
	StreetAddress: {
		type: "string",
	},
};

export const NAME = "yoast/streetaddress";

export default () => {
	registerBlockType( NAME, {
		title: __( "Street Address", "wordpress-seo" ),
		description: __( "A street address", "wordpress-seo" ),
		icon: "admin-site",
		category: CATEGORY,
		keywords: [
			__( "Street address", "wordpress-seo" ),
			__( "Address", "wordpress-seo" ),
		],
		parent: [ ADDRESS ],
		// Allow only one StreetAddress block per post.
		supports: {
			multiple: false,
		},
		// Block attributes - decides what to save and how to parse it from and to HTML.
		attributes,

		edit: StreetAddress,
		save: StreetAddress.Content,
	} );
};
