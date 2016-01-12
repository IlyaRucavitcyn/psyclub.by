<?php
/**
 * Основные параметры WordPress.
 *
 * Этот файл содержит следующие параметры: настройки MySQL, префикс таблиц,
 * секретные ключи, язык WordPress и ABSPATH. Дополнительную информацию можно найти
 * на странице {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Кодекса. Настройки MySQL можно узнать у хостинг-провайдера.
 *
 * Этот файл используется сценарием создания wp-config.php в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать этот файл
 * с именем "wp-config.php" и заполнить значения.
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'user1124122_blog');

/** Имя пользователя MySQL */
define('DB_USER', 'blog');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'amfetamin50');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется снова авторизоваться.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '`B*@+m(+;VrkZs$P<+29{s-QdW8_G}>->E>IYi/hSS@M_/8Q$R|H-DvAY_XQ@:#/');
define('SECURE_AUTH_KEY',  'P:s%^q^>Ukn6,}tFu/|s<QF5-)Kk]C7AZC:FzZ7|tq.~d!xtz9zA#RTG41GB+bI}');
define('LOGGED_IN_KEY',    'x}4(?,?ZIZ4F7P-0+6IpcEjpX4]n1i/SL#|XC?)-UNVcidm%JF7=WlZG7jFje7_X');
define('NONCE_KEY',        'rii<|>2mXOb;tA+g:S^6;5cl-j[,jB&U.:DF{|X/{l8$#zHKM%Glbty6BMeZB{xa');
define('AUTH_SALT',        'L%kpp.j&h{Na25->@`lr>YPocflg#YUS(8v~/.-H@4l8=j|~%z2?@c18[5GE:=:2');
define('SECURE_AUTH_SALT', 'UxMY-%g30^VNb[6Gk@`~*|AxL$ 7hV<lM|sD&ulX-1zt,vHkE$+5_PBal)(IkgJ(');
define('LOGGED_IN_SALT',   '{N*Ap<7&CJD-eD(E~l$k~1*jn1?AMP+~o,<{<?J`nzGBm;RrGEs$p80(VKiVILM3');
define('NONCE_SALT',       '1XmKkR8X]eYoB2k0a#/6qc;3F M:7+UM]t&KM^Hav/:.RzJ!f5mkKG=A;Rj(p`-,');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько блогов в одну базу данных, если вы будете использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Язык локализации WordPress, по умолчанию английский.
 *
 * Измените этот параметр, чтобы настроить локализацию. Соответствующий MO-файл
 * для выбранного языка должен быть установлен в wp-content/languages. Например,
 * чтобы включить поддержку русского языка, скопируйте ru_RU.mo в wp-content/languages
 * и присвойте WPLANG значение 'ru_RU'.
 */
define('WPLANG', 'ru_RU');

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Настоятельно рекомендуется, чтобы разработчики плагинов и тем использовали WP_DEBUG
 * в своём рабочем окружении.
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
