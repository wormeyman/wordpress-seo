/* External dependencies */
import { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/editor";

/**
 * Represents a Description block within the schema blocks.
 */
export default class Description extends Component {
	/**
	 * Constructs a Description block instance.
	 *
	 * @param {Object} props The props for this React component.
	 */
	constructor( props ) {
		super( props );

		this.handleDescriptionChange = this.handleDescriptionChange.bind( this );
	}

	/**
	 * Handles a change of the description rich text.
	 *
	 * @param {string} value The value passed from the rich text.
	 *
	 * @returns {void}
	 */
	handleDescriptionChange( value ) {
		this.props.setAttributes( { description: value } );
	}

	/**
	 * Renders the description block for the block editor.
	 *
	 * @returns {ReactElement} The rendered description edit.
	 */
	render() {
		const { attributes } = this.props;

		return (
			<Fragment>
				<RichText
					identifier="description"
					value={ attributes.description }
					onChange={ this.handleDescriptionChange }
					placeholder={ __( "Enter a description *", "wordpress-seo" ) }
				/>
			</Fragment>
		);
	}

	/**
	 * Renders the description block for the front end.
	 *
	 * @param {Object} attributes The saved attributes for the description block.
	 *
	 * @returns {ReactElement} The rendered HTML for the frontend.
	 */
	static Content( { attributes } ) {
		return <RichText.Content value={ attributes.description } />;
	}
}

Description.propTypes = {
	attributes: PropTypes.object.isRequired,
	setAttributes: PropTypes.func.isRequired,
};
