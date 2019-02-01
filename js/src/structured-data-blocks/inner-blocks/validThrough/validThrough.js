/* External dependencies */
import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/* Internal dependencies */
import PropTypes from "prop-types";

/**
 * A ValidThrough block component.
 */
export default class ValidThrough extends Component {
	/**
	 * Constructs an Valid Through block component instance.
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

		this.props.setAttributes( { validThrough: value } );
	}

	/**
	 * Renders the front end content for the valid through block.
	 *
	 * @param {Object} attributes The attributes for the valid through block.
	 *
	 * @returns {ReactElement} The rendered HTML for the front end.
	 */
	static Content( attributes ) {
		const { validThrough } = attributes;

		if ( ! validThrough ) {
			return null;
		}

		return (
			<li>
				{ __( "Vacancy expiration date:", "yoast-jobs" ) } { validThrough }.
			</li>
		);
	}

	/**
	 * Renders the editing for the valid through block.
	 *
	 * @returns {ReactElement} The rendered edit UI.
	 */
	render() {
		const { attributes } = this.props;

		return (
			<input
				value={ attributes.validThrough }
				type="date"
				placeholder={ __( "Vacancy expiration date:", "yoast-jobs" ) }
				onChange={ this.handleChangeText }
			/>
		);
	}
}

ValidThrough.propTypes = {
	attributes: PropTypes.object.isRequired,
	setAttributes: PropTypes.func.isRequired,
};

