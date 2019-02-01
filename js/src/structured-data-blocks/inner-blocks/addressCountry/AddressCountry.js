/* External dependencies */
import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/* Internal dependencies */
import PropTypes from "prop-types";

/**
 * An addressCountry block component.
 */
export default class AddressCountry extends Component {
	/**
	 * Constructs an addressCountry block component instance.
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

		this.props.setAttributes( { addressCountry: value } );
	}

	/**
	 * Renders the front end content for the addressCountry block.
	 *
	 * @param {Object} attributes The attributes for the addressCountry block.
	 *
	 * @returns {ReactElement} The rendered HTML for the front end.
	 */
	static Content( { attributes } ) {
		if ( ! attributes.addressCountry ) {
			return null;
		}

		return <span>{ attributes.addressCountry }</span>;
	}

	/**
	 * Renders the editing for the addressCountry block.
	 *
	 * @returns {ReactElement} The rendered edit UI.
	 */
	render() {
		const { attributes } = this.props;

		return <input
			value={ attributes.addressCountry }
			onChange={ this.handleChangeText }
			type="text"
			placeholder={ __( "Country", "wordpress-seo" ) }
		/>;
	}
}

AddressCountry.propTypes = {
	attributes: PropTypes.object.isRequired,
	setAttributes: PropTypes.func.isRequired,
};

