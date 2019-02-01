/* External dependencies */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/* Internal dependencies */
import { NAME as ADDRESS } from "../address";
import { CATEGORY } from "../../constants";
import AddressCountry from "./AddressCountry";

const attributes = {
	addressCountry: {
		type: "string",
	},
};

export const NAME = "yoast/addresscountry";

export default () => {
	registerBlockType( NAME, {
		title: __( "Country", "wordpress-seo" ),
		description: __( "A country address", "wordpress-seo" ),
		icon: "admin-site",
		category: CATEGORY,
		keywords: [
			__( "Province", "wordpress-seo" ),
			__( "State", "wordpress-seo" ),
			__( "Region", "wordpress-seo" ),
		],
		parent: [ ADDRESS ],
		// Allow only one AddressCountry block per post.
		supports: {
			multiple: false,
		},
		// Block attributes - decides what to save and how to parse it from and to HTML.
		attributes,

		edit: AddressCountry,
		save: AddressCountry.Content,
	} );
};
