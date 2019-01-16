/* External dependencies */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/* Internal dependencies */
import FAQ from "./FAQ";
import { CATEGORY } from "../constants";

export const NAME = "yoast/faq-block-inner-blocks";

export default () => {
	registerBlockType( NAME, {
		title: __( "FAQ", "wordpress-seo" ),
		description: __( "List your Frequently Asked Questions in an SEO-friendly way. You can only use one FAQ block per post.", "wordpress-seo" ),
		icon: "editor-ul",
		category: CATEGORY,
		keywords: [
			__( "FAQ", "wordpress-seo" ),
			__( "Frequently Asked Questions", "wordpress-seo" ),
		],
		// Allow only one FAQ block per post.
		supports: {
			multiple: false,
		},
		edit: FAQ,
		save: FAQ.Content,
	} );
};
