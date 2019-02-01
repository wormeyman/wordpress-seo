/* External dependencies */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/* Internal dependencies */
import { NAME as ADDRESS } from "../address";
import { CATEGORY } from "../../constants";
import AddressRegion from "./AddressRegion";

const attributes = {
	addressLocality: {
		type: "string",
	},
};

export const NAME = "yoast/addressregion";

export default () => {
	registerBlockType( NAME, {
		title: __( "Province, State or Region", "wordpress-seo" ),
		description: __( "A province, state or region address", "wordpress-seo" ),
		icon: "admin-site",
		category: CATEGORY,
		keywords: [
			__( "Province", "wordpress-seo" ),
			__( "State", "wordpress-seo" ),
			__( "Region", "wordpress-seo" ),
		],
		parent: [ ADDRESS ],
		// Allow only one AddressLocality block per post.
		supports: {
			multiple: false,
		},
		// Block attributes - decides what to save and how to parse it from and to HTML.
		attributes,

		edit: AddressRegion,
		save: AddressRegion.Content,
	} );
};
