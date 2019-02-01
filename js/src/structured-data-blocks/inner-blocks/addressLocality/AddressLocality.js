/* External dependencies */
import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/* Internal dependencies */
import PropTypes from "prop-types";

/**
 * An AddressLocality block component.
 */
export default class AddressLocality extends Component {
	/**
	 * Constructs an AddressLocality block component instance.
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

		this.props.setAttributes( { addressLocality: value } );
	}

	/**
	 * Renders the front end content for the AddressLocality block.
	 *
	 * @param {Object} attributes The attributes for the AddressLocality block.
	 *
	 * @returns {ReactElement} The rendered HTML for the front end.
	 */
	static Content( { attributes } ) {
		if ( ! attributes.addressLocality ) {
			return null;
		}

		return <span>{ attributes.addressLocality }</span>;
	}

	/**
	 * Renders the editing for the AddressLocality block.
	 *
	 * @returns {ReactElement} The rendered edit UI.
	 */
	render() {
		const { attributes } = this.props;

		return <input
			value={ attributes.addressLocality }
			onChange={ this.handleChangeText }
			type="text"
			placeholder={ __( "City", "wordpress-seo" ) }
		/>;
	}
}

AddressLocality.propTypes = {
	attributes: PropTypes.object.isRequired,
	setAttributes: PropTypes.func.isRequired,
};

