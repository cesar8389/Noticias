<?php
if (!function_exists('newsical_theme_enqueue_styles')) {
    add_action('wp_enqueue_scripts', 'newsical_theme_enqueue_styles');

    function newsical_theme_enqueue_styles()
    {
        $min = defined('SCRIPT_DEBUG') && SCRIPT_DEBUG ? '' : '.min';
        $newsical_version = wp_get_theme()->get('Version');
        $parent_style = 'morenews-style';

        // Enqueue Parent and Child Theme Styles
        wp_enqueue_style('bootstrap', get_template_directory_uri() . '/assets/bootstrap/css/bootstrap' . $min . '.css', array(), $newsical_version);
        wp_enqueue_style($parent_style, get_template_directory_uri() . '/style' . $min . '.css', array(), $newsical_version);
        wp_enqueue_style(
            'newsical',
            get_stylesheet_directory_uri() . '/style.css',
            array('bootstrap', $parent_style),
            $newsical_version
        );

        // Enqueue RTL Styles if the site is in RTL mode
        if (is_rtl()) {
            wp_enqueue_style(
                'morenews-rtl',
                get_template_directory_uri() . '/rtl.css',
                array($parent_style),
                $newsical_version
            );
        }
    }
}

// Set up the WordPress core custom background feature.
add_theme_support('custom-background', apply_filters('morenews_custom_background_args', array(
    'default-color' => 'f5f5f5',
    'default-image' => '',
)));



function newsical_override_morenews_header_section()
{
    remove_action('morenews_action_header_section', 'morenews_header_section', 40);
}

add_action('wp_loaded', 'newsical_override_morenews_header_section');

function newsical_header_section()
{

    $morenews_header_layout = morenews_get_option('header_layout');


?>

    <header id="masthead" class="<?php echo esc_attr($morenews_header_layout); ?> morenews-header">
        <?php morenews_get_block('layout-centered', 'header');  ?>
    </header>

<?php
}

add_action('morenews_action_header_section', 'newsical_header_section', 40);

function newsical_filter_default_theme_options($defaults)
{
    
    $defaults['site_title_font_size'] = 52;
    $defaults['site_title_uppercase']  = 0;
    $defaults['disable_header_image_tint_overlay']  = 1;
    $defaults['show_primary_menu_desc']  = 0;
    $defaults['header_layout'] = 'header-layout-centered';    
    $defaults['aft_custom_title']           = __('Watch Video', 'newsical');   
    $defaults['select_main_banner_layout_section'] = 'layout-4';    
    $defaults['secondary_color'] = '#af0000';
    $defaults['global_fetch_content_image_setting'] = 'disable';
    $defaults['global_show_min_read'] = 'no';
    $defaults['frontpage_content_type']  = 'frontpage-widgets-and-content';
    $defaults['featured_news_section_title'] = __('Featured News', 'newsical');
    $defaults['show_featured_post_list_section'] = 1;
    $defaults['featured_post_list_section_title_1']           = __('Popular News', 'newsical');
    $defaults['featured_post_list_section_title_2']           = __('General News', 'newsical');
    $defaults['featured_post_list_section_title_3']           = __('More News', 'newsical');
    $defaults['site_title_font']      = 'Source+Sans+Pro:400,400i,700,700i';
    $defaults['primary_font']      = 'Lato:400,300,400italic,900,700';
    $defaults['secondary_font']    = 'Source+Sans+Pro:400,400i,700,700i';
    
    return $defaults;
}
add_filter('morenews_filter_default_theme_options', 'newsical_filter_default_theme_options', 1);
