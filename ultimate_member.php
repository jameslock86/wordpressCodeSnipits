<!-- // custom icon changes in the users profile tab
// 
//  -->
function um_custom_profile_tabs( $tabs ) {

	// Change the icon in the profile tab "About"
	if ( isset( $tabs['yourCustomTabName'] ) ) {
		$tabs['yourCustomTabName']['icon'] = 'um-faicon-star';
	}

	return $tabs;
}
add_filter( 'um_profile_tabs', 'um_custom_profile_tabs', 2002 );


<!-- Css for the icon change
 -->
<!-- the className for the Icon -->
i.um-faicon-star::before {
  content: url("https://texasbarrelracers.com/wp-content/uploads/2021/01/AndrewHorse-1.png");
  font-family: "Ionicons" !important;
}
