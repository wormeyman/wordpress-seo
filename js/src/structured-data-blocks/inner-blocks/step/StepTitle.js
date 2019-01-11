/* External dependencies */
import { __ } from "@wordpress/i18n";
import PropTypes from "prop-types";
import { RichText } from "@wordpress/editor";

/**
 * Renders the editing UI for a step description.
 *
 * @param {string} description The current description.
 * @param {Function} setDescription The method to set a new description.
 *
 * @returns {ReactElement} The rendered UI.
 */
const StepTitle = ( { title, setTitle }  ) => {
	return <RichText
		className="yoast-step-title"
		tagName="p"
		value={ title }
		onChange={ setTitle }
		placeholder={ __( "Enter a step title", "wordpress-seo" ) }
		formattingControls={ [ "italic", "strikethrough", "link" ] }
	/>;
};

/**
 * StepTitleContent renders the front end content for the step title.
 *
 * @param {string} title The title value to render.
 *
 * @returns {ReactElement} The rendered HTML for the content.
 */
const StepTitleContent = ( { title } ) => {
	return <RichText.Content value={ title } />;
};

StepTitleContent.propTypes = {
	title: PropTypes.string,
};

StepTitleContent.defaultProps = {
	title: "",
};

StepTitle.Content = StepTitleContent;

StepTitle.propTypes = {
	title: PropTypes.string,
	setTitle: PropTypes.func.isRequired,
};

StepTitle.defaultProps = {
	title: "",
};

export default StepTitle;
