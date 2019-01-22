/* External dependencies */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/* Internal dependencies */
import { NAME as JOBS } from "../../inner-blocks-jobs/block";
import { CATEGORY } from "../../constants";
import Salary from "./Salary";

const attributes = {
	salary: {
		type: "string",
	},
	currency: {
		type: "string",
	},
	unitText: {
		type: "string",
	},
	unitTextFrontEnd: {
		type: "string",
	},
};

export const NAME = "yoast/salary";

export default () => {
	registerBlockType( NAME, {
		title: __( "Salary", "wordpress-seo" ),
		description: __( "A job salary", "wordpress-seo" ),
		icon: "image-filter",
		category: CATEGORY,
		keywords: [
			__( "Salary", "wordpress-seo" ),
		],
		parent: [ JOBS ],
		supports: {
			multiple: false,
		},
		// Block attributes - decides what to save and how to parse it from and to HTML.
		attributes,

		edit: Salary,
		save: Salary.Content,
	} );
};
