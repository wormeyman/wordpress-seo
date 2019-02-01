/* External dependencies */
import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/* Internal dependencies */
import PropTypes from "prop-types";

/**
 * An Employment Type block component.
 */
export default class EmploymentType extends Component {
	/**
	 * Constructs an Employment Type block component instance.
	 *
	 * @param {Object} props Props for the React component.
	 *
	 * @returns {void}
	 */
	constructor( props ) {
		super( props );

		this.handleChangeEmployment = this.handleChangeEmployment.bind( this );
	}

	/**
	 * Returns a preset for an employment array.
	 *
	 * @param  	{string} employmentKey   The key of an employment according to schema.org jobPosting (e.g. "FULL_TIME", "PART_TIME", etc.).
	 * @param   {string} employmentValue The displayed value of an employment (e.g. "Full Time", "Part Time", etc.).
	 *
	 * @returns {{employmentKey: *, employmentValue: *}} Preset for an Employment array.
	 */
	static createEmployment( employmentKey, employmentValue ) {
		return {
			employmentKey,
			employmentValue,
		};
	}

	/**
	 * Returns an array created with the createEmploymentType preset.
	 *
	 * @returns {{employmentKey: *, employmentValue: *}[]} Array created with the createEmployment preset.
	 */
	static createEmploymentArray() {
		return [
			EmploymentType.createEmployment( "FULL_TIME", __( "full time", "wordpress-seo" ) ),
			EmploymentType.createEmployment( "PART_TIME", __( "part time", "wordpress-seo" ) ),
			EmploymentType.createEmployment( "CONTRACTOR", __( "contractor", "wordpress-seo" ) ),
			EmploymentType.createEmployment( "TEMPORARY", __( "temporary", "wordpress-seo" ) ),
			EmploymentType.createEmployment( "INTERN", __( "intern", "wordpress-seo" ) ),
			EmploymentType.createEmployment( "VOLUNTEER", __( "volunteer", "wordpress-seo" ) ),
			EmploymentType.createEmployment( "PER_DIEM", __( "per diem", "wordpress-seo" ) ),
			EmploymentType.createEmployment( "OTHER", __( "other", "wordpress-seo" ) ),
		];
	}

	/**
	 * Handles a change event on the employmentType input.
	 *
	 * @param {Event} event The fired change event.
	 *
	 * @returns {void}
	 */
	handleChangeEmployment( event ) {
		const value = event.target.value;

		this.props.setAttributes( { employmentTypeFrontEnd: value } );
	}

	/**
	 * Renders the front end content for the EmploymentType block.
	 *
	 * @param {Object} attributes The attributes for the EmploymentType block.
	 *
	 * @returns {ReactElement} The rendered HTML for the front end.
	 */
	static Content( { attributes } ) {
		return <li>{ __( "This job is", "wordpress-seo" ) + " " }{ attributes.employmentTypeFrontEnd }</li>;
	}

	/**
	 * Renders the editing for the EmploymentType block.
	 *
	 * @returns {ReactElement} The rendered edit UI.
	 */
	render() {
		const { setAttributes, attributes } = this.props;

		const employmentArray = EmploymentType.createEmploymentArray();

		return <li>
			<span>{ __( "This job is", "wordpress-seo" ) + " " }</span>
			<select value={ attributes.employmentTypeFrontEnd } onChange={ this.handleChangeEmployment }>
				{ employmentArray.map( employmentData => {
					const { employmentKey, employmentValue } = employmentData;

					if ( ! attributes.employmentTypeFrontEnd ) {
						setAttributes( { employmentTypeFrontEnd: __( "full time", "wordpress-seo" ) } );
					}

					if ( attributes.employmentTypeFrontEnd === employmentValue ) {
						setAttributes( { employmentType: employmentKey } );
					}

					return (
						<option
							key={ employmentKey }
							value={ employmentValue }
						>
							{ employmentValue }
						</option>
					);
				} ) }
			</select>
		</li>;
	}
}

EmploymentType.propTypes = {
	attributes: PropTypes.object.isRequired,
	setAttributes: PropTypes.func.isRequired,
};

