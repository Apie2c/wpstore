<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wpstore' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`ZK3&t:$*gPXMjMK g/CA:ff``sNL*Hz>/m&hK-4->p,f(48+T`O^s6H]#[[Xkg^' );
define( 'SECURE_AUTH_KEY',  'C:*mj0nP-Vg4Vx-*7;NX`D`3DZ@XznPge1}jdHBo3AG[6D /LW(>= i08;DXvFRX' );
define( 'LOGGED_IN_KEY',    'e@h8KWg :v*pYZFi?(cuI4fDaUB59@kK.V5t0HhqG6A@xNtQw=d#mqTjMDIKk2YW' );
define( 'NONCE_KEY',        ';8k&JpH%Yn13 LuG5:<%5]+Y&K%(fa{D^eM?SQ@V!dfb_t(zp0?<IIn<R!+|j142' );
define( 'AUTH_SALT',        'Kq`^f/vPKql+O9?GV^$5}3]]#H51r0Kn&B]WWX6Pb38UgAGqUO6TNBGNR%=lm^i>' );
define( 'SECURE_AUTH_SALT', 'n_?LXzB(NPz.b5w!iE1vhgQ.@?Q!3)~k3y=yzT.l t;<*H;AjmF&L;%ysnOEr]I.' );
define( 'LOGGED_IN_SALT',   'i}m`#eFH(kx6Z}nEbwLrv!^|6V].OE7Ma#.ZPhWX=jNgbD+[OcR}nB{AhFjXW(Dx' );
define( 'NONCE_SALT',       '&J52o4WtH%RV/c$&$V$4CQ^/t?i;+?_KisQ,RK357,?f6@xS9ms/:fc.-Bkh,lyv' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
