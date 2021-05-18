<?php
       
/**
 * Display call-to-action based on URL parameter
 */
function cpro_check_url_parameter( $display, $style_id ) {

	// Replace 93 with your style ID
	if( '93' == $style_id ) {

		// Replace "utm" with your GET parameter from URL, replace "facebook" with your parameter value
		if( isset( $_GET['utm'] ) && 'facebook' == $_GET['utm'] ) {
			$display = true;
		} else {
			$display = false;
		}
	}
     else( '95' == $style_id ){
        // Replace "utm" with your GET parameter from URL, replace "facebook" with your parameter value
		if( isset( $_GET['utmq'] ) && 'facebookq' == $_GET['utmq'] ) {
			$display = true;
		} else {
			$display = false;
		} 
    } 

	return $display;
}
add_filter( 'cp_pro_target_page_settings', 'cpro_check_url_parameter', 10, 3 );

