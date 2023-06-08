export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const validPassword = new RegExp(
    '^(?=(.*[A-Z]){1})(?=(.*[a-z]){1})(?=(.*[0-9]){1})(?=(.*[@#$%^!&+=.\-_*]){2})([a-zA-Z0-9@#$%^!&+=*.\-_]){8,}$'
);
export const hasuppercase = new RegExp(
    '[A-Z]+'
);
export const hasspecialCharacter = new RegExp(
    '[ `!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?~]+'
);