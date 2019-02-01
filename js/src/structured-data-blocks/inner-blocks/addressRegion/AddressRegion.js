/* External dependencies */
import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/* Internal dependencies */
import PropTypes from "prop-types";

/**
 * An AddressRegion block component.
 */
export default class AddressRegion extends Component {
	/**
	 * Constructs an AddressRegion block component instance.
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

		this.props.setAttributes( { addressRegion: value } );
	}

	/**
	 * Renders the front end content for the AddressRegion block.
	 *
	 * @param {Object} attributes The attributes for the AddressRegion block.
	 *
	 * @returns {ReactElement} The rendered HTML for the front end.
	 */
	static Content( { attributes } ) {
		if ( ! attributes.addressRegion ) {
			return null;
		}

		return <span>{ attributes.addressRegion }</span>;
	}

	/**
	 * Renders the editing for the AddressRegion block.
	 *
	 * @returns {ReactElement} The rendered edit UI.
	 */
	render() {
		const { attributes } = this.props;

		return <input
			value={ attributes.addressRegion }
			onChange={ this.handleChangeText }
			type="text"
			placeholder={ __( "Province, Region or State", "wordpress-seo" ) }
		/>;
	}
}

AddressRegion.propTypes = {
	attributes: PropTypes.object.isRequired,
	setAttributes: PropTypes.func.isRequired,
};

