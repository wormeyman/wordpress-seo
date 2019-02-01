/* External dependencies */
import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/* Internal dependencies */
import PropTypes from "prop-types";

/**
 * A RemoteJob block component.
 */
export default class RemoteJob extends Component {
	/**
	 * Constructs a RemoteJob block component instance.
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

		this.props.setAttributes( { applicantLocationRequirements: value } );
	}

	/**
	 * Renders the front end content for the Remote job block.
	 *
	 * @param {Object} attributes The attributes for the Remote job block.
	 *
	 * @returns {ReactElement} The rendered HTML for the front end.
	 */
	static Content( { attributes } ) {
		const { applicantLocationRequirements, jobLocationType } = attributes;

		if ( applicantLocationRequirements && jobLocationType ) {
			return <li>
				{ __( "This is a remote job in", "wordpress-seo" ) + " " }{ applicantLocationRequirements }
			</li>;
		}

		if ( ! applicantLocationRequirements && jobLocationType ) {
			return <li>
				{ __( "This is a remote job", "wordpress-seo" ) }
			</li>;
		}

		return null;
	}

	/**
	 * Renders the editing for the Remote job block.
	 *
	 * @returns {ReactElement} The rendered edit UI.
	 */
	render() {
		const { setAttributes, attributes } = this.props;

		setAttributes( { jobLocationType: "TELECOMMUTE" } );

		return <li>
			<span>This is a remote job in </span>
			<input
				value={ attributes.applicantLocationRequirements }
				onChange={ this.handleChangeText }
				type="text"
				placeholder={ __( "England (optional)", "wordpress-seo" ) }
			/>
		</li>;
	}
}

RemoteJob.propTypes = {
	attributes: PropTypes.object.isRequired,
	setAttributes: PropTypes.func.isRequired,
};

