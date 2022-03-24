import { ReactElement, createElement, InputHTMLAttributes } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style';

interface Props {
    name?: string;
    id?: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    type: string | any;
    onBlur: Function | any;
    defaultValue?: string | number | readonly string[]
    value?: string | number | readonly string[];
}

function Input({
    name,
    id,
    placeholder,
    required,
    type,
    value,
    className,
    onBlur,
    defaultValue
}: InputHTMLAttributes<any>): ReactElement {
    const styles = useStyles()
    const InputProps: Props = { type, onBlur };
    if (name) InputProps.name = name;
    if (id) InputProps.id = id;
    if(defaultValue) InputProps.defaultValue = defaultValue;
    if(value) InputProps.value = value;
    if (required) InputProps.required = required;
    if (placeholder) InputProps.placeholder = placeholder;
    if (className) InputProps.className = className;

    return (
            <>
                <label className={styles.searchTitle}>Search</label>
                <div className={styles.inputContainer}>
                    {createElement('input', InputProps)}
                    <SearchIcon className={styles.searchIcon} />
                </div>
            </>
        );
}

export default Input;
