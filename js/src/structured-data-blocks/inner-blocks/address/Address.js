/* External dependencies */
import { Component, Fragment } from "@wordpress/element";
import { InnerBlocks } from "@wordpress/editor";

const ALLOWED_BLOCKS = [
	"yoast/addresslocality",
	"yoast/adressregion",
	"yoast/addresscountry",
	"yoast/streetaddress",
];

/**
 * Represents an Address block within the schema blocks.
 */
export default class Address extends Component {
	/**
	 * Renders the address block for the block editor.
	 *
	 * @returns {ReactElement} The rendered description edit.
	 */
	render() {
		return <Fragment>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				templatelock={ false }
			/>
		</Fragment>;
	}

	/**
	 * Renders the address block for the front end.
	 *
	 * @returns {ReactElement} The rendered HTML for the frontend.
	 */
	static Content() {
		return <InnerBlocks.Content />;
	}
}
