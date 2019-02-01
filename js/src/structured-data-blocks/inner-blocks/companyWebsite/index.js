/* External dependencies */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/* Internal dependencies */
import { NAME as JOBS } from "../../inner-blocks-jobs/block";
import { CATEGORY } from "../../constants";
import CompanyWebsite from "./CompanyWebsite";

export const NAME = "yoast/companywebsite";

export default () => {
	registerBlockType( NAME, {
		title: __( "Company Website", "wordpress-seo" ),
		description: __( "A job company website", "wordpress-seo" ),
		icon: "image-filter",
		category: CATEGORY,
		keywords: [
			__( "Company Website", "wordpress-seo" ),
			__( "Website", "wordpress-seo" ),

		],
		parent: [ JOBS ],
		supports: {
			multiple: false,
		},
		// Block attributes - decides what to save and how to parse it from and to HTML.
		attributes: {
			hiringOrganizationURL: {
				type: "string",
			},
		},

		edit: CompanyWebsite,
		save: CompanyWebsite.Content,
	} );
};
