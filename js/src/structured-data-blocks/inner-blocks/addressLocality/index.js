/* External dependencies */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/* Internal dependencies */
import { NAME as ADDRESS } from "../address";
import { CATEGORY } from "../../constants";
import AddressLocality from "./AddressLocality";

const attributes = {
	addressLocality: {
		type: "string",
	},
};

export const NAME = "yoast/addresslocality";

export default () => {
	registerBlockType( NAME, {
		title: __( "City", "wordpress-seo" ),
		description: __( "A city address", "wordpress-seo" ),
		icon: "admin-site",
		category: CATEGORY,
		keywords: [
			__( "City", "wordpress-seo" ),
		],
		parent: [ ADDRESS ],
		// Allow only one AddressLocality block per post.
		supports: {
			multiple: false,
		},
		// Block attributes - decides what to save and how to parse it from and to HTML.
		attributes,

		edit: AddressLocality,
		save: AddressLocality.Content,
	} );
};
