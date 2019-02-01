/* External dependencies */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/* Internal dependencies */
import { NAME as JOBS } from "../../inner-blocks-jobs/block";
import { CATEGORY } from "../../constants";
import EmploymentType from "./EmploymentType";

const attributes = {
	employmentTypeFrontEnd: {
		type: "string",
	},
	employmentType: {
		type: "string",
	},
};

export const NAME = "yoast/employmenttype";

export default () => {
	registerBlockType( NAME, {
		title: __( "Employment Type", "wordpress-seo" ),
		description: __( "A job employment type", "wordpress-seo" ),
		icon: "portfolio",
		category: CATEGORY,
		keywords: [
			__( "Employment type", "wordpress-seo" ),
		],
		parent: [ JOBS ],
		// Allow only one EmploymentType block per post.
		supports: {
			multiple: false,
		},
		// Block attributes - decides what to save and how to parse it from and to HTML.
		attributes,

		edit: EmploymentType,
		save: EmploymentType.Content,
	} );
};
