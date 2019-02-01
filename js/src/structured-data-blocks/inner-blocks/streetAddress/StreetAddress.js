/* External dependencies */
import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/* Internal dependencies */
import PropTypes from "prop-types";

/**
 * An StreetAddress block component.
 */
export default class StreetAddress extends Component {
	/**
	 * Constructs an StreetAddress block component instance.
	 *
	 * @param {Object} props Props for the React component.
	 *
	 * @returns {void}
	 */
	constructor( props ) {
		super( props );

		this.handleChangeText = this.handleChangeText.bind( this );
	}

	/**
	 * Handles a change event on the text input.
	 *
	 * @param {Event} event The fired change event.
	 *
	 * @returns {void}
	 */
	handleChangeText( event ) {
		const value = event.target.value;

		this.props.setAttributes( { streetAddress: value } );
	}

	/**
	 * Renders the front end content for the StreetAddress block.
	 *
	 * @param {Object} attributes The attributes for the StreetAddress block.
	 *
	 * @returns {ReactElement} The rendered HTML for the front end.
	 */
	static Content( { attributes } ) {
		if ( ! attributes.streetAddress ) {
			return null;
		}

		return <span>{ attributes.streetAddress }</span>;
	}

	/**
	 * Renders the editing for the StreetAddress block.
	 *
	 * @returns {ReactElement} The rendered edit UI.
	 */
	render() {
		const { attributes } = this.props;

		return <input
			value={ attributes.streetAddress }
			onChange={ this.handleChangeText }
			type="text"
			placeholder={ __( "Street address", "wordpress-seo" ) }
		/>;
	}
}

StreetAddress.propTypes = {
	attributes: PropTypes.object.isRequired,
	setAttributes: PropTypes.func.isRequired,
};

