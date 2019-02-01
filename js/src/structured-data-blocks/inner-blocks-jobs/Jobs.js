/* External dependencies */
import { InnerBlocks } from "@wordpress/editor";
import { Component, Fragment } from "@wordpress/element";

/* Internal dependencies */
import { NAME as SALARY } from "../inner-blocks/salary";
import { NAME as EMPLOYMENT } from "../inner-blocks/employmentType";
import { NAME as REMOTEJOB } from "../inner-blocks/remoteJob";
import { NAME as COMPANYWEBSITE } from "../inner-blocks/companyWebsite";
import { NAME as VALIDTHROUGH } from "../inner-blocks/validThrough";

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
					[ SALARY, {}, [] ],
					[ EMPLOYMENT, {},  [] ],
					[ REMOTEJOB, {},  [] ],
					[ COMPANYWEBSITE, {},  [] ],
					[ VALIDTHROUGH, {},  [] ],
				] }
				allowedBlocks={ [ SALARY, EMPLOYMENT, REMOTEJOB, COMPANYWEBSITE, VALIDTHROUGH ] }
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
