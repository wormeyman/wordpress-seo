import { __ } from "@wordpress/i18n";
import { HelpText } from "@yoast/components";
import { makeOutboundLink } from "@yoast/helpers";
import PropTypes from "prop-types";
import { default as CornerstoneToggle } from "./CornerstoneToggle";
import MetaboxCollapsible from "./MetaboxCollapsible";
import SidebarCollapsible from "./SidebarCollapsible";

const LearnMoreLink = makeOutboundLink();

/**
 * Renders the collapsible cornerstone toggle.
 *
 * @returns {JSX.Element} The collapsible cornerstone toggle component.
 */
export default function CollapsibleCornerstone( { isCornerstone, onChange, learnMoreUrl, location } ) {
	const Collapsible = location === "metabox" ? MetaboxCollapsible : SidebarCollapsible;

	return (
		<Collapsible id={ `yoast-cornerstone-collapsible-${ location }` } title={ __( "Cornerstone content", "wordpress-seo" ) }>
			<HelpText>
				{ __( "Cornerstone content should be the most important and extensive articles on your site.", "wordpress-seo" ) + " " }
				<LearnMoreLink href={ learnMoreUrl }>
					{ __( "Learn more about Cornerstone Content.", "wordpress-seo" ) }
				</LearnMoreLink>
			</HelpText>
			<CornerstoneToggle
				id={ `yoast-cornerstone-${ location }` }
				isEnabled={ isCornerstone }
				onToggle={ onChange }
			/>
		</Collapsible>
	);
}

CollapsibleCornerstone.propTypes = {
	isCornerstone: PropTypes.bool,
	onChange: PropTypes.func,
	learnMoreUrl: PropTypes.string.isRequired,
	location: PropTypes.string,
};
CollapsibleCornerstone.defaultProps = {
	isCornerstone: true,
	onChange: () => {},
	location: "",
};
