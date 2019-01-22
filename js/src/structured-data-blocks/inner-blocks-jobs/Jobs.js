/* External dependencies */
import { InnerBlocks } from "@wordpress/editor";
import { Component, Fragment } from "@wordpress/element";

/* Internal dependencies */
import { NAME as SALARY } from "../inner-blocks/salary";

/**
 * Represents the Jobs block.
 */
export default class Jobs extends Component {
	/**
	 * Renders the Jobs block editing.
	 *
	 * @returns {ReactElement} The rendered UI.
	 */
	render() {
		return <Fragment>
			<InnerBlocks
				template={ [
					[ SALARY, {} ],
				] }
				allowedBlocks={ [ SALARY ] }
			/>
		</Fragment>;
	}

	/**
	 * Renders the content for the frontend for the Jobs block.
	 *
	 * @returns {ReactElement} The Jobs Block editor.
	 */
	static Content() {
		return <InnerBlocks.Content />;
	}
}
