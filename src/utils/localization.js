import i18n from 'i18next';
import i18nConfig from 'config/i18n';

i18n.init(i18nConfig);

export function t(key, ...props) {
  return i18n.t(key, ...props);
}

export function getNameInitials(value) {
  if (typeof value === 'string') {
    const names = value.split(' ');
    const [last_name, first_name, middle_name] = names;

    return [
      last_name,
      ...(first_name ? [`${first_name[0]}.`] : []),
      ...(middle_name ? [`${middle_name[0]}.`] : [])
    ].join(' ');
  }

  if (typeof value === 'object') {
    const { first_name, middle_name, last_name } = value;

    return [
      last_name,
      ...(first_name ? [`${first_name[0]}.`] : []),
      ...(middle_name ? [`${middle_name[0]}.`] : [])
    ].join(' ');
  }

  return null;
}
