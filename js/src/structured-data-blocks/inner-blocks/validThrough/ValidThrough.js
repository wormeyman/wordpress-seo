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
	static Content( { attributes } ) {
		if ( ! attributes.validThrough ) {
			return null;
		}

		return (
			<li>
				<span>{ __( "Vacancy expiration date", "wordpress-seo" ) + ": " } { attributes.validThrough }</span>
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

		return <li>
			<span>{ __( "Vacancy expiration date", "wordpress-seo" ) + ": " }</span>
			<input
				value={ attributes.validThrough }
				type="date"
				placeholder={ __( "11/08/2021", "wordpress-seo" ) }
				onChange={ this.handleChangeText }
			/>
		</li>;
	}
}

ValidThrough.propTypes = {
	attributes: PropTypes.object.isRequired,
	setAttributes: PropTypes.func.isRequired,
};

