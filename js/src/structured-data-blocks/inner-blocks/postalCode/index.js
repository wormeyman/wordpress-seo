/* External dependencies */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/* Internal dependencies */
import { NAME as ADDRESS } from "../address";
import { CATEGORY } from "../../constants";
import PostalCode from "./PostalCode";

const attributes = {
	postalCode: {
		type: "string",
	},
};

export const NAME = "yoast/postalcode";

export default () => {
	registerBlockType( NAME, {
		title: __( "Postal code", "wordpress-seo" ),
		description: __( "An address postal code", "wordpress-seo" ),
		icon: "admin-site",
		category: CATEGORY,
		keywords: [
			__( "Postal Code", "wordpress-seo" ),
		],
		parent: [ ADDRESS ],
		// Allow only one PostalCode block per post.
		supports: {
			multiple: false,
		},
		// Block attributes - decides what to save and how to parse it from and to HTML.
		attributes,

		edit: PostalCode,
		save: PostalCode.Content,
	} );
};
