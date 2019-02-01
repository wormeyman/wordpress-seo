/* External dependencies */
import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/* Internal dependencies */
import PropTypes from "prop-types";

/**
 * A Salary block component.
 */
export default class Salary extends Component {
	/**
	 * Constructs a Salary block component instance.
	 *
	 * @param {Object} props Props for the React component.
	 *
	 * @returns {void}
	 */
	constructor( props ) {
		super( props );

		this.handleChangeSalary = this.handleChangeSalary.bind( this );
		this.handleChangeUnitText = this.handleChangeUnitText.bind( this );
		this.handleChangeCurrency = this.handleChangeCurrency.bind( this );
	}

	/**
     * Returns a preset for an unitText array.
     *
     * @param   {string} unitTextKey   The value of a unitText according to schema.org jobPosting (e.g. "hour", "day", etc.).
     * @param   {string} unitTextValue The displayed name of a front end unitText (e.g. "an hour", "a day", etc.).
     *
     * @returns {{unitTextKey: *, unitTextValue: *}} Preset for an unitText array.
     */
	static createUnitText( unitTextKey, unitTextValue ) {
		return {
			unitTextKey,
			unitTextValue,
		};
	}

	/**
     * Returns an array created with the createUnitText preset.
     *
     * @returns {{unitTextKey: *, unitTextValue: *}[]} Array created with the createUnitText preset.
     */
	static createUnitTextArray() {
		return [
			Salary.createUnitText( "HOUR",  __( "an hour", "wordpress-seo" ) ),
			Salary.createUnitText( "DAY",   __( "a day", "wordpress-seo" ) ),
			Salary.createUnitText( "WEEK",  __( "a week", "wordpress-seo" ) ),
			Salary.createUnitText( "MONTH", __( "a month", "wordpress-seo" ) ),
			Salary.createUnitText( "YEAR",  __( "a year", "wordpress-seo" ) ),
		];
	}

	/**
	 * Handles a change event on the salary input.
	 *
	 * @param {Event} event The fired change event.
	 *
	 * @returns {void}
	 */
	handleChangeSalary( event ) {
		const value = event.target.value;

		this.props.setAttributes( { salary: value } );
	}

	/**
	 * Handles a change event on the unitText input.
	 *
	 * @param {Event} event The fired change event.
	 *
	 * @returns {void}
	 */
	handleChangeUnitText( event ) {
		const value = event.target.value;

		this.props.setAttributes( { unitTextFrontEnd: value } );
	}

	/**
	 * Handles a change event on the currency input.
	 *
	 * @param {Event} event The fired change event.
	 *
	 * @returns {void}
	 */
	handleChangeCurrency( event ) {
		const value = event.target.value;

		this.props.setAttributes( { currency: value } );
	}

	/**
	 * Renders the front end content for the Salary block.
	 *
	 * @param {Object} attributes The attributes for the Salary block.
	 *
	 * @returns {ReactElement} The rendered HTML for the front end.
	 */
	static Content( { attributes } ) {
		const attributesArrayRender = [
			attributes.salary,
			attributes.currency,
			attributes.unitTextFrontEnd,
		];

		if ( ! attributes.salary ) {
			return null;
		}

		return (
			<li>
				<span>{ __( "You wil earn", "wordpress-seo" ) + " " }</span>
				{ attributesArrayRender.map( attributeData => {
					if ( attributeData ) {
						return <span key={ attributeData }>{ attributeData } </span>;
					}
				} ) }
			</li>
		);
	}

	/**
     * Renders the editing for the Salary block.
     *
	 * @returns {ReactElement} The rendered edit UI.
     */
	render() {
		const { setAttributes, attributes } = this.props;

		const unitTextArray = Salary.createUnitTextArray();

		const currencyArray = [
			"EUR",
			"USD",
			"GBP",
		];

		if ( ! attributes.unitTextFrontEnd ) {
			setAttributes( { unitTextFrontEnd: __( "a month", "wordpress-seo" ) } );
		}

		if ( ! attributes.currency ) {
			setAttributes( { currency: "EUR" } );
		}

		return (
			<li>
				<span>You will earn </span>
				<input
					value={ attributes.salary }
					onChange={ this.handleChangeSalary }
					type="number"
					step="500"
					placeholder="3500.00"
				/>
				<select value={ attributes.currency } onChange={ this.handleChangeCurrency }>
					{ currencyArray.map( currencyData => {
						return (
							<option
								key={ currencyData }
								value={ currencyData }
							>
								{ currencyData }
							</option>
						);
					} ) }
				</select>
				<select value={ attributes.unitTextFrontEnd } onChange={ this.handleChangeUnitText }>
					{ unitTextArray.map( unitTextData => {
						const {
							unitTextKey,
							unitTextValue,
						} = unitTextData;
						if ( attributes.unitTextFrontEnd === unitTextValue ) {
							setAttributes( { unitText: unitTextKey } );
						}

						return (
							<option
								key={ unitTextKey }
								value={ unitTextValue }
							>
								{ unitTextValue }
							</option>
						);
					} ) }
				</select>
			</li>
		);
	}
}

Salary.propTypes = {
	attributes: PropTypes.object.isRequired,
	setAttributes: PropTypes.func.isRequired,
};

