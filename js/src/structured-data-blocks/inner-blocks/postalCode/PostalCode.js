/* External dependencies */
import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/* Internal dependencies */
import PropTypes from "prop-types";

/**
 * An PostalCode block component.
 */
export default class PostalCode extends Component {
	/**
	 * Constructs an PostalCode block component instance.
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

		this.props.setAttributes( { postalCode: value } );
	}

	/**
	 * Renders the front end content for the PostalCode block.
	 *
	 * @param {Object} attributes The attributes for the PostalCode block.
	 *
	 * @returns {ReactElement} The rendered HTML for the front end.
	 */
	static Content( { attributes } ) {
		if ( ! attributes.postalCode ) {
			return null;
		}

		return <span>{ attributes.postalCode }</span>;
	}

	/**
	 * Renders the editing for the PostalCode block.
	 *
	 * @returns {ReactElement} The rendered edit UI.
	 */
	render() {
		const { attributes } = this.props;

		return <input
			value={ attributes.postalCode }
			onChange={ this.handleChangeText }
			type="text"
			placeholder={ __( "Postal code", "wordpress-seo" ) }
		/>;
	}
}

PostalCode.propTypes = {
	attributes: PropTypes.object.isRequired,
	setAttributes: PropTypes.func.isRequired,
};

