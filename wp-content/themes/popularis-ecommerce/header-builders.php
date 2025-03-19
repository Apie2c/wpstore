<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="profile" href="http://gmpg.org/xfn/11">
        <?php wp_head(); ?>
    </head>
    <body id="blog" <?php body_class(); ?>>
        <?php wp_body_open(); ?>
        <div class="page-wrap">
            <?php do_action('popularis_ecommerce_generate_header_builders'); ?>
