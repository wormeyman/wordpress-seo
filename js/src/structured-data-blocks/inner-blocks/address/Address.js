/* External dependencies */
import { Component, Fragment } from "@wordpress/element";
import { InnerBlocks } from "@wordpress/editor";

/* Internal dependencies */
import { NAME as ADDRESSLOCALITY } from "../addressLocality";
import { NAME as ADDRESSREGION } from "../addressRegion";
import { NAME as ADDRESSCOUNTRY } from "../addressCountry";
import { NAME as STREETADDRESS } from "../streetAddress";
import { NAME as POSTALCODE } from "../postalCode";


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
				allowedBlocks={ [
					ADDRESSLOCALITY,
					ADDRESSREGION,
					ADDRESSCOUNTRY,
					STREETADDRESS,
					POSTALCODE,
				] }
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
