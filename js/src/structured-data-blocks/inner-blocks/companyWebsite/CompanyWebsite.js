/* External dependencies */
import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/* Internal dependencies */
import PropTypes from "prop-types";

/**
 * A CompanyWebsite block component.
 */
export default class CompanyWebsite extends Component {
	/**
	 * Constructs an Company Website block component instance.
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
	 * Handles a change event on the CompanyWebsite input.
	 *
	 * @param {Event} event The fired change event.
	 *
	 * @returns {void}
	 */
	handleChangeText( event ) {
		const value = event.target.value;

		this.props.setAttributes( { hiringOrganizationURL: value } );
	}

	/**
	 * Renders the front end content for the CompanyWebsite block.
	 *
	 * @param {Object} attributes The attributes for the CompanyWebsite block.
	 *
	 * @returns {ReactElement} The rendered HTML for the front end.
	 */
	static Content( { attributes } ) {
		if ( attributes.hiringOrganizationURL === undefined ) {
			return null;
		}

		return <li>
			{ __( "Company website", "wordpress-seo" ) + ":" } { attributes.hiringOrganizationURL }
		</li>;
	}

	/**
	 * Renders the editing for the CompanyWebsite block.
	 *
	 * @returns {ReactElement} The rendered edit UI.
	 */
	render() {
		const { attributes } = this.props;

		return <input
			value={ attributes.hiringOrganizationURL }
			onChange={ this.handleChangeText }
			type="url"
			placeholder="Company website"
		/>;
	}
}

CompanyWebsite.propTypes = {
	attributes: PropTypes.object.isRequired,
	setAttributes: PropTypes.func.isRequired,
};

