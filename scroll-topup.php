<?php
/******************************************************************/
/*
	Plugin Name: iMeud Scroll Up
	Plugin URI:  http://main53.com/wordpress/scroll-up/
	Author:      Kittichai
	Author URI:  http://main53.com
	Version:     1.2
	Description: This plugin easy to get to the top.
*/
/******************************************************************/
	add_action( 'init', 'm_scroll_topup' ); 

/******************************************************************/

	function m_scroll_topup() {  
		wp_enqueue_style( 'm_scroll_topup_style', plugins_url( '', __FILE__) . '/scroll-topup.css' );
		wp_enqueue_script('m_scroll_topup_script', plugin_dir_url( __FILE__ ) . '/scroll-topup.js', array('jquery'));		
	}

/******************************************************************/ 