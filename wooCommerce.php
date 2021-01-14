<!-- Woo comemrce add a proceed to checkout part on mobile -->

function insertcart_addtocart_button_func() {
        // echo content.
		<!-- global $product;  -->
		<!-- $pid = $product->get_id(); -->
		$quicklink = WC()->cart->get_checkout_url();
        echo '<div class="button quickcheckout"><a href="'.$quicklink.'?add-to-cart='.$pid.'">'.esc_attr('Quick Checkout').'</a></div>';
}
add_action( 'woocommerce_after_add_to_cart_button', 'insertcart_addtocart_button_func' );

<!-- css to go along with it -->
.button.quickcheckout {
    border-radius: 5px;
    clear: both;
    margin-top: 10px;
    padding: 8px;
    background: #339ad5;
}